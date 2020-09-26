#!/usr/bin/env node
console.log('11')
const program = require('commander')
program.version(require('../package').version)

program
    .command('init <name>')
    .description('init project')
    .action(require('../lib/init'))

program
    .command('refresh')
    .description('refresh')
    .action(require('../lib/refresh'))
program
    .command('serve')
    .description('serve')
    .action(require('../lib/serve'))    
program.parse(process.argv)

