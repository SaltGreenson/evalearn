import { TabItemType } from "@/shared/lib";
import clsx from "clsx";
import { useState } from "react";
import { Button } from "../button";
import { Icon } from "../icon";
import { Text } from "../text";
import styles from "./tabs.module.css";

type Props = {
  tabs: TabItemType;
  initialTabValue: string;
  handleClickTab?: (tabValue: string) => void;
};

export const Tabs = ({ tabs, initialTabValue, handleClickTab }: Props) => {
  const [activeTab, setActiveTab] = useState(initialTabValue);

  const handleClick = (tabValue: string) => () => {
    setActiveTab(tabValue);
    handleClickTab?.call(null, tabValue);
  };

  return (
    <div className={styles.container}>
      <div className={styles.deviderBackground} />
      <div className={styles.sticky}>
        <div className={styles.head}>
          <div className={styles.activeBackground} />
          <div className={clsx(styles.littleBackground, styles.left)} />
          {Object.entries(tabs).map(
            ([
              value,
              {
                label,
                icon,
                isDisplay,
                handleEdit,
                handleSubmit,
                isEdit,
                editLoading,
              },
            ]) => (
              <div
                key={value}
                className={clsx(
                  styles.headItem,
                  value === activeTab && styles.activeHeadItem
                )}
                onClick={handleClick(value)}
              >
                {icon && <Icon className={styles.icon} variant={icon} />}
                <Text size="medium">{label.toUpperCase()}</Text>

                {handleEdit && (
                  <div>
                    <Button
                      onClick={
                        isEdit && handleSubmit ? handleSubmit : handleEdit
                      }
                      isLoading={editLoading}
                      icon={isEdit ? "check" : "edit2"}
                      color={isEdit ? "green" : "blue"}
                      padding={false}
                    />
                  </div>
                )}
              </div>
            )
          )}
          <div
            className={styles.headItem}
            style={{ flex: "1", pointerEvents: "none" }}
          />
          <div className={clsx(styles.littleBackground, styles.right)} />
        </div>
      </div>
      <div className={styles.content}>
        {tabs[activeTab] && tabs[activeTab].item}
      </div>
    </div>
  );
};
