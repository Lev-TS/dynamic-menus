import Link from "next/link";
import { RxChevronLeft } from "react-icons/rx";
import { notFound } from "next/navigation";

import { NestedCategories } from "@/components/NestedCategory/component";
import { buildMenuRoute, buildSubMenuRoute } from "@/lib/cross/navigation/utils";
import { parsePrismaDict } from "@/lib/cross/db/utils";
import { prisma } from "@/lib/server/db/utils";

import { SubMenuProps } from "./types";

export default async function SubMenuPage({ params }: SubMenuProps) {
  const category = await prisma.category.findUnique({
    where: {
      id: params.sub_menu,
    },
    include: {
      parentCategory: true,
      nestedCategories: true,
    },
  });

  if (category == null) {
    notFound();
  }

  const parentLink = (
    <div className="absolute left-3 top-[18px] z-50 flex space-x-2">
      <Link href={buildMenuRoute({ lang: params.lang, menuName: params.menu })} className="flex items-center space-x-1">
        <RxChevronLeft className="h-6 w-6" />
        <p>Home</p>
      </Link>
      {category.parentCategoryId != null && category.parentCategory?.parentCategoryId != null ? (
        <Link
          href={buildSubMenuRoute({ lang: params.lang, menuName: params.menu, menuItemId: category.parentCategoryId })}
          className="flex items-center space-x-1"
        >
          <RxChevronLeft className="h-6 w-6" />
          <p>{parsePrismaDict(category.parentCategory.titleDict, params.lang)}</p>
        </Link>
      ) : null}
    </div>
  );

  if (category.nestedCategories.length == 0) {
    return (
      <div>
        {parentLink}
        <span>{`This is info about ${parsePrismaDict(category.titleDict, params.lang)}`}</span>
      </div>
    );
  }

  return (
    <div className="m-auto max-w-sm space-y-6">
      {parentLink}
      <NestedCategories menuName={params.menu} category={category} lang={params.lang} />
    </div>
  );
}
