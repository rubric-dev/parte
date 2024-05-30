import { ExtractToStyledProps } from "@parte-ds/utils";
import { TextareaHTMLAttributes } from "react";

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  resizable?: boolean;
  isError?: boolean;
  width?: string | number;
  height?: string | number;
};

export type StyledTextAreaProps = ExtractToStyledProps<
  TextAreaProps,
  "resizable" | "width" | "height"
>;
