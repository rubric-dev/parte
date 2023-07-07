import styled, { css } from "styled-components";
import { getColors, getAvatarInitialsFontSize } from "../utils/badge.utils";
import { Box } from "../Layout";
import { AvatarStyleProps } from "./Avatar.types";

export const commonAvatarStyles = css<AvatarStyleProps>`
  ${({ $size = 32, $shape = "CIRCLE" }) => css`
    width: ${$size}px;
    height: ${$size}px;
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
  ${({ $size = 32 }) => css`
    color: inherit;
    font-size: ${getAvatarInitialsFontSize($size)}px;
    line-height: 16px;
    font-weight: 400;
  `}
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
