import { AlertStatus } from "../Alerts";

export type ToastProps = {
  toast: ToastState;
  onRemove: () => void;
};

export type ToastState = {
  close: () => void;
  description: string;
  id: number | string;
  status: AlertStatus;
  title: string;
  isShown?: boolean;
};

export type ToastParams = {
  customId?: number;
  status: AlertStatus;
  title: string;
  description?: string;
};

export type NotifyHandler = (toastProps: ToastParams) => void;
export type RemoveHandler = (id: string | number) => void;
