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

const overrideTheme = (customTheme: CustomTheme) => {
  let plate = structuredClone(defaultTheme);

  const {
    colors: customColors = {},
    commonStyles: customCommonStyles,
    ...customTokens
  } = customTheme;

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

  // token에 customTokens가 있다면 customToken으로 아니라면 기본 Theme 색상을 채워준다.
  for (const token in tokens) {
    const tokenKey = token as keyof typeof tokens;
    const colorKey = customTokens[tokenKey] ?? tokens[tokenKey];
    // @ts-ignore
    plate[tokenKey] = plate.colors[colorKey];
  }

  if (customCommonStyles) {
    plate.commonStyles = { ...commonStyles, ...customCommonStyles };
  }

  return plate as DefaultTheme;
};
