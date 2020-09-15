#!/usr/bin/env node
const program = require('commander')
const { resolve } = require('path')
program.version(require('../package').version)

program
    .command('init <name>')
    .description('init project')
    .action(require('../lib/init'))
program.parse(process.argv)

function spawn(...args){
    const {spawn} = require('child_process')//子进程
    return new Promise(resolve => {
        const proc = spawn(...args)
        proc.stdout.pipe(process.stdout)//接入当前正在执行进程
        proc.stderr.pipe(process.stderr)//错误流
        proc.on('close', () => {
            resolve()
        })
    })
}