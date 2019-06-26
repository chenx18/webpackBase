const dirpath = require('./base/path');
const config = require('./base/config');
const html = require('./base/html');

const webpack = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');  //清除
const MiniCssExtractPlugin = require("mini-css-extract-plugin");  //css样式提取
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const fs = require('fs');



let plugins = [
	new  MiniCssExtractPlugin({
		filename: config.NODE_ENV == 'development'?'[name.css]': `${dirpath.css}/[name].[hash].css`,
		chunkFilename: config.NODE_ENV == 'development'?'[id].css': `${dirpath.css}/[id].[hash].css`
	}),   //css提取
	new webpack.ProvidePlugin({
		_:'loadsh',
		url: ['../src/api/apipath', 'url']
	}),
	new webpack.DefinePlugin({ 
		IS_PRODUCTION: config.NODE_ENV == 'development'?JSON.stringify(false):JSON.stringify(true),
	}),
	new CleanWebpackPlugin()
]

plugins = html.plugins.concat(plugins);

let files = fs.readdirSync(dirpath.dll)
files.forEach(val=>{
	if(/\.js$/.test(val)){
		plugins.push(new AddAssetHtmlPlugin({ 
			filepath: `${dirpath.dll}/${val}`
		}))		
	}

	if(/\.json$/.test(val)){
		plugins.push(new webpack.DllReferencePlugin({
			manifest: `${dirpath.dll}/${val}`
		}))
	}
})


if('development' == config.NODE_ENV){
	plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = plugins;


