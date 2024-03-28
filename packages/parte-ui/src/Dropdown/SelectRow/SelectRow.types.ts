import {
  ChangeEvent,
  KeyboardEvent,
  PropsWithChildren,
  ReactNode,
} from "react";

export type SelectRowType = "search" | "title" | "element";

export type SelectRowElement = PropsWithChildren<{
  variant?: "element";
  icon?: ReactNode;
  disabled?: boolean;
  selected?: boolean;
  onClick?: () => void;
  onKeyDown?: (e: KeyboardEvent<HTMLDivElement>) => void;
  shouldFocusWhenSelected?: boolean;
  isMulti?: boolean;
}>;
export type SelectRowSearch = {
  variant: "search";
  inputValue?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
};
export type SelectRowTitle = PropsWithChildren<{
  variant: "title";
  icon?: ReactNode;
  isSearchable?: boolean;
}>;
export type SelectRowProps =
  | SelectRowElement
  | SelectRowSearch
  | SelectRowTitle;
