import { Link } from "@/i18n";
import { ColorType } from "@/shared/lib";
import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren } from "react";
import styles from "./styles.module.css";

type Props = {
  nowrap?: boolean;
  bold?: boolean;
  light?: boolean;
  color?: ColorType;
  size?: "large" | "medium" | "small" | "title";
  linkTo?: string;
  weight?: number;
} & HTMLAttributes<HTMLSpanElement> &
  PropsWithChildren;

export const Text = ({
  bold,
  light,
  size,
  nowrap,
  children,
  color,
  linkTo,
  weight,
  ...props
}: Props) => {
  const classNames = clsx(
    styles.text,
    styles[size ?? "medium"],
    bold && "bold",
    light && styles.light,
    nowrap && styles.nowrap,
    linkTo && styles.link
  );

  const style = {
    color: color && `var(${color})`,
    fontWeight: weight && weight,
  };

  return linkTo ? (
    <Link className={classNames} style={style} {...props} href={linkTo}>
      {children}
    </Link>
  ) : (
    <span className={classNames} style={style} {...props}>
      {children}
    </span>
  );
};
