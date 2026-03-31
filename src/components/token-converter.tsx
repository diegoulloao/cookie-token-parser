"use client";

// Component: Orchestrates input parsing, JSON generation, and clipboard copy UX.

import { useMemo, useState } from "react";

import { JsonOutput } from "@/components/json-output";
import { TokenInput } from "@/components/token-input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { buildAuthJson, stringifyAuthJson } from "@/lib/token-parser";
import { cn } from "@/lib/utils";

export const TokenConverter = () => {
  const [rawInput, setRawInput] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const generatedJson = useMemo(() => {
    const authJson = buildAuthJson(rawInput);
    return stringifyAuthJson(authJson);
  }, [rawInput]);

  // Event handler: Copies generated JSON to the clipboard and updates button state.
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedJson);
      setIsCopied(true);
      window.setTimeout(() => setIsCopied(false), 1800);
    } catch {
      setIsCopied(false);
    }
  };

  // Event handler: Resets copy state whenever user edits the input.
  const handleInputChange = (value: string) => {
    setRawInput(value);
    setIsCopied(false);
  };

  return (
    <Card
      className={cn("border-0 bg-card/85 py-0 shadow-xl ring-1 ring-slate-200 backdrop-blur-sm")}
    >
      <CardHeader className="px-6 pt-6">
        <CardTitle className="text-xl">Token to Auth JSON Converter</CardTitle>
        <CardDescription>
          Paste the raw value from Request Headers <span className="font-mono">Cookie</span> and
          extract accessToken, refreshToken, and idToken into a clean JSON payload.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <TokenInput value={rawInput} onChange={handleInputChange} />
          <JsonOutput value={generatedJson} copied={isCopied} onCopy={handleCopy} />
        </div>
      </CardContent>
    </Card>
  );
};
