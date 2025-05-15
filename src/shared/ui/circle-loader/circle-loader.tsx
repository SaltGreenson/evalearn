import { ColorType } from "@/shared/lib";
import clsx from "clsx";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styles from "./styles.module.css";

const sizes = {
  small: 14,
  medium: 24,
  large: 32,
};

type Props = {
  reverse?: boolean;
  color?: ColorType;
  size?: keyof typeof sizes;
};

export const CircleLoader = ({ size, color, reverse }: Props) => {
  return (
    <div className={clsx(styles.container)}>
      <AiOutlineLoading3Quarters
        color={`var(${color ?? "--font-color"})`}
        className={reverse ? "loaderReverse" : "loader"}
        fontSize={sizes[size ?? "small"]}
      />
    </div>
  );
};
