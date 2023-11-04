import { FC } from "react";

import { CardTitle, Card } from "@/components/ui/card";
import type { CategoryCardProps } from "./type";

export const CategoryCard: FC<CategoryCardProps> = ({ children, title }) => {
  return (
    <div className="space-y-2">
      {title ? <CardTitle>{title}</CardTitle> : null}
      <Card className="p-0">{children}</Card>
    </div>
  );
};
