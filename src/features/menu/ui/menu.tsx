import { redirect, usePathname } from "@/i18n";
import { isCurrentPath } from "@/shared/lib";
import { Menu as MenuUI } from "@/shared/ui";
import { useTranslations } from "next-intl";
import { RedirectType } from "next/navigation";
import { menuElements } from "../model/menu-elements.const";

export const Menu = () => {
  const pathname = usePathname();
  const t = useTranslations("Menu");

  const isActive = (href: string) => () => {
    return isCurrentPath(pathname, href);
  };

  const handleRedirect = (href: string) => () => {
    redirect({ href, locale: "ru" }, RedirectType.replace);
  };

  return <MenuUI items={menuElements({ handleRedirect, isActive, t })} />;
};
