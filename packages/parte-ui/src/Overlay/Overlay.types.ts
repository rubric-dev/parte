import { ReactNode } from "react";
import {
  EnterHandler,
  ExitHandler,
  TransitionStatus,
} from "react-transition-group/Transition";

export type OverlayChildrenProps = {
  state: TransitionStatus;
  close: () => void;
};
export interface OverlayProps {
  children?:
    | ReactNode
    | (({ state, close }: OverlayChildrenProps) => ReactNode);
  beforeClose?: () => boolean | void;
  preventBodyScrolling?: boolean;
  shouldAutoFocus?: boolean;
  shouldCloseOnEsc?: boolean;
  shouldCloseOnClick?: boolean;
  isShown: boolean;
  onExit?: ExitHandler<HTMLDivElement>;
  onExiting?: ExitHandler<HTMLDivElement>;
  onExited?: ExitHandler<HTMLDivElement>;
  onEnter?: EnterHandler<HTMLDivElement>;
  onEntering?: EnterHandler<HTMLDivElement>;
  onEntered?: EnterHandler<HTMLDivElement>;
}
