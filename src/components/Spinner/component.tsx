import React from "react";

import type { SpinnerProps } from "./types";
import { cn } from "@/lib/cross/tailwind/utils";

export const Spinner: React.FC<SpinnerProps> = ({ className }) => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div
        className={cn(
          "h-16 w-16 animate-spin rounded-full border-4 border-dashed border-foreground",
          className
        )}
      />
    </div>
  );
};
