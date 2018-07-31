# rollup-plugin-jsy-babel

Configuration for using [JSY](https://github.com/jsy-lang/jsy-lang-docs#readme) in [RollupJS](https://rollupjs.org) via [Babel](https://babeljs.io) 6.x.

## Quick Start

```bash
# optional; could also use `npm init .`
$ echo '{"private": true}' > package.json.

# install devDependencies for JSY and RollupJS
$ npm install -D \
    babel-core babel-cli \
    rollup rollup-plugin-jsy-babel \
    babel-preset-jsy
```

##### Add `rollup.config.js` with:

```javascript
import {parse as path_parse} from 'path'
import rpi_jsy from 'rollup-plugin-jsy-babel'

const configs = []
export default configs

const sourcemap = 'inline'
const plugins = [rpi_jsy()]
const external = []


const direct = [
  'my_script',
].forEach(add_jsy)


function add_jsy(name) {
  configs.push({
    input: `code/${name}.js`,
    output: [
      { file: `cjs/${name}.js`, format: 'cjs', exports:'named', sourcemap },
      { file: `umd/${name}.js`, format: 'umd', name, exports:'named', sourcemap },
      { file: `esm/${name}.js`, format: 'es', sourcemap },
    ],
    plugins, external })
}
```

##### Add `files` and `scripts` to `package.json` :

```json
{
  "files": [ "cjs/", "esm/", "umd/" ],
  "scripts": {
    "clean": "rm -rf ./cjs/* ./esm/* ./umd/*",
    "build": "rollup --config",
    "watch": "npm -s run build -- --watch",
    "pretest": "npm -s run build",
    "test": "true"
  }
}
```

## Other Examples

- by [Direct named files](examples/direct/README.md)
- by [Glob pattern](examples/glob/README.md)
- by [Package main/module/browser keys](examples/package/README.md)

## License

[MIT](LICENSE)
