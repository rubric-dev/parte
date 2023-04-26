import React, { ButtonHTMLAttributes } from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "secondary-colored"
  | "minimal"
  | "minimal-colored"
  | "error"
  | "text"
  | "text-colored";

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
