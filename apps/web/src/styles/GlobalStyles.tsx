import { styleReset } from "@parte-ds/ui";

export const GlobalStyle = () => (
  <style jsx global>
    {`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
      #__next {
        min-width: 100%;
        min-height: 100vh;
        height: 100vh;
        max-height: 100vh;
      }
      ${styleReset}
    `}
  </style>
);
