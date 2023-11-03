import type { Locale } from "@/i18n.config";

export type BuildMenuRouteArgs = {
  lang: Locale;
  menuName: string;
};

export type BuildSubMenuRouteArgs = BuildMenuRouteArgs & { menuItemId: string };
