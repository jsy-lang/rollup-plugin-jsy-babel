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
      { file: pkg.module, format: 'es', sourcemap }],
    plugins, external },
]
```

in `package.json` :
```json
{ …
  "main": "dist/index.js",
  "module": "dist/index.mjs",
  "files": [ "dist/", "code/" ],

  "dependencies": { },

  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-jsy": "^0.9.4",
    "rollup": "^0.55.3",
    "rollup-plugin-jsy-babel": "^1.0.0"
  },

  "babel": { "presets": ["jsy/lean"] },

  "scripts": {
    "clean": "rm -rf ./dist/*",
    "build": "rollup --config",
    "watch": "npm -s run build -- --watch",
    "pretest": "npm -s run build",
    "test": "true"
  }
}
```

## License

[MIT](LICENSE)
