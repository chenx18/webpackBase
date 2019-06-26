const dirPath = require('./base/path');
const config = require('./base/config');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let _module = {
	rules:[
		{
			test:/\.css$/,
			use:[
				config.NODE_ENV == 'development'?'style-loader': MiniCssExtractPlugin.loader,
				{
					loader:'css-loader',
					options:{
						importLoaders:1
					}					
				},
				'postcss-loader'
				
			]
		},
		{
			test:/\.scss$/,
			use:[
				config.NODE_ENV == 'development'?'style-loader': MiniCssExtractPlugin.loader,
				{
					loader:'css-loader',
					options:{
						importLoaders:2
					}					
				},
				'sass-loader',
				'postcss-loader'
			]
		},
		{
			test: /\.less$/,
			use: [
				config.NODE_ENV == 'development'?'style-loader': MiniCssExtractPlugin.loader,
				{
					loader:'css-loader',
					options:{
						importLoaders:2
					}					
				},
				'less-loader',
				'postcss-loader'
			]
		},
		{
			test:/\.(png|svg|jpeg|jpg|gif)$/,
			use:[		
				{
					loader:'file-loader',
					options:{
						name:'[name][sha512:hash:base64:7].[ext]',  //[path] 上下文环境路径
						outputPath: dirPath.images,  //输出路径	
						publicPath: config.NODE_ENV === 'development'?dirPath.images:dirPath.images   //公共路径													
					}
				},
				{
					loader: 'image-webpack-loader',
					options: {
						bypassOnDebug: true, // webpack@1.x
						disable: true,       // webpack@2.x and newer
					},
				},
			]
		},
		{
			test: /\.html$/,
			use:[
				{
					loader:'html-loader',
					options:{
						arrts:['img:src','img:data-src'],
						minimize: config.NODE_ENV === 'development'? false:true  //是否压缩html
					}
				}
			]
		},
		{
			test: /(iconfont.svg)|\.(woff|woff2|eot|ttf|otf)$/,
			use:[
				{
					loader:'file-loader',
					options:{
						name:'[name].[ext]',  //[path] 上下文环境路径
						outputPath: dirPath.iconfont,  //输出路径		
						publicPath: config.NODE_ENV === 'development'? dirPath.iconfont: dirPath.iconfont,    //公共路径							
					}
				}				
			]
		},
		{
			test: /\.js$/,
			exclude: /(node_modules)/,
			use:[
				'babel-loader',
				{
					loader:'eslint-loader'
				}
			]
		}
	]
}

module.exports = _module;