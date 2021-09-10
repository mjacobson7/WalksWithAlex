// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const htmlPageNames = ['index', 'about', 'faq', 'rescue', 'reviews', 'services'];
const multipleHtmlPlugins = htmlPageNames.map(name => {
	return new HtmlWebpackPlugin({
		template: `./src/${name}.html`,
		filename: `${name}.html`,
		chunks: [`${name}`]
	})
})

module.exports = {
	entry: {
		index: './src/scripts/index.js',
		about: './src/scripts/about.js',
		faq: './src/scripts/faq.js',
		rescue: './src/scripts/rescue.js',
		reviews: './src/scripts/reviews.js',
		services: './src/scripts/services.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		publicPath: '',
		chunkFilename: '[id].[chunkhash].js'
	},
	mode: 'development',
	devServer: {
		static: path.resolve(__dirname, './dist'),
		compress: true,
		port: 8888,
		open: true
	},
	module: {
		rules: [ // this is an array of rules
			// add an object containing rules for Babel to it
			{
				// a regular expression that searches for all js files
				test: /\.js$/,
				// all files must be processed by babel-loader
				loader: "babel-loader",
				// exclude the node_modules folder, we don't need to process files in it
				exclude: "/node_modules/"
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							importLoaders: 1
						}
					},
					"postcss-loader"
				],
			},
			{
				// add the rule for processing files
				test: /\.(png|svg|jpg|jpeg|gif|webp|woff(2)?|eot|ttf|otf)$/,
				type: "asset/resource",
			},
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: 'blocks.[name].build.css'
		}) // connect the plugin for merging CSS files
	].concat(multipleHtmlPlugins),
}