import styled, { DefaultTheme, css } from "styled-components";
import { Box } from "../../Layout";
import { SelectRowProps, SelectRowType } from "./SelectRow.types";

const commonSelectRowStyle = css`
  position: relative;
  align-items: center;
  min-height: 32px;
  outline: none;
  user-select: none;
  display: flex;
  padding: 0 20px;
`;

const titleStyle = (theme: DefaultTheme) => css`
  width: 100%;
  height: 32px;
  padding: 8px 20px;
  background-color: ${theme.colors.N0};
  color: ${theme.colors.N600};
  ${theme.typography.C200}
  gap: ${({ theme }) => `${theme.spacing.spacing12}px`};
`;

const searchStyle = (theme: DefaultTheme) => css`
  width: 100%;
  height: 48px;
  background-color: ${theme.colors.N75};
  ${theme.typography.P200}
  color: ${theme.colors.N600};
  &:not(:last-child) {
    border-bottom: 1px solid ${theme.colors.N200};
  }
  gap: ${({ theme }) => `${theme.spacing.spacing8}px`};
`;

const elementStyle = (theme: DefaultTheme, isMulti?: boolean) => css`
  padding: 14px;
  margin-left: 8px;
  margin-right: 8px;
  height: 48px;
  background-color: ${theme.colorBackgroundDropdown};
  color: ${theme.colors.N800};
  box-sizing: border-box;
  ${theme.typography.P200}
  cursor: pointer;
  gap: ${({ theme }) => `${theme.spacing.spacing12}px`};

  &:hover {
    background-color: ${theme.colors.N100};
    border-radius: 8px;
    div {
      border: 1px solid ${theme.colors.N600};
    }
  }
  svg {
    color: ${theme.colors.N700};
  }

  &[data-selected="true"] {
    color: ${isMulti ? theme.colors.N800 : theme.colorTextSelectRowSelected};
    svg {
      color: ${theme.colorTextSelectRowSelected};
    }
  }
  &[data-selected="false"] {
    span > svg {
      color: ${isMulti ? theme.colors.N0 : ""};
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

export const SelectRow = styled(Box)<{
  $variant: SelectRowType;
  $isMulti?: boolean;
  $isSearchable?: boolean;
}>`
  ${commonSelectRowStyle}
  ${({ theme, $variant, $isMulti }) => {
    switch ($variant) {
      case "search":
        return searchStyle(theme);
      case "title":
        return titleStyle(theme);
      case "element":
        return elementStyle(theme, $isMulti);
    }
  }}
`;

export const SearchInput = styled.input<SelectRowProps>`
  ${({ theme }) => css`
    background-color: transparent;
    border: none;
    outline: none;
    width: 100%;
    color: ${theme.colors.N800};
    &::placeholder {
      ${theme.typography.P200}
      color: ${theme.colors.N600};
    }
  `}
`;
