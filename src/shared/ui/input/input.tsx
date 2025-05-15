import React, { InputHTMLAttributes } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import { Icon, IconVariant } from "../icon";
import { Text } from "../text";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  label: string;
  icon?: IconVariant;
  description?: string;
  handleClickIcon?: VoidFunction;
};

export const Input = ({
  label,
  error,
  icon,
  handleClickIcon,
  required,
  description,
  ...props
}: InputProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.input_container}>
        <input
          {...props}
          className={clsx(
            styles.input,
            error && styles.danger,
            icon && styles.input_icon
          )}
          placeholder={props.placeholder ?? " "}
        />
        <label className={clsx(styles.label, error && styles.danger)}>
          {label}
          {required && "*"}
        </label>
        {icon ? (
          <Icon
            className={clsx(
              styles.icon,
              handleClickIcon && styles.clickable_icon
            )}
            variant={icon}
            size="medium"
            onClick={handleClickIcon}
          />
        ) : description ? (
          <div
            className={clsx(
              styles.description,
              handleClickIcon && styles.clickable_description
            )}
          >
            <Text>{description}</Text>
          </div>
        ) : null}
      </div>
      {error && (
        <Text size="small" color="--color-red">
          {error}
        </Text>
      )}
    </div>
  );
};
