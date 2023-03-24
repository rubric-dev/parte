import styled, { css } from "styled-components";
import { ICON_COLOR, IconColor } from "../../../parte-icons/src";
import { IconButtonProps } from "./IconButton.types";

const commonButtonStyles = css<Omit<IconButtonProps, "Icon">>`
  ${({ size = 16 }) => css`
    width: ${size}px;
    height: ${size}px;
  `}
  position: relative;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  justify-content: center;
  text-decoration: none;
  vertical-align: middle;
  outline: none;
  border: 1px solid transparent;
  user-select: none;
  cursor: pointer;
  white-space: nowrap;
  -webkit-font-smoothing: antialiased;
  -webkit-appearance: none;
  -moz-appearance: none;
  column-gap: 8px;
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
    iconColor?: IconColor;
  }
>`
  ${commonButtonStyles}
  ${({ theme, variant }) =>
    variant === "primary" &&
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
  ${({ theme, variant, iconColor = "default" }) =>
    variant === "secondary" &&
    css`
      background-color: ${theme.colorBackgroundButtonSecondary};
      border: 1px solid ${theme.colorBorderButtonSecondary};
      & svg {
        color: ${ICON_COLOR[iconColor] || theme.colorTextButtonSecondary};
      }
      &:hover {
        background-color: ${theme.colorBackgroundButtonSecondaryHover};
        border: 1px solid ${theme.colorBorderButtonSecondaryHover};
        & svg {
          color: ${ICON_COLOR[iconColor] ||
          theme.colorTextButtonSecondaryHover};
        }
      }
      &:focus {
        background-color: ${theme.colorBackgroundButtonSecondaryFocused};
        border: 1px solid ${theme.colorBorderButtonSecondaryFocused};
        ${theme.commonStyles.outline}
        & svg {
          color: ${ICON_COLOR[iconColor] ||
          theme.colorTextButtonSecondaryFocused};
        }
      }
      &:active {
        background-color: ${theme.colorBackgroundButtonSecondaryActive};
        border: 1px solid ${theme.colorBorderButtonSecondaryActive};
        & svg {
          color: ${ICON_COLOR[iconColor] ||
          theme.colorTextButtonSecondaryActive};
        }
      }
      &:disabled {
        background-color: ${theme.colorBackgroundButtonSecondaryDisabled};
        border: 1px solid ${theme.colorBorderButtonSecondaryDisabled};
        & svg {
          color: ${ICON_COLOR[iconColor] ||
          theme.colorTextButtonSecondaryDisabled};
        }
      }
    `}
  ${({ theme, variant, iconColor = "default" }) =>
    variant === "minimal" &&
    css`
      background-color: ${theme.colorBackgroundButtonMinimal};
      & svg {
        color: ${ICON_COLOR[iconColor] || theme.colorTextButtonMinimal};
      }
      &:hover {
        background-color: ${theme.colorBackgroundButtonMinimalHover};
        & svg {
          color: ${ICON_COLOR[iconColor] || theme.colorTextButtonMinimalHover};
        }
      }
      &:focus {
        background-color: ${theme.colorBackgroundButtonMinimalFocused};
        & svg {
          color: ${ICON_COLOR[iconColor] ||
          theme.colorTextButtonMinimalFocused};
        }
        ${theme.commonStyles.outline}
      }
      &:active {
        background-color: ${theme.colorBackgroundButtonMinimalActive};
        & svg {
          color: ${ICON_COLOR[iconColor] || theme.colorTextButtonMinimalActive};
        }
      }
      &:disabled {
        background-color: ${theme.colorBackgroundButtonMinimalDisabled};
        & svg {
          color: ${ICON_COLOR[iconColor] ||
          theme.colorTextButtonMinimalDisabled};
        }
      }
    `}
  ${({ theme, variant }) =>
    variant === "error" &&
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
    `}
`;
