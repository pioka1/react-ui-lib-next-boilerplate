import { ThemeProvider } from "styled-components";

interface ECorpTheme {
	name: string;
	color: {
		primary: string;
		secondary: string;
		tertiary: string;
	},
	iconSize: {
		xs: number;
		sm: number;
		md: number;
		lg: number;
		xl: number;
	}
}

const ECorpThemeProvider = ThemeProvider;

export { ECorpTheme, ECorpThemeProvider };
