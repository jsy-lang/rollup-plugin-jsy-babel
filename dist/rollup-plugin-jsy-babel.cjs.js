'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var rpi_babel = _interopDefault(require('rollup-plugin-babel'));

const jsy_preset = [ 'jsy/lean', { jsy_lite: true, no_stage_3: true, modules: false } ];
jsy_babel.jsy_preset = jsy_preset;

const default_config = { exclude: 'node_modules/**', babelrc: false };
  // presets: [ jsy_preset ].concat(config.presets || []),
  // plugins: [],

function jsy_babel(config) {
  config = Object.assign({}, default_config, config);

  const jsy = jsy_babel.jsy_preset.slice();
  jsy[1] = Object.assign({}, jsy[1], config.env, config.jsy);

  config.presets = [jsy].concat(config.presets || []);

  const rpi = rpi_babel(config);
  rpi.name = 'jsy-babel';
  return rpi
}

module.exports = jsy_babel;
