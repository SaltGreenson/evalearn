import { TableHeadItem } from "@/shared/lib";
import clsx from "clsx";
import { Button } from "../button";
import { Icon } from "../icon";
import { SalesPortalLoader } from "../sales-portal-loader";
import { Text } from "../text";
import styles from "./styles.module.css";

export type TableProps<T> = {
  size?: "small" | "medium" | "large";
  handleClickRow?: (item: T) => void;
  head: TableHeadItem<T>[];
  source: T[];
  isLoading?: boolean;
  noDataPlaceholder?: string;
  linkTo?: string;
};

export function Table<T>({
  handleClickRow,
  head,
  source,
  size,
  isLoading,
  noDataPlaceholder,
  linkTo,
}: TableProps<T>) {
  return (
    <div
      className={clsx(
        styles.container,
        styles[size ?? "large"],
        isLoading && styles.hideScroll
      )}
    >
      {isLoading && (
        <div className={styles.loader}>
          <SalesPortalLoader size="medium" />
        </div>
      )}
      <table className={styles.table}>
        <thead className={styles.head}>
          <tr>
            {head.map(({ key, label, icon }) => (
              <th className={styles.headItem} key={String(key)}>
                <div className={styles.textContainer}>
                  {icon && <Icon variant={icon} size="small" />}
                  <Text weight={600}>{label}</Text>
                </div>
              </th>
            ))}
            {handleClickRow && <th className={styles.headItem} />}
          </tr>
        </thead>
        <tbody className={clsx(styles.body, isLoading && styles.blur)}>
          {source.map((item) => (
            <tr
              className={clsx(styles.bodyRow, handleClickRow && styles.pointer)}
              onClick={handleClickRow?.bind(null, item)}
              key={(item as { id: string }).id}
            >
              {head.map(({ key, render }) => (
                <td
                  key={`${(item as { id: string }).id}_${String(key)}`}
                  className={styles.bodyItem}
                >
                  {render ? (
                    render(item)
                  ) : (
                    <Text
                      linkTo={
                        linkTo && `${linkTo}/${(item as { id: string }).id}`
                      }
                    >
                      {item[key] as string}
                    </Text>
                  )}
                </td>
              ))}
              {handleClickRow && (
                <td className={styles.bodyItem}>
                  <Button padding={false} center color="transparent">
                    <Icon variant="maximize" />
                  </Button>
                </td>
              )}
            </tr>
          ))}
          {!Boolean(source.length) && (
            <tr>
              <td colSpan={head.length + 3}>
                <div className={styles.emptyRowContent}>
                  <div className={styles.emptyRowIconContainer}>
                    <Icon variant="bill-cross" size="large" />
                    {noDataPlaceholder && <Text bold>{noDataPlaceholder}</Text>}
                  </div>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
