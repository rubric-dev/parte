import styled, { css } from "styled-components";
import { getSizeStyle } from "../utils/style.util";
import { TextInputSize } from "./TextInput.types";
import { sizeHandler } from "../utils/textInput.utils";

export const Container = styled.div<{
  $width?: string | number;
}>`
  ${({ theme, $width }) => css`
    box-sizing: border-box;
    display: inline-flex;
    overflow: hidden;
    border: 1px solid ${theme.colorBorderDefault};
    border-radius: 4px;
    font-weight: 400;
    ${getSizeStyle($width, "width")};

    &:has(input:hover) {
      border: 1px solid ${theme.colorBorderHover};
      background: ${theme.colorBackgroundHover};
    }
    &:has(input:focus) {
      border: 1px solid ${theme.colorBorderFocused};
      ${theme.commonStyles.outline};
    }

    &:has(input:disabled) {
      background-color: ${theme.colorBackgroundDisabled};
      border: 1px solid ${theme.colorBorderDisabled};
    }

    &:has(input[data-error="true"]) {
      &,
      &:hover,
      &:focus {
        border: 1px solid ${theme.colors.R400};
      }
    }
  `}
`;

export const LeftIconContainer = styled.div<{ $disabled?: boolean }>`
  ${({ theme, $disabled }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: ${theme.spacing.spacing12}px;
    ${$disabled &&
    css`
      & svg {
        color: ${theme.colors.N500};
      }
    `};
  `}
`;
export const RightIconContainer = styled.div<{ $disabled?: boolean }>`
  ${({ theme, $disabled }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${theme.spacing.spacing10}px;
    svg {
      ${$disabled &&
      css`
        color: ${theme.colorTextDisabled};
      `};
    }
  `}
`;

export const Input = styled.input<{
  $hasLeadingIcon?: boolean;
  $hasTrailingIcon?: boolean;
  $textInputSize?: TextInputSize;
}>`
  ${({ theme, $hasLeadingIcon, $hasTrailingIcon, $textInputSize }) => css`
    outline: none;
    border: none;
    box-sizing: border-box;
    padding-left: ${$hasLeadingIcon
      ? css`
          ${theme.spacing.spacing8}px
        `
      : css``};
    padding-right: ${$hasTrailingIcon
      ? css`
          ${theme.spacing.spacing12}px
        `
      : css``};
    background-color: ${theme.colorBackgroundDefault};
    width: 100%;
    color: ${theme.colorParagraph};
    ${theme.typography.P100}
    font-family: inherit;
    ${sizeHandler($textInputSize)};
    &::placeholder {
      color: ${theme.colorTextPlaceholderDefault};
    }
    &:not(:read-only):hover {
      &::placeholder {
        color: ${theme.colorTextPlaceholderHover};
      }
    }
    &:not(:read-only):focus {
      &::placeholder {
        color: ${theme.colorTextPlaceholderFocused};
      }
    }
    &:read-only {
      cursor: default;
    }
    &:disabled {
      color: ${theme.colorTextDisabled};
      &::placeholder {
        color: ${theme.colorTextPlaceholderDisabled};
      }
      background-color: ${theme.colorBackgroundDisabled};
    }

    &[type="number"][data-show-span-button="false"]::-webkit-outer-spin-button,
    &[type="number"][data-show-span-button="false"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &[type="number"][data-show-span-button="false"] {
      -moz-appearance: textfield;
    }
  `}
`;
