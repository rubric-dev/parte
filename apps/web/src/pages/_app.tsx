import { GlobalStyle } from "@/styles/GlobalStyles";
import { InterfaceArrowLeftIcon } from "@parte-ds/icons";
import {
  Box,
  CustomTheme,
  IconButton,
  ThemeProvider,
  ErpTheme,
} from "@parte-ds/ui";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";

// const customTheme: CustomTheme = {
//   ...ErpTheme,
//   colors: {
//     T600: "#12666C",
//     T500: "#0F8296",
//     T400: "#0AA2C0",
//     T300: "#84D0DF",
//     T200: "#A9DEE9",
//     T100: "#DAF1F6",
//     T50: "#EBF8FA",
//   },
// };
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
