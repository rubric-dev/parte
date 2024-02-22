import React, { InputHTMLAttributes } from "react";

export type TextInputSize = "medium" | "large" | "x-large";
export type TextInputVariant = "text" | "ghost-text";

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  showSpinButton?: boolean;
  isError?: boolean;
  textInputSize?: TextInputSize;
  variant?: TextInputVariant;
};
