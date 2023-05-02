import { PropsWithChildren, ReactNode } from "react";

export type InputWrapperDirection = "horizontal" | "vertical";

export type InputWrapperProps = {
  label?: string;
  description?: string;
  direction?: InputWrapperDirection;
  required?: boolean;
  errorText?: string;
  fullWidth?: boolean;
  children: ReactNode | ReactNode[];
};
