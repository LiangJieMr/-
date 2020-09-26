// 模块化开发 当前流行的单页面入口应用 spa
/**
 * 引入模块 形成依赖
 * 支持
 * amd
 * require   commonJS
 * import   es module
 */
// import { add } from "./other.js"; // es module
import "./index.css";

console.log(add(2, 3));

console.log('hello webpack!')

/**
 * webpack 默认配置
 * 1.webpack执行构建会找 webpack.config.js 这个配置文件
 */