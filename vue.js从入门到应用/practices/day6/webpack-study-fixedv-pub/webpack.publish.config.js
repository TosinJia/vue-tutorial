const path = require('path');

// 1. 导入 在内存中生成页面的webpack插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 导入删除文件夹的 插件
const CleanWebpackPlugin = require('clean-webpack-plugin');

// 导入 webpack 这个模块
const webpack = require('webpack');

// 导入抽取CSS样式文件的插件
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

// 导入优化压缩CSS样式表的插件
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

// 使用Node语法，向外暴露配置对象，从而，让webpack运行的时候，加载指定的配置
// 为什么可以使用Node语法？因为 webpack 这个工具，就是基于node构建的；
module.exports = {
    // mode: 'development',
    devtool: 'source-map',
    entry: {
        app01: path.join(__dirname, './src/main.js'), // 项目的主入口文件 // 自己代码的入口
        vendors01: ['jquery'] // 要分离的第三方包的入口
    },   // 项目的入口文件
    output: {
        path: path.join(__dirname, "./dist"),   // 输出路径
        filename: 'js/bundle.js'   // 输出文件名
    },  // 打包好的文件的数据配置
    plugins: [  // 插件配置节点
        new HtmlWebpackPlugin({ // 创建一个 htmlWebpackPlugin 的实例对象
            template: path.join(__dirname, './src/index.html'),   // 指定模板页面路径
            filname: 'index.html', // 指定内存中生成的HTMl文件名称

            minify:{    // 表示提供压缩选项
                removeComments: true,   // 移除页面中的注释
                collapseWhitespace: true,   // 合并空白字符
                removeAttributeQuotes: true,    // 移除属性节点上的引号
            }
        }),
        new CleanWebpackPlugin(['dist']),
        new webpack.optimize.CommonsChunkPlugin({   // 抽离第三方包的插件
            name: 'vendors01',   // 指定抽离第三方包的入口名称
            filename: 'js/vender01.js'    // 指定抽离出来的第三方包，文件名叫做什么
        }),
        new webpack.optimize.UglifyJsPlugin({   // 优化压缩JS
            compress: {
                warnings: false,    // 压缩完毕的代码中，移除警告信息
            }
        }),
        new ExtractTextWebpackPlugin('css/styles.css'),    // 抽取CSS文件到单独的目录中
        new OptimizeCssAssetsWebpackPlugin(),    // 压缩CSS文件的插件

        new webpack.DefinePlugin({  // 此插件的作用，相当于在项目的全局，配置了一些全局可用的变量；将来，我们引用的第三方包中，比如Vue，会检查webpack中有没有提供 process.env.NODE_ENV 字段，如果有，并且字段的名字为 "production"， 就表示是生产发布环境，那么会移除不必要的Vue警告功能；并做其它优化！
            'process.env.NODE_ENV':'"production"',
            'iname':'"tosin"',
        }),
    ],
    module: {   // 用来配置 非JS文件对应的loader的
        rules: [    // 就是这些 非 JS 文件 和 loader 之间的对应关系
            {test: /\.css$/, use: ExtractTextWebpackPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader'],
                publicPath: '../'   // 表示，如果将来生成的样式中，包含路径，那么，需要自动在路径前面加上 ../ 前缀
                })},   // 创建处理 css 文件的 loader 匹配规则，从后到前调用
            {test: /\.less$/, use: ExtractTextWebpackPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'less-loader'],
                publicPath: '../'   // 设置图片路径
                })}, // 配置处理less文件的规则
            {test: /\.scss$/, use: ExtractTextWebpackPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader','sass-loader'],
                publicPath: '../'   // 设置图片路径
                })}, // 配置 处理 scss 文件的规则

            { test: /\.jpg|png|gif|bmp$/, use: 'url-loader?limit=7631&name=images/img-[hash:8]-[name].[ext]' }, // 配置 处理 样式表中图片的 loader规则
            // 可以使用?给 url-loader传递参数，其中，有一个固定的参数，叫做 limit，表示图片的大小，需要给定一个 数值；
            // limit 给定的这个数值，是 图片的大小，单位是 Byte（字节）
            // 如果指定了 limit 参数，则只有图片的大小，小于给定的 值时候，才会转为base64格式的图片；否则，就不转换；
            
            {test:/\.js$/, use: 'babel-loader', exclude: /node_modules/}    // 添加转换JS文件的loader，
            //其中，必须把 node_modules 目录设置为 排除项，这样，在打包的时候，会忽略node_modules 目录下的所有JS文件；否则项目运行不起来！
        ]
    }
}