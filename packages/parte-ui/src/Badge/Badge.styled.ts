import styled, { css } from "styled-components";
import { getColors } from "../utils/badge.utils";
import { BadgeStyleProps } from "./Badge.types";

export const Badge = styled.span<BadgeStyleProps>`
  ${({ $badgeColor, $type }) => css`
    display: inline-block;
    height: 16px;
    padding: 0px ${({ theme }) => theme.spacing.spacing6}px;
    border-radius: ${$type === "badge" ? "4px" : "8px"};
    ${getColors($badgeColor)}

    font-weight: 600;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: 0.2px;
  `}
`;
