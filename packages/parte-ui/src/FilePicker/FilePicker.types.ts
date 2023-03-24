import { ChangeEvent, HTMLAttributes } from 'react';

export type FilePickerProps = HTMLAttributes<HTMLInputElement> & {
  name: string;
  placeholder?: string;
  accept?: string;
  disabled?: boolean;
  multiple?: boolean;
  required?: boolean;
  errorMessage?: string;
  label?: string;
  description?: string;
  onChange?: (files: File[]) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  inputText?: (files: File[]) => string;
  buttonText?: (files: File[]) => string;
};
