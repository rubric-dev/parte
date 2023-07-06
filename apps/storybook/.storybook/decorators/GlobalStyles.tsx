import { createGlobalStyle } from "styled-components";
import { styleReset } from "@parte-ds/ui";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  #root {
    width: 100%;
    min-height:100vh;
  }
  body {
    // N900
    color: #101840;
  }
  ${styleReset}
  .sbdocs ol,
  .sbdocs ul,
  .sbdocs li {
    list-style: revert;
    list-style-type: revert;
  }
`;
