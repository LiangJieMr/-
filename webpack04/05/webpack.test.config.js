/*
 * @Author: liangJie
 * @Date: 2020-09-27 17:04:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-27 17:22:27
 * @FilePath: \04\webpack.test.config.js
 * @Description: 
 */
const baseConfig = require("./webpack.config.base.js")
const proConfig = require("./webpack.config.pro.js")
const devConfig = require("./webpack.config.dev.js")
const {merge} = require("webpack-merge")

//coress-env 获取
console.log(process.env.NODE_ENV)

module.exports = (env) => {
    console.log('111111111111111111111111',env)
//    如果外部传 env.production 是生产
//    如果没传 是开发
    if(env && env.production) {
        return merge(baseConfig, proConfig)
    }else {
        return merge(baseConfig, devConfig)
    }
}