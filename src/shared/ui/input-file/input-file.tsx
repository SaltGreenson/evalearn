import React from "react";
import { Input, InputProps } from "../input/input";

export const InputFile = (props: Omit<InputProps, "icon" | "type">) => {
  return <Input {...props} type="file" icon="doc" />;
};
