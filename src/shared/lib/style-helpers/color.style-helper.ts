import { CSSProperties } from "react";
import { ColorType } from "../types";

export const backgroundColorVarStyleHelper = (
  color?: ColorType
): CSSProperties => {
  if (!color) {
    return {};
  }

  const styles: CSSProperties = {
    backgroundColor: `var(${color})`,
  };

  return styles;
};

export const backgroundColorStyleHelper = (color?: string): CSSProperties => {
  if (!color) {
    return {};
  }

  const styles: CSSProperties = {
    backgroundColor: color,
  };

  return styles;
};

export const colorStyleHelper = (color?: ColorType): CSSProperties => {
  if (!color) {
    return {};
  }

  const styles: CSSProperties = {
    color: `var(${color})`,
  };

  return styles;
};
