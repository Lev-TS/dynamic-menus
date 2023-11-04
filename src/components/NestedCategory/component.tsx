import React, { type FC } from "react";

import { CategoryCard } from "../CategoryCard/component";
import { CategoryLink } from "../CategoryLink/component";
import { DynamicIcon } from "../DynamicIcon/component";
import { buildSubMenuRoute } from "@/lib/cross/navigation/utils";
import { NestedCategoryProps } from "./types";
import { parsePrismaOptionalDict } from "@/lib/cross/db/utils";

export const NestedCategories: FC<NestedCategoryProps> = ({ category, menuName, lang }) => {
  return (
    <CategoryCard title={parsePrismaOptionalDict(category.titleDict, lang)}>
      {category.nestedCategories.map((childInfo, idx, arr) => {
        const href = buildSubMenuRoute({ menuName, lang, menuItemId: childInfo.id });

        return (
          <CategoryLink
            key={childInfo.id}
            href={href}
            title={parsePrismaOptionalDict(childInfo.titleDict, lang)}
            subTitle={parsePrismaOptionalDict(childInfo.subTitleDict, lang)}
            icon={<DynamicIcon name={childInfo.icon} />}
            isSeparated={idx != arr.length - 1}
          />
        );
      })}
    </CategoryCard>
  );
};
