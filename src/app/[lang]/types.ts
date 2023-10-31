import type { ReactNode } from "react";

import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/server/locale/utils";

export type RootParams = {
  params: {
    lang: Locale;
  };
};

export type RootLayoutProps = RootParams & {
  children: ReactNode;
};

export type RootLayoutDict = Awaited<ReturnType<typeof getDictionary>>["layouts"]["root"];
