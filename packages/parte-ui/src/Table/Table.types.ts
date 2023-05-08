import { Column, ColumnDef } from "@tanstack/react-table";
import { ReactNode } from "react";
import { Option } from "../Dropdown";
import { BoxProps } from "../Layout/Box.types";

export interface HeaderContainerProps extends BoxProps {
  children?: ReactNode;
  sticky?: boolean;
  showBorder?: boolean;
}
export interface BodyProps extends BoxProps {
  children?: ReactNode;
  showBorder?: boolean;
}

export interface HeaderRowProps {
  children?: ReactNode;
}
export interface RowProps {
  children?: ReactNode;
  selectable?: boolean;
  selected?: boolean;
  onSelect?: () => void;
}

export interface HeaderCellProps extends BoxProps {
  children?: ReactNode;
  showBorder?: boolean;
}
export interface CellProps extends BoxProps {
  children?: ReactNode;
  showBorder?: boolean;
}
export interface TableTemplateProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  enableRowSelection?: boolean;
  selectable?: boolean;
  selectedRowId?: number | string;
  onSelect?: (rowId: number | string) => void;
  sticky?: boolean;
  showHeaderBorder?: boolean;
  showBodyBorder?: boolean;
}

export type TableItemCount = {
  currentCount: number;
  totalCount: number;
};
export interface TableFilterBarProps {
  onClear?: () => void;
  countInfo?: TableItemCount;
}

export interface FilterHeaderProps<T, K> {
  options?: Option<K>[];
  children?: ReactNode;
  column: Column<T, K>;
}
