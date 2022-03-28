import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ECorpThemeProvider, ECorpTheme } from "@ecorp/ui-lib";

const theme: ECorpTheme = {
	name: "ECorp Test Theme",
	color: {
		primary: "red",
		secondary: "#555",
		tertiary: "#777"
	},
	iconSize: {
		xs: 15,
		sm: 20,
		md: 25,
		lg: 30,
		xl: 50,
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
