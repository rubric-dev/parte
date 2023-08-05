import styled, { DefaultTheme, css } from "styled-components";
import { Box } from "../../Layout";
import { SelectRowProps, SelectRowType } from "./SelectRow.types";

const commonSelectRowStyle = css`
  position: relative;
  align-items: center;
  padding: 0px 12px;
  width: 240px;
  min-height: 32px;
  outline: none;
  user-select: none;
  display: flex;
  gap: ${({ theme }) => `${theme.spacing.spacing8}px`};
`;
const indicator = css`
  ${({ theme }) => css`
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 100%;
      border-radius: 0px 2px 2px 0px;
      background-color: ${theme.colorIndicatorSelectRow};
      width: 2px;
    }
  `}
`;

const titleStyle = (theme: DefaultTheme) => css`
  background-color: ${theme.colors.N0};
  color: ${theme.colors.N600};
  ${theme.typography.C200}
  &:not(:last-child) {
    border-bottom: 1px solid ${theme.colors.N300};
  }
`;

const searchStyle = (theme: DefaultTheme) => css`
  background-color: ${theme.colors.N50};
  ${theme.typography.C200}
  color: ${theme.colors.N600};
  &:not(:last-child) {
    border-bottom: 1px solid ${theme.colors.N400};
  }
`;

const elementStyle = (theme: DefaultTheme) => css`
  background-color: ${theme.colorBackgroundDropdown};
  &:not(:last-child) {
    border-bottom: 1px solid ${theme.colors.N300};
  }
  color: ${theme.colors.N800};
  box-sizing: border-box;
  ${theme.typography.P100}
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${theme.colorBackgroundDropdownHover};
  }

  &[data-selected="true"] {
    background-color: ${theme.colorBackgroundDropdownSelected};
    color: ${theme.colorTextSelectRowSelected};
    ${indicator}
    svg {
      color: ${theme.colorTextSelectRowSelected};
    }
  }

  &[data-disabled="true"] {
    background-color: ${theme.colors.N0};
    color: ${theme.colors.N500};
    cursor: default;
    svg {
      color: ${theme.colors.N400};
    }
  }
`;

export const SelectRow = styled(Box)<{ $variant: SelectRowType }>`
  ${commonSelectRowStyle}
  ${({ theme, $variant }) => {
    switch ($variant) {
      case "search":
        return searchStyle(theme);
      case "title":
        return titleStyle(theme);
      case "element":
        return elementStyle(theme);
    }
  }}
`;

export const SearchInput = styled.input<SelectRowProps>`
  ${({ theme }) => css`
    background-color: transparent;
    border: none;
    outline: none;
    margin-left: ${theme.spacing.spacing8}px;
    width: 100%;
    color: ${theme.colors.N800};
    &::placeholder {
      ${theme.typography.P100}
      color: ${theme.colors.N600};
    }
  `}
`;
