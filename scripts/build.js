const fs = require('fs');
const execa = require('execa');
const path = require('path');

const pkgDir = path.resolve(__dirname, '../packages');
const targets = fs.readdirSync(pkgDir).filter(f => {
  return fs.statSync(`${pkgDir}/${f}`).isDirectory();
})

async function build(target){
  await execa('rollup', ['-c', '--environment', `TARGET:${target}`], {
    stdio: 'inherit'
  })
}

function parallel(targets, build){
  const res = [];
  for(let target of targets){
    res.push(build(target))
  }
  return Promise.all(res)
}

parallel(targets, build)