import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import { terser } from "rollup-plugin-terser";

export default [{
  input: 'src/more-info-multi-card.ts',
  output: {
    file: './dist/more-info-multi-card.js',
    format: 'es',
    inlineDynamicImports: true,
  },
  context: "window",
  plugins: [
    typescript({
      declaration: false,
    }),
    nodeResolve(),
    json(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: "bundled",
    }),
    terser(),
  ],
}];
