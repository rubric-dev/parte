import styled, { css } from "styled-components";
import { TextAreaProps } from "./Textarea.types";

export const Container = styled.div<TextAreaProps>`
  ${({ fullWidth }) => css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: ${fullWidth ? "100%" : "fit-content"};
  `}
`;

export const LabelWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    column-gap: ${theme.spacing.spacing2}px;
    margin-bottom: ${theme.spacing.spacing2}px;
  `}
`;

export const Required = styled.label`
  ${({ theme }) => css`
    ${theme.typography.C200}
    color: ${theme.colors.R400};
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    ${theme.typography.H400}
    color: ${theme.colorHeading};
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    ${theme.typography.P100}
    color: ${theme.colorParagraph};
    margin-bottom: ${theme.spacing.spacing2}px;
  `}
`;

export const ErrorText = styled.p`
  ${({ theme }) => css`
    ${theme.typography.P100};
    color: ${theme.colors.R400};
    margin-top: ${theme.spacing.spacing2}px;
  `}
`;

export const TextareaWrapper = styled.div<{
  focused: boolean;
  error?: boolean;
  disabled?: boolean;
  hover?: boolean;
  fullWidth?: boolean;
}>`
  ${({ theme, error, hover, focused, disabled, fullWidth }) => css`
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
    width: ${fullWidth ? "100%" : "fit-content"};
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
