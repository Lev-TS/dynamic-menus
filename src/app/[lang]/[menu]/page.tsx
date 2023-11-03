import { NestedCategories } from "@/components/NestedCategory/component";
import { prisma } from "@/lib/server/db/utils";

import type { MenuPageProps } from "./types";

export default async function MenuPage({ params }: MenuPageProps) {
  const menu = await prisma.menu.findUnique({
    where: {
      slug: params.menu,
    },
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
    return <div>Not Found</div>;
  }

  return menu.categoryRecipes.map(({ category }) => (
    <div className="m-auto max-w-sm" key={category.id}>
      <NestedCategories menuName={params.menu} category={category} lang={params.lang} />
    </div>
  ));
}
