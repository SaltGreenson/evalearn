type ValueType = number | Date | string | undefined;

const getTime = (value: ValueType): number => {
  if (!value) {
    return 0;
  }

  if (value instanceof Date) {
    return value.getTime();
  }

  if (typeof value === "string") {
    return new Date(value).getTime();
  }

  return value;
};

export const isDateLess = (a: ValueType, b: ValueType) => {
  return getTime(a) > getTime(b);
};

export const isDateLessOrEqual = (a: ValueType, b: ValueType) => {
  return getTime(a) >= getTime(b);
};

export const isDateGreater = (a: ValueType, b: ValueType) => {
  return getTime(a) < getTime(b);
};

export const isDateGreaterOrEqual = (a: ValueType, b: ValueType) => {
  return getTime(a) <= getTime(b);
};

export const isDateEqual = (a: ValueType, b: ValueType) => {
  return getTime(a) === getTime(b);
};
