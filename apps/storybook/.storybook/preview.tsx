import * as React from "react";
import { ThemeProvider } from "@parte-ds/ui";
import { GlobalStyle } from "./decorators/GlobalStyles";

export const decorators = [
  (Story) => {
    return (
      <ThemeProvider
        customTheme={{
          colors: {
            PRIMARY600: "#317159",
            PRIMARY500: "#429777",
            PRIMARY400: "#52BD94",
            PRIMARY300: "#A3E6CD",
            PRIMARY200: "#DCF2EA",
            PRIMARY100: "#EEF8F4",
            PRIMARY50: "#F5FBF8",
          },
        }}
      >
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
