const fs = require('fs');
const execa = require('execa');
const path = require('path');

const pkgDir = path.resolve(__dirname, '../packages');
const target = 'reactivity'

async function build(target){
  await execa('rollup', ['-cw', '--environment', `TARGET:${target}`], {
    stdio: 'inherit'
  })
}

build(target)