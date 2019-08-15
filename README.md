# Get Module Path

```npm install get-module-path```

### Use

```js
const getModulePath = require('get-module-path');

const module_name = 'app';
const module_path = getModulePath(module_name); // /home/dev/[sth]/app
const relative_module_path = getModulePath(module_name, __dirname); // node_modules/app
```

#### Author

0x0a0d
