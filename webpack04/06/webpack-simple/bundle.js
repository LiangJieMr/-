/*
 * @Author: liangJie
 * @Date: 2020-09-28 16:44:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-28 16:51:54
 * @FilePath: \06\bundle.js
 * @Description: 执行webpack构建入口
 */
/**
 * 1.拿到webpack.config.js配置
 */
const options = require("./webpack.config.js");
const webpack = require("./lib/webpack.js");

new webpack(options).run();