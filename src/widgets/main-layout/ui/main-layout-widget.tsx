"use client";
import { Menu } from "@/features/menu";
import clsx from "clsx";
import { PropsWithChildren } from "react";
import styles from "./styles.module.css";

export const MainLayoutWidget = ({ children }: PropsWithChildren) => {
  return (
    <div className={clsx(styles.content)}>
      <div className={styles.header}></div>
      <Menu />
      <div className={clsx(styles.children, styles.withUser)}>{children}</div>
    </div>
  );
};
