import type { AppProps } from "next/app";
import { ECorpTheme, ECorpThemeProvider, GlobalStyles } from "@ecorp/ui-lib";

import { wifTheme } from "../constants/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ECorpThemeProvider theme={wifTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ECorpThemeProvider>
  );
}

export default MyApp;
