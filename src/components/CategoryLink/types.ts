import type { ReactNode } from "react";

export type InfoLinkProps = {
  href: string;
  isSeparated: boolean;
  icon: ReactNode;
  title?: string;
  subTitle?: string;
};
