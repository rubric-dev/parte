import { ChangeEvent, KeyboardEvent, ReactNode } from 'react';

export type SelectRowType = 'search' | 'title' | 'element';

export type SelectRowElement = {
  variant?: 'element';
  children?: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
  selected?: boolean;
  onClick?: () => void;
  onKeyDown?: (e: KeyboardEvent<HTMLDivElement>) => void;
  shouldFocusWhenSelected?: boolean;
};
export type SelectRowSearch = {
  variant: 'search';
  inputValue?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
};
export type SelectRowTitle = {
  variant: 'title';
  children?: ReactNode;
  icon?: ReactNode;
};

export type SelectRowProps =
  | SelectRowElement
  | SelectRowSearch
  | SelectRowTitle;
