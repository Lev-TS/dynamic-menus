import { useContext } from "react";

import { DictContext } from "@/providers/DictContextProvider";

export const useDictContext = () => {
  const context = useContext(DictContext);

  if (context == null) {
    throw new Error("useDictContext must be used within a DictContextProvider");
  }

  return context;
};
