import { GroupBase, Props, OptionsOrGroups } from "react-select";
import { AsyncPaginateProps } from "react-select-async-paginate";
import { GroupOption, Option } from "../Dropdown";
import { InputWrapperProps } from "../InputWrapper";

export type SelectAdditional =
  | {
      page: number;
      optionIds?: string[];
    }
  | undefined;

type CommonSelectProps = Omit<InputWrapperProps, "children"> & {
  isError?: boolean;
};

export type StaticSelectProps<T> = CommonSelectProps &
  Props<Option<T>, boolean, GroupBase<Option<T>>> & {
    type: "static";
  };

export type AsyncSelectProps<T> = CommonSelectProps &
  AsyncPaginateProps<Option<T>, GroupBase<Option<T>>, any, boolean> & {
    type: "async";
    defaultValue?: Option<T>;
    options?: OptionsOrGroups<Option<T>, GroupOption<T>>;
  };

export type SelectProps<T> = StaticSelectProps<T> | AsyncSelectProps<T>;
