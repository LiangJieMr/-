/*
 * @Author: liangJie
 * @Date: 2020-09-16 15:55:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-16 16:40:03
 * @FilePath: \02\node\03\im\socket.js
 * @Description: 
 */

 /**
  * nodemon node.js监控工具，自动重启 https://www.npmjs.com/package/nodemon
  * http 网络编程
  */
const net = require('net') //引入net协议
const chatServer = net.createServer()
const clientList = [] //客户
//链接上服务
chatServer.on('connection', client => {
    client.write('Hi!\n')
    clientList.push(client)
    //客户端事件
    client.on('data', data => {
        console.log('receive', data.toString())
        clientList.forEach(v => {
            v.write(data)
        })
    })
})
chatServer.listen(9000)