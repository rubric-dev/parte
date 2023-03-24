import styled, { css } from "styled-components";
import { getColors } from "../utils/badge.utils";
import { Box } from "../Layout";
import { BadgeProps } from "./Badge.types";

export const commonBadgeStyles = css<BadgeProps>`
  ${({ theme }) => css`
    width: fit-content;
    padding: 0px ${theme.spacing.spacing6}px;
  `}
`;

export const Badge = styled(Box)<BadgeProps>`
  ${({ badgeColor, type = "badge" }) => css`
    display: flex;
    border-radius: ${type === "badge" ? "4px" : "8px"};
    ${getColors(badgeColor)}
    ${commonBadgeStyles}
  `}
`;

export const Text = styled.span<BadgeProps>`
  ${() => css`
    font-weight: 600;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: 0.2px;
  `}
`;
