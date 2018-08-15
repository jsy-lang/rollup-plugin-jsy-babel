import rpi_jsy from 'rollup-plugin-jsy-babel'

const sourcemap = 'inline'
const plugins = [ rpi_jsy() ]
const external = ['rollup-pluginutils', 'jsy-transpile']

export default {
	input: 'test/some_jsy_source.jsy',
	output: {format: 'es', sourcemap},
  plugins, external}

