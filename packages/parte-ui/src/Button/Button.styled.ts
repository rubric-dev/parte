import { ExtractToStyledProps } from "@parte-ds/utils";
import styled, { css } from "styled-components";
import { ButtonProps } from "./Button.types";
import { sizeHandler } from "../utils/button.util";

type StyledButtonProps = ExtractToStyledProps<
  ButtonProps,
  "variant" | "fullWidth" | "size"
>;

const commonButtonStyles = css<StyledButtonProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  text-decoration: none;
  vertical-align: middle;
  outline: none;
  border: none;
  user-select: none;
  cursor: pointer;
  white-space: nowrap;
  box-sizing: border-box;
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "fit-content")};
  -webkit-font-smoothing: antialiased;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: ${({ theme }) => `${theme.spacing.spacing16}px`};
  column-gap: 8px;
  row-gap: 4px;
  border-radius: 4px;
  font-family: inherit;
  white-space: nowrap;
  ${({ $size, $variant }) => sizeHandler($size, $variant)};

  &:disabled {
    cursor: default;
  }
  &::-moz-focus-inner {
    border: 0;
  }
`;

export const buttonStyles = css<StyledButtonProps>`
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
    ${({ theme, $variant }) =>
    $variant === "fill-secondary" &&
    css`
      background-color: ${theme.colorBackgroundButtonFillSecondary};
      color: ${theme.colorTextButtonFillSecondary};
      svg {
        color: ${theme.colors.N600};
      }
      &:hover {
        background-color: ${theme.colorBackgroundButtonFillSecondaryHover};
        color: ${theme.colorTextButtonFillSecondaryHover};
        svg {
          color: ${theme.colors.N700};
        }
      }
      &:focus {
        background-color: ${theme.colorBackgroundButtonFillSecondaryFocused};
        color: ${theme.colorTextButtonFillSecondaryFocused};
        ${theme.commonStyles.outline}
        svg {
          color: ${theme.colors.N700};
        }
      }
      &:active {
        background-color: ${theme.colorBackgroundButtonFillSecondaryActive};
        color: ${theme.colorTextButtonFillSecondaryActive};
        svg {
          color: ${theme.colors.N700};
        }
      }
      &:disabled {
        background-color: ${theme.colorBackgroundButtonFillSecondaryDisabled};
        color: ${theme.colorTextButtonFillSecondaryDisabled};
        svg {
          color: ${theme.colors.N400};
        }
      }
    `}
  ${({ theme, $variant }) =>
    $variant === "fill-tertiary" &&
    css`
      background-color: ${theme.colorBackgroundButtonTertiary};
      color: ${theme.colorTextButtonTertiary};
      svg {
        color: ${theme.colors.B400};
      }
      &:hover {
        background-color: ${theme.colorBackgroundButtonTertiaryHover};
        color: ${theme.colorTextButtonTertiaryHover};
        svg {
          color: ${theme.colors.B500};
        }
      }
      &:focus {
        background-color: ${theme.colorBackgroundButtonTertiaryFocused};
        color: ${theme.colorTextButtonTertiaryFocused};
        ${theme.commonStyles.outline}
        svg {
          color: ${theme.colors.B500};
        }
      }
      &:active {
        background-color: ${theme.colorBackgroundButtonTertiaryActive};
        color: ${theme.colorTextButtonTertiaryActive};
        svg {
          color: ${theme.colors.B500};
        }
      }
      &:disabled {
        background-color: ${theme.colorBackgroundButtonTertiaryDisabled};
        color: ${theme.colorTextButtonTertiaryDisabled};
        svg {
          color: ${theme.colors.B200};
        }
      }
    `}
  ${({ theme, $variant }) =>
    $variant === "outline-secondary" &&
    css`
      background-color: ${theme.colorBackgroundButtonSecondary};
      color: ${theme.colorTextButtonSecondary};
      border: 1px solid ${theme.colorBorderButtonSecondary};
      svg {
        color: ${theme.colors.N600};
      }
      &:hover {
        background-color: ${theme.colorBackgroundButtonSecondaryHover};
        color: ${theme.colorTextButtonSecondaryHover};
        border: 1px solid ${theme.colorBorderButtonSecondaryHover};
        svg {
          color: ${theme.colors.N700};
        }
      }
      &:focus {
        background-color: ${theme.colorBackgroundButtonSecondaryFocused};
        color: ${theme.colorTextButtonSecondaryFocused};
        border: 1px solid ${theme.colorBorderButtonSecondaryFocused};
        ${theme.commonStyles.outline}
        svg {
          color: ${theme.colors.N700};
        }
      }
      &:active {
        background-color: ${theme.colorBackgroundButtonSecondaryActive};
        color: ${theme.colorTextButtonSecondaryActive};
        border: 1px solid ${theme.colorBorderButtonSecondaryActive};
        svg {
          color: ${theme.colors.N700};
        }
      }
      &:disabled {
        background-color: ${theme.colorBackgroundButtonSecondaryDisabled};
        color: ${theme.colorTextButtonSecondaryDisabled};
        border: 1px solid ${theme.colorBorderButtonSecondaryDisabled};
        svg {
          color: ${theme.colors.N400};
        }
      }
    `}
    ${({ theme, $variant }) =>
    $variant === "outline-primary" &&
    css`
      background-color: ${theme.colorBackgroundButtonSecondaryColored};
      color: ${theme.colorTextButtonSecondaryColored};
      border: 1px solid ${theme.colorBorderButtonSecondaryColored};

      &:hover {
        background-color: ${theme.colorBackgroundButtonSecondaryColoredHover};
        color: ${theme.colorTextButtonSecondaryColoredHover};
        border: 1px solid ${theme.colorBorderButtonSecondaryColoredHover};
      }
      &:focus {
        background-color: ${theme.colorBackgroundButtonSecondaryColoredFocused};
        color: ${theme.colorTextButtonSecondaryColoredFocused};
        border: 1px solid ${theme.colorBorderButtonSecondaryColoredFocused};
        ${theme.commonStyles.outline};
      }
      &:active {
        background-color: ${theme.colorBackgroundButtonSecondaryColoredActive};
        color: ${theme.colorTextButtonSecondaryColoredActive};
        border: 1px solid ${theme.colorBorderButtonSecondaryColoredActive};
      }
      &:disabled {
        background-color: ${theme.colorBackgroundButtonSecondaryColoredDisabled};
        color: ${theme.colorTextButtonSecondaryColoredDisabled};
        border: 1px solid ${theme.colorBorderButtonSecondaryColoredDisabled};
      }
    `}
  ${({ theme, $variant }) =>
    $variant === "ghost-secondary" &&
    css`
      background-color: ${theme.colorBackgroundButtonMinimal};
      color: ${theme.colorTextButtonMinimal};
      svg {
        color: ${theme.colors.N600};
      }
      &:hover {
        background-color: ${theme.colorBackgroundButtonMinimalHover};
        color: ${theme.colorTextButtonMinimalHover};
        svg {
          color: ${theme.colors.N700};
        }
      }
      &:focus {
        background-color: ${theme.colorBackgroundButtonMinimalFocused};
        color: ${theme.colorTextButtonMinimalFocused};
        ${theme.commonStyles.outline};
        svg {
          color: ${theme.colors.N600};
        }
      }
      &:active {
        background-color: ${theme.colorBackgroundButtonMinimalActive};
        color: ${theme.colorTextButtonMinimalActive};
        svg {
          color: ${theme.colors.N700};
        }
      }
      &:disabled {
        background-color: ${theme.colorBackgroundButtonMinimalDisabled};
        color: ${theme.colorTextButtonMinimalDisabled};
        svg {
          color: ${theme.colors.N400};
        }
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
        color: ${theme.colorTextButtonMinimalColoredFocused};
        ${theme.commonStyles.outline};
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
      & svg {
        color: ${theme.colorTextButtonError};
      }
      &:hover {
        background-color: ${theme.colorBackgroundButtonErrorHover};
        color: ${theme.colorTextButtonErrorHover};
      }
      &:focus {
        background-color: ${theme.colorBackgroundButtonErrorFocused};
        color: ${theme.colorTextButtonErrorFocused};
        ${theme.commonStyles.outlineError};
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
      padding: 0;
      background-color: transparent;
      column-gap: 8px;
      gap: 8px;
      color: ${theme.colorTextButtonMinimal};
      svg {
        color: ${theme.colors.N600};
      }
      &:hover {
        color: ${theme.colorTextButtonMinimalHover};
        svg {
          color: ${theme.colors.N700};
        }
      }
      &:focus {
        color: ${theme.colorTextButtonMinimalFocused};
        ${theme.commonStyles.outline};
        svg {
          color: ${theme.colors.N600};
        }
      }
      &:active {
        color: ${theme.colorTextButtonMinimalActive};
        svg {
          color: ${theme.colors.N700};
        }
      }
      &:disabled {
        color: ${theme.colorTextButtonMinimalDisabled};
        svg {
          color: ${theme.colors.N400};
        }
      }
    `}
    ${({ theme, $variant }) =>
    $variant === "text-primary" &&
    css`
      padding: 0;
      background-color: transparent;
      column-gap: 8px;
      gap: 8px;
      color: ${theme.colorTextButtonMinimalColored};

      &:hover {
        color: ${theme.colorTextButtonMinimalColoredHover};
      }
      &:focus {
        color: ${theme.colorTextButtonMinimalColoredFocused};
        ${theme.commonStyles.outline};
      }
      &:active {
        color: ${theme.colorTextButtonMinimalColoredActive};
      }
      &:disabled {
        color: ${theme.colorTextButtonMinimalColoredDisabled};
      }
    `}
`;

export const StyledButton = styled.button<StyledButtonProps>`
  ${buttonStyles}
`;

export const StyledLinkButton = styled.a<StyledButtonProps>`
  ${buttonStyles}
`;
