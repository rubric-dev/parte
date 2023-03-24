import { COLORS, SPACING, TYPOGRAPHY, ELEVATION } from "..";
import { commonStyles } from "./commonStyles";
import { colorTokens } from "./colorToken";

export type ParteTheme = typeof theme;

export const theme = {
  colors: COLORS,
  spacing: SPACING,
  typography: TYPOGRAPHY,
  elevation: ELEVATION,
  commonStyles,
  ...colorTokens,
};
