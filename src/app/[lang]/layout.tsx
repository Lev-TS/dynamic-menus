import "@/styles/globals.css";

import { Inter as FontSans } from "next/font/google";

import type { Metadata } from "next";

import type { RootLayoutProps } from "./types";

import { DictContextProvider } from "@/providers/DictContextProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { cn } from "@/lib/cross/tailwind/utils";
import { getDictionary } from "@/lib/server/locale/utils";
import { i18n } from "@/i18n.config";

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const dict = await getDictionary(params.lang);

  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <DictContextProvider dict={dict}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </DictContextProvider>
      </body>
    </html>
  );
}

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Menus",
  description: "Menu builder",
};

export function generateStaticParams() {
  return i18n.locales.map((locale) => {
    return {
      lang: locale,
    };
  });
}
