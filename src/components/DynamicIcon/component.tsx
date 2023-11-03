import type { FC } from "react";

import { getIcon } from "@/lib/cross/icons/utils";
import { cn } from "@/lib/cross/tailwind/utils";

import { DynamicIconProps } from "./types";

export const DynamicIcon: FC<DynamicIconProps> = async ({ name, className }) => {
  if (name == null) {
    return null;
  }

  const Icon = await getIcon(name);

  return <Icon className={cn("h-6 w-6", className)} />;
};
