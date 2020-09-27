/*
 * @Author: liangJie
 * @Date: 2020-09-27 15:57:49
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-27 16:47:40
 * @FilePath: \04\webpack.config.dev.js
 * @Description: 开发配置
 */
const path = require("path");
const baseConfig = require("./webpack.config.base.js");
const {merge} = require("webpack-merge");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const devConfig = {
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js",//多出口 占位符【name】
    },
    mode:"development",
    devtool: "cheap-inline -source-map",
    module: {
        rules: [
            {
                test: /\.less$/,
                include: path.resolve(__dirname, "./src"),
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {//参数
                            //css modules 模块化
                            modules: true
                        }
                    },
                    {
                        loader: "postcss-loader",
                    },
                    "less-loader"
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                include: path.resolve(__dirname, "./src"),
                use: {
                    loader: "url-loader",
                    options: {
                        name: "[name]_[hash:6].[ext]",
                        outputPath: "images/",
                        limit: 30 * 1024,// 单位是字节 1024=1kb
                    }
                }
            },
            {
                test: /\.js$/,
                include: path.resolve(__dirname, "./src"),
                use: {
                    loader: "babel-loader", // webpack与babel桥梁
                }
            }
        ]
    },
    devServer: {
        // 资源打开目录 可以是相对路径
        contentBase: path.resolve(__dirname, "./dist"),
        // 自动打开默认浏览器窗口
        open: true,
        // HOT Module Replacement(HMR:热模块替换) :之前操作过的保留
        hot: true,
        // 即便hmr没有生效 也不要刷新浏览器
        hotOnly: true,
        // 代理
        proxy: {
            "/api": {
                // 正向代理
                target: "http://localhost:9092"
            }
        },
        // before after 为devserver提供的中间件hooks/钩子
        // 加载内容中间件之前 mock server
        before(app, server){
            app.get("/api/mock.json", (req, res) => {
                res.json({
                    hello:"express",
                })
            })
        },
        // 加载内容中间件之后
        // after(){

        // },
        port: 8080,
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                // 选择html模板
                title: "首页",//支持  ejs模板语法
                template: "./src/index.html",
                filename: "index.html",
            }
        ),
        new webpack.HotModuleReplacementPlugin(),
    ]
}

module.exports = merge(baseConfig, devConfig);