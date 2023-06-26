import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

export type ButtonVariant =
  | "fill-primary"
  | "outline-secondary"
  | "outline-primary"
  | "ghost-secondary"
  | "ghost-primary"
  | "fill-error"
  | "text-secondary"
  | "text-primary";

export type ButtonDirection = "horizontal" | "vertical";
export type ButtonStylingProps = {
  variant?: ButtonVariant;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  isLoading?: boolean;
  fullWidth?: boolean;
  direction?: ButtonDirection;
};

export type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonStylingProps;

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonStylingProps;
