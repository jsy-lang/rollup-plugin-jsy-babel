# rollup-plugin-jsy-babel

Babel configuration for using JSY in rollup

## Example

in `rollup.config.js` :

```javascript
import pkg from './package.json'
import rpi_jsy from 'rollup-plugin-jsy-babel'

const sourcemap = 'inline'
const plugins = [rpi_jsy()]
const external = []

export default [
  { input: 'code/index.jsy',
    output: [
      { file: pkg.main, format: 'cjs', exports:'named', sourcemap },
      { file: pkg.browser, format: 'umd', name: pkg.name, exports:'named', sourcemap },
      { file: pkg.module, format: 'es', sourcemap }],
    plugins, external },
]
```

in `package.json` :
```json
{ …
  "main": "cjs/index.js",
  "module": "esm/index.mjs",
  "browser": "umd/index.js",
  "files": [ "cjs/", "esm/", "umd/" ],

  "dependencies": { },

  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-jsy": "^0.9.4",
    "rollup": "^0.59.2"
    "rollup-plugin-jsy-babel": "^2.1.2"
  },

  "babel": { "presets": ["jsy/lean"] },

  "scripts": {
    "clean": "rm -rf ./cjs/* ./esm/* ./umd/*",
    "build": "rollup --config",
    "watch": "npm -s run build -- --watch",
    "pretest": "npm -s run build",
    "test": "true"
  }
}
```

## License

[MIT](LICENSE)
