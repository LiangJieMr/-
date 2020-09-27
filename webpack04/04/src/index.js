// import React, { Component } from "react";
// import ReactDom from "react-dom";
// class App extends Component {
//  render() {
//  return <div>hello world</div>;
//  }
// }
// ReactDom.render(<App />, document.getElementById("app"));
// import "@babel/polyfill"
// const arr = [new Promise(() => {}), new Promise(() => {})];

// arr.map(item => {
//  console.log(item);
// });
// 给垫片瘦身，实现按需加载 减少冗余
// 模块化开发 当前流行的单页面入口应用 spa
/**
 * 引入模块 形成依赖
 * 支持
 * amd
 * require   commonJS
 * import   es module
 */
// import { add } from "./other.js"; // es module
// import 'font-awesome/css/font-awesome.css'
import css from "./css/index.less";
// console.log('test!!!!!!')
// import axios from "axios";
// const _ = require("lodash");
// axios.get('/api/info').then(res => {
//     console.log(res)
// })
// import pic from "./image/logo.jpg";

// var btn = document.createElement("button");
// btn.innerHTML = "新增";
// document.body.appendChild(btn);

// btn.onclick = function() {
//     var div = document.createElement("div");
//     div.innerHTML = "item";
//     document.body.appendChild(div);
// }

// let ele = `<div class=${css.ele}>css module</div>`;
// console.log("123")
// var img = new Image();
// pic为图片路径
// img.src = pic;
// var root = document.getElementById('root');
// root.append(img)

// document.write(ele)

/**
 * webpack 默认配置
 * 1.webpack执行构建会找 webpack.config.js 这个配置文件
 */

// import counter from "./counter";
// import number from "./number";
// counter();
// number();
// if (module.hot) {
//     module.hot.accept("./number", function () {
//         document.body.removeChild(document.getElementById("number"));
//         number();
//     });
// }