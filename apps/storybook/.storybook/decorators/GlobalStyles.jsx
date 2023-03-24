import { createGlobalStyle } from "styled-components";
import { styleReset } from "@parte/ui";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  #root {
    width: 100%;
    min-height:100vh;
  }
  ${styleReset}
`;
