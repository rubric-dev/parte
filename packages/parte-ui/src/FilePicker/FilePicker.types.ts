import { ChangeEvent, HTMLAttributes } from "react";
import { InputWrapperProps } from "../InputWrapper";

export type FilePickerProps = HTMLAttributes<HTMLInputElement> &
  Omit<InputWrapperProps, "children"> & {
    name: string;
    placeholder?: string;
    accept?: string;
    disabled?: boolean;
    multiple?: boolean;
    onChange?: (files: File[]) => void;
    onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
    inputText?: (files: File[]) => string;
    buttonText?: (files: File[]) => string;
  };
