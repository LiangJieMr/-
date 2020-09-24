/*
 * @Author: liangJie
 * @Date: 2020-09-16 17:19:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-17 10:40:52
 * @FilePath: \02\node\03\http\proxy.js
 * @Description: express服务
 */
const express = require('express') //引入express服务
const app = express()
const proxy = require('http-proxy-middleware') //反向代理中间件
app.use(express.static(__dirname + '/'))
app.use('/api', proxy({
    target:'http://localhost:4000',//目标
    changeOrigin: false
}))
app.listen(3000)