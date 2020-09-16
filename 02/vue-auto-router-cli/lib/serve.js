/*
 * @Author: liangJie
 * @Date: 2020-09-16 09:41:12
 * @LastEditors: 
 * @LastEditTime: 2020-09-16 09:41:25
 * @FilePath: \02\vue-auto-router-cli\lib\serve.js
 * @Description: 
 */
const spawn = (...args) => {
    const { spawn } = require('child_process');
    const proc = spawn(...args)
    proc.stdout.pipe(process.stdout)
    proc.stderr.pipe(process.stderr)
    return proc
}

module.exports = async () => {
    const watch = require('watch')
    let process
    let isRefresh = false
    watch.watchTree('./src', async (f) => {
        if (!isRefresh) {
            isRefresh = true
            process && process.kill()
            await require('./refresh')()
            setTimeout(() => { isRefresh = false }, 5000)
            process = spawn('npm.cmd', ['run', 'serve'])
        }
    })
}