import rpi_babel from 'rollup-plugin-babel';

const jsy_preset = [ 'jsy/lean', { no_stage_3: true, modules: false } ];
jsy_babel.jsy_preset = jsy_preset;

const default_config = { exclude: 'node_modules/**', babelrc: false };
  // presets: [ jsy_preset ].concat(config.presets || []),
  // plugins: [],

function jsy_babel(config) {
  config = Object.assign({}, default_config, config);
  config.presets = [jsy_babel.jsy_preset].concat(config.presets || []);

  const rpi = rpi_babel(config);
  rpi.name = 'jsy-babel';
  return rpi
}

export default jsy_babel;