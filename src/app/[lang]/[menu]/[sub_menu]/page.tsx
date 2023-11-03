import { notFound } from "next/navigation";

import { NestedCategories } from "@/components/NestedCategory/component";
import { buildMenuRoute, buildSubMenuRoute } from "@/lib/cross/navigation/utils";
import { parsePrismaDict } from "@/lib/cross/db/utils";
import { prisma } from "@/lib/server/db/utils";

import { SubMenuProps } from "./types";
import { MenuPageLayout } from "@/components/MenuPageLayout/component";
import { getDictionary } from "@/lib/server/locale/utils";

export default async function SubMenuPage({ params }: SubMenuProps) {
  const [menu, category] = await Promise.all([getMenu(params.menu), getCategory(params.sub_menu)]);
  const dict = await getDictionary(params.lang);

  const categoryRoute =
    category.parentCategoryId != null && category.parentCategory?.parentCategoryId != null
      ? buildSubMenuRoute({ lang: params.lang, menuName: params.menu, menuItemId: category.parentCategoryId })
      : buildMenuRoute({ lang: params.lang, menuName: params.menu });

  const categoryTitle =
    category.parentCategoryId != null && category.parentCategory?.parentCategoryId != null
      ? parsePrismaDict(category.parentCategory.titleDict, params.lang)
      : dict.pages.subMenu.home;

  return (
    <MenuPageLayout
      menuRoute={buildMenuRoute({ lang: params.lang, menuName: params.menu })}
      menuTitle={parsePrismaDict(menu.titleDict, params.lang)}
      categoryRoute={categoryRoute}
      categoryTitle={categoryTitle}
    >
      {category.nestedCategories.length == 0 ? (
        <p>{`This will be info about ${parsePrismaDict(category.titleDict, params.lang)}`}</p>
      ) : (
        <NestedCategories menuName={params.menu} category={category} lang={params.lang} />
      )}
    </MenuPageLayout>
  );
}

async function getMenu(slug: string) {
  const menu = await prisma.menu.findUnique({
    where: { slug },
    select: {
      titleDict: true,
    },
  });

  if (menu == null) {
    notFound();
  }

  return menu;
}

async function getCategory(categoryId: string) {
  const category = await prisma.category.findUnique({
    where: {
      id: categoryId,
    },
    include: {
      parentCategory: true,
      nestedCategories: true,
    },
  });

  if (category == null) {
    notFound();
  }

  return category;
}
