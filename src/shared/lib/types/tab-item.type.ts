import { IconVariant } from "@/shared/ui";
import { ReactNode } from "react";

export type TabItemDetailsType = {
  icon?: IconVariant;
  label: string;
  item: ReactNode;
  isDisplay?: boolean;
  isEdit?: boolean;
  handleEdit?: VoidFunction;
  handleSubmit?: VoidFunction;
  editLoading?: boolean;
};

export type TabItemType = Record<string, TabItemDetailsType>;
