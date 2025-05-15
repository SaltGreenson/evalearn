import React, {
  ChangeEvent,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { Input, InputProps } from "../input";
import styles from "./styles.module.css";
import { useClickOutside } from "@/shared/hooks";
import { Flex } from "../flex";
import { Icon, IconVariant } from "../icon";
import { Text } from "../text";
import clsx from "clsx";
import { SelectOption } from "@/shared/lib";
import { iconMap } from "./model/icon-map.const";
import { filterOptions } from "./model/filter-options.helper";
import { v4 as uuid } from "uuid";
import { Button } from "../button";

const emptyItem: SelectOption = {
  label: "No Data",
  icon: "bill-cross",
};

type Props = {
  handleSelect: (value: string, item: SelectOption[] | any) => void;
  handleSearch?: (value: string) => void;
  options: Record<string, SelectOption>;
  defaultSelected?: Record<string, SelectOption>;
  autoCreate?: boolean;
  emptyItemLabel?: string;
  onClickChildren?: VoidFunction;
  render?: (item: any) => ReactNode;
  renderSelected?: (item: any) => ReactNode;
} & PropsWithChildren &
  Pick<InputProps, "error" | "required" | "label" | "disabled">;

export function Multiselect({
  options: initialOptions,
  handleSelect,
  defaultSelected,
  handleSearch,
  children,
  onClickChildren,
  emptyItemLabel,
  autoCreate,
  render,
  renderSelected,
  ...inputProps
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [options, setOptions] = useState<Record<string, SelectOption>>(
    filterOptions(initialOptions)
  );
  const [activeItem, setActiveItem] = useState(defaultSelected ?? {});
  const [isOpen, setIsOpen] = useState(false);
  const [isInputChanged, setIsInputChanged] = useState(false);
  const [searchString, setSearchString] = useState("");

  useClickOutside({ handleClick: setIsOpen.bind(null, false), ref });

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const onSelect = (value: string) => () => {
    const { [value]: selected, ...otherActive } = activeItem;

    const forSave = selected
      ? otherActive
      : { ...otherActive, [value]: options[value] ?? initialOptions[value] };

    handleSelect(
      value,
      Object.entries(forSave).map(([value, data]) => ({ ...data, value }))
    );

    setActiveItem(forSave);

    setSearchString("");
    setIsInputChanged(false);
    setOptions(filterOptions({ ...options, ...initialOptions }));
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!isInputChanged) {
      setIsInputChanged(true);
    }

    const value = e.target.value;

    let filtered: Record<string, SelectOption> = {};

    if (handleSearch) {
      handleSearch(value);
    } else {
      filtered = filterOptions(initialOptions, value);
    }

    if (autoCreate && !Boolean(Object.keys(filtered).length) && value.trim()) {
      filtered[value.toLowerCase()] = {
        label: value,
        icon: "plus",
        created: { id: uuid(), value },
      };
    }

    setOptions(filtered);
    setSearchString(value);
  };

  useEffect(() => {
    setOptions(filterOptions(initialOptions));
  }, [initialOptions]);

  return (
    <div className={styles.selectContainer}>
      <div className={styles.select} ref={ref}>
        <Input
          value={searchString}
          onClick={setIsOpen.bind(null, true)}
          handleClickIcon={toggleOpen}
          icon={iconMap(isOpen, inputProps.disabled)}
          onChange={onChange}
          {...inputProps}
        />

        {isOpen && (
          <div className={styles.itemList}>
            {Object.entries(options).map(
              ([value, { label, icon, ...item }]) => (
                <div
                  className={clsx(
                    styles.item,
                    activeItem[value] && styles.active
                  )}
                  onClick={onSelect(value)}
                  key={value}
                >
                  {render ? (
                    render(item as SelectOption)
                  ) : (
                    <Flex centerH>
                      {icon && <Icon variant={icon} />}
                      <Text>{label}</Text>
                    </Flex>
                  )}
                </div>
              )
            )}

            {!Boolean(Object.keys(options).length) && (
              <div className={styles.item}>
                <Flex centerH>
                  <Icon variant={emptyItem.icon as IconVariant} />
                  <Text>{emptyItemLabel ?? emptyItem.label}</Text>
                </Flex>
              </div>
            )}

            {children && (
              <div className={styles.item} onClick={onClickChildren}>
                <Flex centerH>{children}</Flex>
              </div>
            )}
          </div>
        )}
      </div>
      {Boolean(Object.keys(activeItem).length) && (
        <Flex paddingTop height="max-content">
          {Object.entries(activeItem).map(([key, value]) => {
            return (
              <Button
                padding={false}
                onClick={onSelect(key)}
                disabled={inputProps.disabled}
                key={key}
              >
                <Flex centerH>
                  {render || renderSelected ? (
                    renderSelected?.call(null, value) ||
                    render?.call(null, value)
                  ) : (
                    <Text
                      color={
                        inputProps.disabled
                          ? "--color-black"
                          : "--color-primary"
                      }
                    >
                      {value.label}
                    </Text>
                  )}
                  {!inputProps.disabled && (
                    <Icon variant="close" className={styles.icon} />
                  )}
                </Flex>
              </Button>
            );
          })}
        </Flex>
      )}
    </div>
  );
}
