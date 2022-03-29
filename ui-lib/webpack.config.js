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
			{
				test: /\.([jt]sx?)?$/,
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
