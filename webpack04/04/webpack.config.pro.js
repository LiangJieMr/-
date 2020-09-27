/*
 * @Author: liangJie
 * @Date: 2020-09-27 15:58:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-27 16:49:44
 * @FilePath: \04\webpack.config.pro.js
 * @Description: 生产配置
 */
const path = require("path");
const baseConfig = require("./webpack.config.base.js");
const {merge} = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

const proConfig = {
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "[name].js",//多出口 占位符【name】
        publicPath:'http://cdn.jie.com/assets/' //资源路径 cdn 需手动上传cdn
    },
    mode: "production",
    module: {
        // loader使用一个消耗性能的大户
        rules: [
            // {
            //     test: /\.(eot|svg|ttf|woff|woff2)$/,
            //     use: {
            //         loader: "file-loader",
            //         options: {
            //             outputPath: "font/",
            //         }
            //     }
            // },
            // 3116ms
            // 2675ms
            {
                test: /\.css$/,
                include: path.resolve(__dirname, "./src"),
                // include 只去这找
                // exclude 排除其他
                //loader 模块转换 执行顺序从后往前 本质普通函数
                //css-loader 言简意赅 是把css模块的内容加入到 js模块中去  CommonJS 模块
                //css in js方式

                //style-loader从js中提取css的loader 在html中创建style标签
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.less$/,
                include: path.resolve(__dirname, "./src"),
                use: [
                    //提取css独立文件
                    MiniCssExtractPlugin.loader, // 对hmr支持不好
                    //  "style-loader", 
                    {
                        loader: "css-loader",
                        options: {//参数
                            //css modules 模块化
                            modules: true
                        }
                    },
                    {
                        //需使用 "postcss-loader": "^3.0.0",
                        //"autoprefixer": "^9.7.6",
                        //否则有版本问题 
                        // css前缀
                        loader: "postcss-loader",
                    },
                    "less-loader"
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                include: path.resolve(__dirname, "./src"),
                use: {
                    // loader: "file-loader",
                    loader: "url-loader",
                    options: {
                        // name模块名称 pic
                        // hash 长度
                        // ext 后缀名
                        name: "[name]_[hash:6].[ext]",
                        outputPath: "images/",
                        //推荐小体积的图片资源转为base64
                        limit: 30 * 1024,// 单位是字节 1024=1kb
                    }
                }
            },
            {
                test: /\.js$/,
                include: path.resolve(__dirname, "./src"),
                // exclude: /node_modules/,
                use: {
                    loader: "babel-loader", // webpack与babel桥梁
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                // 选择html模板
                title: "首页",//支持  ejs模板语法
                template: "./src/index.html",
                filename: "index.html",
                minify: {
                    // 压缩HTML⽂件
                    removeComments: true, // 移除HTML中的注释
                    collapseWhitespace: true, // 删除空⽩符与换⾏符
                    minifyCSS: true // 压缩内联css
                }
            }
        ),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
        new OptimizeCssAssetsWebpackPlugin({
            cssProcessor: require("cssnano"), //引⼊cssnano配置压缩选项
            cssProcessorOptions: {
            discardComments: { removeAll: true }
            }
        }),
    ]

}
module.exports = merge(baseConfig, proConfig)