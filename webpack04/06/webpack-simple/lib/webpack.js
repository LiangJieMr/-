/*
 * @Author: 梁杰
 * @Date: 2020-09-28 23:07:23
 * @LastEditors: 梁杰
 * @LastEditTime: 2020-09-29 00:06:48
 * @Description: 配置
 */
const fs = require("fs");
const path = require("path");
const parser = require("@babel/parser");//生成ast
const traverse = require("@babel/traverse").default;//遍历ast

const { transformFromAst } = require("@babel/core");

module.exports = class webpack {
    constructor(options) {
        const { entry, output } = options;
        this.entry = entry;
        this.output = output;
        this.modules = [];
    }
    run() {
        // 开始分析入口模块的内容
        const info = this.parse(this.entry)
        // 递归分析其他的模块
        this.modules.push(info)
        for(let i = 0; i < this.modules.length; i++) {
            const item = this.modules[i];
            const { dependencies } = item;
            if(dependencies){
                for(let j in dependencies){
                    this.modules.push(this.parse(dependencies[j]))
                }
            }
        }
        const obj = {};
        this.modules.forEach(item => {
            obj[item.entryFile] = {
                dependencies: item.dependencies,
                code: item.code
            }
        })
        this.file(obj);
    }
    parse(entryFile) {
        // 开始分析入口模块内容
        const content = fs.readFileSync(entryFile, 'utf-8');
        
        const ast = parser.parse(content, {
            sourceType: "module",
        })
        const dependencies = {};
        traverse(ast, {
            ImportDeclaration({node}){
                // path.dirname(entryFile)分析路径返回目录
                const newPathName = path.join(
                    path.dirname(entryFile),
                    node.source.value
                );
                dependencies[node.source.value] = newPathName;
            }
        });
        const {code} = transformFromAst(ast, null, {
            presets: ["@babel/preset-env"]
        });

        return{
            entryFile,
            dependencies,
            code
        }
    }

    file(code) {
        // 创建从自运行函数 处理require,modules,exportss
        // 生成main.js => dist/main.js
        const filePath = path.join(
            this.output.path,
            this.output.filename
        );
        console.log(filePath)

        const bundle = `(funciton(graph){
            
        })(${code})`
        // 写入文件main.js
        fs.writeFileSync(filePath, bundle, "utf-8");
    }
}