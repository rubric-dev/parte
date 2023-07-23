import { PropsWithChildren } from "react";

export type InputWrapperDirection = "horizontal" | "vertical";

export type InputWrapperProps = PropsWithChildren<{
  direction?: InputWrapperDirection;
  label?: string;
  description?: string;
  required?: boolean;
  errorText?: string;
  disabled?: boolean;
  id?: string;
  width?: number | string;
  minWidth?: number | string;
  maxWidth?: number | string;
  labelWidth?: number | string;
}>;
