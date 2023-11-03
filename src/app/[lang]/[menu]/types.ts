import { Locale } from "@/i18n.config";
import { ReactNode } from "react";

export type MenuPageParams = { lang: Locale; menu: string };
export type MenuPageProps = { params: MenuPageParams };
export type MenuLayoutProps = { children: ReactNode } & MenuPageProps;
