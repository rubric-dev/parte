import styled, { css } from "styled-components";
import { getSizeStyle } from "../utils/style.util";

export const InputWrapper = styled.div<{
  focused: boolean;
  disabled?: boolean;
  hover?: boolean;
  $width?: string | number;
}>`
  ${({ theme, focused, disabled, hover, $width }) => css`
    box-sizing: border-box;
    display: flex;
    overflow: hidden;
    border: 1px solid ${theme.colorBorderDefault};
    border-radius: 4px;
    ${getSizeStyle($width, "width")}

    ${hover &&
    css`
      border: 1px solid ${theme.colorBorderHover};
      background: ${theme.colorBackgroundHover};
    `};
    ${focused &&
    css`
      border: 1px solid ${theme.colorBorderFocused};
      ${theme.commonStyles.outline}
    `};
    ${disabled &&
    css`
      background-color: ${theme.colorBackgroundDisabled};
      border: 1px solid ${theme.colorBorderDisabled};
    `};

    &[data-error="true"] {
      border: 1px solid ${theme.colors.R400};
    }
  `}
`;

export const RightIconContainer = styled.div<{ disabled: boolean }>`
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

export const Input = styled.input`
  ${({ theme }) => css`
    outline: none;
    border: none;
    box-sizing: border-box;
    flex: 1;
    padding: ${theme.spacing.spacing0}px;
    background-color: ${theme.colorBackgroundDefault};
    color: ${theme.colorParagraph};
    ${theme.typography.P100}

    &::placeholder {
      color: ${theme.colorTextPlaceholderDefault};
    }

    &:hover {
      &::placeholder {
        color: ${theme.colorTextPlaceholderHover};
      }
    }
    &:focus {
      &::placeholder {
        color: ${theme.colorTextPlaceholderFocused};
      }
    }
    &:disabled {
      color: ${theme.colorTextDisabled};
      &::placeholder {
        color: ${theme.colorTextPlaceholderDisabled};
      }
      background-color: ${theme.colorBackgroundDisabled};
    }
  `}
`;
