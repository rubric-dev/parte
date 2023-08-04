import { ReactNode } from "react";
import {
  DefaultTheme,
  ThemeProvider as StyledComponentsThemeProvider,
} from "styled-components";
import { Colors } from ".";
import { theme as defaultTheme } from "./theme";
import { ColorTokenType } from "./theme/colorToken";
import { CommonStyles } from "./theme/commonStyles";

export type CustomTheme = Partial<ColorTokenType> & {
  colors?: Partial<Colors>;
  commonStyles?: Partial<CommonStyles>;
};

type ThemeProviderProps = {
  customTheme?: CustomTheme;
  children: ReactNode;
};

export function ThemeProvider({
  children,
  customTheme = {},
}: ThemeProviderProps) {
  const customizedTheme = overrideTheme(customTheme);

  return (
    <StyledComponentsThemeProvider theme={customizedTheme}>
      {children}
    </StyledComponentsThemeProvider>
  );
}

const overrideTheme = (theme: CustomTheme) => {
  let plate = structuredClone(defaultTheme);

  const {
    colors: customColors = {},
    commonStyles: customCommonStyles,
    ...customTokens
  } = theme;

  const {
    colors: defaultColors,
    commonStyles,
    elevation,
    spacing,
    typography,
    ...tokens
  } = plate;

  // colors를 먼저 변경해준다.
  if (customColors) {
    plate.colors = { ...defaultColors, ...customColors };
  }

  // token에 theme색상을 채워준다.
  for (const token in tokens) {
    const tokenKey = token as keyof typeof tokens;
    // @ts-ignore
    plate[tokenKey] = plate.colors[tokens[tokenKey]];
  }

  // theme에서 customTokens들의 색상만 override한다.
  if (customTokens) {
    plate = { ...plate, ...customTokens };
  }
  if (customCommonStyles) {
    plate.commonStyles = { ...commonStyles, ...customCommonStyles };
  }

  return plate as DefaultTheme;
};
