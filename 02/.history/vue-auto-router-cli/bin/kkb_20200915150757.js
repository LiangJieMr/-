#!/usr/bin/env node
const program = require('commander')
program.version(require('../package').version)

program
    .command('init <name>')
    .description('init project')
    .action(require('../lib/init'))
program.parse(process.argv)

function spawn(...args){
    const {spawn} = require('child_process')//子进程
}