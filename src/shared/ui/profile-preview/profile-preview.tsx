import clsx from "clsx";
import React, { PropsWithChildren } from "react";
import { Divider } from "../divider";
import { Icon, IconVariant } from "../icon";
import { Text } from "../text";
import styles from "./styles.module.css";

type Props = {
  title: Array<{ label: string; icon?: IconVariant }>;
} & PropsWithChildren;

export const ProfilePreview = ({ title, children }: Props) => {
  return (
    <div className={styles.profilePreview}>
      <div className={clsx(styles.head)}>
        {title.map(({ label, icon }) => (
          <React.Fragment key={label}>
            <div key={label} className={styles.headItem}>
              {icon && <Icon variant={icon} />}
              <Text weight={600}>{label}</Text>
            </div>
          </React.Fragment>
        ))}
      </div>
      <Divider />
      <div className={styles.content}>{children}</div>
    </div>
  );
};
