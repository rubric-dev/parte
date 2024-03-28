export type Option<T> = {
  label: string;
  value: T;
  disabled?: boolean;
  icon?: React.ReactNode;
};

export type GroupOption<T> = {
  groupName: string;
  options: Option<T>[];
};

export type DropdownListBaseProps<T> = {
  options: Option<T>[] | GroupOption<T>[];
  value?: Option<T>;
  onSelect?: (value: Option<T>) => void;
  onChange?: (value: Option<T> | Option<T>[]) => void;
  isSearchable?: boolean;
  noOptionsText?: string;
  isMulti?: boolean;
  closeOnSelect?: boolean;
  title?: string;
  width?: number;
};

export type DropdownListMultiProps<T> = Omit<
  DropdownListBaseProps<T>,
  "value" | "isMulti"
> & {
  isMulti: true;
  value?: Option<T>[];
};

export type DropdownListProps<T> =
  | DropdownListBaseProps<T>
  | DropdownListMultiProps<T>;
