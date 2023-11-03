import { FC } from "react";

import { CardTitle, Card } from "@/components/ui/card";
import type { InfoCategoryCardProps } from "./type";

export const InfoCategoryCard: FC<InfoCategoryCardProps> = ({ children, title }) => {
  return (
    <div className="space-y-2">
      {title ? <CardTitle>{title}</CardTitle> : null}
      <Card className="p-0">{children}</Card>
    </div>
  );
};
