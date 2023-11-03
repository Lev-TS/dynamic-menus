import Link from "next/link";
import { RxChevronLeft } from "react-icons/rx";
import { notFound } from "next/navigation";

import { NestedCategories } from "@/components/NestedCategory/component";
import { buildMenuRoute, buildSubMenuRoute } from "@/lib/cross/navigation/utils";
import { parsePrismaDict } from "@/lib/cross/db/utils";
import { prisma } from "@/lib/server/db/utils";

import { SubMenuProps } from "./types";

export default async function SubMenuPage({ params }: SubMenuProps) {
  const nestedCategory = await prisma.nestedCategory.findUnique({
    where: {
      id: params.sub_menu,
    },
    include: {
      parent: true,
      children: true,
    },
  });

  if (nestedCategory == null) {
    notFound();
  }

  const parentLink = (
    <div className="absolute left-3 top-[18px] z-50 flex space-x-2">
      <Link href={buildMenuRoute({ lang: params.lang, menuName: params.menu })} className="flex items-center space-x-1">
        <RxChevronLeft className="h-6 w-6" />
        <p>Home</p>
      </Link>
      {nestedCategory.parentId != null && nestedCategory.parent?.parentId != null ? (
        <Link
          href={buildSubMenuRoute({ lang: params.lang, menuName: params.menu, menuItemId: nestedCategory.parentId })}
          className="flex items-center space-x-1"
        >
          <RxChevronLeft className="h-6 w-6" />
          <p>{parsePrismaDict(nestedCategory.parent.titleDict, params.lang)}</p>
        </Link>
      ) : null}
    </div>
  );

  if (nestedCategory.children.length == 0) {
    return (
      <div>
        {parentLink}
        <span>{`This is info about ${parsePrismaDict(nestedCategory.titleDict, params.lang)}`}</span>
      </div>
    );
  }

  return (
    <div className="m-auto max-w-sm space-y-6">
      {parentLink}
      <NestedCategories menuName={params.menu} nestedCategory={nestedCategory} lang={params.lang} />
    </div>
  );
}
