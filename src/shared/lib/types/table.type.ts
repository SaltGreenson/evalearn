import { IconVariant } from "@/shared/ui";
import { ReactNode } from "react";

export type TableHeadItem<T> = {
  key: keyof T;
  label: string;
  icon?: IconVariant;
  render?: (item: T) => ReactNode;
  isDisplay?: boolean;
};
