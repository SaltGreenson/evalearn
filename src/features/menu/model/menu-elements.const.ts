import { MenuItemType, TranslationType } from "@/shared/lib";

type MenuElements = {
  t: TranslationType<"Menu">;
  handleRedirect: (href: string) => () => void;
  isActive: (href: string) => () => boolean;
};

export const menuElements = ({
  handleRedirect,
  t,
  isActive,
}: MenuElements): MenuItemType[] => [
  {
    handleRedirect: handleRedirect("/"),
    icon: "UI",
    label: t("uiKit"),
    isActive: isActive("/"),
  },
  {
    handleRedirect: handleRedirect("/lesson-1"),
    icon: "1",
    label: t("lesson1"),
    isActive: isActive("/lesson-1"),
  },
  {
    handleRedirect: handleRedirect("/lesson-2"),
    icon: "2",
    label: t("lesson2"),
    isActive: isActive("/lesson-2"),
  },
  {
    handleRedirect: handleRedirect("/lesson-3"),
    icon: "3",
    label: t("lesson3"),
    isActive: isActive("/lesson-3"),
  },
  {
    handleRedirect: handleRedirect("/lesson-4"),
    icon: "4",
    label: t("lesson4"),
    isActive: isActive("/lesson-4"),
  },
  {
    handleRedirect: handleRedirect("/lesson-5"),
    icon: "5",
    label: t("lesson5"),
    isActive: isActive("/lesson-5"),
  },
];
