import { PropsWithChildren } from "react";
import { AlertStatus } from "../Alerts";

export type ToastProps = {
  toast: ToastState;
  onRemove: (id: string | number) => void;
};

export type ToastState = PropsWithChildren<{
  close: () => void;
  id: number | string;
  status: AlertStatus;
  title?: string;
  isShown?: boolean;
  duration?: number;
}>;

export type ToastParams = PropsWithChildren<{
  customId?: number;
  status: AlertStatus;
  title?: string;
  duration?: number;
}>;
export type TypedToastParams = PropsWithChildren<{
  customId?: number;
  title?: string;
  duration?: number;
}>;

export type NotifyHandler = (toastProps: ToastParams) => number | string;
export type RemoveHandler = (id: string | number) => void;
export type PopHandler = () => void;
