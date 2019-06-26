/****
*** config配置
****/
let _mode = process.argv[process.argv.length - 1];
let env = _mode.replace(/--mode=(.+)/g,"$1");

let config = {
	NODE_ENV: env == 'development'?'development':'production',  //development 开发 production 线上
	publicPath: env == 'development'?'/':'http://www.waliblog.com',
	apiUrl:'http://www.waliblog.com',
	port: 9999
}

module.exports = config;