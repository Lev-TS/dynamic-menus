import { Metadata } from "next";

import type { MenuLayoutProps, MenuPageProps } from "./types";

import { parsePrismaDict } from "@/lib/cross/db/utils";
import { prisma } from "@/lib/server/db/utils";
import { i18n } from "@/i18n.config";

export async function generateMetadata({ params }: MenuPageProps): Promise<Metadata | undefined> {
  const menu = await prisma.menu.findUnique({
    where: {
      slug: params.menu,
    },
    select: {
      titleDict: true,
      descriptionDict: true,
    },
  });

  if (menu != null) {
    return {
      title: parsePrismaDict(menu.titleDict, params.lang),
      description: parsePrismaDict(menu.descriptionDict, params.lang),
    };
  }
}

export const generateStaticParams = () => {
  return i18n.locales.map((lang) => {
    return { lang, menu: "vintage-gallery" };
  });
};

export default function MenuLayout({ children }: MenuLayoutProps) {
  return <div className="flex min-h-screen flex-col">{children}</div>;
}
