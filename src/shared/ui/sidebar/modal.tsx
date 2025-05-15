import React, { PropsWithChildren, ReactNode, useRef } from "react";
import styles from "./styles.module.css";
import { Icon, IconVariant } from "../icon";
import { Flex, FlexColumn, FlexItem } from "../flex";
import { Text } from "../text";
import { Divider } from "../divider";
import { useClickOutside } from "@/shared/hooks";
import clsx from "clsx";
import { Button } from "../button";

type Props = {
  head: string | ReactNode;
  icon?: IconVariant;
  isActive?: boolean;
  handleClose: VoidFunction;
  onSubmit?: VoidFunction;
  isSubmitLoading?: boolean;
  submitText?: string;
  submitError?: string;
  onReset?: VoidFunction;
  resetText?: string;
} & PropsWithChildren;

export const Modal = ({
  head,
  icon,
  children,
  isActive,
  handleClose,
  onSubmit,
  isSubmitLoading,
  submitError,
  submitText,
  onReset,
  resetText,
}: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const headNode =
    typeof head === "string" ? (
      <Flex centerH>
        {icon && <Icon variant={icon} size="medium" />}
        <Text size="large" color="--color-black" weight={500}>
          {head}
        </Text>
      </Flex>
    ) : (
      head
    );

  useClickOutside({ ref, handleClick: handleClose });

  return (
    <>
      <div className={clsx(styles.modalContainer, isActive && styles.active)}>
        <div
          className={clsx(styles.modal, isActive && styles.active)}
          ref={ref}
        >
          <div className={styles.head}>
            <Flex padding centerH>
              <FlexItem>{headNode}</FlexItem>
              <Icon
                variant="close"
                size="medium"
                onClick={handleClose}
                className={styles.close}
              />
            </Flex>
            <Divider />
          </div>
          <div
            className={clsx(
              (onReset || onSubmit) && styles.withSubmit,
              styles.content,
              submitError && styles.withError
            )}
          >
            <FlexColumn padding width="100%" gap={18}>
              {children}
            </FlexColumn>
          </div>
          {(onSubmit || onReset) && (
            <div
              className={clsx(styles.footer, submitError && styles.withError)}
            >
              <Divider />
              <Flex padding>
                <Flex>
                  {onSubmit && (
                    <FlexItem>
                      <Button
                        center
                        onClick={onSubmit}
                        isLoading={isSubmitLoading}
                        error={submitError}
                      >
                        {submitText ?? "submit"}
                      </Button>
                    </FlexItem>
                  )}
                  {onReset && (
                    <FlexItem>
                      <Button center onClick={onReset} color="red">
                        {resetText ?? "reset"}
                      </Button>
                    </FlexItem>
                  )}
                </Flex>
              </Flex>
            </div>
          )}
        </div>
      </div>
      {isActive && <div className={styles.blurBackground} />}
    </>
  );
};
