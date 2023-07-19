import { InputHTMLAttributes } from "react";

export type ToggleProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};
