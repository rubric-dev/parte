import React, { InputHTMLAttributes } from "react";

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  errorText?: string;
  label?: string;
  description?: string;
  required?: boolean;
  fullWidth?: boolean;
};
