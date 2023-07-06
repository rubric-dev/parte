import { ExtractToStyledProps } from "@parte-ds/utils";
import { PropsWithChildren } from "react";

export type AlertType = "alert" | "toast" | "inline";
export type AlertStatus = "success" | "info" | "warning" | "error";

export type AlertProps =
  | AlertBasicProps
  | AlertToastProps
  | AlertAlertInlineProps;

type AlertBasicProps = PropsWithChildren<{
  type: "alert";
  status: AlertStatus;
  title?: string;
}>;
export type AlertToastProps = PropsWithChildren<{
  type: "toast";
  status: AlertStatus;
  title?: string;
  onClose?: () => void;
}>;
type AlertAlertInlineProps = {
  type: "inline";
  status: AlertStatus;
  message: string;
};

export type AlertStyleProps = ExtractToStyledProps<AlertProps, "status">;
