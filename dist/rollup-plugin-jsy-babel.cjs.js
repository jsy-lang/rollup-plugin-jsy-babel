'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var rpi_babel = _interopDefault(require('rollup-plugin-babel'));

const jsy_preset = [ 'jsy/lean', { no_stage_3: true, modules: false } ];
jsy_babel.jsy_preset = jsy_preset;
const default_config = {
  exclude: 'node_modules/**',
  presets: [ jsy_preset ],
  plugins: [],
  babelrc: false };

function jsy_babel(config=default_config) {
  const res = rpi_babel(config);
  res.name = 'jsy-babel';
  return res
}

module.exports = jsy_babel;
