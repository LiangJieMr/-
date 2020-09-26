//webpack基于nodejs commonjs规范
//webpack配置 就是一个对象
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
    //上下文
    // context: "",
    //入口文件 项目入口 字符串 数组 对象
    entry: "./src/index.js",// 单页面引用
    // entry: ["./src/index.js", "./src/other.js"],
    // entry: {//多入口 对象方式为多入口打包多键值 需配多出口
    //     index: "./src/index.js",
    //     other: "./src/other.js",
    // },
    //出口
    output: {
        //构建文件资源目录  
        //必须是绝对路径
        //__dirname当前路径的绝对路径
        path: path.resolve(__dirname, "./build"),
        //构建文件名称
        // filename: "index.js",
        // 单出口 多出口 都推荐使用占位符
        filename: "[name]-[hash:6].js",//多出口 占位符【name】

        /**
         * 占位符
         * 1.hash 整个项目的hash 每构建一次就会有一个新的hash 可指定长度eg:filename: "[name]-[hash:6].js" 最长20
         * 2.chunkhash 根据不同入口entry进行依赖解析，构建对应的chunk，生成相应的hash
         *              只要组成entry的模块没有内容改动，则对应的hash不变
         * 3.name
         * 4.id
         */
    },
    // 构建模式 none production development
    mode:"development",

    //插件 原理作用于webpack整个打包周期的 本质类
    plugins: [
        new CleanWebpackPlugin()
    ],

    // 处理 不认识的模块
    module: {
        rules: [
            {
                test: /\.css$/,
                //loader 模块转换 执行顺序从后往前 本质普通函数
                //css-loader 言简意赅 是把css模块的内容加入到 js模块中去  CommonJS 模块
                //css in js方式

                //style-loader从js中提取css的loader 在html中创建style标签
                use: ["style-loader", "css-loader"],
            }
        ]
    }
}