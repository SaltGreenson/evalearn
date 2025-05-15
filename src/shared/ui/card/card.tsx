import clsx from "clsx";
import { PropsWithChildren, ReactNode } from "react";
import { Icon, IconVariant } from "../icon";
import { Text } from "../text";
import styles from "./styles.module.css";
type Props = {
  linkTo?: string;
  head: string | ReactNode;
  icon?: IconVariant;
  collapsed?: boolean;
} & PropsWithChildren;

export const Card = ({
  linkTo,
  head,
  icon,
  children,
  collapsed = true,
}: Props) => {
  const headElement = (
    <div className={styles.headContent}>
      {icon && <Icon variant={icon} />}
      <Text color="--color-black" linkTo={linkTo} weight={600}>
        {head}
      </Text>
    </div>
  );

  const headNode = typeof head === "string" ? headElement : head;

  return (
    <div className={styles.card}>
      <div className={styles.head}>{headNode}</div>
      <div className={clsx(styles.content, collapsed && styles.collapsed)}>
        {children}
      </div>
    </div>
  );
};
