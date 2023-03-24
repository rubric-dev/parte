import React, { ChangeEvent } from 'react';

export type RadioGroupProps = {
  value: string;
  name: string;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  children: React.ReactNode;
};
