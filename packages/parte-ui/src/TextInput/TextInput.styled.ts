import styled, { css } from "styled-components";
import { TextInputProps } from "./TextInput.types";

export const InputWrapper = styled.div<{
  focused: boolean;
  error?: boolean;
  disabled?: boolean;
  hover?: boolean;
  readOnly?: boolean;
}>`
  ${({ theme, focused, disabled, error, hover, readOnly }) => css`
    box-sizing: border-box;
    display: inline-flex;
    overflow: hidden;
    border: 1px solid ${theme.colorBorderDefault};
    border-radius: 4px;
    width: 100%;
    ${!readOnly &&
    hover &&
    css`
      border: 1px solid ${theme.colorBorderHover};
      background: ${theme.colorBackgroundHover};
    `}
    ${!readOnly &&
    focused &&
    css`
       {
        border: 1px solid ${theme.colorBorderFocused};
        ${theme.commonStyles.outline}
      }
    `}
      ${disabled &&
    css`
       {
        background-color: ${theme.colorBackgroundDisabled};
        border: 1px solid ${theme.colorBorderDisabled};
      }
    `}
      ${error &&
    css`
      &,
      &:hover,
      &:focus {
        border: 1px solid ${theme.colors.R400};
      }
    `};
  `}
`;

export const LeftIconContainer = styled.div<TextInputProps>`
  ${({ theme, disabled }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: ${theme.spacing.spacing12}px;
    ${disabled &&
    css`
      & svg {
        color: ${theme.colors.N500};
      }
    `};
  `}
`;
export const RightIconContainer = styled.div<TextInputProps>`
  ${({ theme, disabled }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${theme.spacing.spacing10}px;
    svg {
      ${disabled &&
      css`
        color: ${theme.colorTextDisabled};
      `};
    }
  `}
`;

export const Input = styled.input<TextInputProps>`
  ${({ theme, leadingIcon }) => css`
    outline: none;
    border: none;
    box-sizing: border-box;
    padding: ${theme.spacing.spacing8 - 1}px ${theme.spacing.spacing12}px;
    padding-left: ${leadingIcon
      ? css`
          ${theme.spacing.spacing8}px
        `
      : css`
          ${theme.spacing.spacing12}px
        `};
    padding-right: ${theme.spacing.spacing12}px;
    background-color: ${theme.colorBackgroundDefault};
    width: 100%;
    color: ${theme.colorParagraph};
    ${theme.typography.P100}
    font-family: inherit;
    ::placeholder {
      color: ${theme.colorTextPlaceholderDefault};
    }
    &:not(:read-only):hover {
      ::placeholder {
        color: ${theme.colorTextPlaceholderHover};
      }
    }
    &:not(:read-only):focus {
      ::placeholder {
        color: ${theme.colorTextPlaceholderFocused};
      }
    }
    &:read-only {
      cursor: default;
    }
    &:disabled {
      color: ${theme.colorTextDisabled};
      ::placeholder {
        color: ${theme.colorTextPlaceholderDisabled};
      }
      background-color: ${theme.colorBackgroundDisabled};
    }
  `}
`;
