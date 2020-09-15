/*
 * @Author: liangJie
 * @Date: 2020-09-15 15:38:16
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-15 16:29:47
 * @FilePath: \02\vue-auto-router-cli\lib\refresh.js
 * @Description: 
 */
const fs = require('fs')
const handlebars = require('handlebars')
const chalk = require('chalk') //将日志变为其他颜色
module.exports = async () => {

    //获取页面列表
    const list = 
        fs.readdirSync('./src/views')
        .filter(v => v != 'Home.vue')
        .map(v => ({
            name: v.replace('.vue', '').toLowerCase(),
            file: v
        }))

        //生成路由定义
        compile({list},'./src/routers.js','./template/router.js.hbs')


    /**
     * @description: 编译模板文件
     * @param {type} filePath 目标文件路径 meta数据定义
     * @return {type} templatePath 模板文件路径
     */
    function compile(meta, filePath, templatePath) {
        if(fs.existsSync(templatePath)){
            const content = fs.readFileSync(templatePath).toString()
            const result = handlebars.compile(content)(meta)
            fs.writeFileSync(filePath,result)
            console.log(chalk.green(`火箭${filePath}创建成功`))
        }
    }
}