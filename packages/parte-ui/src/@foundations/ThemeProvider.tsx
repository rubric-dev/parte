import { ReactNode } from "react";
import { css, ThemeProvider as DefaultThemeProvider } from "styled-components";
import { Colors } from ".";
import { ColorTokenType } from "./theme/colorToken";
import { theme as defaultTheme } from "./theme";
import { cloneDeep } from "lodash-es";

export type CustomTheme = Partial<ColorTokenType> & {
  colors?: Partial<Colors>;
};

type Props = {
  customTheme?: CustomTheme;
  children: ReactNode;
};

export function ThemeProvider({ children, customTheme = {} }: Props) {
  const customizedTheme = overrideTheme(customTheme);

  return (
    <DefaultThemeProvider theme={customizedTheme}>
      {children}
    </DefaultThemeProvider>
  );
}

const overrideTheme = (theme: CustomTheme) => {
  let plate = cloneDeep(defaultTheme);

  const { colors: customColors = {}, ...customTokens } = theme;

  const {
    colors: defaultColors,
    commonStyles,
    elevation,
    spacing,
    typography,
    colorModalBackground,
    ...tokens
  } = plate;

  // colors를 먼저 변경해준다.
  if (customColors) {
    plate.colors = { ...defaultColors, ...customColors };
  }

  // token에 theme색상을 채워준다.
  for (const token in tokens) {
    const tokenKey = token as keyof typeof tokens;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    plate[tokenKey] = plate.colors[tokens[tokenKey]];
  }

  // theme에서 customTokens들의 색상만 override한다.
  if (customTokens) {
    plate = { ...plate, ...customTokens };
  }

  plate.commonStyles.outline = css`
    outline: 2px solid ${plate.colors.T200};
  `;

  return plate;
};
