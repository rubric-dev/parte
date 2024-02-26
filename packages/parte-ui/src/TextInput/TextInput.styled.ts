import styled, { css } from "styled-components";
import { getSizeStyle } from "../utils/style.util";
import { getHeight, sizeHandler } from "../utils/textInput.utils";
import { TextInputSize, TextInputVariant } from "./TextInput.types";

export const Container = styled.div<{
  $width?: string | number;
  $variant?: TextInputVariant;
  $textInputSize: TextInputSize;
}>`
  ${({ theme, $width, $variant, $textInputSize }) => css`
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    overflow: hidden;
    border-radius: 4px;
    ${getSizeStyle($width, "width")};
    ${getHeight($textInputSize)}
    ${$variant === "text" &&
    css`
      border: 1px solid ${theme.colorBorderDefault};
      ${getSizeStyle($width, "width")};
      ${getHeight($textInputSize)}
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
    ${$variant === "ghost-text" &&
    css`
      padding: 8px;

      &:has(input:hover) {
        background: ${theme.colors.N100};
      }
      &:has(input:focus) {
        background-color: ${theme.colors.N0};
      }

      &:has(input:disabled) {
        background-color: ${theme.colors.N50};
      }

      &:has(input[data-error="true"]) {
        &,
        &:hover,
        &:focus {
          border: 1px solid ${theme.colors.R400};
        }
      }
    `}
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
  $variant: TextInputVariant;
}>`
  ${({
    theme,
    $hasLeadingIcon,
    $hasTrailingIcon,
    $textInputSize,
    $variant,
  }) => css`
    ${$variant === "text" &&
    css`
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
      width: 100%;
      color: ${theme.colorParagraph};
      ${theme.typography.P100}
      font-family: inherit;
      ${sizeHandler($variant, $textInputSize)};
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
    `} ${$variant === "ghost-text" &&
    css`
      margin: 0;
      border: none;
      outline: none;
      padding: 0;
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
      width: 100%;
      background-color: ${theme.colorBackgroundDefault};
      color: ${$textInputSize === "medium"
        ? theme.colors.N700
        : theme.colors.N800};
      ${sizeHandler($variant, $textInputSize)};
      &::placeholder {
        color: ${theme.colors.N500};
        font-weight: 500;
      }
      &:not(:read-only):hover {
        background-color: ${theme.colors.N100};
      }
      &:not(:read-only):focus {
        background-color: ${theme.colors.N0};
        caret-color: ${theme.colors.N800};
        outline: none;
      }
      &:read-only {
        cursor: default;
      }
      &:disabled {
        color: ${theme.colors.N400};
        &::placeholder {
          color: ${theme.colors.N400};
        }
        background-color: ${theme.colors.N50};
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
  `}
`;
