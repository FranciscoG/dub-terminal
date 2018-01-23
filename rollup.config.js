import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import scss from 'rollup-plugin-scss'
import autoprefixer from 'autoprefixer'
import postcss from 'postcss'
import { writeFileSync } from 'fs'
const prefixer = postcss([ autoprefixer ]);

export default {
  input: 'src/index.js',
  output: {
    file : 'build/dub-terminal.js',
    format: 'iife',
    name: 'DubTerminal',
    sourcemap : true,
    treeshake : true
  },
  watch : {
    clearScreen: false
  },
  plugins: [
    resolve(),
    scss({
      output : function(css,styles){
        writeFileSync('build/dub-terminal.css', prefixer.process(css))
      }
    }),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }),
    uglify()
  ]
};