import { ThemeProvider } from "@emotion/react";

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

const eCorpTestTheme1: ECorpTheme = {
	name: "ECorp Test Theme 1",
	color: {
		primary: "#74D0FF",
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

const eCorpTestTheme2: ECorpTheme = {
	name: "ECorp Test Theme 2",
	color: {
		primary: "blue",
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

const ECorpThemeProvider = ThemeProvider;

export { ECorpTheme, ECorpThemeProvider, eCorpTestTheme1, eCorpTestTheme2 };
