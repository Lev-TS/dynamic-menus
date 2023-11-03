import { i18n, type Locale } from "@/i18n.config";
import type { JsonObject } from "@prisma/client/runtime/library";
import { z } from "zod";

export const parsePrismaDict = (dict: unknown, lang: Locale) => i18n.PrismaDictSchema.parse(dict)[lang];

export const parsePrismaOptionalDict = (dict: unknown, lang: Locale) => {
  const parsedDict = i18n.PrismaDictSchema.or(z.null()).parse(dict);

  return parsedDict ? parsedDict[lang] : undefined;
};
