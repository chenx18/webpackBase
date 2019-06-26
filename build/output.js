const dirPath = require('./base/path');
const config = require('./base/config');

let output = {
	path:dirPath.dist,
	filename: config.NODE_ENV == 'development'?'[name].js':'[name].[contenthash].js',
	chunkFilename: config.NODE_ENV == 'development'?'[name].js':'[name].[contenthash].js',
	publicPath: config.publicPath
}

module.exports = output