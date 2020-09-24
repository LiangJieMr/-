/*
 * @Author: liangJie
 * @Date: 2020-09-17 15:32:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-17 15:44:11
 * @FilePath: \02\node\04\mysql\mysql2.js
 * @Description: mysql2
 */
(async () => {
    const mysql = require('mysql2/promise')// 引入mysql

    // 连接设置
    const cfg = {
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'kaikeba'
    }

    // 连接数据池
    const connection = await mysql.createConnection(cfg)
    // 执行语句
    let ret = await connection.execute(`
    CREATE TABLE IF NOT EXISTS test (
        id INT NOT NULL AOTU_INCREMENT,
        message VARCHAR(45) NULL,
        PRIMARY KEY (id)
    );`)
    console.log('create:',ret)
})()