import Link from "next/link";
import { RxChevronRight } from "react-icons/rx";
import { type FC } from "react";

import { InfoLinkProps } from "./types";
import { Separator } from "../ui/separator";

export const CategoryLink: FC<InfoLinkProps> = ({ href, title, subTitle, isSeparated, icon }) => {
  return (
    <>
      <Link href={href} className="flex w-full items-center justify-between p-3">
        <div className="flex items-center gap-3">
          {icon ?? null}
          {title ? <p>{title}</p> : null}
        </div>
        <div className="flex items-center gap-2">
          {subTitle && <p className="text-xs">{subTitle}</p>}
          <RxChevronRight className="h-6 w-6" />
        </div>
      </Link>
      {isSeparated ? <Separator /> : null}
    </>
  );
};
