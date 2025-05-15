import dayjs from "dayjs";

const formatDate = (formatPattern: string) => (date: string) => {
  return dayjs(date).format(formatPattern);
};

export const dateFormatters = {
  fullDate: formatDate("DD.MM.YYYY"),
  fullDateWithTime: formatDate("DD.MM.YYYY HH:mm"),
  time: formatDate("HH:mm"),
};
