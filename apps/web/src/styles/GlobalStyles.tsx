import { styleReset } from "@parte-ds/ui";
import { useTheme } from "styled-components";

export const GlobalStyle = () => {
  const { colors } = useTheme();
  return (
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
        body {
          color: ${colors.N900};
        }
        ${styleReset}
      `}
    </style>
  );
};
