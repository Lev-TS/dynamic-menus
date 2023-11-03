import Link from "next/link";
import type { FC } from "react";
import { RxChevronLeft } from "react-icons/rx";

import { ThemeModeToggle } from "../ThemeModeToggle/component";
import { LocaleToggle } from "../LocaleToggle/component";
import type { MenuPageLayoutProps } from "./types";

export const MenuPageLayout: FC<MenuPageLayoutProps> = ({
  menuRoute,
  menuTitle,
  children,
  categoryRoute,
  categoryTitle,
}) => {
  return (
    <>
      <header className="sticky top-0 z-50 grid  grid-cols-3 items-center border-b bg-background p-3">
        {categoryRoute && categoryTitle ? (
          <Link href={categoryRoute} className="flex items-center space-x-1 ">
            <RxChevronLeft className="h-6 w-6" />
            <p>{categoryTitle}</p>
          </Link>
        ) : (
          <div />
        )}
        <Link className="text-center text-sm font-bold" href={menuRoute}>
          {menuTitle}
        </Link>
        <div className="flex justify-end gap-3">
          <ThemeModeToggle />
          <LocaleToggle />
        </div>
      </header>
      <main className="flex-1 space-y-5 overflow-auto bg-slate-600/10 p-3">
        <div className="m-auto max-w-sm space-y-5 ">{children}</div>
      </main>
    </>
  );
};
