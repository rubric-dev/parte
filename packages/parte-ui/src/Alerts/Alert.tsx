import {
  ActionCrossIcon,
  AlertDangerIcon,
  AlertInfoIcon,
  AlertSuccessIcon,
  AlertWarningIcon,
} from "../../../parte-icons/src";
import { Headline } from "../@foundations";
import { IconButton } from "../IconButton";
import * as Styled from "./Alert.styled";
import { ALERT_ICON_COLOR } from "./Alert.styled";
import { AlertProps, AlertStatus } from "./Alert.types";

const renderIcon = (status: AlertStatus) => {
  const color = ALERT_ICON_COLOR[status];
  switch (status) {
    case "success":
      return <AlertSuccessIcon size={16} color={color} />;
    case "info":
      return <AlertInfoIcon size={16} color={color} />;
    case "warning":
      return <AlertWarningIcon size={16} color={color} />;
    case "error":
      return <AlertDangerIcon size={16} color={color} />;
  }
};

const getDefaultTitle = (status: AlertStatus) => {
  switch (status) {
    case "success":
      return "성공";
    case "info":
      return "정보";
    case "warning":
      return "경고";
    case "error":
      return "오류";
  }
};

export const Alert = (props: AlertProps) => {
  if (props.type === "inline") {
    return (
      <Styled.AlertInline $status={props.status}>
        {renderIcon(props.status)}
        <Headline size={400}>{props.message}</Headline>
      </Styled.AlertInline>
    );
  }
  if (props.type === "toast") {
    return (
      <Styled.Toast $status={props.status}>
        <Styled.InfoWrap>
          {renderIcon(props.status)}
          <Styled.Header>
            <Headline size={400}>
              {props.title ?? getDefaultTitle(props.status)}
            </Headline>
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
        {props.children && (
          <Styled.Description>{props.children}</Styled.Description>
        )}
      </Styled.Toast>
    );
  }

  return (
    <Styled.Alert $status={props.status}>
      <Styled.InfoWrap>
        {renderIcon(props.status)}
        <Headline size={400}>
          {props.title ?? getDefaultTitle(props.status)}
        </Headline>
      </Styled.InfoWrap>
      {props.children && (
        <Styled.Description>{props.children}</Styled.Description>
      )}
    </Styled.Alert>
  );
};
