import { PropsWithChildren, ReactNode } from "react";

export type InputWrapperDirection = "horizontal" | "vertical";

export type InputWrapperProps = PropsWithChildren<{
  direction?: InputWrapperDirection;
  label?: string;
  description?: string;
  required?: boolean;
  errorText?: string;
  width?: number | string;
  labelWidth?: number | string;
}>;
