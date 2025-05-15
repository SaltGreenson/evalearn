import { IconVariant } from "../../icon";

export const iconMap = (
  isOpen: boolean,
  disabled?: boolean
): undefined | IconVariant => {
  if (disabled) {
    return undefined;
  }

  if (isOpen) {
    return "line-arrow-up";
  }

  return "line-arrow-down";
};
