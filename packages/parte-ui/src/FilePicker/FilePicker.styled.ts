import styled, { css } from "styled-components";
import { Button } from "../Button";
import { Box } from "../Layout";
import { FILE_PICKER_INPUT_WRAPPER } from "../constant/DOM";

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
    & div#${FILE_PICKER_INPUT_WRAPPER} {
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
      ${focused &&
      css`
        z-index: 2;
      `}
    }
  `}
`;

export const FilePickerButton = styled(Button)<{ $error?: boolean }>`
  ${({ theme, $error }) => css`
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    margin-left: -1px;
    z-index: 1;
    ${theme.typography.C200};
    ${$error &&
    css`
      border-color: ${theme.colors.R400} !important;
      color: ${theme.colors.R400} !important;
      background-color: ${theme.colorBackgroundButtonSecondary} !important;
      outline: none !important;
    `}
  `}
`;
