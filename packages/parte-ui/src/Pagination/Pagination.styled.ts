import styled, { css } from "styled-components";
import { Box } from "../Layout";

export const PaginationButton = styled.button<{
  isSelected: boolean;
}>`
  ${({ theme, isSelected }) => css`
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: ${theme.colors.N0};
    ${theme.typography.H300};
    color: ${theme.colors.N700};
    &:not(:disabled):hover {
      background-color: ${theme.colors.N100};
      color: ${theme.colors.N800};
    }
    &:not(:disabled):focus {
      background-color: ${theme.colors.N50};
      ${theme.commonStyles.outline}
      color: ${theme.colors.N700};
    }
    &:not(:disabled):active {
      background-color: ${theme.colors.N200};
      color: ${theme.colors.N800};
    }
    &:disabled {
      cursor: default;
      color: ${theme.colors.N400};
    }
    ${isSelected &&
    css`
      background-color: ${theme.colors.T100} !important;
      color: ${theme.colors.T400} !important;
      outline: none !important;
    `}
  `}
`;

export const EllipsisText = styled(Box)`
  ${() => css`
    width: 32px;
    height: 32px;
  `}
`;
