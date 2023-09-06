import { RefObject, ReactNode, PropsWithChildren } from "react";
import { DROPDOWN_POSITION } from "../constant";

export type DropdownPosition =
  (typeof DROPDOWN_POSITION)[keyof typeof DROPDOWN_POSITION];

export type DropdownProps = PropsWithChildren<{
  usePortal?: boolean;
  offset?: number;
}>;

export interface DropdownContextState extends DropdownProps {
  isOpen: boolean;
  onClick?: () => void;
  onClose: () => void;
  dropdownRef: RefObject<HTMLDivElement>;
}

export interface DropdownTriggerProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}

export interface DropdownMenuProps {
  children:
    | React.ReactNode
    | (({ onClose }: { onClose: () => void }) => React.ReactNode);
}
