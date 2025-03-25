import React from "react";
import { ButtonProps, Button as ButtonRoot } from "@radix-ui/themes";

export const Button = ({ children, ...props }: ButtonProps) => {
  return <ButtonRoot {...props}>{children}</ButtonRoot>;
};
