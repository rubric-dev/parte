import React, { HTMLAttributes } from "react";
import { IconProps } from "../../../parte-icons/src";
import { ButtonVariant } from "../Button";

export type IconButtonProps = HTMLAttributes<HTMLButtonElement> & {
  variant: ButtonVariant;
  Icon: React.ReactElement<IconProps>;
  size?: number;
  disabled?: boolean;
};
