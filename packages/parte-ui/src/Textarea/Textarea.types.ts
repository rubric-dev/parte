import { TextareaHTMLAttributes } from "react";
import { InputWrapperProps } from "../InputWrapper";
import { ExtractToStyledProps } from "@parte-ds/utils";

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  Omit<InputWrapperProps, "children"> & {
    resizable?: boolean;
  };

export type StyledTextAreaProps = ExtractToStyledProps<
  TextAreaProps,
  "resizable"
>;
