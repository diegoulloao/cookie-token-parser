import type { Metadata } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

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
};

// Component: Global document shell and typography setup.
const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      lang="en"
      className={cn(plusJakartaSans.variable, jetBrainsMono.variable, "h-full antialiased")}
    >
      <body className={cn("min-h-full flex flex-col")}>{children}</body>
    </html>
  );
};

export default RootLayout;
