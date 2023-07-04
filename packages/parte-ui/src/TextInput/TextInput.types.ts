import React, { InputHTMLAttributes } from "react";
import { InputWrapperProps } from "../InputWrapper";

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> &
  Omit<InputWrapperProps, "children"> & {
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    showSpinButton?: boolean;
  };
