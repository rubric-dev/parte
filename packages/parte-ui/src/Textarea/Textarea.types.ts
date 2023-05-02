import { TextareaHTMLAttributes } from "react";
import { InputWrapperProps } from "../InputWrapper";

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  Omit<InputWrapperProps, "children">;
