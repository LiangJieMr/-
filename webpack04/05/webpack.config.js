//webpack基于nodejs commonjs规范
//webpack配置 就是一个对象
const path = require("path");
// html模板
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 清除冗余文件
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
// css模块文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
// 压缩css
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
// 摇树
const PurifyCSS = require("purifycss-webpack");
const glob = require("glob-all");
// speed-measure-webpack-plugin:可以测量各个插件和 loader 所花费的时间
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();
// webpack-bundle-analyzer:分析webpack打包后的模块依赖关系：
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// 提供中间缓存
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
// 使⽤happypack并发执⾏任务 电脑来判断几核的，几个进程
const HappyPack = require('happypack');
const happypack = require("happypack");
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })
// const config = {
module.exports={
    //上下文
    // context: "",
    //入口文件 项目入口 字符串 数组 对象
    entry: "./src/index.js",// 单页面引用
    // entry: ["./src/index.js", "./src/other.js"],
    // entry: {//多入口 对象方式为多入口打包多键值 需配多出口
    //     index: "./src/index.js",
    //     other: "./src/other.js",
    // },
    //出口
    output: {
        //构建文件资源目录  
        //必须是绝对路径
        //__dirname当前路径的绝对路径
        path: path.resolve(__dirname, "./dist"),
        //构建文件名称
        // filename: "index.js",
        // 单出口 多出口 都推荐使用占位符
        filename: "[name].js",//多出口 占位符【name】

        /**
         * 占位符
         * 1.hash 整个项目的hash 每构建一次就会有一个新的hash 可指定长度eg:filename: "[name]-[hash:6].js" 最长20
         * 2.chunkhash 根据不同入口entry进行依赖解析，构建对应的chunk，生成相应的hash
         *              只要组成entry的模块没有内容改动，则对应的hash不变
         * 3.name
         * 4.id
         */
        // publicPath:'http://cdn.jie.com/assets' //资源路径 cdn 需手动上传cdn
    },
    // 构建模式 none production development
    mode:"development",

    
    // 处理 不认识的模块
    module: {
        // loader使用一个消耗性能的大户
        rules: [
            // {
            //     test: /\.(eot|svg|ttf|woff|woff2)$/,
            //     use: {
            //         loader: "file-loader",
            //         options: {
            //             outputPath: "font/",
            //         }
            //     }
            // },
            // 3116ms
            // 2675ms
            {
                test: /\.css$/,
                include: path.resolve(__dirname, "./src"),
                // include 只去这找
                // exclude 排除其他
                //loader 模块转换 执行顺序从后往前 本质普通函数
                //css-loader 言简意赅 是把css模块的内容加入到 js模块中去  CommonJS 模块
                //css in js方式

                //style-loader从js中提取css的loader 在html中创建style标签
                // use: ["style-loader", "css-loader"],
                use: ["happypack/loader?id=css"],
            },
            {
                test: /\.less$/,
                include: path.resolve(__dirname, "./src"),
                use: [
                    "happypack/loader?id=less"
                    //提取css独立文件
                    // MiniCssExtractPlugin.loader, // 对hmr支持不好
                    // //  "style-loader", 
                    // {
                    //     loader: "css-loader",
                    //     options: {//参数
                    //         //css modules 模块化
                    //         modules: true
                    //     }
                    // },
                    // {
                    //     //需使用 "postcss-loader": "^3.0.0",
                    //     //"autoprefixer": "^9.7.6",
                    //     //否则有版本问题 
                    //     // css前缀
                    //     loader: "postcss-loader",
                    // },
                    // "less-loader"
                ]
            },
            {
            // <!-- 第一次访问
            //     - 有cdn 快于

            //     - 没有cdn的
            // 有缓存之后
            //     就一样了     -->

                // jpe?g ?表示e可有可无
                // urlloader包含fileloader
                // 推荐使用url-loader，因为支持limit
                test: /\.(png|jpe?g|gif)$/,
                include: path.resolve(__dirname, "./src"),
                use: {
                    loader: "happypack/loader?id=pic"
                    // loader: "file-loader",
                    // loader: "url-loader",
                    // options: {
                    //     // name模块名称 pic
                    //     // hash 长度
                    //     // ext 后缀名
                    //     name: "[name]_[hash:6].[ext]",
                    //     outputPath: "images/",
                    //     //推荐小体积的图片资源转为base64
                    //     limit: 30 * 1024,// 单位是字节 1024=1kb
                    // }
                }
            },
            {
                test: /\.js$/,
                include: path.resolve(__dirname, "./src"),
                // exclude: /node_modules/,
                use: {
                    loader: "babel-loader", // webpack与babel桥梁
                }
            }
        ]
    },
    // 明确路径
    resolve: {
        // 查找第三方依赖
        modules:[path.resolve(__dirname, "./node_modules")],
        // 减少查找过程
        // 设置别名
        alias: {
            "@": path.join(__dirname, "./src/css"),
            react: path.resolve(
                __dirname,
                "./node_modules/react/umd/react.production.min.js"
                ),
            "react-dom": path.resolve(
                __dirname,
                "./node_modules/react-dom/umd/react-dom.production.min.js"
                )
        },
        // extensions: [".js", ".json", ".jsx"],
        // 优化静态资源 不需要打包依赖 忽略
        // externals: {
            //jquery通过script引⼊之后，全局中即有了 jQuery 变量
            // jquery: "jQuery",
            // lodash: '_'
        // }
    },
    // 定位error
    // sourcemap  源代码与打包后的代码映射关系，通过sourcemap定位到源代码
    // development默认开启 production默认关闭
    // none关闭， source-map开启
    // devtool
    // source-map生成map文件，inline-source-map添加到bandoule文件
    // 开发模式推荐 cheap-module-eval-source-map
    // 线上不推荐开启 cheap-module-source-map
    devtool: "cheap-inline -source-map",
    devServer: {
        // 资源打开目录 可以是相对路径
        contentBase: path.resolve(__dirname, "./dist"),
        // 自动打开默认浏览器窗口
        open: true,
        // HOT Module Replacement(HMR:热模块替换) :之前操作过的保留
        hot: true,
        // 即便hmr没有生效 也不要刷新浏览器
        hotOnly: true,
        // 代理
        proxy: {
            "/api": {
                // 正向代理
                target: "http://localhost:9092"
            }
        },
        // before after 为devserver提供的中间件hooks/钩子
        // 加载内容中间件之前 mock server
        before(app, server){
            app.get("/api/mock.json", (req, res) => {
                res.json({
                    hello:"express",
                })
            })
        },
        // 加载内容中间件之后
        // after(){

        // },
        port: 8080,
    },
    // js tree shaking 摇树 不依赖第三方插件
    optimization: {
        usedExports: true, // 哪些导出的模块被使用了,再做打包
        splitChunks: {
            chunks: "all", // 所有的 chunks 代码公共的部分分离出来成为⼀个单独的⽂件
            //对同步 initial，异步 async，所有的模块有效 all
            cacheGroups: { // 缓存分割
                lodash: {
                    test: /lodash/,
                    name: "lodash"
                },
                react: {
                    test: /react|react-dom/,
                    name: "react"
                }
            }
        },
        // 作用域提升 Scope Hoisting
        concatenateModules: true, // ）是指 webpack 通过 ES6 语法的静态分析，分析出模块之间的依赖关
        //系，尽可能地把模块放到同⼀个函数中。
    },
    // 插件 原理作用于webpack整个打包周期的 本质类
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
        // 清除无用css
        new PurifyCSS({
            paths: glob.sync([
                // 要做 CSS TREE Shaking 的路径文件
                path.resolve(__dirname, "./src/*.html"), // 同样需要对html进行 tree shaking
                path.resolve(__dirname, "./src/*.js")
            ])
        }),
        new HappyPack({
            id:"css",
            loader: ["style-loader", "css-loader"]
        }),
        new HappyPack({
            id:"js",
            loader: ["babel-loader"]
        }),
        // new OptimizeCssAssetsWebpackPlugin({
        //     cssProcessor: require("cssnano"), //引⼊cssnano配置压缩选项
        //     cssProcessorOptions: {
        //     discardComments: { removeAll: true }
        //     }
        // }),
        // 引入链接库
        new webpack.DllReferencePlugin({
            manifest: path.resolve(__dirname,"./dll/react-manifest.json")
        }),
        new HtmlWebpackPlugin(
            {
                // 选择html模板
                title: "首页",//支持  ejs模板语法
                template: "./src/index.html",
                filename: "index.html",
                // minify: {
                //     // 压缩HTML⽂件
                //     removeComments: true, // 移除HTML中的注释
                //     collapseWhitespace: true, // 删除空⽩符与换⾏符
                //     minifyCSS: true // 压缩内联css
                // }
            }
        ),
        new webpack.HotModuleReplacementPlugin(),
        // new BundleAnalyzerPlugin(),
        new HardSourceWebpackPlugin()
    ],
}

// module.exports = smp.wrap(config)