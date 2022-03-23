import { ThemeProvider } from "@emotion/react";

interface ECorpTheme {
	color: {
		primary: string;
		secondary: string;
		tertiary: string;
	}
}

const ECorpThemeProvider = ThemeProvider;

export { ECorpTheme, ECorpThemeProvider };
