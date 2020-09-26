// 模块化开发 当前流行的单页面入口应用 spa
/**
 * 引入模块 形成依赖
 * 支持
 * amd
 * require   commonJS
 * import   es module
 */
// import { add } from "./other.js"; // es module
import 'font-awesome/css/font-awesome.css'
import css from "./css/index.less";
// import pic from "./image/logo.jpg";

// let ele = `<div class=${css.ele}>css module</div>`;
console.log("123")
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