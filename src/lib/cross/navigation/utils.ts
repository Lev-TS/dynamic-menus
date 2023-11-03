import type { BuildMenuRouteArgs, BuildSubMenuRouteArgs } from "./types";

export const buildMenuRoute = ({ lang, menuName }: BuildMenuRouteArgs) => `/${lang}/${menuName}`;
export const buildSubMenuRoute = ({ menuItemId, ...rest }: BuildSubMenuRouteArgs) =>
  `${buildMenuRoute(rest)}/${menuItemId}`;
