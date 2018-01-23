import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import sass from 'rollup-plugin-sass';
import autoprefixer from 'autoprefixer'
import postcss from 'postcss'

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
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }),
    uglify(),
    sass({
      // output: true,
      // include: ['./src/dub_term.scss'],
      processor: css => postcss([autoprefixer])
        .process(css)
        .then(result => {
          console.log(result.css);
          writeFileSync('build/dub-terminal.css', result.css);
        })
    })
  ]
};