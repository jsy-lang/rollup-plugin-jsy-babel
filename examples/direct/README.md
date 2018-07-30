# Direct file use of rollup-plugin-jsy-babel

### in `rollup.config.js` :

```javascript
import {parse as path_parse} from 'path'
import rpi_jsy from 'rollup-plugin-jsy-babel'

const configs = []
export default configs

const sourcemap = 'inline'
const plugins = [rpi_jsy()]
const external = []


const direct = [
  'code/my_script.jsy',
].forEach(add_jsy)


function add_jsy(src_filename) {
  const {name} = path_parse(src_filename)
  configs.push({
    input: src_filename,
    output: [
      { file: `cjs/${name}.js`, format: 'cjs', exports:'named', sourcemap },
      { file: `umd/${name}.js`, format: 'umd', name, exports:'named', sourcemap },
      { file: `esm/${name}.js`, format: 'es', sourcemap },
    ],
    plugins, external })
}
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

