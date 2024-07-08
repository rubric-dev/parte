import styled, { css } from "styled-components";
import type {
  FilterButtonSize,
  FilterButtonStyledProps,
  FilterButtonVariant,
} from "./FilterButton.types";

const sizeHandler = (size: FilterButtonSize) => {
  if (size === "large")
    return css`
      height: 40px;
      padding: 10px 12px;
      ${({ theme }) => theme.typography.C300};
    `;

  if (size === "medium")
    return css`
      height: 32px;
      padding: 8px 12px;
      ${({ theme }) => theme.typography.C200};
    `;
};

const typeHaandler = (variant: FilterButtonVariant) => {
  if (variant === "fill")
    return css`
      color: ${({ theme }) => theme.colors.N700};
      background-color: ${({ theme }) => theme.colors.N100};
      border: none;
      outline: none;
      &:hover {
        background-color: ${({ theme }) => theme.colors.N200};
      }
      &:active {
        color: ${({ theme }) => theme.colors.N800};
        background-color: ${({ theme }) => theme.colors.N300};
      }
      &[data-active="true"] {
        color: ${({ theme }) => theme.colors.B400};
        background-color: ${({ theme }) => theme.colors.B50};
        svg {
          color: ${({ theme }) => theme.colors.B400};
        }
      }
      &[data-active="true"]:hover {
        background-color: ${({ theme }) => theme.colors.B100};
      }
    `;
  if (variant === "outline")
    return css`
      color: ${({ theme }) => theme.colors.N700};
      background-color: ${({ theme }) => theme.colors.N0};
      border: 1px solid ${({ theme }) => theme.colors.N400};
      &:hover {
        background-color: ${({ theme }) => theme.colors.N100};
      }
      &:active {
        color: ${({ theme }) => theme.colors.N800};
        background-color: ${({ theme }) => theme.colors.N200};
      }
      &[data-active="true"] {
        color: ${({ theme }) => theme.colors.B400};
        background-color: ${({ theme }) => theme.colors.B50};
      }
      &[data-active="true"]:hover {
        background-color: ${({ theme }) => theme.colors.B100};
      }
    `;
};

export const StyledFilterButton = styled.button<FilterButtonStyledProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  vertical-align: middle;

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

  ${({ $variant, $size }) => css`
    ${sizeHandler($size)}
    ${typeHaandler($variant)}
  `}

  &:focus {
    ${({ theme }) => theme.commonStyles.outline}
  }

  &:disabled {
    cursor: default;
  }
`;
