import { ReactNode } from "react";
import { TransitionStatus } from "react-transition-group";
import {
  DefaultTheme,
  FlattenInterpolation,
  ThemedStyledProps,
} from "styled-components";
import { ElevationToken } from "../@foundations";
import { ButtonVariant } from "../Button/Button.types";
import { BoxProps } from "../Layout/Box.types";

export type DialogSubCompProps = { close: () => void };
export type DialogSubComponent = ({ close }: DialogSubCompProps) => ReactNode;

export interface DialogProps {
  close: () => void;
  onCancel?: (close: () => void) => void;
  onConfirm?: (close: () => void) => void;
  children?: ReactNode | DialogSubComponent;
  hasHeader?: boolean;
  header?: DialogSubComponent;
  hasClose?: boolean;
  title?: string;
  footer?: DialogSubComponent;
  hasFooter?: boolean;
  hasCancel?: boolean;
  cancelLabel?: string;
  confirmLabel?: string;
  confirmVariant?: ButtonVariant;
  isConfirmDisabled?: boolean;
  isConfirmLoading?: boolean;
  minHeightContent?: number;
  width?: number;
  elevation?: ElevationToken;
  state?: TransitionStatus;
  overrideStyles?: FlattenInterpolation<
    ThemedStyledProps<BoxProps, DefaultTheme>
  >;
}
