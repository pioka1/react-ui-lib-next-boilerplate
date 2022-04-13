import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ECorpThemeProvider, eCorpTestTheme1, GlobalStyles } from "@ecorp/ui-lib";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ECorpThemeProvider theme={eCorpTestTheme1}>
			<GlobalStyles />
			<Component {...pageProps} />
		</ECorpThemeProvider>
	);
}

export default MyApp;
