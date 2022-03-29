import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ECorpThemeProvider, eCorpTestTheme1 } from "@ecorp/ui-lib";

function MyApp({ Component, pageProps }: AppProps) {
	console.log(eCorpTestTheme1);
	return (
		<ECorpThemeProvider theme={eCorpTestTheme1}>
			<Component {...pageProps} />
		</ECorpThemeProvider>
	);
}

export default MyApp;
