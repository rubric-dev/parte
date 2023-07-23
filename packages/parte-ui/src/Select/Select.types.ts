import {
  SelectInstance,
  type GroupBase,
  type Props as ReactSelectProps,
} from "react-select";
import { type AsyncPaginateProps } from "react-select-async-paginate";
import { type Option } from "../Dropdown";
import { type InputWrapperProps } from "../InputWrapper";

export type SelectAdditional =
  | {
      page: number;
      optionIds?: string[];
    }
  | undefined;

export type CommonSelectProps<T = any> = Omit<
  InputWrapperProps,
  "children" | "disabled"
> & {
  ref?: React.RefObject<
    SelectInstance<Option<T>, boolean, GroupBase<Option<T>>>
  > | null;
  isError?: boolean;
  showSearchIcon?: boolean;
};

export type SelectProps<T> = CommonSelectProps &
  ReactSelectProps<Option<T>, boolean, GroupBase<Option<T>>>;

export type AsyncSelectProps<T> = CommonSelectProps &
  AsyncPaginateProps<Option<T>, GroupBase<Option<T>>, any, boolean>;
