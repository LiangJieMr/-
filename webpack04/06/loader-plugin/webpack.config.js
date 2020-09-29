/*
 * @Author: liangJie
 * @Date: 2020-09-29 10:30:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-29 15:16:06
 * @FilePath: \06\loader-plugin\webpack.config.js
 * @Description: loader
 */
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js"
    },
    resolveLoader:{
        modules: ["node_modules","./myLoaders"]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    "kkbloader.js",
                {
                    loader:"kkbloaderAsync.js",
                    options:{
                        name: "开课吧"
                    }
                }]
            },
            {
                test: /\.less$/,
                use: [
                    "styleloader.js",
                    "lessloader.js"
                ]
            }
        ]
    }
}