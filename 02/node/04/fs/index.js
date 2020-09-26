/*
 * @Author: liangJie
 * @Date: 2020-09-17 14:57:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-17 15:31:01
 * @FilePath: \02\node\04\fs\index.js
 * @Description: 
 */
/**
 * 文件系统数据库
 * nodejs实现持久化
 */
const fs = require('fs')

function get(key){
    fs.readFile('./db.json', (err, data) => {
        const json = JSON.parse(data)
        console.log(json[key])
    })
}

function set(key, value){
    fs.readFile('./db.json', (err, data) => {
        //判断空文件
        const json = data ? JSON.parse(data) : {}
        json[key] = value
        //重新写入文件 持久化
        console.log(json)
        fs.writeFile('./db.json', JSON.stringify(json), err => {
            if(err){
                console.log(err);
            }
            console.log('写入成功')
        })
    })
}

// 开发命令行接口
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', function(input) {
    const [op, key, value] = input.split(" ")
 
    if (op === 'get') {
        get(key)
    } else if (op === 'set') {
        set(key, value)
    } else if (op === 'quit') {
        rl.clsoe()
    } else {
        console.log('没有该操作')
    }
})

rl.on('close', function() {
    console.log('程序结束')
    process.exit(0)
})