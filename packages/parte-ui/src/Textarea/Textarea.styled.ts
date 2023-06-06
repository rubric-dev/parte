import styled, { css } from "styled-components";
import { TextAreaProps } from "./Textarea.types";

export const TextareaWrapper = styled.div<{
  focused: boolean;
  error?: boolean;
  disabled?: boolean;
  hover?: boolean;
}>`
  ${({ theme, error, hover, focused, disabled }) => css`
    outline: none;
    width: 100%;
    min-height: 80px;
    min-width: 15px;
    background-color: ${theme.colorBackgroundDefault};
    color: ${theme.colorParagraph};
    ${theme.typography.P100}
    display: inline-flex;
    border: 1px solid ${theme.colorBorderDefault};
    border-radius: 4px;
    width: 100%;
    ${hover &&
    css`
      border: 1px solid ${theme.colorBorderHover};
      background: ${theme.colorBackgroundHover};
    `}
    ${focused &&
    css`
      border: 1px solid ${theme.colorBorderFocused};
      ${theme.commonStyles.outline}
    `}
    ${disabled &&
    css`
      color: ${theme.colorTextDisabled};
      background-color: ${theme.colorBackgroundDisabled};
      border: 1px solid ${theme.colorBorderDisabled};
    `}
    ${!!error &&
    css`
      &,
      &:hover,
      &:focus {
        border: 1px solid ${theme.colors.R400};
      }
    `}
  `}
`;

export const Textarea = styled.textarea<{
  focused: boolean;
  disabled?: boolean;
  hover?: boolean;
}>`
  ${({ theme, disabled, hover, focused }) => css`
    outline: none;
    border: none;
    width: 100%;
    min-height: 80px;
    min-width: 15px;
    resize: none;
    border-radius: 4px;
    padding: ${theme.spacing.spacing8}px ${theme.spacing.spacing12}px;
    background-color: ${theme.colorBackgroundDefault};
    color: ${theme.colorParagraph};
    ${theme.typography.P100}
    display: inline-flex;
    font-family: inherit;
    ::placeholder {
      color: ${theme.colorTextPlaceholderDefault};
    }
    ${hover &&
    css`
      ::placeholder {
        color: ${theme.colorTextPlaceholderHover};
      }
    `}
    ${focused &&
    css`
      ::placeholder {
        color: ${theme.colorTextPlaceholderFocused};
      }
    `}
    ${disabled &&
    css`
      color: ${theme.colorTextDisabled};
      ::placeholder {
        color: ${theme.colorTextPlaceholderDisabled};
      }
    `}
  `}
`;
