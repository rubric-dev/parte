import { css } from "styled-components";
import { COLORS, ColorKey } from "../@foundations";

export const getSizeStyle = (size?: number | string, key?: string) => {
  if (size === undefined) return "";
  return css`
    ${typeof size === "number" ? `${key}: ${size}px` : `${key}: ${size}`};
  `;
};

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
