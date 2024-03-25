import styled, { css } from "styled-components";
import { getColors, sizeHandler } from "../utils/badge.utils";
import { BadgeSize, BadgeStyleProps } from "./Badge.types";

export const Badge = styled.span<BadgeStyleProps>`
  ${({ $badgeColor, $type, $size, theme }) => css`
    display: inline-flex;
    align-items: center;
    border-radius: ${$type === "badge"
      ? "4px"
      : $size === "medium"
      ? "11px"
      : "8px"};
    ${getColors($badgeColor)}
    ${sizeHandler($size)};
  `}
`;
