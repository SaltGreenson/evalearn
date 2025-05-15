import { IconVariant } from "@/shared/ui";

export type SelectOption = {
  label: string;
  icon?: IconVariant;
  isDisplay?: boolean;
  created?: { id: string; value: string };
  [key: string]: unknown;
};
