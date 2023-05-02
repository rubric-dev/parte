import styled, { css } from "styled-components";
import { ButtonProps } from "./Button.types";

const commonButtonStyles = css<ButtonProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  flex-direction: ${({ direction }) =>
    direction === "horizontal" ? "row" : "column"};
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
  padding: ${({ theme, direction }) =>
    direction === "horizontal"
      ? `${theme.spacing.spacing8}px ${theme.spacing.spacing16}px`
      : `${theme.spacing.spacing8}px`};
  column-gap: 8px;
  row-gap: 4px;
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

export const StyledButton = styled.button<ButtonProps>`
  ${commonButtonStyles}
  ${({ theme, variant }) =>
    variant === "fill-primary" &&
    css`
      background-color: ${theme.colorBackgroundButtonPrimary};
      color: ${theme.colorTextButtonPrimary};
      & svg {
        color: ${theme.colorTextButtonPrimary};
      }
      &:hover {
        background-color: ${theme.colorBackgroundButtonPrimaryHover};
        color: ${theme.colorTextButtonPrimaryHover};
        & svg {
          color: ${theme.colorTextButtonPrimaryHover};
        }
      }
      &:focus {
        background-color: ${theme.colorBackgroundButtonPrimaryFocused};
        color: ${theme.colorTextButtonPrimaryFocused};
        ${theme.commonStyles.outline}& svg {
          color: ${theme.colorTextButtonPrimaryFocused};
        }
      }
      &:active {
        background-color: ${theme.colorBackgroundButtonPrimaryActive};
        color: ${theme.colorTextButtonPrimaryActive};
        & svg {
          color: ${theme.colorTextButtonPrimaryActive};
        }
      }
      &:disabled {
        background-color: ${theme.colorBackgroundButtonPrimaryDisabled};
        color: ${theme.colorTextButtonPrimaryDisabled};
        & svg {
          color: ${theme.colorTextButtonPrimaryDisabled};
        }
      }
    `}
  ${({ theme, variant }) =>
    variant === "outline-secondary" &&
    css`
      background-color: ${theme.colorBackgroundButtonSecondary};
      color: ${theme.colorTextButtonSecondary};
      border: 1px solid ${theme.colorBorderButtonSecondary};
      & svg {
        color: ${theme.colorTextButtonSecondary};
      }
      &:hover {
        background-color: ${theme.colorBackgroundButtonSecondaryHover};
        color: ${theme.colorTextButtonSecondaryHover};
        border: 1px solid ${theme.colorBorderButtonSecondaryHover};
        & svg {
          color: ${theme.colorTextButtonSecondaryHover};
        }
      }
      &:focus {
        background-color: ${theme.colorBackgroundButtonSecondaryFocused};
        color: ${theme.colorTextButtonSecondaryFocused};
        border: 1px solid ${theme.colorBorderButtonSecondaryFocused};
        ${theme.commonStyles.outline}& svg {
          color: ${theme.colorTextButtonSecondaryFocused};
        }
      }
      &:active {
        background-color: ${theme.colorBackgroundButtonSecondaryActive};
        color: ${theme.colorTextButtonSecondaryActive};
        border: 1px solid ${theme.colorBorderButtonSecondaryActive};
        & svg {
          color: ${theme.colorTextButtonSecondaryActive};
        }
      }
      &:disabled {
        background-color: ${theme.colorBackgroundButtonSecondaryDisabled};
        color: ${theme.colorTextButtonSecondaryDisabled};
        border: 1px solid ${theme.colorBorderButtonSecondaryDisabled};
        & svg {
          color: ${theme.colorTextButtonSecondaryDisabled};
        }
      }
    `}
    ${({ theme, variant }) =>
    variant === "outline-primary" &&
    css`
      background-color: ${theme.colorBackgroundButtonSecondaryColored};
      color: ${theme.colorTextButtonSecondaryColored};
      border: 1px solid ${theme.colorBorderButtonSecondaryColored};
      & svg {
        color: ${theme.colorTextButtonSecondaryColored};
      }
      &:hover {
        background-color: ${theme.colorBackgroundButtonSecondaryColoredHover};
        color: ${theme.colorTextButtonSecondaryColoredHover};
        border: 1px solid ${theme.colorBorderButtonSecondaryColoredHover};
        & svg {
          color: ${theme.colorTextButtonSecondaryColoredHover};
        }
      }
      &:focus {
        background-color: ${theme.colorBackgroundButtonSecondaryColoredFocused};
        color: ${theme.colorTextButtonSecondaryColoredFocused};
        border: 1px solid ${theme.colorBorderButtonSecondaryColoredFocused};
        ${theme.commonStyles.outline};
        & svg {
          color: ${theme.colorTextButtonSecondaryColoredFocused};
        }
      }
      &:active {
        background-color: ${theme.colorBackgroundButtonSecondaryColoredActive};
        color: ${theme.colorTextButtonSecondaryColoredActive};
        border: 1px solid ${theme.colorBorderButtonSecondaryColoredActive};
        & svg {
          color: ${theme.colorTextButtonSecondaryColoredActive};
        }
      }
      &:disabled {
        background-color: ${theme.colorBackgroundButtonSecondaryColoredDisabled};
        color: ${theme.colorTextButtonSecondaryColoredDisabled};
        border: 1px solid ${theme.colorBorderButtonSecondaryColoredDisabled};
        & svg {
          color: ${theme.colorTextButtonSecondaryColoredDisabled};
        }
      }
    `}
  ${({ theme, variant }) =>
    variant === "ghost-secondary" &&
    css`
      background-color: ${theme.colorBackgroundButtonMinimal};
      color: ${theme.colorTextButtonMinimal};
      & svg {
        color: ${theme.colorTextButtonMinimal};
      }
      &:hover {
        background-color: ${theme.colorBackgroundButtonMinimalHover};
        color: ${theme.colorTextButtonMinimalHover};
        & svg {
          color: ${theme.colorTextButtonMinimalHover};
        }
      }
      &:focus {
        background-color: ${theme.colorBackgroundButtonMinimalFocused};
        color: ${theme.colorTextButtonMinimalFocused};
        ${theme.commonStyles.outline};
        & svg {
          color: ${theme.colorTextButtonMinimalFocused};
        }
      }
      &:active {
        background-color: ${theme.colorBackgroundButtonMinimalActive};
        color: ${theme.colorTextButtonMinimalActive};
        & svg {
          color: ${theme.colorTextButtonMinimalActive};
        }
      }
      &:disabled {
        background-color: ${theme.colorBackgroundButtonMinimalDisabled};
        color: ${theme.colorTextButtonMinimalDisabled};
        & svg {
          color: ${theme.colorTextButtonMinimalDisabled};
        }
      }
    `}
    ${({ theme, variant }) =>
    variant === "ghost-primary" &&
    css`
      background-color: ${theme.colorBackgroundButtonMinimalColored};
      color: ${theme.colorTextButtonMinimalColored};
      & svg {
        color: ${theme.colorTextButtonMinimalColored};
      }
      &:hover {
        background-color: ${theme.colorBackgroundButtonMinimalColoredHover};
        color: ${theme.colorTextButtonMinimalColoredHover};
        & svg {
          color: ${theme.colorTextButtonMinimalColoredHover};
        }
      }
      &:focus {
        background-color: ${theme.colorBackgroundButtonMinimalColoredFocused};
        color: ${theme.colorTextButtonMinimalColoredFocused};
        ${theme.commonStyles.outline};
        & svg {
          color: ${theme.colorTextButtonMinimalColoredFocused};
        }
      }
      &:active {
        background-color: ${theme.colorBackgroundButtonMinimalColoredActive};
        color: ${theme.colorTextButtonMinimalColoredActive};
        & svg {
          color: ${theme.colorTextButtonMinimalColoredActive};
        }
      }
      &:disabled {
        background-color: ${theme.colorBackgroundButtonMinimalColoredDisabled};
        color: ${theme.colorTextButtonMinimalColoredDisabled};
        & svg {
          color: ${theme.colorTextButtonMinimalColoredDisabled};
        }
      }
    `}
  ${({ theme, variant }) =>
    variant === "fill-error" &&
    css`
      background-color: ${theme.colorBackgroundButtonError};
      color: ${theme.colorTextButtonError};
      & svg {
        color: ${theme.colorTextButtonError};
      }
      &:hover {
        background-color: ${theme.colorBackgroundButtonErrorHover};
        color: ${theme.colorTextButtonErrorHover};
        & svg {
          color: ${theme.colorTextButtonErrorHover};
        }
      }
      &:focus {
        background-color: ${theme.colorBackgroundButtonErrorFocused};
        color: ${theme.colorTextButtonErrorFocused};
        ${theme.commonStyles.outlineError};
        & svg {
          color: ${theme.colorTextButtonErrorFocused};
        }
      }
      &:active {
        background-color: ${theme.colorBackgroundButtonErrorActive};
        color: ${theme.colorTextButtonErrorActive};
        & svg {
          color: ${theme.colorTextButtonErrorActive};
        }
      }
      &:disabled {
        background-color: ${theme.colorBackgroundButtonErrorDisabled};
        color: ${theme.colorTextButtonErrorDisabled};
        & svg {
          color: ${theme.colorTextButtonErrorDisabled};
        }
      }
    `}
    ${({ theme, variant }) =>
    variant === "text-secondary" &&
    css`
      padding: 0;
      background-color: transparent;
      column-gap: 4px;
      color: ${theme.colorTextButtonMinimal};
      & svg {
        color: ${theme.colorTextButtonMinimal};
      }
      &:hover {
        color: ${theme.colorTextButtonMinimalHover};
        & svg {
          color: ${theme.colorTextButtonMinimalHover};
        }
      }
      &:focus {
        color: ${theme.colorTextButtonMinimalFocused};
        ${theme.commonStyles.outline};
        & svg {
          color: ${theme.colorTextButtonMinimalFocused};
        }
      }
      &:active {
        color: ${theme.colorTextButtonMinimalActive};
        & svg {
          color: ${theme.colorTextButtonMinimalActive};
        }
      }
      &:disabled {
        color: ${theme.colorTextButtonMinimalDisabled};
        & svg {
          color: ${theme.colorTextButtonMinimalDisabled};
        }
      }
    `}
    ${({ theme, variant }) =>
    variant === "text-primary" &&
    css`
      padding: 0;
      background-color: transparent;
      column-gap: 4px;
      color: ${theme.colorTextButtonMinimalColored};
      & svg {
        color: ${theme.colorTextButtonMinimalColored};
      }
      &:hover {
        color: ${theme.colorTextButtonMinimalColoredHover};
        & svg {
          color: ${theme.colorTextButtonMinimalColoredHover};
        }
      }
      &:focus {
        color: ${theme.colorTextButtonMinimalColoredFocused};
        ${theme.commonStyles.outline};
        & svg {
          color: ${theme.colorTextButtonMinimalColoredFocused};
        }
      }
      &:active {
        color: ${theme.colorTextButtonMinimalColoredActive};
        & svg {
          color: ${theme.colorTextButtonMinimalColoredActive};
        }
      }
      &:disabled {
        color: ${theme.colorTextButtonMinimalColoredDisabled};
        & svg {
          color: ${theme.colorTextButtonMinimalColoredDisabled};
        }
      }
    `}
`;
