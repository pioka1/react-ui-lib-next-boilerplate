export const languages = ["en", "sv"];

export function getCurrentLanguage(url: string) {
	for (let i = 0; i < languages.length; i++) {
		const language = languages[i];

		if (url.indexOf("/" + language) > -1) return language;
	}

	return languages[0];
}

export function setURLSearchParams(url: string, param: string) {
	return url + (url.indexOf("?") > -1 ? "&" : "?") + param;
}
