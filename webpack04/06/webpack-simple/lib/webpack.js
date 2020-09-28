const fs = require("fs");
const path = require("path");
const parser = require("@babel/parser");//生成ast
const traverse = require("@babel/traverse").default;//遍历ast
module.exports = class webpack {
    constructor(options) {
        const { entry, output } = options;
        this.entry = entry;
        this.output = output;
    }
    run() {
        this.parse(this.entry)
    }
    parse(entryFile) {
        // 开始分析入口模块内容
        const content = fs.readFileSync(entryFile, 'utf-8');
        
        const ast = parser.parse(content, {
            sourceType: "module",
        })
        traverse(ast, {
            ImportDeclaration({node}){
                // path.dirname(entryFile)分析路径返回目录
                const newPathName = path.join(
                    path.dirname(entryFile),
                    node.source.value
                );
                console.log(newPathName)
            }
        })
        // console.log(ast.program.body)
    }
}