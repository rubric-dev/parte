import styled, { css } from "styled-components";
import { TabStyledProps } from "./Tab.types";

const primaryTabStyle = css<TabStyledProps>`
  ${({ theme }) => css`
    position: relative;
    margin-right: 20px;
    &:last-child {
      margin-right: 0px;
    }

    &[data-selected="true"] {
      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        height: 2px;
        border-radius: 2px 2px 0px 0px;
        background-color: ${theme.colors.T400};
        width: 100%;
      }
      &[data-disabled="true"] {
        &::before {
          background-color: ${theme.colors.N500};
        }
      }
    }

    svg {
      color: ${theme.colors.N600};
    }
    &:hover {
      color: ${theme.colors.N800};
      svg {
        color: ${theme.colors.N700};
      }
    }
    &:focus {
      color: ${theme.colors.N700};
      svg {
        color: ${theme.colors.N600};
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
    }

    &[data-selected="true"] {
      &,
      &:hover,
      &:active,
      &:focus {
        color: ${theme.colors.T400};
        svg {
          color: ${theme.colors.T400};
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
        cursor: default;
        outline: none;
      }
    }
  `}
`;

const secondaryTabStyle = css<TabStyledProps>`
  ${({ $direction, theme }) => css`
    padding: 8px 16px;
    cursor: pointer;
    ${$direction === "horizontal"
      ? `margin-right: 8px;`
      : `margin-bottom: 8px;`}
    &:last-child {
      ${$direction === "horizontal"
        ? `margin-right: 0px;`
        : `margin-bottom: 0px;`}
    }

    &:hover {
      color: ${theme.colors.N800};
      background-color: ${theme.colors.N100};
      svg {
        color: ${theme.colors.N800};
      }
    }
    &:active {
      color: ${theme.colors.N900};
      background-color: ${theme.colors.N200};
      svg {
        color: ${theme.colors.N900};
      }
    }
    &:focus {
      ${theme.commonStyles.outline}
      background-color: ${theme.colors.N0};
    }

    &[data-selected="true"] {
      &,
      &:hover,
      &:active,
      &:focus {
        color: ${theme.colors.T400};
        background-color: ${theme.colors.T100};
        svg {
          color: ${theme.colors.T400};
        }
      }
    }
    &[data-disabled="true"] {
      &,
      &:hover,
      &:active,
      &:focus {
        color: ${theme.colors.N500};
        background-color: transparent;
        svg {
          color: ${theme.colors.N500};
        }
        cursor: default;
        outline: none;
      }
      &[data-selected="true"] {
        background-color: ${theme.colors.N100};
      }
    }
  `}
`;

export const Tab = styled.div<TabStyledProps>`
  ${({ theme, $direction, $variant }) => css`
    box-sizing: border-box;
    display: ${$direction === "horizontal" ? "inline-flex" : "flex"};
    width: ${$direction === "horizontal" ? "auto" : "100%"};
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    min-height: 32px;
    ${theme.typography.H300}
    color: ${theme.colors.N700};
    gap: ${`${theme.spacing.spacing12}px`};
    background-color: transparent;
    border: none;
    cursor: pointer;
    ${$variant === "Primary" ? primaryTabStyle : secondaryTabStyle}
  `}
`;
