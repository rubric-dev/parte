import { InputHTMLAttributes } from "react";

export type RadioProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};
