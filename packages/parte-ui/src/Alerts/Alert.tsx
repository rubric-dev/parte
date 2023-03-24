import { HTMLAttributes } from "react";
import { IconButton } from "../IconButton";
import {
  ActionCrossIcon,
  AlertDangerIcon,
  AlertInfoIcon,
  AlertSuccessIcon,
  AlertWarningIcon,
} from "../../../parte-icons/src";
import * as Styled from "./Alert.styled";
import { AlertProps, AlertStatus } from "./Alert.types";

const renderIcon = (currentStatus: AlertStatus) => {
  switch (currentStatus) {
    case "success":
      return <AlertSuccessIcon size={16} />;
    case "info":
      return <AlertInfoIcon size={16} />;
    case "warning":
      return <AlertWarningIcon size={16} />;
    case "error":
      return <AlertDangerIcon size={16} />;
  }
};

export const Alert = (props: AlertProps & HTMLAttributes<HTMLDivElement>) => {
  if (props.type === "alert-inline") {
    return (
      <Styled.Alert type={props.type} status={props.status}>
        {renderIcon(props.status)}
        <Styled.Title>{props.message}</Styled.Title>
      </Styled.Alert>
    );
  }
  if (props.type === "toast") {
    return (
      <Styled.Alert
        {...props}
        toastId={props.toastId}
        type={props.type}
        status={props.status}
        onClose={props.onClose}
      >
        <Styled.InfoWrap>
          {renderIcon(props.status)}
          <Styled.Header>
            <Styled.Title>{props.title}</Styled.Title>
            <IconButton
              variant="minimal"
              size={24}
              Icon={<ActionCrossIcon size={12} color={props.status} />}
              onClick={props.onClose}
            />
          </Styled.Header>
        </Styled.InfoWrap>
        {props.description && (
          <Styled.Description>{props.description}</Styled.Description>
        )}
      </Styled.Alert>
    );
  }

  return (
    <Styled.Alert {...props} type={props.type} status={props.status}>
      <Styled.InfoWrap>
        {renderIcon(props.status)}
        <Styled.Title>{props.title}</Styled.Title>
      </Styled.InfoWrap>
      {props.description && (
        <Styled.Description>{props.description}</Styled.Description>
      )}
    </Styled.Alert>
  );
};
