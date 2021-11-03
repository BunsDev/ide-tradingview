const path = require('path')

module.exports = {
	mode: 'production',

	entry: {
		index: './index.js',
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		library: 'table-widget',
		libraryTarget: 'umd',
	},
	externals: {
		react: {
			root: "React",
			commonjs2: "react",
			commonjs: "react",
			amd: "react",
			umd: "react",
		},
		"react-dom": {
			root: "ReactDOM",
			commonjs2: "react-dom",
			commonjs: "react-dom",
			amd: "react-dom",
			umd: "react-dom",
		}
	},
	module: {
		rules: [

			{
				test: /.(js|jsx)$/,
				include: path.resolve(__dirname, 'src'),
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /.(scss|css)$/,
				include: path.resolve(__dirname, 'src'),
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',

						options: {
							sourceMap: true,
						},
					},
					{
						loader: 'sass-loader',

						options: {
							sourceMap: true,
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
		modules: [path.resolve(__dirname, 'node_modules')]
	},

}
