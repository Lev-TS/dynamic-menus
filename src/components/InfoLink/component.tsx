import { type FC } from "react";
import Link from "next/link";

import { RxChevronRight } from "react-icons/rx";
import { Separator } from "../ui/separator";

import { InfoLinkProps } from "./types";

export const InfoLink = ({ href, title, subTitle, isSeparated, icon }: InfoLinkProps) => {
  return (
    <>
      <Link href={href} className="flex w-full items-center justify-between p-3">
        <div className="flex items-center gap-3">
          {icon ?? null}
          <p>{title}</p>
        </div>
        <div className="flex items-center gap-2">
          {subTitle && <div className="text-xs">{subTitle}</div>}
          <RxChevronRight className="h-6 w-6" />
        </div>
      </Link>
      {isSeparated ? <Separator /> : null}
    </>
  );
};
