const path = require('path');   

let dirPath = {};
dirPath.rootDir = path.resolve(__dirname, '../../');   //根路径
dirPath.nodeModule = path.resolve(dirPath.rootDir, './node_modules');  //包路径
dirPath.src = path.resolve(dirPath.rootDir,'./src');   //源文件
dirPath.dist = path.resolve(dirPath.rootDir,'./dist'); //生成线上
dirPath.dll = path.resolve(dirPath.rootDir,'./dll');   //dll目录

dirPath.page = 'page';                   
dirPath.assets = 'assets';               //静态资源
dirPath.css = 'assets/css';              //css
dirPath.sass = 'assets/sass'             //sass
dirPath.less = 'assets/less';            //less
dirPath.images = 'assets/images';        //images
dirPath.iconfont = 'assets/iconfont';    //iconfont


//将srcPath 挂载出去
module.exports = dirPath;