/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	i18n: {
		locales: ["default", "en", "sv"],
		defaultLocale: "default"
	},
};

module.exports = nextConfig;
