import styled, { type RuleSet, css } from "styled-components";

type TypograhpyStyleProps = {
  $style?: RuleSet;
  $size?: number;
};

export const Headline = styled.h2<TypograhpyStyleProps>`
  ${({ theme, $size, $style }) => css`
    ${$style}
    ${$size === 900 && theme.typography.H900}
    ${$size === 800 && theme.typography.H800}
    ${$size === 700 && theme.typography.H700}
    ${$size === 600 && theme.typography.H600}
    ${$size === 500 && theme.typography.H500}
    ${$size === 400 && theme.typography.H400}
    ${$size === 300 && theme.typography.H300}
    ${$size === 200 && theme.typography.H200}
    ${$size === 100 && theme.typography.H100}
  `}
`;

export const Paragraph = styled.p<TypograhpyStyleProps>`
  ${({ theme, $size, $style }) => css`
    ${$style}
    ${$size === 300 && theme.typography.P300}
    ${$size === 200 && theme.typography.P200}
    ${$size === 100 && theme.typography.P100}
  `}
`;

export const Caption = styled.span<TypograhpyStyleProps>`
  ${({ theme, $size, $style }) => css`
    ${$style}
    ${$size === 300 && theme.typography.C300}
    ${$size === 200 && theme.typography.C200}
    ${$size === 100 && theme.typography.C100}
  `}
`;

type CodeStyleProps = {
  $style?: RuleSet;
  $variant?: "ghost-secondary" | "default";
};
export const Code = styled.code<CodeStyleProps>`
  ${({ theme, $variant = "default", $style }) => css`
    ${$style}
    ${$variant === "default" && theme.typography.CD200}
    ${$variant === "ghost-secondary" && theme.typography.CM200}
  `}
`;
