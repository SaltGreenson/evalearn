import { PropsWithChildren, ReactNode } from "react";

import clsx from "clsx";
import { Text } from "../text";
import styles from "./styles.module.css";

type Props = {
  head: string | ReactNode;
  center?: boolean;
} & PropsWithChildren;

export const VariantCard = ({ head, center, children }: Props) => {
  const headNode =
    typeof head === "string" ? (
      <Text size="medium" light color="--color-black">
        {head}
      </Text>
    ) : (
      head
    );

  return (
    <div className={styles.variantCard}>
      <div className={clsx(styles.content, center && styles.center)}>
        {children}
      </div>
      <div className={styles.head}>{headNode}</div>
    </div>
  );
};
