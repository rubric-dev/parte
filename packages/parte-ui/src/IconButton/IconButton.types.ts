import { ExtractToStyledProps } from "@parte-ds/utils";
import React, { ButtonHTMLAttributes } from "react";
import { ButtonVariant } from "../Button";

export type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: ButtonVariant;
  size?: number;
  Icon: React.ReactElement;
};

export type StyledIconButtonProps = ExtractToStyledProps<
  IconButtonProps,
  "variant" | "size"
>;
