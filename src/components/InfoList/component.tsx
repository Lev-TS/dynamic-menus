import React, { type FC } from "react";

import { InfoCategoryCard } from "../InfoCategoryCard/component";
import { InfoLink } from "../InfoLink/component";
import { DynamicIcon } from "../DynamicIcon/component";

export const InfoList = ({ infoRecipes, uri, lang }) => {
  return infoRecipes.map(({ info: parentInfo }) => {
    if (parentInfo.children.length <= 0) {
      return null;
    }

    return (
      <InfoCategoryCard key={parentInfo.id} title={parentInfo.titleDict[lang]}>
        {parentInfo.children.map((childInfo, idx, arr) => {
          return (
            <InfoLink
              key={childInfo.id}
              href={`${uri}/${childInfo.id}`}
              title={childInfo.titleDict[lang]}
              subTitle={childInfo.subTitleDict[lang]}
              icon={<DynamicIcon name={childInfo.icon} />}
              isSeparated={idx != arr.length - 1}
            />
          );
        })}
      </InfoCategoryCard>
    );
  });
};
