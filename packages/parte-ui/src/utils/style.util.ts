import { css } from "styled-components";
import { COLORS, ColorKey } from "../@foundations";

export const getWidthStyle = (width?: number | string) =>
  width === undefined
    ? ""
    : css`
        width: ${typeof width === "number" ? `${width}px` : width};
      `;
export const getHeightStyle = (height?: number | string) =>
  height === undefined
    ? ""
    : css`
        height: ${typeof height === "number" ? `${height}px` : height};
      `;

export const getFlexBasisStyle = (flexBasis?: number | string) =>
  flexBasis === undefined
    ? ""
    : css`
        flex-basis: ${typeof flexBasis === "number"
          ? `${flexBasis}px`
          : flexBasis};
      `;

export const getColorStyle = (color?: string) => {
  if (!color) return;
  const colorInTheme = COLORS[color as ColorKey];
  if (colorInTheme) {
    return css`
      color: ${colorInTheme};
    `;
  }
  return `color: ${color};`;
};
