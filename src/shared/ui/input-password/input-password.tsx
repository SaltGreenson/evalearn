import React, { useState } from "react";
import { Input, InputProps } from "../input/input";

type PasswordProps = {
  type: "text" | "password";
  icon: "eye" | "eye-closed";
};

const password: PasswordProps = { type: "password", icon: "eye-closed" };
const text: PasswordProps = { type: "text", icon: "eye" };

const toggle: Record<string, PasswordProps> = {
  false: password,
  true: text,
};

export const InputPassword = (props: Omit<InputProps, "icon" | "type">) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleClickIcon = () => {
    setIsShowPassword((prev) => !prev);
  };

  return (
    <Input
      {...props}
      {...toggle[String(isShowPassword)]}
      handleClickIcon={handleClickIcon}
    />
  );
};
