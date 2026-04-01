// Imports
import { TokenConverter } from "@/components/token-converter";
import { cn } from "@/lib/utils";

import type { FC } from "react";

/*
 * Component: Main landing page with responsive app shell.
 */
const Home: FC = () => {
  // Render
  return (
    <main
      className={cn(
        "relative isolate flex min-h-screen w-full items-start justify-center overflow-x-hidden px-4 py-8 sm:px-8 sm:py-12",
      )}
    >
      {/* Background */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,oklch(0.94_0.08_65)_0%,transparent_36%),radial-gradient(circle_at_82%_4%,oklch(0.94_0.09_236)_0%,transparent_33%),linear-gradient(170deg,oklch(0.99_0.01_250),oklch(0.96_0.02_220))]",
        )}
      />

      {/* Main content */}
      <div
        className={cn(
          "mx-auto w-full max-w-5xl space-y-6 animate-in fade-in-0 slide-in-from-bottom-4 duration-500",
        )}
      >
        {/* Header */}
        <header className="space-y-2">
          <p className="text-xs font-semibold tracking-[0.16em] text-slate-600 uppercase">
            Utility App
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Convert Browser Tokens to JSON
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Copy the value of the <span className="font-mono">Cookie</span> request header from
            Chrome DevTools Network and transform it into auth JSON in one click.
          </p>
        </header>

        {/* Converter */}
        <TokenConverter />
      </div>
    </main>
  );
};

// Exports
export default Home;
