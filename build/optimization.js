const config = require('./base/config');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

let optimization = {
	usedExports: true,
	splitChunks: {
		chunks: 'all',
		minSize: 30000,
		maxSize: 0,
		minChunks: 1,
		maxAsyncRequests: 5,
		maxInitialRequests: 3,
		automaticNameDelimiter: '~',
		name: true,
		cacheGroups: {
			vendors: {
				test: /[\\/]node_modules[\\/]/,
				priority: -10
			},
			default: {
				minChunks: 2,
				priority: -20,
				reuseExistingChunk: true
			}
		}
	},
	runtimeChunk:{
		name: entrypoint => `runtimechunk~${entrypoint.name}`
	}
}

if(config.NODE_ENV != 'development'){
	optimization['minimizer'] = [new OptimizeCssAssetsPlugin({})]
}


module.exports = optimization