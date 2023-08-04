import * as React from "react";
import { ThemeProvider, ErpTheme } from "@parte-ds/ui";
import { GlobalStyle } from "./decorators/GlobalStyles";

export const decorators = [
  (Story) => {
    return (
      <ThemeProvider customTheme={ErpTheme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    );
  },
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
