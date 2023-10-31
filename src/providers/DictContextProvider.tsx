"use client";

import { FC, ReactNode, createContext } from "react";

import type { getDictionary } from "@/lib/server/locale/utils";

type Dict = Awaited<ReturnType<typeof getDictionary>>;

export const DictContext = createContext<Dict | null>(null);

export const DictContextProvider: FC<{ children: ReactNode; dict: Dict }> = ({ children, dict }) => {
  return <DictContext.Provider value={dict}>{children}</DictContext.Provider>;
};
