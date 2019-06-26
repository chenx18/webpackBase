const dirPath = require('./base/path');
const config = require('./base/config');

let devServer = {
	overlay:true,
	contentBase: dirPath.dist,
	clientLogLevel: 'info',
	open:true,  //启动时默认打开浏览器
	host:'localhost', //域名 0.0.0.0局域网可访问
	port:config.port || '9999',
	inline:true, //实时更新
	hot:true,    //热替换
	hotOnly:false, //禁止浏览器自动刷新
	proxy:{
		'/':{
			target: config.apiUrl
		},
		'/upload':{
			target: config.apiUrl
		}
	}
}

module.exports = devServer;