import { useClickOutside } from "@/shared/hooks";
import { MenuItemType } from "@/shared/lib";
import clsx from "clsx";
import { useRef, useState } from "react";
import { Divider } from "../divider";
import { Icon } from "../icon";
import { MenuItemPreview } from "../menu-item-preview";
import { Text } from "../text";
import styles from "./styles.module.css";

type Props = {
  items: MenuItemType[];
  bottomItems?: MenuItemType[];
};

export const Menu = ({ items = [], bottomItems = [] }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  useClickOutside({ handleClick: setIsOpen.bind(null, false), ref });

  const handleClick =
    ({
      handleRedirect,
      isActive,
    }: Pick<MenuItemType, "handleRedirect" | "isActive">) =>
    () => {
      setIsOpen(false);

      if (!isActive?.call(null)) {
        handleRedirect();
      }
    };

  const renderItem = ({ handleRedirect, isActive, ...item }: MenuItemType) => {
    return (
      <span
        key={item.label}
        className={clsx(
          styles.linkItem,
          isOpen && styles.open,
          isActive?.call(null) && styles.active
        )}
        onClick={handleClick({ handleRedirect })}
      >
        <Text weight={500}>{item.label}</Text>

        <div className={styles.iconContainer}>
          <MenuItemPreview head={item.icon} />
        </div>
      </span>
    );
  };

  return (
    <div className={clsx(styles.container, isOpen && styles.open)} ref={ref}>
      <div className={styles.content}>
        <div>
          <span className={clsx(styles.header)} onClick={toggleOpen}>
            <Text bold color="--color-black">
              EVALEARN
            </Text>
            <Icon
              variant="arrow-right"
              size="large"
              className={clsx(styles.headerArrow, isOpen && styles.open)}
            />
          </span>
          <Divider />

          <div className={clsx(styles.items, isOpen && styles.open)}>
            {items.map(renderItem)}
          </div>
        </div>

        {bottomItems.length && (
          <div className={clsx(styles.items, isOpen && styles.open)}>
            {bottomItems.map(renderItem)}
          </div>
        )}
      </div>
    </div>
  );
};
