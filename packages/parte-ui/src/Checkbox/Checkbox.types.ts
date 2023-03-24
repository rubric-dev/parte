import { ChangeEvent } from 'react';

export type CheckboxProps = {
  label?: string;
  disabled?: boolean;
  indeterminate?: boolean;
  checked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};
