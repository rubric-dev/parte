import styled, { css } from "styled-components";
import { StyledIconButtonProps } from "./IconButton.types";

const commonButtonStyles = css<StyledIconButtonProps>`
  ${({ $size = 32 }) => css`
    width: ${$size}px;
    height: ${$size}px;
  `}
  display:flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: 1px solid transparent;
  user-select: none;
  cursor: pointer;
  white-space: nowrap;
  -webkit-font-smoothing: antialiased;
  -webkit-appearance: none;
  -moz-appearance: none;
  border-radius: 4px;
  &:disabled {
    cursor: default;
  }
  &::-moz-focus-inner {
    border: 0;
  }
`;

export const StyledButton = styled.button<StyledIconButtonProps>`
  ${commonButtonStyles}
  ${({ theme, $variant }) =>
    $variant === "fill-primary" &&
    css`
      background-color: ${theme.colorBackgroundButtonPrimary};
      color: ${theme.colorTextButtonPrimary};
      &:hover {
        background-color: ${theme.colorBackgroundButtonPrimaryHover};
        color: ${theme.colorTextButtonPrimaryHover};
      }
      &:focus {
        background-color: ${theme.colorBackgroundButtonPrimaryFocused};
        ${theme.commonStyles.outline}
        color: ${theme.colorTextButtonPrimaryFocused};
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
  ${({ theme, $variant }) =>
    $variant === "outline-secondary" &&
    css`
      background-color: ${theme.colorBackgroundButtonSecondary};
      border: 1px solid ${theme.colorBorderButtonSecondary};
      color: ${theme.colorTextButtonSecondary};

      &:hover {
        background-color: ${theme.colorBackgroundButtonSecondaryHover};
        border: 1px solid ${theme.colorBorderButtonSecondaryHover};
        color: ${theme.colorTextButtonSecondaryHover};
      }
      &:focus {
        background-color: ${theme.colorBackgroundButtonSecondaryFocused};
        border: 1px solid ${theme.colorBorderButtonSecondaryFocused};
        ${theme.commonStyles.outline}
        color: ${theme.colorTextButtonSecondaryFocused};
      }
      &:active {
        background-color: ${theme.colorBackgroundButtonSecondaryActive};
        border: 1px solid ${theme.colorBorderButtonSecondaryActive};
        color: ${theme.colorTextButtonSecondaryActive};
      }
      &:disabled {
        background-color: ${theme.colorBackgroundButtonSecondaryDisabled};
        border: 1px solid ${theme.colorBorderButtonSecondaryDisabled};
        color: ${theme.colorTextButtonSecondaryDisabled};
      }
    `}
    ${({ theme, $variant }) =>
    $variant === "outline-primary" &&
    css`
      background-color: ${theme.colorBackgroundButtonSecondaryColored};
      border: 1px solid ${theme.colorBorderButtonSecondaryColored};
      color: ${theme.colorTextButtonSecondaryColored};

      &:hover {
        background-color: ${theme.colorBackgroundButtonSecondaryColoredHover};
        border: 1px solid ${theme.colorBorderButtonSecondaryColoredHover};
        color: ${theme.colorTextButtonSecondaryColoredHover};
      }
      &:focus {
        background-color: ${theme.colorBackgroundButtonSecondaryColoredFocused};
        border: 1px solid ${theme.colorBorderButtonSecondaryColoredFocused};
        ${theme.commonStyles.outline};
        color: ${theme.colorTextButtonSecondaryColoredFocused};
      }
      &:active {
        background-color: ${theme.colorBackgroundButtonSecondaryColoredActive};
        border: 1px solid ${theme.colorBorderButtonSecondaryColoredActive};
        color: ${theme.colorTextButtonSecondaryColoredActive};
      }
      &:disabled {
        background-color: ${theme.colorBackgroundButtonSecondaryColoredDisabled};
        border: 1px solid ${theme.colorBorderButtonSecondaryColoredDisabled};
        color: ${theme.colorTextButtonSecondaryColoredDisabled};
      }
    `}
  ${({ theme, $variant }) =>
    $variant === "ghost-secondary" &&
    css`
      background-color: ${theme.colorBackgroundButtonMinimal};
      color: ${theme.colorTextButtonMinimal};

      &:hover {
        background-color: ${theme.colorBackgroundButtonMinimalHover};
        color: ${theme.colorTextButtonMinimalHover};
      }
      &:focus {
        background-color: ${theme.colorBackgroundButtonMinimalFocused};
        color: ${theme.colorTextButtonMinimalFocused};

        ${theme.commonStyles.outline}
      }
      &:active {
        background-color: ${theme.colorBackgroundButtonMinimalActive};
        color: ${theme.colorTextButtonMinimalActive};
      }
      &:disabled {
        background-color: ${theme.colorBackgroundButtonMinimalDisabled};
        color: ${theme.colorTextButtonMinimalDisabled};
      }
    `}
    ${({ theme, $variant }) =>
    $variant === "ghost-primary" &&
    css`
      background-color: ${theme.colorBackgroundButtonMinimalColored};
      color: ${theme.colorTextButtonMinimalColored};

      &:hover {
        background-color: ${theme.colorBackgroundButtonMinimalColoredHover};
        color: ${theme.colorTextButtonMinimalColoredHover};
      }
      &:focus {
        background-color: ${theme.colorBackgroundButtonMinimalColoredFocused};
        ${theme.commonStyles.outline};
        color: ${theme.colorTextButtonMinimalColoredFocused};
      }
      &:active {
        background-color: ${theme.colorBackgroundButtonMinimalColoredActive};
        color: ${theme.colorTextButtonMinimalColoredActive};
      }
      &:disabled {
        background-color: ${theme.colorBackgroundButtonMinimalColoredDisabled};
        color: ${theme.colorTextButtonMinimalColoredDisabled};
      }
    `}
  ${({ theme, $variant }) =>
    $variant === "fill-error" &&
    css`
      background-color: ${theme.colorBackgroundButtonError};
      color: ${theme.colorTextButtonError};

      &:hover {
        background-color: ${theme.colorBackgroundButtonErrorHover};
        color: ${theme.colorTextButtonErrorHover};
      }
      &:focus {
        background-color: ${theme.colorBackgroundButtonErrorFocused};
        color: ${theme.colorTextButtonErrorFocused};
        ${theme.commonStyles.outlineError}
      }
      &:active {
        background-color: ${theme.colorBackgroundButtonErrorActive};
        color: ${theme.colorTextButtonErrorActive};
      }
      &:disabled {
        background-color: ${theme.colorBackgroundButtonErrorDisabled};
        color: ${theme.colorTextButtonErrorDisabled};
      }
    `}
    ${({ theme, $variant }) =>
    $variant === "text-secondary" &&
    css`
      width: fit-content;
      height: fit-content;
      background-color: transparent;
      color: ${theme.colorTextButtonMinimal};

      &:hover {
        color: ${theme.colorTextButtonMinimalHover};
      }
      &:focus {
        ${theme.commonStyles.outline};
        color: ${theme.colorTextButtonMinimalFocused};
      }
      &:active {
        color: ${theme.colorTextButtonMinimalActive};
      }
      &:disabled {
        color: ${theme.colorTextButtonMinimalDisabled};
      }
    `}
    ${({ theme, $variant }) =>
    $variant === "text-primary" &&
    css`
      width: fit-content;
      height: fit-content;
      background-color: transparent;
      color: ${theme.colorTextButtonMinimalColored};

      &:hover {
        color: ${theme.colorTextButtonMinimalColoredHover};
      }
      &:focus {
        ${theme.commonStyles.outline};
        color: ${theme.colorTextButtonMinimalColoredFocused};
      }
      &:active {
        color: ${theme.colorTextButtonMinimalColoredActive};
      }
      &:disabled {
        color: ${theme.colorTextButtonMinimalColoredDisabled};
      }
    `}
`;
