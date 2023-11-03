import type { Locale } from "@/i18n.config";
import type { Category } from "@prisma/client";

export type NestedCategoryProps = {
  category: Category & { nestedCategories: Category[] };
  lang: Locale;
  menuName: string;
};
