import {
  ActionCrossIcon,
  AlertDangerIcon,
  AlertInfoIcon,
  AlertSuccessIcon,
  AlertWarningIcon,
} from "../../../parte-icons/src";
import { IconButton } from "../IconButton";
import * as Styled from "./Alert.styled";
import { ALERT_ICON_COLOR } from "./Alert.styled";
import { AlertProps, AlertStatus } from "./Alert.types";

const renderIcon = (currentStatus: AlertStatus) => {
  switch (currentStatus) {
    case "G400":
      return <AlertSuccessIcon size={16} color="G400" />;
    case "info":
      return <AlertInfoIcon size={16} color="B400" />;
    case "warning":
      return <AlertWarningIcon size={16} color="Y400" />;
    case "error":
      return <AlertDangerIcon size={16} color="R400" />;
  }
};

export const Alert = (props: AlertProps) => {
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
              variant="ghost-secondary"
              size={24}
              Icon={
                <ActionCrossIcon
                  size={12}
                  color={ALERT_ICON_COLOR[props.status]}
                />
              }
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
