import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

import { Logo } from "./icons/logo";
import { CircleLoader } from "../circle-loader";

type Props = {
  size?: "small" | "medium" | "large";
};

export const SalesPortalLoader = ({ size }: Props) => {
  return (
    <div className={clsx(styles.container, styles[size ?? "small"])}>
      <div className={clsx(styles.loaderContainer)}>
        <div className={styles.large}>
          <CircleLoader color="--color-blue" size="large" />
        </div>
        <div className={styles.small}>
          <CircleLoader color="--color-blue-hover" size="medium" reverse />
        </div>
      </div>
      <Logo className={styles.logo} />
    </div>
  );
};
