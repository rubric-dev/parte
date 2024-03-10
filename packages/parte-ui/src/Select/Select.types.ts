import {
  SelectInstance,
  type GroupBase,
  type Props as ReactSelectProps,
} from "react-select";
import { type AsyncPaginateProps } from "react-select-async-paginate";
export type SelectSize = "medium" | "large" | "x-large";

export type SelectAdditional =
  | {
      page: number;
      optionIds?: string[];
    }
  | undefined;

export type CommonSelectProps<
  T,
  K extends boolean,
  G extends GroupBase<T> = GroupBase<T>
> = {
  ref?: React.RefObject<SelectInstance<T, K, G>> | null;
  isError?: boolean;
  showSearchIcon?: boolean;
  width?: string | number;
  height?: string | number;
};

export type SelectProps<
  T,
  K extends boolean,
  G extends GroupBase<T> = GroupBase<T>
> = CommonSelectProps<T, K, G> & ReactSelectProps<T, K, G>;

export type AsyncSelectProps<
  T,
  K extends boolean,
  G extends GroupBase<T> = GroupBase<T>,
  Additional extends SelectAdditional = SelectAdditional
> = CommonSelectProps<T, K, G> & AsyncPaginateProps<T, G, Additional, K>;
