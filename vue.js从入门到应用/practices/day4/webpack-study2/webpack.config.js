
// 标准nodejs语法
const path = require('path');
debugger
// 导入 把 HTML 页面生成到内存中的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 导入指定浏览器的插件
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

// 导入webpack
const webpack = require('webpack');

// 注意： 这里使用Node中的语法，向外暴露了一个配置对象
// 因为 webpack 这个构建工具，底层就是使用 Node.js 开发出来的
module.exports = {
    mode: 'development',
    // deltool: 'source-map',
    entry: path.join(__dirname, './src/main.js'),   // 指定要处理的JS文件路径
    output:{    // 指定输出文件的配置
        path: path.join(__dirname, './dist'),   // 指定输出文件的存放路径
        filename: 'bundle03.js',    // 指定输出文件的名称
    },
    plugins: [  // 插件的数组
        new HtmlWebpackPlugin({ // 创建一个把HTML首页托管到内存中的插件
            template: path.join(__dirname, './src/index-html-webpack-plugin.html'),    //  要把哪个HTML页面，作为模板，复制一份托管到内存中
            filename: 'index.html', // 指定，将来在内存中复制出来的页面，名称叫做 index.html
        }),

        new webpack.LoaderOptionsPlugin({
            options: {
              deltool:'source-map'
            }
          })
    ],
    


}