import rpi_babel from 'rollup-plugin-babel'

const jsy_preset = [ 'jsy/lean', { no_stage_3: true, modules: false } ]
jsy_babel.jsy_preset = jsy_preset
const default_config = {
  exclude: 'node_modules/**',
  presets: [ jsy_preset ],
  plugins: [],
  babelrc: false }

export default function jsy_babel(config=default_config) {
  const res = rpi_babel(config)
  res.name = 'jsy-babel'
  return res
}
