export type AlertStatus = "G400" | "info" | "warning" | "error";
export type AlertProps =
  | AlertBasicProps
  | AlertToastProps
  | AlertAlertInlineProps;

type AlertBasicProps = {
  status: AlertStatus;
  type: "alert";
  title?: string;
  description?: string;
};
export type AlertToastProps = {
  toastId: string | number;
  status: AlertStatus;
  type: "toast";
  title?: string;
  description?: string;
  onClose: () => void;
};
type AlertAlertInlineProps = {
  status: AlertStatus;
  type: "alert-inline";
  message?: string;
};
