import { GlobalStyle } from "@/styles/GlobalStyles";
import { ThemeProvider } from "@parte-ds/ui";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
