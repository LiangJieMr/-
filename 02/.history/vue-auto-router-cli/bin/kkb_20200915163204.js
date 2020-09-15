/*
 * @Author: liangJie
 * @Date: 2020-09-15 14:37:29
 * @LastEditors: 
 * @LastEditTime: 2020-09-15 16:31:46
 * @FilePath: \02\vue-auto-router-cli\bin\kkb.js
 * @Description: 
 */
#!/usr/bin/env node
const program = require('commander')
const { resolve } = require('path')
program.version(require('../package').version)

program
    .command('init <name>')
    .description('init project')
    .action(require('../lib/init'))

program
    .command('refresh')
    .description('refresh')
    .action(require('../lib/refresh'))
program.parse(process.argv)

