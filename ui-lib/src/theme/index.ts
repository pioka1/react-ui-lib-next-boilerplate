import { ThemeProvider } from "@emotion/react";

interface ECorpTheme {
	name: string;
	breakpoints: {
		md: number;
		lg: number;
		xl: number;
		xxl: number;
	}
	color: {
		primary: string;
		secondary: string;
		tertiary: string;
	}
	typography: {
		fontFamily: string;
		fontSize: {
			xs: string;
			sm: string;
			md: string;
			lg: string;
			xl: string;
		}
	}
}

const eCorpTestTheme1: ECorpTheme = {
	name: "ECorp Test Theme 1",
	breakpoints: {
		md: 768,
		lg: 992,
		xl: 1200,
		xxl: 1400,
	},
	color: {
		primary: "#74D0FF",
		secondary: "#555",
		tertiary: "#777"
	},
	typography: {
		fontFamily: "Verdana",
		fontSize: {
			xs: "0.5rem",
			sm: "0.8rem",
			md: "1.0rem",
			lg: "1.2rem",
			xl: "1.5rem",
		}
	}
};

const eCorpTestTheme2: ECorpTheme = {
	name: "ECorp Test Theme 2",
	breakpoints: {
		md: 768,
		lg: 992,
		xl: 1200,
		xxl: 1400,
	},
	color: {
		primary: "#10E856",
		secondary: "#555",
		tertiary: "#777"
	},
	typography: {
		fontFamily: "Trebuchet MS",
		fontSize: {
			xs: "0.5rem",
			sm: "0.8rem",
			md: "1.0rem",
			lg: "1.2rem",
			xl: "1.5rem",
		}
	}
};

const ECorpThemeProvider = ThemeProvider;

const mq = (breakpoint: number) => `@media (min-width: ${breakpoint}px)`;

export { ECorpTheme, ECorpThemeProvider, eCorpTestTheme1, eCorpTestTheme2, mq };
export * from "./GlobalStyles";
