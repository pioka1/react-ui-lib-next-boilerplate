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
    [name: string]: string;
	}
	typography: {
		fontFamily: {
      name: string;
      srcSlim?: string;
      srcRegular?: string;
      srcBold?: string;
    };
		fontSize: {
			xs: string;
			sm: string;
			md: string;
			lg: string;
			xl: string;
		}
	}
}

const ECorpThemeProvider = ThemeProvider;

const mq = (breakpoint: number) => `@media (min-width: ${breakpoint}px)`;

export { ECorpTheme, ECorpThemeProvider, mq };
export * from "./GlobalStyles";
