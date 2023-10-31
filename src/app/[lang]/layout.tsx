import "@/styles/globals.css";

import type { Metadata } from "next";

import { LocaleToggle } from "@/components/LocaleToggle/component";
import { ThemeModeToggle } from "@/components/ThemeModeToggle/component";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { i18n } from "@/i18n.config";
import { getDictionary } from "@/lib/server/locale/utils";

import type { RootLayoutProps } from "./types";

import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/cross/tailwind/utils";

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const dict = await getDictionary(params.lang);

  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body className={cn("bg-background min-h-screen font-sans antialiased", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <header className="bg-background sticky top-0 z-50 flex space-x-3 border-b p-3">
              <ThemeModeToggle dict={dict.layouts.root} />
              <LocaleToggle />
            </header>
            <main className="flex-1 overflow-auto bg-slate-600/10">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Hostips",
  description: "Hosting tips",
};

export function generateStaticParams() {
  return i18n.locales.map((locale) => {
    return {
      lang: locale,
    };
  });
}
