import pkg from './package.json'

export default {
	input: 'code/index.jsy',
	output: [
		{file: pkg.module, format: 'es'},
		{file: pkg.main, format: 'cjs'}],
  external: ['rollup-plugin-babel']}

