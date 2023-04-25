import styled, { css } from "styled-components";
import { TableButtonProps } from "./TableButton.types";

const commonButtonStyles = css<TableButtonProps & { isIconButton: boolean }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: center;
  text-decoration: none;
  vertical-align: middle;
  outline: none;
  border: 1px solid transparent;
  user-select: none;
  cursor: pointer;
  white-space: nowrap;
  box-sizing: border-box;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "fit-content")};
  -webkit-font-smoothing: antialiased;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: ${({ theme, isIconButton }) =>
    isIconButton
      ? `${theme.spacing.spacing4}px`
      : `${theme.spacing.spacing1}px ${theme.spacing.spacing6}px`};
  column-gap: 4px;
  border-radius: 4px;
  font-family: inherit;
  white-space: nowrap;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  &:disabled {
    cursor: default;
  }
  &::-moz-focus-inner {
    border: 0;
  }
`;

export const StyledButton = styled.button<
  TableButtonProps & { isIconButton: boolean }
>`
  ${commonButtonStyles}
  ${({ theme, variant }) =>
    variant === "primary" &&
    css`
      background-color: ${theme.colorBackgroundButtonPrimary};
      color: ${theme.colorTextButtonPrimary};
      & svg {
        color: ${theme.colors.N0};
      }
      &:hover {
        background-color: ${theme.colorBackgroundButtonPrimaryHover};
        color: ${theme.colorTextButtonPrimaryHover};
      }
      &:focus {
        background-color: ${theme.colorBackgroundButtonPrimaryFocused};
        color: ${theme.colorTextButtonPrimaryFocused};
        ${theme.commonStyles.outline}
      }
      &:active {
        background-color: ${theme.colorBackgroundButtonPrimaryActive};
        color: ${theme.colorTextButtonPrimaryActive};
      }
      &:disabled {
        background-color: ${theme.colorBackgroundButtonPrimaryDisabled};
        color: ${theme.colorTextButtonPrimaryDisabled};
      }
    `}
  ${({ theme, variant }) =>
    variant === "secondary" &&
    css`
      background-color: ${theme.colorBackgroundButtonSecondary};
      color: ${theme.colorTextButtonSecondary};
      border: 1px solid ${theme.colorBorderButtonSecondary};
      &:hover {
        background-color: ${theme.colorBackgroundButtonSecondaryHover};
        color: ${theme.colorTextButtonSecondaryHover};
        border: 1px solid ${theme.colorBorderButtonSecondaryHover};
      }
      &:focus {
        background-color: ${theme.colorBackgroundButtonSecondaryFocused};
        color: ${theme.colorTextButtonSecondaryFocused};
        border: 1px solid ${theme.colorBorderButtonSecondaryFocused};
        ${theme.commonStyles.outline}
      }
      &:active {
        background-color: ${theme.colorBackgroundButtonSecondaryActive};
        color: ${theme.colorTextButtonSecondaryActive};
        border: 1px solid ${theme.colorBorderButtonSecondaryActive};
      }
      &:disabled {
        background-color: ${theme.colorBackgroundButtonSecondaryDisabled};
        color: ${theme.colorTextButtonSecondaryDisabled};
        border: 1px solid ${theme.colorBorderButtonSecondaryDisabled};
      }
    `}
`;
