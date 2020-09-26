/*
 * @Author: liangJie
 * @Date: 2020-09-16 10:14:50
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-16 10:19:58
 * @FilePath: \02\02a\sample\index.js
 * @Description: 
 */
const Koa = require('koa')
const app = new Koa()
app.use((ctx,next) => {
    ctx.body = [
        {
            name: 'tom'
        }
    ]
})
app.listen(3000)