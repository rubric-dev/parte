import { Option } from "../../Dropdown";
export type MenuOptionsGroupProps<T> = {
  title?: string;
  options: Option<T>[];
  selected: T;
  onChange: (value: T) => void;
};
