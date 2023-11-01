import { type FC, type ReactNode } from "react";

import { CardTitle, Card } from "@/components/ui/card";

export const InfoCategoryCard: FC<{ children: ReactNode; title: string }> = ({ children, title }) => {
  return (
    <div className="space-y-2">
      <CardTitle>{title}</CardTitle>
      <Card className="p-0">{children}</Card>
    </div>
  );
};
