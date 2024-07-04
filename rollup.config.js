const babel = require('@rollup/plugin-babel');
 const commonjs = require('rollup-plugin-commonjs');
 const postcss = require('rollup-plugin-postcss');
 const resolve = require('rollup-plugin-node-resolve');
 const url = require('rollup-plugin-url');
 const alias = require('rollup-plugin-alias');
const external = require('rollup-plugin-auto-external');
const copy = require('rollup-plugin-copy');

const pkg = require('./package.json');

const libName = "react-elastic-carousel";

module.exports = {
  input: `src/${libName}/index.js`,
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      exports: 'named'
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    alias({
      [libName]: `./src/${libName}/index.js`
    }),
    external(),
    postcss({
      modules: false
    }),
    url(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: "external",
      plugins: [ '@babel/external-helpers' ]
    }),
    resolve(),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/react-is/index.js': ['isValidElementType']
      }
    }),
    copy({
      targets: [{ src: `src/${libName}/index.d.ts`, dest: "dist" }],
    })
  ]
}