import { backgroundColorStyleHelper, ColorType } from "@/shared/lib";
import clsx from "clsx";
import { FlexColumn } from "../flex";
import { Text } from "../text";
import styles from "./styles.module.css";

export type ColorCardProps = {
  color: string;
  description: string;
  fontColor?: ColorType;
  bordered?: boolean;
  size?: "small" | "default";
};

export const ColorCard = ({
  color,
  size,
  fontColor,
  bordered,
}: ColorCardProps) => {
  return (
    <FlexColumn height="max-content" width="max-content" gap={4}>
      <div
        style={backgroundColorStyleHelper(color)}
        className={clsx(
          styles.colorCard,
          size === "small" && styles.small,
          bordered && styles.bordered
        )}
      >
        <div className={styles.colorText}>
          <Text light size="large" color={fontColor}>
            {color.toLowerCase()}
          </Text>
        </div>
      </div>

      {/* <Text color="--color-black">{description.toUpperCase()}</Text> */}
    </FlexColumn>
  );
};
