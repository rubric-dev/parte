import { HTMLAttributes } from "react";
import styled, { css, DefaultTheme } from "styled-components";
import { Box } from "../Layout";
import { ICON_COLOR } from "../../../parte-icons/src";
import { AlertProps, AlertStatus } from "./Alert.types";

export const getColorByStatus = (
  status: AlertStatus,
  theme: DefaultTheme
): { iconColor: string; backgroundColor: string; color: string } => {
  let colorInfos = {
    backgroundColor: "",
    color: "",
  };
  switch (status) {
    case "success": {
      colorInfos = {
        backgroundColor: theme.colors.G50,
        color: theme.colors.G500,
      };
      break;
    }
    case "info": {
      colorInfos = {
        backgroundColor: theme.colors.B50,
        color: theme.colors.B500,
      };
      break;
    }
    case "warning": {
      colorInfos = {
        backgroundColor: theme.colors.Y50,
        color: theme.colors.Y500,
      };
      break;
    }
    case "error": {
      colorInfos = {
        backgroundColor: theme.colors.R50,
        color: theme.colors.R500,
      };
      break;
    }
  }
  return {
    ...colorInfos,
    iconColor: ICON_COLOR[status],
  };
};

const alertInlineStyle = css<AlertProps>`
  ${({ theme, status }) => {
    const { color } = getColorByStatus(status, theme);
    return css`
      display: flex;
      align-items: center;
      color: ${color};
      gap: ${theme.spacing.spacing16}px;
    `;
  }}
`;

const commonStyle = css<AlertProps>`
  ${({ theme, status }) => {
    const { iconColor, backgroundColor, color } = getColorByStatus(
      status,
      theme
    );

    const borderPixel = 1;

    return css`
      min-width: 110px;
      display: flex;
      flex-direction: column;
      background-color: ${backgroundColor};
      color: ${color};
      border: ${borderPixel}px solid ${iconColor};
      border-radius: 8px;
      max-width: 487px;
      gap: ${theme.spacing.spacing4}px;
      padding: ${theme.spacing.spacing12 - borderPixel}px
        ${theme.spacing.spacing16 - borderPixel}px;
      box-sizing: border-box;
      height: fit-content;
      width: 100%;
    `;
  }}
`;
const toastStyle = css<AlertProps>`
  ${({ theme }) => {
    return css`
      ${theme.elevation.elevation1};
      ${commonStyle}
    `;
  }}
`;
const alertStyle = css<AlertProps>`
  ${() => {
    return css`
      ${commonStyle}
    `;
  }}
`;

export const Alert = styled(Box)<AlertProps & HTMLAttributes<HTMLDivElement>>`
  ${(props) => {
    const { type } = props;
    if (type === "alert-inline") {
      return css`
        ${alertInlineStyle}
      `;
    }
    if (type === "toast") {
      return css`
        ${toastStyle}
      `;
    }
    if (type === "alert") {
      return css`
        ${alertStyle}
      `;
    }
  }}
  position: 'relative',
`;

export const InfoWrap = styled(Box)`
  ${({ theme }) => {
    return css`
      display: flex;
      gap: ${theme.spacing.spacing16}px;
      align-items: center;
      width: 100%;
    `;
  }}
`;

export const Header = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.span`
  ${({ theme }) => {
    return css`
      ${theme.typography.H400}
    `;
  }}
`;
export const Description = styled.span`
  ${({ theme }) => {
    return css`
      word-break: break-word;
      color: ${theme.colors.N700};
      padding-left: ${theme.spacing.spacing32}px;
      ${theme.typography.P200};
    `;
  }}
`;
