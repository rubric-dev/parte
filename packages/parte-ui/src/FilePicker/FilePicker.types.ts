import { ChangeEvent, InputHTMLAttributes } from "react";

export type FilePickerProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  onChange?: (files: File[]) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  inputText?: (files: File[]) => string;
  buttonText?: (files: File[]) => string;
  isError?: boolean;
  width?: string | number;
};
