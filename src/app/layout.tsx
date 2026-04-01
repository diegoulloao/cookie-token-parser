// Imports
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";

import { cn } from "@/lib/utils";

import "./globals.css";

import type { Metadata } from "next";
import type { FC, ReactNode } from "react";

// Constants
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "cookie-token-parser",
  description: "Convert Chrome DevTools cookie headers into auth JSON.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

// Types
type RootLayoutProps = {
  children: ReactNode;
};

/*
 * Component: Global document shell and typography setup.
 */
const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  // Render
  return (
    <html
      lang="en"
      className={cn(plusJakartaSans.variable, jetBrainsMono.variable, "h-full antialiased")}
    >
      {/* Body */}
      <body className={cn("min-h-full flex flex-col")}>{children}</body>
    </html>
  );
};

// Exports
export default RootLayout;
