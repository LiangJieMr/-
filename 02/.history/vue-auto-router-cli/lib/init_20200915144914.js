const {promisify} = require('util')
const figlet = promisify(require('figlet'))
const clear = require('clear') //清空
const chalk = require('chalk') //将日志变为其他颜色
const log = content => console.log(chalk.green(content))

module.exports = async name => {
    //打印欢迎界面
    clear()
    const data = await figlet()
}