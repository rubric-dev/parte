import { LabelHTMLAttributes, PropsWithChildren } from "react";
import { BoxProps } from "../Layout";

export type FieldDirection = "horizontal" | "vertical";

export type FieldProps = Pick<
  BoxProps,
  "width" | "minWidth" | "maxWidth" | "flex"
> &
  PropsWithChildren<{
    direction?: FieldDirection;
  }>;

export type FieldLabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  required?: boolean;
  disabled?: boolean;
  tooltip?: string;
};

export type FieldDescriptionProps = PropsWithChildren<{}>;
export type FieldErrorMessageProps = PropsWithChildren<{}>;
