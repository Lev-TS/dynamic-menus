export const i18n = {
  defaultLocale: "en",
  locales: ["en", "lt"] as const,
  supportedLang: {
    en: "English",
    lt: "Lietuviškai",
  },
};

export type Locale = (typeof i18n)["locales"][number];
