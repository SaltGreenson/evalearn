import clsx from "clsx";
import { Text } from "../text";
import styles from "./styles.module.css";

export type MenuItemPreviewProps = {
  head: string;
  linkTo?: string;
  small?: boolean;
};

export const MenuItemPreview = ({
  linkTo,
  head,
  small,
}: MenuItemPreviewProps) => {
  return (
    <div className={styles.userPreview}>
      <div className={clsx(styles.circle, small && styles.small)}>
        <Text linkTo={linkTo} size="large" weight={600} color="--color-gray">
          {head.toUpperCase().slice(0, 2)}
        </Text>
      </div>
    </div>
  );
};
