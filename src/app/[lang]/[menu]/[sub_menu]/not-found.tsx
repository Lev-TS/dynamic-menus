"use client";

import Link from "next/link";
import { RxChevronLeft } from "react-icons/rx";
import { usePathname } from "next/navigation";

import { useDictContext } from "@/hooks/useDictContext";
import { buildMenuRoute } from "@/lib/cross/navigation/utils";
import type { Locale } from "@/i18n.config";

export default function NotFound() {
  const dict = useDictContext();
  const pathname = usePathname();
  const [lang, menuName] = pathname.split("/").slice(1, 3);

  const href = buildMenuRoute({ lang: lang as Locale, menuName });

  return (
    <div className="flex justify-center">
      <h1>{`404 | ${dict.pages.notFound.message}`}</h1>
      <div className="absolute left-3 top-[18px] z-50 flex space-x-2">
        <Link href={href} className="flex items-center space-x-1">
          <span>
            <RxChevronLeft />
          </span>
          <span>{dict.pages.notFound.toHome}</span>
        </Link>
      </div>
    </div>
  );
}
