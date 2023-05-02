import styled, { css } from "styled-components";
import { Button } from "../Button";
import { Box } from "../Layout";

export const Container = styled(Box)`
  ${() => css`
    width: fit-content;
    border-radius: 4px;
    display: flex;
  `}
`;

export const FilePickerInput = styled(Box)<{ focused: boolean }>`
  ${({ focused, theme }) => css`
    & input {
      max-width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      caret-color: transparent;
      cursor: default;
      &::placeholder {
        color: ${theme.colorTextPlaceholderDefault} !important;
      }
    }
    & div#parte-text-input-wrapper {
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
      ${focused &&
      css`
        z-index: 2;
      `}
    }
  `}
`;

export const FilePickerButton = styled(Button)<{ error: boolean }>`
  ${({ theme, error }) => css`
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    margin-left: -1px;
    z-index: 1;
    ${theme.typography.C200};
    ${error &&
    css`
      border-color: ${theme.colors.R400} !important;
      color: ${theme.colors.R400} !important;
      background-color: ${theme.colorBackgroundButtonSecondary} !important;
      outline: none !important;
    `}
  `}
`;
