import { ReactNode } from "react";
import { TransitionStatus } from "react-transition-group";

export type SideSheetSubComponentProps = { close: () => void };
export type SideSheetSubComponent = ({
  close,
}: SideSheetSubComponentProps) => ReactNode;

export type SideSheetProps = {
  width?: number;
  isShown: boolean;
  children?: ReactNode | SideSheetSubComponent;
  onOpenComplete?: (isAppearing: boolean) => void;
  onCloseComplete?: () => void;
  beforeClose?: () => boolean | void;
  shouldAutoFocus?: boolean;
  shouldCloseOnOverlayClick?: boolean;
  shouldCloseOnEscapePress?: boolean;
  preventBodyScrolling?: boolean;
};

export type SideCloseProps = {
  onClick: () => void;
  state: TransitionStatus;
};
