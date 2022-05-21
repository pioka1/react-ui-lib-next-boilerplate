const path = require("path");

module.exports = {
	mode: "production",
	entry: "./src/index.ts",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "ui-lib.js",
		libraryTarget: "umd",
		library: "ui-lib",
		globalObject: "this",
	},
	module: {
		rules: [
			/*
			** Once swc-loader is capable of outputting type declarations, remove this.
			*  https://github.com/swc-project/swc/issues/657
			**/
			{
				test: /\.tsx?/,
				use: "ts-loader"
			},
			{
				test: /\.js$/,
				use: "swc-loader"
			}
		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".jsx", ".js"]
	},
	externals: [
		"react",
		"react-dom",
		"@emotion/core",
		"@emotion/react",
	],
};
