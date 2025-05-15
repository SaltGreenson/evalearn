import React, { ReactNode } from "react";
import { PageLayout, PageLayoutProps } from "../page-layout";
import styles from "./styles.module.css";

type Props = { preview: ReactNode } & PageLayoutProps;

export const ProfileLayout = ({ preview, children, ...pageLayout }: Props) => {
  return (
    <PageLayout {...pageLayout}>
      <div className={styles.headPreview}>{preview}</div>
      <div className={styles.content}>{children}</div>
    </PageLayout>
  );
};
