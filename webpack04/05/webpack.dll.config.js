/*
 * @Author: liangJie
 * @Date: 2020-09-28 11:09:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-28 11:22:43
 * @FilePath: \05\webpack.dll.config.js
 * @Description: 构建动态链接库
 */
const path = require("path");
const { DllPlugin } = require("webpack");
module.exports = {
    mode: "development",
    entry: {
        react: ["react", "react-dom"] // ! node_modules?
    },
    output: {
        path: path.resolve(__dirname, "./dll"),
        filename: "[name].dll.js",
        library: "kkb"
    },
    plugins: [
        new DllPlugin({
            // manifest.json⽂件的输出位置
            path: path.join(__dirname, "./dll", "[name]-manifest.json"),
            // 定义打包的公共vendor⽂件对外暴露的函数名
            name: "kkb" // 与output.library一致
        })
    ]
};