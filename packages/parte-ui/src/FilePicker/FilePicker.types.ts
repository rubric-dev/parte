import { ChangeEvent, HTMLAttributes } from "react";

export type FilePickerProps = HTMLAttributes<HTMLInputElement> & {
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
