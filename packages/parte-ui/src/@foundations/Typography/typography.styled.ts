import styled, { css } from "styled-components";
import {
  CommonProps,
  HeadlineProps,
  ParagraphProps,
  CaptionProps,
  CodeProps,
} from "./typography.types";

const CommonTextStyle = ({
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
}: Pick<
  CommonProps,
  "marginBottom" | "marginLeft" | "marginRight" | "marginTop"
>) => css`
  margin-top: ${marginTop ? `${marginTop}px` : "unset"};
  margin-bottom: ${marginBottom ? `${marginBottom}px` : "unset"};
  margin-left: ${marginLeft ? `${marginLeft}px` : "unset"};
  margin-right: ${marginRight ? `${marginRight}px` : "unset"};
`;

export const Headline = styled.h2<Exclude<HeadlineProps, "children">>`
  ${({ theme, size, color = "N900", ...marginProps }) => css`
    ${CommonTextStyle(marginProps)}
    color: ${theme.colors[color]};
    ${size === 900 && theme.typography.H900}
    ${size === 800 && theme.typography.H800}
    ${size === 700 && theme.typography.H700}
    ${size === 600 && theme.typography.H600}
    ${size === 500 && theme.typography.H500}
    ${size === 400 && theme.typography.H400}
    ${size === 300 && theme.typography.H300}
    ${size === 200 && theme.typography.H200}
    ${size === 100 && theme.typography.H100}
  `}
`;

export const Paragraph = styled.p<Exclude<ParagraphProps, "children">>`
  ${({ theme, size, color = "N900", ...marginProps }) => css`
    ${CommonTextStyle(marginProps)}
    color: ${theme.colors[color]};
    ${size === 300 && theme.typography.P300}
    ${size === 200 && theme.typography.P200}
    ${size === 100 && theme.typography.P100}
  `}
`;

export const Caption = styled.span<Exclude<CaptionProps, "children">>`
  ${({ theme, size, color = "N900", ...marginProps }) => css`
    ${CommonTextStyle(marginProps)}
    color: ${theme.colors[color]};
    ${size === 200 && theme.typography.C200}
    ${size === 100 && theme.typography.C100}
  `}
`;

export const Code = styled.code<Exclude<CodeProps, "children">>`
  ${({ theme, variant = "default", ...marginProps }) => css`
    ${CommonTextStyle(marginProps)}
    ${variant === "default" && theme.typography.CD200}
    ${variant === "ghost-secondary" && theme.typography.CM200}
  `}
`;
