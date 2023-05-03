import styled, { css } from "styled-components";
import { COLORS, ColorKey } from "../../../parte-icons/src";
import { IconButtonProps } from "./IconButton.types";

const commonButtonStyles = css<Omit<IconButtonProps, "Icon">>`
  ${({ size = 32 }) => css`
    width: ${size}px;
    height: ${size}px;
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

export const StyledButton = styled.button<
  Omit<IconButtonProps, "Icon"> & {
    iconColor?: ColorKey;
  }
>`
  ${commonButtonStyles}
  ${({ theme, variant }) =>
    variant === "fill-primary" &&
    css`
      background-color: ${theme.colorBackgroundButtonPrimary};
      & svg {
        color: ${theme.colorTextButtonPrimary};
      }
      &:hover {
        background-color: ${theme.colorBackgroundButtonPrimaryHover};
        & svg {
          color: ${theme.colorTextButtonPrimaryHover};
        }
      }
      &:focus {
        background-color: ${theme.colorBackgroundButtonPrimaryFocused};
        ${theme.commonStyles.outline}
        & svg {
          color: ${theme.colorTextButtonPrimaryFocused};
        }
      }
      &:active {
        background-color: ${theme.colorBackgroundButtonPrimaryActive};
        & svg {
          color: ${theme.colorTextButtonPrimaryActive};
        }
      }
      &:disabled {
        background-color: ${theme.colorBackgroundButtonPrimaryDisabled};
        & svg {
          color: ${theme.colorTextButtonPrimaryDisabled};
        }
      }
    `}
  ${({ theme, variant, iconColor = "N700" }) =>
    variant === "outline-secondary" &&
    css`
      background-color: ${theme.colorBackgroundButtonSecondary};
      border: 1px solid ${theme.colorBorderButtonSecondary};
      & svg {
        color: ${COLORS[iconColor] || theme.colorTextButtonSecondary};
      }
      &:hover {
        background-color: ${theme.colorBackgroundButtonSecondaryHover};
        border: 1px solid ${theme.colorBorderButtonSecondaryHover};
        & svg {
          color: ${COLORS[iconColor] || theme.colorTextButtonSecondaryHover};
        }
      }
      &:focus {
        background-color: ${theme.colorBackgroundButtonSecondaryFocused};
        border: 1px solid ${theme.colorBorderButtonSecondaryFocused};
        ${theme.commonStyles.outline}
        & svg {
          color: ${COLORS[iconColor] || theme.colorTextButtonSecondaryFocused};
        }
      }
      &:active {
        background-color: ${theme.colorBackgroundButtonSecondaryActive};
        border: 1px solid ${theme.colorBorderButtonSecondaryActive};
        & svg {
          color: ${COLORS[iconColor] || theme.colorTextButtonSecondaryActive};
        }
      }
      &:disabled {
        background-color: ${theme.colorBackgroundButtonSecondaryDisabled};
        border: 1px solid ${theme.colorBorderButtonSecondaryDisabled};
        & svg {
          color: ${COLORS[iconColor] || theme.colorTextButtonSecondaryDisabled};
        }
      }
    `}
    ${({ theme, variant }) =>
    variant === "outline-primary" &&
    css`
      background-color: ${theme.colorBackgroundButtonSecondaryColored};
      border: 1px solid ${theme.colorBorderButtonSecondaryColored};
      & svg {
        color: ${theme.colorTextButtonSecondaryColored};
      }
      &:hover {
        background-color: ${theme.colorBackgroundButtonSecondaryColoredHover};
        border: 1px solid ${theme.colorBorderButtonSecondaryColoredHover};
        & svg {
          color: ${theme.colorTextButtonSecondaryColoredHover};
        }
      }
      &:focus {
        background-color: ${theme.colorBackgroundButtonSecondaryColoredFocused};
        border: 1px solid ${theme.colorBorderButtonSecondaryColoredFocused};
        ${theme.commonStyles.outline};
        & svg {
          color: ${theme.colorTextButtonSecondaryColoredFocused};
        }
      }
      &:active {
        background-color: ${theme.colorBackgroundButtonSecondaryColoredActive};
        border: 1px solid ${theme.colorBorderButtonSecondaryColoredActive};
        & svg {
          color: ${theme.colorTextButtonSecondaryColoredActive};
        }
      }
      &:disabled {
        background-color: ${theme.colorBackgroundButtonSecondaryColoredDisabled};
        border: 1px solid ${theme.colorBorderButtonSecondaryColoredDisabled};
        & svg {
          color: ${theme.colorTextButtonSecondaryColoredDisabled};
        }
      }
    `}
  ${({ theme, variant, iconColor = "N700" }) =>
    variant === "ghost-secondary" &&
    css`
      background-color: ${theme.colorBackgroundButtonMinimal};
      & svg {
        color: ${COLORS[iconColor] || theme.colorTextButtonMinimal};
      }
      &:hover {
        background-color: ${theme.colorBackgroundButtonMinimalHover};
        & svg {
          color: ${COLORS[iconColor] || theme.colorTextButtonMinimalHover};
        }
      }
      &:focus {
        background-color: ${theme.colorBackgroundButtonMinimalFocused};
        & svg {
          color: ${COLORS[iconColor] || theme.colorTextButtonMinimalFocused};
        }
        ${theme.commonStyles.outline}
      }
      &:active {
        background-color: ${theme.colorBackgroundButtonMinimalActive};
        & svg {
          color: ${COLORS[iconColor] || theme.colorTextButtonMinimalActive};
        }
      }
      &:disabled {
        background-color: ${theme.colorBackgroundButtonMinimalDisabled};
        & svg {
          color: ${COLORS[iconColor] || theme.colorTextButtonMinimalDisabled};
        }
      }
    `}${({ theme, variant }) =>
    variant === "ghost-primary" &&
    css`
      background-color: ${theme.colorBackgroundButtonMinimalColored};
      & svg {
        color: ${theme.colorTextButtonMinimalColored};
      }
      &:hover {
        background-color: ${theme.colorBackgroundButtonMinimalColoredHover};
        & svg {
          color: ${theme.colorTextButtonMinimalColoredHover};
        }
      }
      &:focus {
        background-color: ${theme.colorBackgroundButtonMinimalColoredFocused};
        ${theme.commonStyles.outline};
        & svg {
          color: ${theme.colorTextButtonMinimalColoredFocused};
        }
      }
      &:active {
        background-color: ${theme.colorBackgroundButtonMinimalColoredActive};
        & svg {
          color: ${theme.colorTextButtonMinimalColoredActive};
        }
      }
      &:disabled {
        background-color: ${theme.colorBackgroundButtonMinimalColoredDisabled};
        & svg {
          color: ${theme.colorTextButtonMinimalColoredDisabled};
        }
      }
    `}
  ${({ theme, variant }) =>
    variant === "fill-error" &&
    css`
      background-color: ${theme.colorBackgroundButtonError};
      & svg {
        color: ${theme.colorTextButtonError};
      }
      &:hover {
        background-color: ${theme.colorBackgroundButtonErrorHover};
        & svg {
          color: ${theme.colorTextButtonErrorHover};
        }
      }
      &:focus {
        background-color: ${theme.colorBackgroundButtonErrorFocused};
        & svg {
          color: ${theme.colorTextButtonErrorFocused};
        }
        ${theme.commonStyles.outlineError}
      }
      &:active {
        background-color: ${theme.colorBackgroundButtonErrorActive};
        & svg {
          color: ${theme.colorTextButtonErrorActive};
        }
      }
      &:disabled {
        background-color: ${theme.colorBackgroundButtonErrorDisabled};
        & svg {
          color: ${theme.colorTextButtonErrorDisabled};
        }
      }
    `}${({ theme, variant }) =>
    variant === "text-secondary" &&
    css`
      width: fit-content;
      height: fit-content;
      background-color: transparent;
      & svg {
        color: ${theme.colorTextButtonMinimal};
      }
      &:hover {
        & svg {
          color: ${theme.colorTextButtonMinimalHover};
        }
      }
      &:focus {
        ${theme.commonStyles.outline};
        & svg {
          color: ${theme.colorTextButtonMinimalFocused};
        }
      }
      &:active {
        & svg {
          color: ${theme.colorTextButtonMinimalActive};
        }
      }
      &:disabled {
        & svg {
          color: ${theme.colorTextButtonMinimalDisabled};
        }
      }
    `}
    ${({ theme, variant }) =>
    variant === "text-primary" &&
    css`
      width: fit-content;
      height: fit-content;
      background-color: transparent;
      & svg {
        color: ${theme.colorTextButtonMinimalColored};
      }
      &:hover {
        & svg {
          color: ${theme.colorTextButtonMinimalColoredHover};
        }
      }
      &:focus {
        ${theme.commonStyles.outline};
        & svg {
          color: ${theme.colorTextButtonMinimalColoredFocused};
        }
      }
      &:active {
        & svg {
          color: ${theme.colorTextButtonMinimalColoredActive};
        }
      }
      &:disabled {
        & svg {
          color: ${theme.colorTextButtonMinimalColoredDisabled};
        }
      }
    `}
`;
