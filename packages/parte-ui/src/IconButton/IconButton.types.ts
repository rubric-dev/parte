import React, { HTMLAttributes } from "react";
import { ButtonVariant } from "../Button";

export type IconButtonProps = HTMLAttributes<HTMLButtonElement> & {
  variant: ButtonVariant;
  Icon: React.ReactElement;
  size?: number;
  disabled?: boolean;
};
