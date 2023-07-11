import styled, { css } from "styled-components";
import { StyledTextAreaProps } from "./Textarea.types";

export const Textarea = styled.textarea<StyledTextAreaProps>`
  ${({ theme, $resizable }) => css`
    width: 100%;
    min-height: 80px;
    min-width: 15px;
    ${!$resizable && `resize: none;`}

    padding: ${theme.spacing.spacing8}px ${theme.spacing.spacing12}px;
    background-color: ${theme.colorBackgroundDefault};
    color: ${theme.colorParagraph};
    ${theme.typography.P100}
    display: inline-flex;
    font-family: inherit;
    &::placeholder {
      color: ${theme.colorTextPlaceholderDefault};
    }

    border: 1px solid ${theme.colorBorderDefault};
    border-radius: 4px;

    &:hover {
      border: 1px solid ${theme.colorBorderHover};
      background: ${theme.colorBackgroundHover};
      &::placeholder {
        color: ${theme.colorTextPlaceholderHover};
      }
    }
    &:focus {
      border: 1px solid ${theme.colorBorderFocused};
      ${theme.commonStyles.outline}
      &::placeholder {
        color: ${theme.colorTextPlaceholderFocused};
      }
    }
    &:disabled {
      color: ${theme.colorTextDisabled};
      background-color: ${theme.colorBackgroundDisabled};
      border: 1px solid ${theme.colorBorderDisabled};
      &::placeholder {
        color: ${theme.colorTextPlaceholderDisabled};
      }
    }
    &[data-error="true"] {
      &,
      &:hover,
      &:focus {
        border: 1px solid ${theme.colors.R400};
      }
    }
  `}
`;
