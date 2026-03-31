// Component: Displays generated JSON and provides clipboard copy action.

import { Check, Clipboard } from "lucide-react";
import { Highlight, type PrismTheme } from "prism-react-renderer";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type JsonOutputProps = {
  value: string;
  copied: boolean;
  onCopy: () => void;
};

const jsonTheme: PrismTheme = {
  plain: {
    color: "oklch(0.34 0.03 257)",
    backgroundColor: "transparent",
  },
  styles: [
    {
      types: ["property"],
      style: {
        color: "oklch(0.46 0.08 252)",
      },
    },
    {
      types: ["string"],
      style: {
        color: "oklch(0.48 0.1 161)",
      },
    },
    {
      types: ["number"],
      style: {
        color: "oklch(0.54 0.14 40)",
      },
    },
    {
      types: ["boolean", "null"],
      style: {
        color: "oklch(0.58 0.14 19)",
      },
    },
    {
      types: ["punctuation"],
      style: {
        color: "oklch(0.55 0.01 258)",
      },
    },
  ],
};

export const JsonOutput = ({ value, copied, onCopy }: JsonOutputProps) => {
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <Label htmlFor="json-output">Generated auth JSON</Label>
        <Button type="button" variant="outline" onClick={onCopy}>
          {copied ? <Check /> : <Clipboard />}
          {copied ? "Copied" : "Copy JSON"}
        </Button>
      </div>

      <div
        id="json-output"
        aria-readonly
        role="textbox"
        className={cn("font-mono text-xs")}
      >
        <div
          className={cn(
            "h-72 max-h-[42vh] w-full overflow-auto rounded-lg border border-input bg-transparent px-2.5 py-2 outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 sm:h-80 sm:max-h-[50vh] lg:h-[36rem] lg:max-h-[80vh] dark:bg-input/30",
          )}
        >
          <Highlight code={value} language="json" theme={jsonTheme}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre
                className={cn(className, "m-0 min-h-full whitespace-pre-wrap break-all md:text-sm")}
                style={style}
              >
                {tokens.map((line, index) => (
                  <div key={index} {...getLineProps({ line })}>
                    {line.map((token, tokenIndex) => (
                      <span key={tokenIndex} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>
      </div>
    </div>
  );
};
