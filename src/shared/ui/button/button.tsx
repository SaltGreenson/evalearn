import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import { Text } from "../text";
import { CircleLoader } from "../circle-loader";
import { Icon, IconVariant } from "../icon";

export type ButtonProps = {
  color?: "red" | "orange" | "green" | "blue" | "transparent" | "bordered";
  isLoading?: boolean;
  size?: "large" | "default";
  center?: boolean;
  capitalize?: boolean;
  padding?: boolean;
  icon?: IconVariant;
  error?: string | null;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren;

export const Button = ({
  color,
  children,
  size,
  isLoading,
  center,
  icon,
  capitalize = true,
  padding = true,
  error,
  ...props
}: ButtonProps) => {
  const disabled = isLoading || props.disabled;

  return (
    <div className={clsx(styles.container, styles[size ?? "default"])}>
      <button
        {...props}
        onClick={!disabled ? props.onClick : undefined}
        disabled={disabled}
        className={clsx(
          styles.button,
          padding && styles.padding,
          center && styles.center,
          capitalize && styles.capitalize,
          styles[error ? "red" : color ?? "blue"],
          styles[size ?? "default"]
        )}
      >
        {isLoading ? (
          <CircleLoader color="--color-primary" />
        ) : (
          icon && <Icon className={styles.icon} variant={icon} />
        )}
        {children && <div className={styles.content}>{children}</div>}
      </button>

      {error && (
        <div className={styles.error}>
          <Text size="small" color="--color-red">
            {error}
          </Text>
        </div>
      )}
    </div>
  );
};
