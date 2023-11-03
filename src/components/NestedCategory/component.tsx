import React, { type FC } from "react";

import { InfoCategoryCard } from "../InfoCategoryCard/component";
import { InfoLink } from "../InfoLink/component";
import { DynamicIcon } from "../DynamicIcon/component";
import { buildSubMenuRoute } from "@/lib/cross/navigation/utils";
import { NestedCategoryProps } from "./types";
import { parsePrismaDict, parsePrismaOptionalDict } from "@/lib/cross/db/utils";

export const NestedCategories: FC<NestedCategoryProps> = ({ category, menuName, lang }) => {
  return (
    <InfoCategoryCard title={parsePrismaDict(category.titleDict, lang)}>
      {category.nestedCategories.map((childInfo, idx, arr) => {
        const href = buildSubMenuRoute({ menuName, lang, menuItemId: childInfo.id });

        return (
          <InfoLink
            key={childInfo.id}
            href={href}
            title={parsePrismaDict(childInfo.titleDict, lang)}
            subTitle={parsePrismaOptionalDict(childInfo.subTitleDict, lang)}
            icon={<DynamicIcon name={childInfo.icon} />}
            isSeparated={idx != arr.length - 1}
          />
        );
      })}
    </InfoCategoryCard>
  );
};
