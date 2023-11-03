import type { ReactNode } from "react";

export type MenuPageLayoutProps = {
  menuRoute: string;
  menuTitle: string;
  categoryRoute?: string;
  categoryTitle?: string;
  children: ReactNode;
};
