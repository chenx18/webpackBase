const dirPath = require('./path');
const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');    //生成html文件

const getFiles = dir =>{
    let results = [];
    let list = fs.readdirSync(dir);
    list.forEach(file=>{
        file = dir + '/' + file;
        let stat = fs.statSync(file);
        if(stat && stat.isDirectory()) results = results.concat(getFiles(file));
        else results.push(file);
    })
    return results;
}

let entry = {
    main: dirPath.src + '/index.js'
};
let plugins = [];
let files = getFiles(path.resolve(dirPath.src,'page'));

files.forEach(val=>{
    let name = val.replace(/(.*\/)*([^.]+).*/ig,"$2");
    if(/\.js$/.test(val)){            
        entry[name] = val;
    }
    if(/\.html$/.test(val)){
        let output = val.replace(/(.*\\)(.*\/)*([^.]+).*/ig,"$2");
        let file = val.replace(/(.*\/)*(.+).*/ig,"$2");
        let htmlConfig = {
			favicon: dirPath.src+'/favicon.ico',
			filename: output + file,   //热替换时如果有[hash]则会找不到页面
			template: val,
			inject:'body',		
			chunks:[`runtimechunk~${name}`,'vendors',name],    //只允许加载当前的chunk
			chunksSortMode:'auto',  //加载chunk的顺序
			excludeChunks:[], //排除某个 chunk
        }
        plugins.push(new HtmlWebpackPlugin(htmlConfig));
    }
})

plugins.unshift(new HtmlWebpackPlugin({
	favicon: dirPath.src+'/favicon.ico',
	filename:'index.html',   
	template: dirPath.src + '/index.html',
	inject:'body',    //插入的位置 ['head','body']
	chunks:['runtimechunk~main','vendors','vue','main'],    //只允许加载当前的chunk
	chunksSortMode:'auto',  //加载chunk的顺序
	excludeChunks:[]     , //排除某个 chunk
}))

module.exports = {
    entry: entry,
    plugins: plugins
}
















