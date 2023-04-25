import styled, { css } from "styled-components";
import { TabProps } from "./Tab.types";

export const Tab = styled.button<TabProps>`
  ${({ theme, variant, selected, disabled, direction }) => {
    const primaryTabStyle = css`
      position: relative;
      margin-right: 20px;
      &:last-child {
        margin-right: 0px;
      }
      ${selected &&
      css`
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          right: 0;
          height: 2px;
          border-radius: 2px 2px 0px 0px;
          background-color: ${disabled ? theme.colors.N500 : theme.colors.T400};
          width: 100%;
        }
      `}
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

      ${selected &&
      css`
        &,
        &:hover,
        &:active,
        &:focus {
          color: ${theme.colors.T400};
          svg {
            color: ${theme.colors.T400};
          }
        }
      `}
      &:disabled {
        color: ${theme.colors.N500};
        svg {
          color: ${theme.colors.N400};
        }
        cursor: default;
      }
    `;
    const secondaryTabStyle = css`
      padding: 8px 16px;
      cursor: pointer;

      ${direction === "horizontal" &&
      css`
         {
          margin-right: 8px;
          &:last-child {
            margin-right: 0px;
          }
        }
      `}
      ${direction === "vertical" &&
      css`
         {
          margin-bottom: 8px;
          &:last-child {
            margin-bottom: 0px;
          }
        }
      `}

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

      ${selected &&
      css`
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
      `}
      &:disabled {
        color: ${theme.colors.N500};
        background-color: ${selected ? theme.colors.N100 : "transparent"};
        svg {
          color: ${theme.colors.N500};
        }
        cursor: default;
      }
    `;

    return css`
      box-sizing: border-box;
      display: ${direction === "horizontal" ? "inline-flex" : "flex"};
      width: ${direction === "horizontal" ? "auto" : "100%"};
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      height: 32px;
      ${theme.typography.H300}
      color: ${theme.colors.N700};
      gap: ${`${theme.spacing.spacing12}px`};
      background-color: transparent;
      border: none;
      cursor: pointer;
      ${variant === "Primary" ? primaryTabStyle : secondaryTabStyle}
    `;
  }}
`;
