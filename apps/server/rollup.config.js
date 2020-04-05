// import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import json from '@rollup/plugin-json';

export default {
  input: 'compiled/server.js',
  output: {
    dir: 'api',
    format: 'cjs'
  },
  plugins: [
    commonjs(),
    json(),
    resolve({
      preferBuiltins: true
    }),
    babel({
      exclude: 'node_modules/**'
    })
  ]
};
