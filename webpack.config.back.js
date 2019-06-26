const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');    //生成html文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');  //清除

module.exports = {
	mode:'development',
	entry:{
		main:'./src/index.js',  
	},
	devtool:'cheap-eval-source-map',
	module:{
		rules:[
			{
				test:/\.css$/,
				use:[
					'style-loader',
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
					'style-loader',
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
					'style-loader',
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
							name:'[name].[ext]',  //[path] 上下文环境路径
							publicPath:'./assets/image/',    //公共路径
							outputPath:'assets/image/',  //输出路径							
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
							minimize:false  //是否压缩html
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
							publicPath:'./assets/iconfont/',    //公共路径
							outputPath:'assets/iconfont/',  //输出路径							
						}
					}				
				]
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components|lib)/,
				loader: 'babel-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: '瓦力博客',
			template: './src/index.html'   //以src/index.html为编译模板
		}),
		new CleanWebpackPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer:{
		contentBase: path.join(__dirname, 'dist'),
		clientLogLevel: 'info',
		open:true,  //启动时默认打开浏览器
		host:'localhost', //域名 0.0.0.0局域网可访问
		port:'9009',
		inline:true, //实时更新
		hot:true,    //热替换
		hotOnly:false,
		proxy:{
			'/':{
				target:'http://www.waliblog.com'
			},
			'/upload':{
				target:'http://www.waliblog.com'
			}
		}
	},
	optimization:{
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
		}
	},
	output:{
		path: path.resolve(__dirname,'dist')
	}
}
