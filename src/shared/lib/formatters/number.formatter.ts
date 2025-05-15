export const formatNumber = (value: number): string => {
  if (!value) {
    return "0";
  }

  return new Intl.NumberFormat("ru-RU").format(value);
};

export const formatCurrency = (value: number, currency: string = "BYN") => {
  const num = formatNumber(value);

  return num + " " + currency;
};
