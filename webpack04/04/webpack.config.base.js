/*
 * @Author: liangJie
 * @Date: 2020-09-27 15:58:19
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-27 16:52:51
 * @FilePath: \04\webpack.config.base.js
 * @Description: 公共配置
 */
const path = require("path");
// 清除冗余文件
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
module.exports = {
    entry: "./src/index.js",
    
    
    resolve: {
        // 查找第三方依赖
        modules:[path.resolve(__dirname, "./node_modules")],
        alias: {
            // 减少查找过程
            // 起别名
            "@": path.join(__dirname, "./src/css"),
            react: path.resolve(
                __dirname,
                "./node_modules/react/umd/react.production.min.js"
                ),
            "react-dom": path.resolve(
                __dirname,
                "./node_modules/react-dom/umd/react-dom.production.min.js"
                )
        },
        // extensions: [".js", ".json", ".jsx"],
    },
   
    plugins: [new CleanWebpackPlugin()],
}