import React, { PropsWithChildren } from "react";
import { Text } from "../text";
import styles from "./styles.module.css";
import { ColorType } from "@/shared/lib";

type Props = {
  label: string;
  linkTo?: string;
  color?: ColorType;
} & PropsWithChildren;

export const Description = ({ label, linkTo, children, color }: Props) => {
  return (
    <div className={styles.container}>
      <Text linkTo={linkTo} bold size="medium" color={color} weight={500}>
        {label}
      </Text>
      <Text size="small" color={color}>
        {children}
      </Text>
    </div>
  );
};
