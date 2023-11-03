import { NestedCategories } from "@/components/NestedCategory/component";
import { prisma } from "@/lib/server/db/utils";

import type { MenuPageProps } from "./types";

export default async function MenuPage({ params }: MenuPageProps) {
  const menu = await prisma.menu.findUnique({
    where: {
      slug: params.menu,
    },
    include: {
      nestedCategoryRecipes: {
        include: {
          nestedCategory: {
            include: {
              children: true,
            },
          },
        },
      },
    },
  });

  if (menu == null) {
    return <div>Not Found</div>;
  }

  return menu.nestedCategoryRecipes.map(({ nestedCategory }) => (
    <div className="m-auto max-w-sm" key={nestedCategory.id}>
      <NestedCategories menuName={params.menu} nestedCategory={nestedCategory} lang={params.lang} />
    </div>
  ));
}
