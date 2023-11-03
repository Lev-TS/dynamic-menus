import { NestedCategories } from "@/components/NestedCategory/component";
import { buildMenuRoute } from "@/lib/cross/navigation/utils";
import { parsePrismaDict } from "@/lib/cross/db/utils";
import { prisma } from "@/lib/server/db/utils";

import type { MenuPageProps } from "./types";
import { notFound } from "next/navigation";
import { MenuPageLayout } from "@/components/MenuPageLayout/component";

export default async function MenuPage({ params }: MenuPageProps) {
  const menu = await getMenu(params.menu);

  return (
    <MenuPageLayout
      menuRoute={buildMenuRoute({ lang: params.lang, menuName: params.menu })}
      menuTitle={parsePrismaDict(menu.titleDict, params.lang)}
    >
      {menu.categoryRecipes.map(({ category }) => (
        <NestedCategories menuName={params.menu} category={category} lang={params.lang} key={category.id} />
      ))}
    </MenuPageLayout>
  );
}

async function getMenu(slug: string) {
  const menu = await prisma.menu.findUnique({
    where: { slug },
    include: {
      categoryRecipes: {
        include: {
          category: {
            include: {
              nestedCategories: true,
            },
          },
        },
      },
    },
  });

  if (menu == null) {
    notFound();
  }

  return menu;
}
