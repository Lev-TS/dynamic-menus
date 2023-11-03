import type { Locale } from "@/i18n.config";
import type { NestedCategory } from "@prisma/client";

export type NestedCategoryProps = {
  nestedCategory: NestedCategory & { children: NestedCategory[] };
  lang: Locale;
  menuName: string;
};
