import styled, { css } from "styled-components";
import { ColorKey } from "../../../parte-icons/src";
import { theme } from "../@foundations";
import { Box } from "../Layout";
import { AlertStatus, AlertStyleProps } from "./Alert.types";

export const ALERT_ICON_COLOR: Record<AlertStatus, ColorKey> = {
  success: "G400",
  info: "B400",
  warning: "Y400",
  error: "R400",
} as const;

const colorByStatus = {
  success: {
    icon: theme.colors.G400,
    border: theme.colors.G400,
    background: theme.colors.G50,
    color: theme.colors.G400,
  },
  info: {
    icon: theme.colors.B400,
    border: theme.colors.B400,
    background: theme.colors.B50,
    color: theme.colors.B400,
  },
  warning: {
    icon: theme.colors.Y400,
    border: theme.colors.Y400,
    background: theme.colors.Y50,
    color: theme.colors.Y400,
  },
  error: {
    icon: theme.colors.R400,
    border: theme.colors.R400,
    background: theme.colors.R50,
    color: theme.colors.R400,
  },
} as const;

export const AlertInline = styled(Box)<AlertStyleProps>`
  ${({ theme, $status }) => {
    return css`
      display: inline-flex;
      align-items: center;
      color: ${colorByStatus[$status].color};
      gap: ${theme.spacing.spacing12}px;
    `;
  }}
`;

export const Alert = styled(Box)<AlertStyleProps>`
  ${({ theme, $status }) => {
    const { border, background, color } = colorByStatus[$status];
    return css`
      min-width: 110px;
      max-width: 488px;
      width: 100%;
      height: fit-content;

      display: flex;
      flex-direction: column;
      gap: ${theme.spacing.spacing4}px;
      padding: 12px 16px 16px 16px;
      box-sizing: border-box;

      border-radius: 8px;
      background-color: ${background};
      color: ${color};
    `;
  }}
`;

export const Toast = styled(Alert)`
  ${theme.elevation.elevation2};
  pointer-events: all;
  background-color: ${theme.colors.N0};
`;

export const InfoWrap = styled(Box)`
  ${({ theme }) => {
    return css`
      display: flex;
      gap: ${theme.spacing.spacing12}px;
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
export const Description = styled.div`
  ${({ theme }) => css`
    word-break: break-word;
    color: ${theme.colors.N700};
    padding-left: ${theme.spacing.spacing28}px;
    ${theme.typography.P200};
  `}
`;
