import clsx from "clsx";
import { PropsWithChildren, ReactNode } from "react";
import { Divider } from "../divider";
import { Text } from "../text";
import styles from "./styles.module.css";

export type PageLayoutProps = {
  title: string;
  headControl?: ReactNode;
  size?: "title" | "large" | "medium";
} & PropsWithChildren;

export const PageLayout = ({
  headControl,
  title,
  children,
  size = "title",
}: PageLayoutProps) => {
  return (
    <div className={styles.pageContainer}>
      <div
        className={clsx(styles.head, size === "medium" && styles.mediumPadding)}
      >
        <div className={styles.headContent}>
          <Text size={size} bold color="--color-main">
            {title}
          </Text>
          {headControl && (
            <div className={styles.headControl}>{headControl}</div>
          )}
        </div>
      </div>
      <Divider />
      <div className={styles.pageContent}>{children}</div>
    </div>
  );
};
