const path = require('path');
import jsonPlugin from '@rollup/plugin-json';
import resolvePlugin from '@rollup/plugin-node-resolve';
import tsPlugin from 'rollup-plugin-typescript2';
const pkgDir = path.resolve(__dirname, `packages/${process.env.TARGET}`);

const resolve = p => path.resolve(pkgDir, p);

const pkg = require(resolve('package.json'))

const name = process.env.TARGET;

const options = pkg.buildOptions;

const outputConfig = {
  'esm-bundler': {
    file: resolve(`dist/${name}.esm-bundler.js`),
    format: 'es'
  },
  'cjs': {
    file: resolve(`dist/${name}.cjs.js`),
    format: 'cjs'
  },
  'global': {
    file: resolve(`dist/${name}.global.js`),
    format: 'iife'
  }
}

function creatConfig(format, output){
  output.name = options.name;
  output.sourcemap = true;

  return {
    input: resolve('src/index.ts'),
    output,
    plugin: [
      jsonPlugin(),
      tsPlugin({
        tsconfig: path.resolve(__dirname, 'tsconfig.js')
      }),
      resolvePlugin()
    ]
  }
}

export default options.format.map(f => creatConfig(f, outputConfig[f]))

