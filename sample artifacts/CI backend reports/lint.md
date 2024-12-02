`FAIL`
lint(lint.md)
```js
npm WARN exec The following package was not found and will be installed: lint@0.8.19
npm WARN deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm WARN deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm WARN deprecated har-validator@5.1.5: this library is no longer supported
npm WARN deprecated loadash@1.0.0: Package is unsupport. Please use the lodash package instead.
npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
node:internal/modules/cjs/loader:998
  throw err;
  ^

Error: Cannot find module './linters/rubocop'
Require stack:
- /home/runner/.npm/_npx/cff02f3fa37c73aa/node_modules/lint/utils/linter.js
- /home/runner/.npm/_npx/cff02f3fa37c73aa/node_modules/lint/index.js
    at Module._resolveFilename (node:internal/modules/cjs/loader:995:15)
    at Module._load (node:internal/modules/cjs/loader:841:27)
    at Module.require (node:internal/modules/cjs/loader:1061:19)
    at require (node:internal/modules/cjs/helpers:103:18)
    at Object.<anonymous> (/home/runner/.npm/_npx/cff02f3fa37c73aa/node_modules/lint/utils/linter.js:50:5)
    at Module._compile (node:internal/modules/cjs/loader:1159:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1213:10)
    at Module.load (node:internal/modules/cjs/loader:1037:32)
    at Module._load (node:internal/modules/cjs/loader:878:12)
    at Module.require (node:internal/modules/cjs/loader:1061:19) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/runner/.npm/_npx/cff02f3fa37c73aa/node_modules/lint/utils/linter.js',
    '/home/runner/.npm/_npx/cff02f3fa37c73aa/node_modules/lint/index.js'
  ]
}

Node.js v18.12.0
```
