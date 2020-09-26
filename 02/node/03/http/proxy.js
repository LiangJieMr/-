/*
 * @Author: liangJie
 * @Date: 2020-09-16 17:19:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-16 17:20:16
 * @FilePath: \02\node\03\http\proxy.js
 * @Description: express服务
 */
const express = require('express') //引入express服务
const app = express()
app.use(express.static(__dirname + '/'))

app.listen(3000)