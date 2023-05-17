import styled, { css } from "styled-components";
import { Box } from "../Layout";
import { BoxProps } from "../Layout/Box.types";
import { BodyProps, HeaderContainerProps, RowProps } from "./Table.types";

export const Table = styled.table<{ showBorder: boolean }>`
  ${({ theme, showBorder }) => css`
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    border-collapse: collapse;
    overflow: hidden;
    ${showBorder &&
    `border-radius: 4px;
    border-style: hidden;
    box-shadow: 0 0 0 1px ${theme.colors.N300};
     `}
    & div,
    th,
    td,
    table {
      vertical-align: middle;
    }
  `}
`;

const stickyStyle = css`
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const HeaderContainer = styled.thead<HeaderContainerProps>`
  ${({ theme, sticky }) => css`
    height: fit-content;
    border-top-left-radius: ${theme.spacing.spacing4}px;
    border-top-right-radius: ${theme.spacing.spacing4}px;
    ${sticky && stickyStyle}
    width:100%;
  `}
`;

export const HeaderRow = styled.tr`
  ${({ theme }) => css`
    width: 70%;
    background-color: ${theme.colors.N50};
    border-radius: 4px 4px 0 0;
    border-bottom: 1px solid ${theme.colors.N300};
    height: 48px;
  `}
`;

export const Body = styled.tbody<BodyProps>`
  ${({ theme }) => css`
    overflow-y: overlay;
    width: 100%;
    border-bottom: 1px solid ${theme.colors.N300};
    & > *:last-child {
      border-bottom: none;
    }
    border-radius: 0 0 4px 4px;
  `}
`;

export const Th = styled.th`
  ${({ theme }) => css`
    height: 100%;
  `}
`;

export const Row = styled.tr<BoxProps & RowProps>`
  ${({ theme, selectable, selected }) => {
    const selectableTrStyle = css`
      cursor: pointer;
      &:hover,
      &:focus {
        background-color: ${selected ? theme.colors.T50 : theme.colors.N75};
      }
    `;
    return css`
      box-sizing: border-box;
      width: 100%;
      border-bottom: 1px solid ${theme.colors.N300};
      background-color: ${selected ? theme.colors.T50 : theme.colors.N0};
      ${selectable && selectableTrStyle}
    `;
  }}
`;

export const HeaderCell = styled(Box)`
  ${({ theme }) => css`
    ${theme.typography.C100}
    color: ${theme.colors.N700};
    text-transform: uppercase;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 8px 16px;
  `}
`;

export const Cell = styled(Box)`
  ${({ theme }) => css`
    ${theme.typography.P100};
    color: ${theme.colors.N700};
    padding: 16px;
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
    color: ${theme.colors.T400};
    background-color: ${theme.colors.transparent};
    outline: none;
    border: none;
    ${theme.typography.P100}
    cursor: pointer;
    &:hover {
      color: ${theme.colors.T500};
    }
  `}
`;
