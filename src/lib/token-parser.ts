// Utility: Centralizes token parsing and output JSON formatting.

import authTemplate from "@/lib/auth-template.json";

type SameSiteValue = "Lax" | "Strict" | "None";

type AuthCookieName = "accessToken" | "refreshToken" | "idToken";

type AuthCookie = {
  name: AuthCookieName;
  value: string;
  domain: string;
  path: string;
  expires: number;
  httpOnly: boolean;
  secure: boolean;
  sameSite: SameSiteValue;
};

export type AuthJson = {
  cookies: AuthCookie[];
  origins: [];
};

type AuthTemplateCookie = Omit<AuthCookie, "value"> & {
  value: string;
};

type AuthTemplate = {
  cookies: AuthTemplateCookie[];
  origins: [];
};

const parsedAuthTemplate = authTemplate as AuthTemplate;

// Utility function: Normalizes raw input to a single cookie string.
const normalizeCookieString = (rawInput: string): string => {
  const normalized = rawInput.trim();
  if (!normalized) {
    return "";
  }

  const lines = normalized
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length > 1 && /^cookie:?$/i.test(lines[0])) {
    return lines.slice(1).join(" ");
  }

  const merged = lines.join(" ");
  if (/^cookie\s*:/i.test(merged)) {
    return merged.replace(/^cookie\s*:\s*/i, "");
  }

  return merged;
};

// Utility function: Parses a cookie header into a key/value map.
const parseCookieMap = (cookieString: string): Map<string, string> => {
  const tokenMap = new Map<string, string>();

  cookieString
    .split(";")
    .map((segment) => segment.trim())
    .filter(Boolean)
    .forEach((segment) => {
      const separatorIndex = segment.indexOf("=");
      if (separatorIndex <= 0) {
        return;
      }

      const tokenName = segment.slice(0, separatorIndex).trim();
      const tokenValue = segment.slice(separatorIndex + 1).trim();

      if (tokenName) {
        tokenMap.set(tokenName, tokenValue);
      }
    });

  return tokenMap;
};

// Utility function: Resolves a token placeholder from the template value.
const resolveTemplateValue = (templateValue: string, tokenMap: Map<string, string>): string => {
  const placeholderMatch = templateValue.match(/^\{\{(\w+)\}\}$/);
  if (!placeholderMatch) {
    return templateValue;
  }

  return tokenMap.get(placeholderMatch[1]) ?? "";
};

// Utility function: Builds the auth JSON object from any raw cookie text.
export const buildAuthJson = (rawInput: string): AuthJson => {
  const normalizedCookieString = normalizeCookieString(rawInput);
  const tokenMap = parseCookieMap(normalizedCookieString);

  return {
    cookies: parsedAuthTemplate.cookies.map((cookieDefinition) => ({
      ...cookieDefinition,
      value: resolveTemplateValue(cookieDefinition.value, tokenMap),
    })),
    origins: [...parsedAuthTemplate.origins],
  };
};

// Utility function: Returns stable, pretty JSON for display/copy actions.
export const stringifyAuthJson = (authJson: AuthJson): string => {
  return JSON.stringify(authJson, null, 2);
};
