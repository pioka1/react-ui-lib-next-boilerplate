import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ECorpThemeProvider, ECorpTheme } from "@ecorp/ui-lib";

const theme: ECorpTheme = {
	color: {
		primary: "red",
		secondary: "#555",
		tertiary: "#777"
	}
};

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ECorpThemeProvider theme={theme}>
			<Component {...pageProps} />
		</ECorpThemeProvider>
	);
}

export default MyApp;
