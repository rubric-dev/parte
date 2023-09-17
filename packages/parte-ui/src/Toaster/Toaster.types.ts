import { PropsWithChildren } from "react";
import { AlertStatus } from "../Alerts";

export type ToastProps = {
  toast: ToastState;
  onRemove: (id: string) => void;
};

export type ToastState = PropsWithChildren<{
  close: () => void;
  id: string;
  status: AlertStatus;
  title?: string;
  isShown?: boolean;
  duration?: number;
}>;

export type ToastParams = PropsWithChildren<{
  customId?: string;
  status: AlertStatus;
  title?: string;
  duration?: number;
}>;
export type TypedToastParams = PropsWithChildren<{
  customId?: string;
  title?: string;
  duration?: number;
}>;

export type NotifyHandler = (toastProps: ToastParams) => string;
export type RemoveHandler = (id: string) => void;
export type PopHandler = () => ToastState | null;
