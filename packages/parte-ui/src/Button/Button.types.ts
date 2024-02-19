import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

export type ButtonVariant =
  | "fill-primary"
  | "fill-secondary"
  | "fill-tertiary"
  | "outline-secondary"
  | "outline-primary"
  | "ghost-secondary"
  | "ghost-primary"
  | "fill-error"
  | "text-secondary"
  | "text-primary";

export type ButtonSize = "medium" | "large" | "x-large";
export type ButtonStylingProps = {
  variant?: ButtonVariant;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  isLoading?: boolean;
  fullWidth?: boolean;
  size?: ButtonSize;
};

export type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonStylingProps;

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonStylingProps;
