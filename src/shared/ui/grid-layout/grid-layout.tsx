import React, { PropsWithChildren, ReactNode } from "react";
import styles from "./styles.module.css";

type Props = {
  headControl?: ReactNode;
  bottomControl?: ReactNode;
} & PropsWithChildren;

export const GridLayout = ({ children, headControl, bottomControl }: Props) => {
  return (
    <div className={styles.gridContainer}>
      {headControl && <div className={styles.control}>{headControl}</div>}
      <div className={styles.gridContent}>{children}</div>
      {bottomControl && <div className={styles.control}>{bottomControl}</div>}
    </div>
  );
};
