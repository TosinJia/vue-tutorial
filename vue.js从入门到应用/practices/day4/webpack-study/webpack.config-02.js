
// 标准nodejs语法
const path = require('path');

// 注意： 这里使用Node中的语法，向外暴露了一个配置对象
// 因为 webpack 这个构建工具，底层就是使用 Node.js 开发出来的
module.exports = {
    mode: 'development',
    entry: './src/main.js',   // 指定要处理的JS文件路径
    output:{    // 指定输出文件的配置
        path: path.resolve(__dirname, 'dist'),   // 指定输出文件的存放路径
        filename: 'bundle02.js',    // 指定输出文件的名称
    }
}