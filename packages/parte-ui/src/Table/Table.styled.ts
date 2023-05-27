import styled, { css } from "styled-components";
import { Box } from "../Layout";
import { BoxProps } from "../Layout/Box.types";
import { HeaderContainerProps, RowProps } from "./Table.types";

export const Table = styled(Box)`
  ${() => css`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  `}
`;

const stickyStyle = css`
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const HeaderContainer = styled(Box)<HeaderContainerProps>`
  ${({ theme, sticky }) => css`
    width: 100%;
    height: fit-content;
    border: 1px solid ${theme.colors.N300};
    border-top-left-radius: ${theme.spacing.spacing4}px;
    border-top-right-radius: ${theme.spacing.spacing4}px;
    ${sticky && stickyStyle}
  `}
`;

export const Body = styled(Box)`
  ${({ theme }) => css`
    overflow-y: auto;
    flex: 1;
    border: 1px solid ${theme.colors.N300};
    border-top: none;
    border-radius: 0 0 4px 4px;
  `}
`;

export const HeaderRow = styled(Box)`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0 ${theme.spacing.spacing16}px;
    background-color: ${theme.colors.N50};
    border-radius: 4px 4px 0 0;
  `}
`;

export const Row = styled(Box)<BoxProps & RowProps>`
  ${({ theme, selectable, selected }) => {
    const selectableTrStyle = css`
      cursor: pointer;
      &:hover,
      &:focus {
        background-color: ${selected ? theme.colors.B50 : theme.colors.N75};
      }
    `;
    return css`
      box-sizing: border-box;
      display: flex;
      width: 100%;
      background-color: ${selected ? theme.colors.B50 : theme.colors.N0};
      padding: 0 ${theme.spacing.spacing16}px;
      &:not(:last-child) {
        border-bottom: 1px solid ${theme.colors.N300};
      }
      ${selectable && selectableTrStyle}
    `;
  }}
`;

export const HeaderCell = styled(Box)`
  ${({ theme }) => css`
    ${theme.typography.C100}
    color: ${theme.colors.N700};
    text-transform: uppercase;
  `}
`;

export const Cell = styled(Box)`
  ${({ theme }) => css`
    ${theme.typography.P100};
    color: ${theme.colors.N700};
  `}
`;

export const TableFilterBar = styled(Box)`
  ${({ theme }) => css`
    padding: ${theme.spacing.spacing16}px ${theme.spacing.spacing24}px;
    border-bottom: 1px solid ${theme.colors.N300};
    gap: ${theme.spacing.spacing6}px;
    background-color: ${theme.colors.N0};
  `}
`;

export const ClearFilter = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.B400};
    background-color: ${theme.colors.transparent};
    outline: none;
    border: none;
    ${theme.typography.P100}
    cursor: pointer;
    &:hover {
      color: ${theme.colors.B500};
    }
  `}
`;
