import React, { PropsWithChildren, ReactNode } from "react";
import styles from "./styles.module.css";
import { Text } from "../text";
import { Divider } from "../divider";

export type PageLayoutProps = {
  title: string;
  headControl?: ReactNode;
} & PropsWithChildren;

export const PageLayout = ({
  headControl,
  title,
  children,
}: PageLayoutProps) => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.head}>
        <div className={styles.headContent}>
          <Text size="large" bold color="--color-main">
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
