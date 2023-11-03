import { z } from "zod";

export const i18n = {
  defaultLocale: "en",
  locales: ["en", "lt"] as const,
  supportedLang: {
    en: "English",
    lt: "Lietuviškai",
  },
  PrismaDictSchema: z.object({
    en: z.string(),
    lt: z.string(),
  }),
};

export type Locale = (typeof i18n)["locales"][number];
