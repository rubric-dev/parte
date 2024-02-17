import styled, { css } from "styled-components";
import { getColors, getAvatarInitialsFontSize } from "../utils/badge.utils";
import { Box } from "../Layout";
import { AvatarStyleProps } from "./Avatar.types";

export const commonAvatarStyles = css<AvatarStyleProps>`
  ${({ $size = "small", $shape = "CIRCLE" }) => css`
    width: ${$size === "small" ? "32px" : "48px"};
    height: ${$size === "small" ? "32px" : "48px"};
    border-radius: ${$shape === "CIRCLE" ? "100%" : "4px"};
  `}
`;

export const Avatar = styled(Box)<AvatarStyleProps>`
  ${({ $avatarColor }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    ${getColors($avatarColor)}
    ${commonAvatarStyles}
  `}
`;

export const Text = styled.span<AvatarStyleProps>`
  ${({ $size = "small" }) => css`
    color: inherit;
    font-size: ${$size === "small" ? "12px" : "16px"};
    line-height: 16px;
    font-weight: 400;
  `}
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
