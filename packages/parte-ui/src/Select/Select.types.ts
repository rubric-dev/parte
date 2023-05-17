import {
  type GroupBase,
  type Props as ReactSelectProps,
  type OptionsOrGroups,
} from "react-select";
import { type AsyncPaginateProps } from "react-select-async-paginate";
import { type GroupOption, type Option } from "../Dropdown";
import { type InputWrapperProps } from "../InputWrapper";

export type SelectAdditional =
  | {
      page: number;
      optionIds?: string[];
    }
  | undefined;

export type CommonSelectProps = Omit<InputWrapperProps, "children"> & {
  isError?: boolean;
};

export type StaticSelectProps<T> = CommonSelectProps &
  ReactSelectProps<Option<T>, boolean, GroupBase<Option<T>>> & {
    type: "static";
  };

export type AsyncSelectProps<T> = CommonSelectProps &
  AsyncPaginateProps<Option<T>, GroupBase<Option<T>>, any, boolean> & {
    type: "async";
    defaultValue?: Option<T>;
    options?: OptionsOrGroups<Option<T>, GroupOption<T>>;
  };

export type SelectProps<T> = StaticSelectProps<T> | AsyncSelectProps<T>;
