export const getMaxPage = (pageSize: number, count: number = 0) => {
  const maxPage = Math.ceil(count / pageSize) - 1;

  return maxPage >= 0 ? maxPage : 0;
};
