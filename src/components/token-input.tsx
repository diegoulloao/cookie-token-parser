// Imports
import type { FC } from "react";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

// Types
type TokenInputProps = {
  value: string;
  onChange: (value: string) => void;
};

/*
 * Component: Collects raw cookie header text from the user.
 */
const TokenInput: FC<TokenInputProps> = ({ value, onChange }) => {
  // Render
  return (
    <div className="space-y-3">
      {/* Field label */}
      <Label htmlFor="token-input">Request Headers Cookie value</Label>

      {/* Field input */}
      <Textarea
        id="token-input"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Paste the Cookie header value from DevTools Network > Request Headers"
        className={cn(
          "min-h-56 max-h-[42vh] field-sizing-fixed overflow-y-auto resize-none font-mono text-xs sm:max-h-[50vh] sm:resize-y lg:h-[36rem] lg:max-h-[80vh]",
        )}
        spellCheck={false}
      />

      {/* Helper text */}
      <p className="text-xs text-muted-foreground">
        You can paste only the value, or a full line that starts with{" "}
        <span className="font-mono">Cookie</span> or <span className="font-mono">Cookie:</span>.
      </p>
    </div>
  );
};

// Exports
export { TokenInput };
