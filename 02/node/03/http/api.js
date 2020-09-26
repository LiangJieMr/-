/*
 * @Author: liangJie
 * @Date: 2020-09-16 16:43:31
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-16 17:40:04
 * @FilePath: \02\node\03\http\api.js
 * @Description: 
 */
const http = require('http')
const fs = require('fs')
const server = http.createServer((request, response) => {
    // response.end('hello ...')
    const { url, method ,headers} = request
    if (url === '/' && method === 'GET'){
        // 静态页面服务
        fs.readFile('./index.html',(err,data) => {
            response.statusCode = 200
            response.setHeader('Content-Type','text/html')
            response.end(data)
        })
    }else if(url === '/api/users' && method === 'GET'){
        // Ajax服务
        response.writeHead(200,{
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'http://localhost:3000'//解决跨域
        })
        response.end(JSON.stringify({
            name : 'laowang'
        }))
    }else if(method === 'GET' && headers.accept.indexOf('image/*') !== -1){
        // 图片文件服务
        fs.createReadStream('./'+url).pipe(response)
    }

})
server.listen(4000)