import styled, { css } from "styled-components";
import { Box } from "../../Layout";
import {
  getLineBackgroundColors,
  getStyles,
  sizeHandler,
} from "../../utils/tab.util";
import { TabSize, TabStyledProps, TabVariant } from "./Tab.types";

export const tabPrimaryStyle = css<TabStyledProps>`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    justify-content: space-between;
    &:last-child {
      margin-right: 0px;
    }
    color: ${theme.colors.N700};
    svg {
      color: ${theme.colors.N600};
    }
    &:hover {
      color: ${theme.colors.N800};
      svg {
        color: ${theme.colors.N700};
      }
    }
    &:active {
      color: ${theme.colors.N900};
      svg {
        color: ${theme.colors.N700};
      }
    }
    &:focus {
      ${theme.commonStyles.outline}
      color: ${theme.colors.N700};
      back svg {
        color: ${theme.colors.N700};
      }
    }

    &[data-selected="true"] {
      &,
      &:hover,
      &:active,
      &:focus {
        color: ${theme.colors.B400};
        svg {
          color: ${theme.colors.B400};
        }
      }
      &:focus {
        ${theme.commonStyles.outline}
      }
      &[data-disabled="true"] {
        &:active {
          color: ${theme.colors.N500};
          svg {
            color: ${theme.colors.N500};
          }
        }
      }
    }

    &[data-disabled="true"] {
      &,
      &:hover,
      &:active,
      &:focus {
        color: ${theme.colors.N500};
        svg {
          color: ${theme.colors.N400};
        }
        pointer-events: none;
        outline: none;
      }
    }
  `}
`;
export const tabSecondaryStyle = css<TabStyledProps>`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    justify-content: space-between;
    &:last-child {
      margin-right: 0px;
    }
    color: ${theme.colors.N500};
    svg {
      color: ${theme.colors.N500};
    }
    &:hover {
      color: ${theme.colors.N600};
      svg {
        color: ${theme.colors.N600};
      }
    }
    &:active {
      color: ${theme.colors.N700};
      svg {
        color: ${theme.colors.N700};
      }
    }
    &:focus {
      ${theme.commonStyles.outline}
      color: ${theme.colors.N500};
      svg {
        color: ${theme.colors.N500};
      }
    }

    &[data-selected="true"] {
      &,
      &:hover,
      &:active {
        color: ${theme.colors.N800};
        svg {
          color: ${theme.colors.N800};
        }
      }
      &:focus {
        ${theme.commonStyles.outline}
      }
    }

    &[data-disabled="true"] {
      &,
      &:hover,
      &:active,
      &:focus {
        color: ${theme.colors.N400};
        svg {
          color: ${theme.colors.N400};
        }
        pointer-events: none;
        outline: none;
      }
    }
  `}
`;

export const Tab = styled.div<TabStyledProps>`
  ${({ theme, $direction, $gap }) => css`
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
    margin-right: ${`${$gap}px`};
    outline: none;
    &:focus {
      & > div:first-child {
        ${theme.commonStyles.outline}
      }
    }
  `}
`;
export const TabContent = styled.div<{ $variant: TabVariant; $size: TabSize }>`
  ${({ theme, $variant, $size }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    gap: ${`${theme.spacing.spacing12}px`};
    background-color: transparent;
    border: none;
    cursor: pointer;
    ${getStyles($variant)}
    ${sizeHandler($size, $variant)}
  `}
`;
export const TabLine = styled(Box)<{ $variant: TabVariant }>`
  ${({ theme, $variant }) => css`
    border-radius: 2px 2px 0 0;

    ${getLineBackgroundColors($variant)}
  `}
`;
