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
				test: /\.tsx?/,
				use: "ts-loader"
			},
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						plugins: ['babel-plugin-styled-components']
					}
				}
			}
		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".jsx", ".js"]
	},
	externals: [
		"react",
		"react-dom",
		"styled-components",
	],
};
