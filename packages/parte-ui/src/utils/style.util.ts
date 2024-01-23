import { DefaultTheme, css } from "styled-components";
import { COLORS, ColorKey } from "../@foundations";

export const getSizeStyle = (size?: number | string, key?: string) => {
  if (size === undefined) return "";
  return css`
    ${typeof size === "number" ? `${key}: ${size}px` : `${key}: ${size}`};
  `;
};

export const getColorStyle = (theme: DefaultTheme, color?: string) => {
  if (!color) return;
  const colorInTheme = theme.colors[color as ColorKey];
  if (colorInTheme) {
    return css`
      color: ${colorInTheme};
    `;
  }
  return `color: ${color};`;
};
