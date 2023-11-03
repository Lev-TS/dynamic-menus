import type { ReactNode } from "react";

export type InfoLinkProps = {
  href: string;
  title: string;
  isSeparated: boolean;
  subTitle?: string;
  icon: ReactNode;
};
