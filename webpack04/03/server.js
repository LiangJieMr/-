/*
 * @Author: liangJie
 * @Date: 2020-09-25 17:18:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-25 17:20:30
 * @FilePath: \03\server.js
 * @Description: 
 * 
 */
const express = require("express");
const app = express();

app.get("/api/info", (req,res) => {
    res.json({
        hello:"express",
    })
})

app.listen("9092");