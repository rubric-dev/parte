import { GlobalStyle } from "@/styles/GlobalStyles";
import { InterfaceArrowLeftIcon } from "@parte-ds/icons";
import { Box, CustomTheme, IconButton, ThemeProvider } from "@parte-ds/ui";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  return (
    // <ThemeProvider customTheme={customTheme}>
    <ThemeProvider>
      <GlobalStyle />
      <Box padding={30} width="100vw" height="100vh">
        {pathname !== "/" && (
          <Box display="flex" alignItems="center" marginBottom={16}>
            <Link href="/">
              <Box display="flex" alignItems="center" gap={8}>
                <IconButton
                  variant="outline-secondary"
                  size={24}
                  Icon={<InterfaceArrowLeftIcon />}
                />
                홈으로
              </Box>
            </Link>
          </Box>
        )}
        <Component {...pageProps} />
      </Box>
    </ThemeProvider>
  );
}
