import React, { ButtonHTMLAttributes } from "react";

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

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
  isLoading?: boolean;
  direction?: ButtonDirection;
};
