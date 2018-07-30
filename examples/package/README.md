# Package reference use of rollup-plugin-jsy-babel

### in `rollup.config.js` :

```javascript
import rpi_jsy from 'rollup-plugin-jsy-babel'

const configs = []
export default configs


const sourcemap = 'inline'
const plugins = [rpi_jsy()]
const external = []


import pkg from './package.json'
configs.push({
  input: 'code/index.jsy',
  output: [ 
      pkg.main && { file: pkg.main, format: 'cjs', exports:'named', sourcemap },
      pkg.browser && { file: pkg.browser, format: 'umd', name: pkg.name, exports:'named', sourcemap },
      pkg.module && { file: pkg.module, format: 'es', sourcemap },
    ].filter(Boolean),
  plugins, external })
```

### in `package.json` :

```json
{ …
  "files": [ "cjs/", "esm/", "umd/" ],

  "dependencies": { },

  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-jsy": "^0.11.2",
    "rollup": "^0.63.4",
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

