import React, { InputHTMLAttributes } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import { Text } from "../text";

type Props = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "defaultValue"
> & {
  type?: "checkbox" | "radio";
  label?: string;
  error?: string;
  reverseLabel?: boolean;
  previewOnly?: boolean;
};

export const Checkbox = ({
  label,
  error,
  type = "checkbox",
  reverseLabel,
  previewOnly,
  ...props
}: Props) => {
  const labelNode = label && (
    <Text
      size="medium"
      weight={500}
      color={props.disabled ? "--color-black" : undefined}
    >
      {label}
      {props.required && "*"}
    </Text>
  );

  return (
    <div className={clsx(styles.container, previewOnly && styles.previewOnly)}>
      <div className={styles.checkboxWrapper}>
        {!reverseLabel && labelNode}

        <div
          className={clsx(styles.checkbox, props.disabled && styles.disabled)}
        >
          <input type={type} {...props} />
          <svg viewBox="0 0 35.6 35.6">
            <circle
              className={styles.background}
              cx="17.8"
              cy="17.8"
              r="17.8"
            />
            <circle className={styles.stroke} cx="17.8" cy="17.8" r="14.37" />

            <path className={styles.cross} d="M10 10 L25 25 M25 10 L10 25" />

            <polyline
              className={styles.check}
              points="11.78 18.12 15.55 22.23 25.17 12.87"
            />
          </svg>
        </div>

        {reverseLabel && labelNode}
      </div>
      {error && (
        <Text size="small" color="--color-red">
          {error}
        </Text>
      )}
    </div>
  );
};
