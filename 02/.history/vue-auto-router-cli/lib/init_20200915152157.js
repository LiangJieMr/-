const {promisify} = require('util')
const figlet = promisify(require('figlet'))
const clear = require('clear') //清空
const chalk = require('chalk') //将日志变为其他颜色
const log = content => console.log(chalk.green(content))
const {clone} = require('./download')
const spawn = async (...args) => {
    const { spawn } = require('child_process')
    return new Promise(resolve => {
        const proc = spawn(...args)
        proc.stdout.pipe(process.stdout)
        proc.stderr.pipe(process.stderr)
        proc.on('close', () => {
            resolve()
        })
    })
}
module.exports = async name => {
    //打印欢迎界面
    clear()
    const data = await figlet('KKB Welcome')
    log(data)
    //克隆项目
    await clone('github:su37josephxia/vue-template',name)

    //安装依赖
    log('安装依赖')
    await spawn('cnpm',['install'],{cwd: `./${name}`})

    log(
        `
        ok
===========
安装ok


===========   
`
    )
}
