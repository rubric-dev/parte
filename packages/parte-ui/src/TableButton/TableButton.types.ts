import React, { ButtonHTMLAttributes } from "react";

export type TableButtonVariant = "primary" | "secondary";

export type TableButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: TableButtonVariant;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
  isLoading?: boolean;
};
