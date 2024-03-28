import { ExtractToStyledProps } from "@parte-ds/utils";
import styled, { css } from "styled-components";
import {
  FilterButtonSize,
  FilterButtonProps,
  FilterButtonType,
} from "./FilterButton.types";
import { theme } from "../@foundations";

const sizeHandler = (size: FilterButtonSize) => {
  if (size === "large")
    return css`
      height: 40px;
      padding: 10px 12px;
    `;

  if (size === "medium")
    return css`
      height: 32px;
      padding: 8px 12px;
    `;
};

const typeHaandler = (type: FilterButtonType) => {
  if (type === "fill")
    return css`
      color: ${theme.colors.N700};
      background-color: ${theme.colors.N100};
      border: none;
      outline: none;
      &:hover {
        background-color: ${theme.colors.N200};
      }
      &:active {
        color: ${theme.colors.N800};
        background-color: ${theme.colors.N300};
      }
      &[data-selected="true"] {
        color: ${theme.colors.B400};
        background-color: ${theme.colors.B50};
        svg {
          color: ${theme.colors.B400};
        }
      }
    `;
  if (type === "outline")
    return css`
      color: ${theme.colors.N700};
      background-color: ${theme.colors.N0};
      border: 1px solid ${theme.colors.N400};
      &:hover {
        background-color: ${theme.colors.N100};
      }
      &:active {
        color: ${theme.colors.N800};
        background-color: ${theme.colors.N200};
      }
      &[data-selected="true"] {
        color: ${theme.colors.B400};
        background-color: ${theme.colors.B50};
      }
    `;
};

const filterButtonStyles = css<FilterButtonProps>`
  ${({ size, type }) => css`
    ${sizeHandler(size ?? "large")}
    ${typeHaandler(type ?? "fill")}
  `}
  position: relative;
  display: inline-flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  text-decoration: none;
  vertical-align: middle;
  outline: none;
  user-select: none;
  cursor: pointer;
  white-space: nowrap;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  gap: 6px;
  border-radius: 4px;
  font-family: inherit;
  width: fit-content;

  &:disabled {
    cursor: default;
  }
`;
export const StyledFilterButton = styled.button<FilterButtonProps>`
  ${filterButtonStyles}
`;
