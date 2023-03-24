import * as React from "react";
import { ThemeProvider } from "@parte-ds/ui";
import { GlobalStyle } from "./decorators/GlobalStyles";

export const decorators = [
  (Story) => {
    return (
      <ThemeProvider
      // theme={{
      //   colors: { B400: '#0AA2C0' },
      //   colorBackgroundButtonPrimary: 'red',
      // }}
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
