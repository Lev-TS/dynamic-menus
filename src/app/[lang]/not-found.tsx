"use client";

import { useDictContext } from "@/hooks/useDictContext";

export default function NotFound() {
  const dict = useDictContext();

  return <p>{dict.pages.notFound.message}</p>;
}
