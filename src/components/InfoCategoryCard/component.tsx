import { type FC, type ReactNode } from "react";

import { CardTitle, Card } from "@/components/ui/card";
import { InfoCategoryCardProps } from "./type";

export const InfoCategoryCard: FC<InfoCategoryCardProps> = ({ children, title }) => {
  return (
    <div className="space-y-2">
      <CardTitle>{title}</CardTitle>
      <Card className="p-0">{children}</Card>
    </div>
  );
};
