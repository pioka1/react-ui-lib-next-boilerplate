import { locales } from "./constants/app";

export function getCurrentLanguage(url: string) {
	for (let i = 0; i < locales.length; i++) {
		const language = locales[i];

		if (url.indexOf("/" + language) > -1) return language;
	}

	return locales[0];
}

export function setURLSearchParams(url: string, param: string) {
	return url + (url.indexOf("?") > -1 ? "&" : "?") + param;
}
