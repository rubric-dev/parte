import * as React from "react";
import { ThemeProvider } from "@parte-ds/ui";
import { GlobalStyle } from "./decorators/GlobalStyles";

export const decorators = [
  (Story) => {
    return (
      <ThemeProvider>
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
