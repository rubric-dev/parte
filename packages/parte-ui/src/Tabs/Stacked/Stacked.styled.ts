import styled, { css } from "styled-components";
import { Box } from "../../Layout";

import {
  StackedSize,
  StackedStyledProps,
  StackedVariant,
} from "./Stacked.types";
import { getColors, sizeHandler } from "../../utils/stacked.util";

export const stackedPrimaryStyle = css<StackedStyledProps>`
  ${({ $direction, theme }) => css`
    padding: 10px 16px;
    ${$direction === "horizontal"
      ? `margin-right: 8px;`
      : `margin-bottom: 8px;`}
    &:last-child {
      ${$direction === "horizontal"
        ? `margin-right: 0px;`
        : `margin-bottom: 0px;`}
    }
    color: ${theme.colors.N700};
    svg {
      color: ${theme.colors.N600};
    }
    &:hover {
      color: ${theme.colors.N800};
      background-color: ${theme.colors.N100};
      svg {
        color: ${theme.colors.N700};
      }
    }
    &:active {
      color: ${theme.colors.N900};
      background-color: ${theme.colors.N200};
      svg {
        color: ${theme.colors.N700};
      }
    }
    &:focus {
      color: ${theme.colors.N700};
      background-color: ${theme.colors.N200};
      svg {
        color: ${theme.colors.N900};
      }
    }

    &[data-selected="true"] {
      &,
      &:hover,
      &:active,
      &:focus {
        color: ${theme.colorTextTabSelected};
        background-color: ${theme.colorBackgroundTabSelected};
        svg {
          color: ${theme.colorTextTabSelected};
        }
      }
      &[data-disabled="true"] {
        color: ${theme.colors.N500};
        background-color: ${theme.colors.N100};
        svg {
          color: ${theme.colors.N500};
        }
      }
    }
    &[data-disabled="true"] {
      &,
      &:hover,
      &:active,
      &:focus {
        color: ${theme.colors.N400};
        background-color: transparent;
        svg {
          color: ${theme.colors.N400};
        }
        cursor: default;
        pointer-events: none;
        outline: none;
      }
      &[data-selected="true"] {
        background-color: ${theme.colors.N100};
        color: ${theme.colors.N500};
      }
    }
  `}
`;
export const stackedSecondaryStyle = css<StackedStyledProps>`
  ${({ $direction, theme }) => css`
    padding: 10px 16px;
    ${$direction === "horizontal"
      ? `margin-right: 8px;`
      : `margin-bottom: 8px;`}
    &:last-child {
      ${$direction === "horizontal"
        ? `margin-right: 0px;`
        : `margin-bottom: 0px;`}
    }
    color: ${theme.colors.N500};
    &:hover {
      color: ${theme.colors.N600};
      background-color: ${theme.colors.N100};
      svg {
        color: ${theme.colors.N600};
      }
    }
    &:active {
      color: ${theme.colors.N700};
      background-color: ${theme.colors.N200};
      svg {
        color: ${theme.colors.N700};
      }
    }
    &:focus {
      background-color: ${theme.colors.N0};
    }

    &[data-selected="true"] {
      &,
      &:hover,
      &:active,
      &:focus {
        color: ${theme.colors.N800};
        background-color: ${theme.colors.N200};
        svg {
          color: ${theme.colors.N800};
        }
      }
      &[data-disabled="true"] {
        background-color: ${theme.colors.N75};
        color: ${theme.colors.N400};
      }
    }
    &[data-disabled="true"] {
      &,
      &:hover,
      &:active,
      &:focus {
        color: ${theme.colors.N400};
        background-color: transparent;
        svg {
          color: ${theme.colors.N400};
        }
        cursor: default;
        pointer-events: none;
        outline: none;
      }
      &[data-selected="true"] {
        color: ${theme.colors.N400};
      }
    }
  `}
`;

export const Stacked = styled.div<StackedStyledProps>`
  ${({ theme, $direction, $variant, $size }) => css`
    box-sizing: border-box;
    display: ${$direction === "horizontal" ? "inline-flex" : "flex"};
    width: ${$direction === "horizontal" ? "auto" : "100%"};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.N500};
    gap: ${`${theme.spacing.spacing12}px`};
    background-color: transparent;
    border: none;
    margin-right: 20px;
    outline: none;
    &:focus {
      & > div:first-child {
        ${theme.commonStyles.outline}
      }
    }
  `}
`;
export const StackedContent = styled.div<{
  $variant: StackedVariant;
  $size: StackedSize;
}>`
  ${({ theme, $variant, $size }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    gap: ${`${theme.spacing.spacing12}px`};
    background-color: transparent;
    border: none;
    cursor: pointer;
    ${getColors($variant)}
    ${sizeHandler($size, $variant)}
  `}
`;
export const StackedLine = styled(Box)<{ $variant: StackedVariant }>`
  ${({ theme, $variant }) => css`
    &[data-selected="false"] {
      background: none;
      &[data-disabled="true"] {
        background: ${theme.colors.N500};
      }
    }
    &[data-disabled="true"] {
      background: ${theme.colors.N500};
      &[data-selected="false"] {
        background: none;
      }
    }
  `}
`;
