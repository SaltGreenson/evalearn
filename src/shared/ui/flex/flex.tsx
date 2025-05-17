import clsx from "clsx";
import { PropsWithChildren } from "react";
import styles from "./styles.module.css";

type Props = {
  padding?: boolean;
  excludeTopPadding?: boolean;
  centerH?: boolean;
  centerV?: boolean;
  betweenH?: boolean;
  paddingTop?: boolean;
  paddingLeft?: boolean;
  paddingBottom?: boolean;
  paddingRight?: boolean;
  width?: number | string;
  height?: number | string;
  gap?: number;
  justifyEnd?: boolean;
} & PropsWithChildren;
type ColumnProps = Props & { fullSizeMobile?: boolean };

const getWidth = (width?: number | string) => {
  if (!Boolean(width)) {
    return {};
  }

  let styles = {
    maxWidth: width,
    width,
  };

  if (!Number.isNaN(Number(width))) {
    return {
      ...styles,
      minWidth: (width as number) - ((width as number) / 100) * 10,
    };
  }

  return styles;
};

const getHeight = (height?: number | string) => {
  if (!Boolean(height)) {
    return {};
  }

  let styles = {
    maxHeight: height,
    height: height,
  };

  if (!Number.isNaN(Number(height))) {
    return {
      ...styles,
      minHeight: (height as number) - ((height as number) / 100) * 10,
    };
  }

  return styles;
};

const getGap = (gap?: number | string) => {
  if (!Boolean(gap) || Number.isNaN(Number(gap))) {
    return {};
  }

  return {
    gap,
  };
};

const getClassName = (data: Omit<Props, "children">) => {
  return clsx(
    data.padding && styles.padding,
    data.paddingLeft && styles.leftPadding,
    data.paddingRight && styles.rightPadding,
    data.paddingBottom && styles.bottomPadding,
    data.paddingTop && styles.topPadding,
    data.centerH && styles.centerH,
    data.centerV && styles.centerV,
    data.betweenH && styles.betweenH,
    data.excludeTopPadding && styles.excludeTopPadding,
    data.justifyEnd && styles.justifyEnd
  );
};

export const FlexItem = ({
  children,
  width,
  height,
  gap,
  ...styleProps
}: ColumnProps) => {
  return (
    <div
      className={clsx(styles.flexItem, getClassName(styleProps))}
      style={{
        ...getWidth(width),
        ...getHeight(height),
        ...getGap(gap),
      }}
    >
      {children}
    </div>
  );
};

export const FlexColumn = ({
  children,
  width,
  height,
  gap,
  fullSizeMobile,
  ...styleProps
}: ColumnProps) => {
  return (
    <div
      className={clsx(
        styles.flexColumn,
        fullSizeMobile && styles.fullSizeMobile,
        getClassName(styleProps)
      )}
      style={{
        ...getWidth(width),
        ...getHeight(height),
        ...getGap(gap),
      }}
    >
      {children}
    </div>
  );
};

export const Flex = ({
  children,
  width,
  height,
  gap,
  ...styleProps
}: Props) => {
  return (
    <div
      className={clsx(styles.flex, getClassName(styleProps))}
      style={{
        ...getWidth(width),
        ...getHeight(height),
        ...getGap(gap),
      }}
    >
      {children}
    </div>
  );
};
