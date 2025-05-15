import { getMaxPage } from "@/shared/lib";
import clsx from "clsx";
import { Button } from "../button";
import { Icon } from "../icon";
import { Text } from "../text";
import styles from "./styles.module.css";

const pageGenerator = (page: number, maxPage: number): PageItem[] => {
  if (page === 0 && maxPage === 0) {
    return [{ label: "1", value: 0 }];
  }

  if (maxPage <= 5) {
    if (maxPage === 1) {
      maxPage += 1;
    }

    return Array.from({ length: maxPage }).map((_, idx) => {
      const value = idx;
      return { label: String(value + 1), value };
    });
  }

  const template = Array.from({ length: 3 });

  if (page >= template.length && page + template.length <= maxPage) {
    const pages: PageItem[] = template.map((_, idx) => {
      const value = page - template.length + 1 + idx;
      return { label: String(value + 1), value };
    });

    const lastPage = (pages.at(-1) as PageItem).value + 1;

    pages.push(
      { label: "...", value: lastPage },
      { label: String(maxPage + 1), value: maxPage }
    );

    return pages;
  }

  if (maxPage - page - 1 <= template.length) {
    const pages: PageItem[] = template.map((_, idx) => {
      const value = maxPage - idx;
      return { label: String(value + 1), value };
    });

    const lastPage = (pages.at(-1) as PageItem).value - 1;

    pages.push({ label: "...", value: lastPage }, { label: "1", value: 0 });

    return pages.reverse();
  }

  let decrement = 1;

  if (page === 0) {
    decrement = 0;
  }

  const pages: PageItem[] = template.map((_, idx) => {
    const value = page + idx - decrement;
    return { label: String(value + 1), value };
  });

  const lastPage = (pages.at(-1) as PageItem).value + 1;

  pages.push(
    { label: "...", value: lastPage },
    { label: String(maxPage + 1), value: maxPage }
  );

  return pages;
};

export type PaginatorProps = {
  page: number;
  count?: number;
  pageSize: number;
  handleChangePage: (page: number) => () => void;
  reverse?: boolean;
  displayCount?: boolean;
};

type PageItem = {
  label: string;
  value: number;
};

export const Paginator = ({
  page = 0,
  count = 0,
  pageSize,
  reverse,
  displayCount,
  handleChangePage,
}: PaginatorProps) => {
  const maxPage = getMaxPage(pageSize, count);

  return (
    <div className={clsx(styles.paginatorContainer, reverse && styles.reverse)}>
      <div className={styles.paginator}>
        {Boolean(page > 0) && (
          <div className={styles.btn}>
            <Button
              color="transparent"
              size="large"
              padding={false}
              center
              onClick={handleChangePage(page - 1)}
            >
              <Icon className={styles.center} variant="arrow-left" />
            </Button>
          </div>
        )}
        <div className={styles.itemsContainer}>
          {pageGenerator(page, maxPage).map(({ label, value }) => (
            <div
              className={clsx(styles.btn, page === value && styles.active)}
              key={value}
            >
              <Button
                color="transparent"
                size="large"
                padding={false}
                center
                onClick={handleChangePage(value)}
              >
                <Text bold>{label}</Text>
              </Button>
            </div>
          ))}
        </div>

        {Boolean(page < maxPage) && (
          <div className={styles.btn}>
            <Button
              color="transparent"
              size="large"
              padding={false}
              center
              onClick={handleChangePage(page + 1)}
            >
              <Icon className={styles.center} variant="arrow-right" />
            </Button>
          </div>
        )}
      </div>
      {displayCount && (
        <Text light>
          {[
            (page + 1) * pageSize > count ? count : (page + 1) * pageSize,
            count,
          ].join("/")}
        </Text>
      )}
    </div>
  );
};
