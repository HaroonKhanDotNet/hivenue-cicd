**Note:** This is a *Compliance Document* which is a *Work in Progress* (**WIP**) and will serve as a *Service Level Agreement* (**SLA**) between ***Hivenue*** and ***BTC6*** (ICTC Beyond The Cloud Team #06).

#
# Hivenue CI/CD Pipeline
**[Riipen Pages - https://beyondthecloud.riipen.com/teams/QVdXDavV](https://beyondthecloud.riipen.com/teams/QVdXDavV)**

`Version: 1.0.0`

`Project Kick-off: 2024 Oct 15 Tue | 60Hrs. per 6 Weeks`

| Hivenue                       | BTC6                  |
|-------------------------------|-----------------------|
| Nassim Bahloul `CEO`          | Alejandro Castellanos |
| Louenas Hamdi `CTO`           | Jayme Liao            |
| Hanson Liang `Lead Developer` | Haroon Khan           |

## Requirement:
Hivenue need to integrate ***Development Environment*** with a ***CI/CD Pipeline*** to *automate* production deployment.

![Hivenue CI/CD Pipeline](hivenue_cicd.svg)

### CI Workflow
1. **Build** (Code Integration with Dependencies)
2. **Unit/Integration Testing** (Jest)

[**Click to Download Hivenue Backend CI Reports**](https://github.com/Hivenue/riipen-backend/actions/runs/11845520777/artifacts/2190031529)

[SNYK Static Application Security Test *SAST* Results](https://app.snyk.io/org/wemoove/project/6ab34e65-d9bc-450d-92b5-918771bc86c7)
<br/>SNYK free account only allows limited testing through their console. Also, in free account we cannot create the token to run from Github.

```js
npm i
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: 'wemoove@0.0.0',
npm warn EBADENGINE   required: { node: '18.12.0', npm: '8.19.2' },
npm warn EBADENGINE   current: { node: 'v18.20.5', npm: '10.8.2' }
npm warn EBADENGINE }
npm WARN deprecated phantomjs-prebuilt@2.1.16: this package is now deprecated
npm WARN deprecated html-pdf@3.0.1: Please migrate your projects to a newer library like puppeteer
```

```js
npm audit (npm-audit.json)
The audit command submits a description of the dependencies configured in your project to your default registry and asks for a report of known vulnerabilities. If any vulnerabilities are found, then the impact and appropriate remediation will be calculated.

*vulnerabilities:91
info:0
low:2
moderate:38
high:38
critical:13

Note: Some issues need review, and may require choosing
a different dependency.

To address issues that do not require attention, run: npm audit fix

To address all issues possible (including breaking changes), run: npm audit fix --force
```

```js
npx dotenv-linter
npm WARN exec The following package was not found and will be installed: dotenv-linter@0.2.0
node:internal/fs/utils:348
    throw err;
    ^

Error: ENOENT: no such file or directory, open 'always'
    at Object.openSync (node:fs:600:3)
    at Object.readFileSync (node:fs:468:35)
    at readFileSync (/home/runner/.npm/_npx/84c4e1697383e332/node_modules/dotenv-linter/src/fs.js:18:13)
    at /home/runner/.npm/_npx/84c4e1697383e332/node_modules/dotenv-linter/src/lint.js:82:21
    at Array.forEach (<anonymous>)
    at lintFiles (/home/runner/.npm/_npx/84c4e1697383e332/node_modules/dotenv-linter/src/lint.js:81:9)
    at Object.<anonymous> (/home/runner/.npm/_npx/84c4e1697383e332/node_modules/dotenv-linter/src/index.js:26:1)
    at Module._compile (node:internal/modules/cjs/loader:1159:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1213:10)
    at Module.load (node:internal/modules/cjs/loader:1037:32) {
  errno: -2,
  syscall: 'open',
  code: 'ENOENT',
  path: 'always'
}
```

```js
npx jsonlint package.json (jsonlint-package.json)
npm WARN exec The following package was not found and will be installed: jsonlint@1.6.3
npm WARN deprecated nomnom@1.8.1: Package no longer supported. Contact support@npmjs.com for more info.
```

```js
npx jsonlint package-lock.json (jsonlint-package-lock.json)
```

```js
npx package-locks-checks
npm WARN exec The following package was not found and will be installed: package-locks-checks@0.0.8
npm WARN deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm WARN deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
npm WARN deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
```

```js
npx quality
npm WARN exec The following package was not found and will be installed: quality@1.0.5
npm WARN deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm WARN deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm WARN deprecated glob@5.0.15: Glob versions prior to v9 are no longer supported
npm WARN deprecated glob@5.0.15: Glob versions prior to v9 are no longer supported
npm WARN deprecated stable@0.1.8: Modern JS already guarantees Array#sort() is a stable sort, so this library is deprecated. See the compatibility table on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#browser_compatibility
npm WARN deprecated q@1.5.1: You or someone you depend on is using Q, the JavaScript Promise library that gave JavaScript developers strong feelings about promises. They can almost certainly migrate to the native JavaScript promise now. Thank you literally everyone for joining me in this bet against the odds. Be excellent to each other.
npm WARN deprecated 
npm WARN deprecated (For a CapTP with native promises, see @endo/eventual-send and @endo/captp)
npm WARN deprecated try-resolve@1.0.1: Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.
npm WARN deprecated babel-plugin-remove-console@1.0.1: Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.
npm WARN deprecated babel-plugin-undefined-to-void@1.1.6: Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.
npm WARN deprecated babel-plugin-remove-debugger@1.0.1: Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.
npm WARN deprecated babel-plugin-proto-to-assign@1.0.4: Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.
npm WARN deprecated babel-plugin-member-expression-literals@1.0.1: Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.
npm WARN deprecated babel-plugin-inline-environment-variables@1.0.1: Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.
npm WARN deprecated babel-plugin-react-display-name@1.0.3: Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.
npm WARN deprecated babel-plugin-runtime@1.0.7: Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.
npm WARN deprecated babel-plugin-property-literals@1.0.1: Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.
npm WARN deprecated babel-plugin-react-constant-elements@1.0.3: Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.
npm WARN deprecated babel-plugin-dead-code-elimination@1.0.2: Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.
npm WARN deprecated babel-plugin-constant-folding@1.0.1: Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.
npm WARN deprecated babel-plugin-jscript@1.0.4: Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.
npm WARN deprecated babel-plugin-eval@1.0.1: Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.
npm WARN deprecated minimatch@2.0.10: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated graceful-fs@2.0.3: please upgrade to graceful-fs 4 for compatibility with current and future versions of Node.js
npm WARN deprecated minimatch@0.2.14: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated standard-format@1.6.10: standard-format is deprecated in favor of a built-in autofixer in 'standard'. Usage: standard --fix
npm WARN deprecated eslint@0.24.1: This version is no longer supported. Please see https://eslint.org/version-support for other options.
npm WARN deprecated core-js@1.2.7: core-js@<3.23.3 is no longer maintained and not recommended for usage due to the number of issues. Because of the V8 engine whims, feature detection in old core-js versions could cause a slowdown up to 100x even if nothing is polyfilled. Some versions have web compatibility issues. Please, upgrade your dependencies to the actual version of core-js.
npm WARN deprecated core-js@2.6.12: core-js@<3.23.3 is no longer maintained and not recommended for usage due to the number of issues. Because of the V8 engine whims, feature detection in old core-js versions could cause a slowdown up to 100x even if nothing is polyfilled. Some versions have web compatibility issues. Please, upgrade your dependencies to the actual version of core-js.
/bin/sh: 1: /home/runner/.npm/_npx/3ff222c43633a144/node_modules/quality/node_modules/.bin/sanitycheck: not found
```

```js
npx eslint . (eslint.json)
look for "suppressedMessages"
```

```js
npm run prettier:check
[warn] eslint.json
[warn] jsonlint-package-lock.json
[warn] jsonlint-package.json
[warn] npm-audit.json
Error:  npm-install.json: SyntaxError: Unexpected token (2:1)
Error:    1 |
Error:  > 2 | > wemoove@0.0.0 prepare
Error:      | ^
Error:    3 | > husky install .husky
Error:    4 |
Error:    5 | husky - Git hooks installed
Error:  package-locks-checks.json: SyntaxError: Unexpected token (1:35)
Error:  > 1 | package-locks-checks > validating package with yarn
Error:      |                                   ^
Error:    2 | yarn.lock not found, cannot check for integrity. You can use '--allowUnmatchedYarnLock true' to skip this verification
Error:    3 | package-locks-checks > Everything is ok!
Error:    4 |
Error:  prettier-check.json: SyntaxError: Unexpected token (2:1)
Error:    1 |
Error:  > 2 | > wemoove@0.0.0 prettier:check
Error:      | ^
Error:    3 | > prettier '**/*.{js,jsx,ts,json,md}' --check
Error:    4 |
Error:    5 | Checking formatting...
[warn] Code style issues found in 4 files. Forgot to run Prettier?
Error: Process completed with exit code 2.
```

```js
npx lint
npm WARN exec The following package was not found and will be installed: lint@0.8.19
npm WARN deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm WARN deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm WARN deprecated har-validator@5.1.5: this library is no longer supported
npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
npm WARN deprecated loadash@1.0.0: Package is unsupport. Please use the lodash package instead.
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
```

```js
npm run prettier:lint
Error:  npm-install.json: SyntaxError: Unexpected token (2:1)
Error:    1 |
Error:  > 2 | > wemoove@0.0.0 prepare
Error:      | ^
Error:    3 | > husky install .husky
Error:    4 |
Error:    5 | husky - Git hooks installed
Error:  package-locks-checks.json: SyntaxError: Unexpected token (1:35)
Error:  > 1 | package-locks-checks > validating package with yarn
Error:      |                                   ^
Error:    2 | yarn.lock not found, cannot check for integrity. You can use '--allowUnmatchedYarnLock true' to skip this verification
Error:    3 | package-locks-checks > Everything is ok!
Error:    4 |
Error:  prettier-check.json: SyntaxError: Unexpected token (2:1)
Error:    1 |
Error:  > 2 | > wemoove@0.0.0 prettier:check
Error:      | ^
Error:    3 | > prettier '**/*.{js,jsx,ts,json,md}' --check
Error:    4 |
Error:    5 | Checking formatting...
Error:  prettier-lint.json: SyntaxError: Unexpected token (2:1)
Error:    1 |
Error:  > 2 | > wemoove@0.0.0 prettier:lint
Error:      | ^
Error:    3 | > prettier '**/*.{js,jsx,ts,json,md}' --list-different
Error:    4 |
Error:    5 | eslint.json
Error: Process completed with exit code 2.
```

```js
npm run test
Force exiting Jest: Have you considered using `--detectOpenHandles` to detect async operations that kept running after all tests finished?

Jest has detected the following 6 open handles potentially keeping Jest from exiting:
  ●  Timeout
      175 | };
      176 |
    > 177 | setInterval(deleteAllExpiredTokens, 3600 * 1000); // Delete expired tokens every hour
          | ^
      178 |
      at Object.setInterval (controllers/auth.js:177:1)
      at Object.require (tests/helper/scenarioBuilder.js:1:52)
      at Object.require (tests/api/apartmentAPI.test.js:1:18)
  ●  TCPWRAP
      4 | require('dotenv').config();
      5 |
    > 6 | mongoose.connect(process.env.MONGOLAB_URI).catch((error) => {
        |          ^
      7 |     log.error('Unable to connect to database', error);
      8 | });
      9 |
      at makeConnection (node_modules/mongodb/src/cmap/connect.ts:375:18)
      at connect (node_modules/mongodb/src/cmap/connect.ts:55:3)
      at checkServer (node_modules/mongodb/src/sdam/monitor.ts:304:10)
      at MonitorInterval.fn (node_modules/mongodb/src/sdam/monitor.ts:348:5)
      at MonitorInterval._executeAndReschedule (node_modules/mongodb/src/sdam/monitor.ts:589:10)
      at new MonitorInterval (node_modules/mongodb/src/sdam/monitor.ts:506:12)
      at Monitor.connect (node_modules/mongodb/src/sdam/monitor.ts:147:24)
      at Server.connect (node_modules/mongodb/src/sdam/server.ts:236:23)
      at createAndConnectServer (node_modules/mongodb/src/sdam/topology.ts:773:10)
      at node_modules/mongodb/src/sdam/topology.ts:421:9
          at Array.map (<anonymous>)
      at Topology.connect (node_modules/mongodb/src/sdam/topology.ts:419:26)
      at node_modules/mongodb/src/mongo_client.ts:486:52
      at topologyConnect (node_modules/mongodb/src/mongo_client.ts:486:79)
      at MongoClient._connect (node_modules/mongodb/src/mongo_client.ts:499:13)
      at MongoClient.connect (node_modules/mongodb/src/mongo_client.ts:424:34)
      at _createMongoClient (node_modules/mongoose/lib/connection.js:894:16)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:741:29)
      at Mongoose.connect (node_modules/mongoose/lib/index.js:404:15)
      at Object.connect (db.js:6:10)
      at Object.require (app.js:9:1)
      at Object.require (tests/api/apartmentAPI.test.js:2:13)
  ●  Timeout
      175 | };
      176 |
    > 177 | setInterval(deleteAllExpiredTokens, 3600 * 1000); // Delete expired tokens every hour
          | ^
      178 |
      at Object.setInterval (controllers/auth.js:177:1)
      at Object.require (tests/helper/scenarioBuilder.js:1:52)
      at Object.require (tests/api/adminAPI.test.js:1:18)
  ●  TCPWRAP
      4 | require('dotenv').config();
      5 |
    > 6 | mongoose.connect(process.env.MONGOLAB_URI).catch((error) => {
        |          ^
      7 |     log.error('Unable to connect to database', error);
      8 | });
      9 |
      at makeConnection (node_modules/mongodb/src/cmap/connect.ts:375:18)
      at connect (node_modules/mongodb/src/cmap/connect.ts:55:3)
      at checkServer (node_modules/mongodb/src/sdam/monitor.ts:304:10)
      at MonitorInterval.fn (node_modules/mongodb/src/sdam/monitor.ts:348:5)
      at MonitorInterval._executeAndReschedule (node_modules/mongodb/src/sdam/monitor.ts:589:10)
      at new MonitorInterval (node_modules/mongodb/src/sdam/monitor.ts:506:12)
      at Monitor.connect (node_modules/mongodb/src/sdam/monitor.ts:147:24)
      at Server.connect (node_modules/mongodb/src/sdam/server.ts:236:23)
      at createAndConnectServer (node_modules/mongodb/src/sdam/topology.ts:773:10)
      at node_modules/mongodb/src/sdam/topology.ts:421:9
          at Array.map (<anonymous>)
      at Topology.connect (node_modules/mongodb/src/sdam/topology.ts:419:26)
      at node_modules/mongodb/src/mongo_client.ts:486:52
      at topologyConnect (node_modules/mongodb/src/mongo_client.ts:486:79)
      at MongoClient._connect (node_modules/mongodb/src/mongo_client.ts:499:13)
      at MongoClient.connect (node_modules/mongodb/src/mongo_client.ts:424:34)
      at _createMongoClient (node_modules/mongoose/lib/connection.js:894:16)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:741:29)
      at Mongoose.connect (node_modules/mongoose/lib/index.js:404:15)
      at Object.connect (db.js:6:10)
      at Object.require (app.js:9:1)
      at Object.require (tests/api/adminAPI.test.js:2:13)
  ●  Timeout
      2331 | // |=================================================================================| \\
      2332 |
    > 2333 | const socket = io.connect(`${process.env.MATCHING_API}`);
           |                   ^
      2334 |
      2335 | socket.on('connect', () => {
      2336 |     console.log('connected to matching server.');
      at XMLHttpRequest.send (node_modules/xmlhttprequest-ssl/lib/XMLHttpRequest.js:494:17)
      at Request.create (node_modules/engine.io-client/build/cjs/transports/polling.js:330:17)
      at new Request (node_modules/engine.io-client/build/cjs/transports/polling.js:272:14)
      at Polling.request (node_modules/engine.io-client/build/cjs/transports/polling.js:222:16)
      at Polling.doPoll (node_modules/engine.io-client/build/cjs/transports/polling.js:248:26)
      at Polling.poll (node_modules/engine.io-client/build/cjs/transports/polling.js:109:14)
      at Polling.doOpen (node_modules/engine.io-client/build/cjs/transports/polling.js:63:14)
      at Polling.open (node_modules/engine.io-client/build/cjs/transport.js:53:14)
      at Socket.open (node_modules/engine.io-client/build/cjs/socket.js:175:19)
      at new Socket (node_modules/engine.io-client/build/cjs/socket.js:113:14)
      at Manager.open (node_modules/socket.io-client/build/cjs/manager.js:137:23)
      at new Manager (node_modules/socket.io-client/build/cjs/manager.js:66:18)
      at Function.lookup (node_modules/socket.io-client/build/cjs/index.js:41:25)
      at Object.connect (controllers/admin.js:2333:19)
      at Object.require (routes/users.js:6:25)
      at Object.require (app.js:12:15)
      at Object.require (tests/api/apartmentAPI.test.js:2:13)
  ●  Timeout
      2331 | // |=================================================================================| \\
      2332 |
    > 2333 | const socket = io.connect(`${process.env.MATCHING_API}`);
           |                   ^
      2334 |
      2335 | socket.on('connect', () => {
      2336 |     console.log('connected to matching server.');
      at XMLHttpRequest.send (node_modules/xmlhttprequest-ssl/lib/XMLHttpRequest.js:494:17)
      at Request.create (node_modules/engine.io-client/build/cjs/transports/polling.js:330:17)
      at new Request (node_modules/engine.io-client/build/cjs/transports/polling.js:272:14)
      at Polling.request (node_modules/engine.io-client/build/cjs/transports/polling.js:222:16)
      at Polling.doPoll (node_modules/engine.io-client/build/cjs/transports/polling.js:248:26)
      at Polling.poll (node_modules/engine.io-client/build/cjs/transports/polling.js:109:14)
      at Polling.doOpen (node_modules/engine.io-client/build/cjs/transports/polling.js:63:14)
      at Polling.open (node_modules/engine.io-client/build/cjs/transport.js:53:14)
      at Socket.open (node_modules/engine.io-client/build/cjs/socket.js:175:19)
      at new Socket (node_modules/engine.io-client/build/cjs/socket.js:113:14)
      at Manager.open (node_modules/socket.io-client/build/cjs/manager.js:137:23)
      at new Manager (node_modules/socket.io-client/build/cjs/manager.js:66:18)
      at Function.lookup (node_modules/socket.io-client/build/cjs/index.js:41:25)
      at Object.connect (controllers/admin.js:2333:19)
      at Object.require (routes/users.js:6:25)
      at Object.require (app.js:12:15)
      at Object.require (tests/api/adminAPI.test.js:2:13)
```

```js
npm run test:coverage

> wemoove@0.0.0 test:coverage
> jest --coverage --verbose

PASS tests/utils/avail.test.js (7.141 s)
  Apartment availability calculation API
    ✓ should pass test for the calendar simulator (15 ms)
    ✓ should correctly calculate availability for an private rooms listing with no bookings (350 ms)
    ✓ should not allow booking if the rooms are available in the past (4 ms)
    ✓ should pass this real use case where the host might have updated the apartment availability (2107 ms)
    ✓ should pass this real use case where available from and to duration is exactly the min stay length (32 ms)
    ✓ should pass this case with no minstay and move-in date is in before move-out date is in future (2856 ms)
    ✓ should return true for getFirstAvailableDate if the first available date is before today (656 ms)
    ✓ should block (relaxed) move-in date in past if booking between them and today (158 ms)

{"errorMessage":"Error creating card in stripe","level":"error","message":"Cannot read properties of undefined (reading 'id')","stack":"TypeError: Cannot read properties of undefined (reading 'id')\n    at id (/home/runner/work/riipen-backend/riipen-backend/controllers/apartments.js:976:62)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)","stripeCustomerId":"cus_123123124","timestamp":"2024-11-09T00:06:38.585Z"}
PASS tests/api/apartmentAPI.test.js (5.524 s)
  Apartment API
    POST /charge-and-book
      ✓ should return 401 if no token is provided (109 ms)
      ✓ should return 400 if no apartmentId is provided (35 ms)
      ✓ should return 400 if no roomIds is provided (48 ms)
      ✓ should return 400 if renting own room (31 ms)
      ✓ should return 400 if stripe token is not provided (65 ms)
      ✓ should create a rent request for 1 room, short-term, moveInDate beginning of the month (38 ms)
      ✓ should create a rent request for 1 room, short-term, moveInDate/moveOutDate middle of the month (40 ms)
      ✓ should create a rent request for 1 room, long-term, moveInDate beginning of the month (41 ms)
      ✓ should create a rent request for 1 room, long-term, moveInDate middle of the month (31 ms)
      ✓ should create a rent request for 1 room (Room 2), short-term, moveInDate beginning of the month (38 ms)
      ✓ should create a rent request for 1 room, long-term (Room 2), moveInDate middle of the month (42 ms)
      ✓ should create a rent request for 2 rooms, short-term, moveInDate start of the month, moveOutDate middle of the month (43 ms)

PASS tests/api/adminAPI.test.js
  Admin API
    Booking request
      POST /admin/booking-requests/switch-rooms
        ✓ should return 401 if no token is provided (113 ms)
        ✓ should return 400 if no apartmentId or roomIds is provided (36 ms)
        ✓ should switch to free room with same price (57 ms)
        ✓ should switch to free room with different price (49 ms)
        ✓ should return 400 if provided roomIds does not exists in apartment (36 ms)
        ✓ should return 400 if dates conflicts with other requests (43 ms)
        ✓ should return 400 if room is unavailable (45 ms)

  console.log
    [
      {
        period: {
          startDate: 2024-07-01T00:00:00.000Z,
          endDate: 2024-07-31T23:59:59.999Z,
          isFullMonth: true
        },
        amountDue: 721.875,
        actualPaid: 0,
        payoutDate: 2024-07-01T00:00:00.000Z,
        isFirstPayout: true,
        isLastPayout: false,
        isUpcoming: false,
        status: 'NO_PAYMENT',
        _id: new ObjectId("672ea7911070fc1cee98436e")
      },
      {
        period: {
          startDate: 2024-08-01T00:00:00.000Z,
          endDate: 2024-08-31T23:59:59.999Z,
          isFullMonth: true
        },
        amountDue: 962.5,
        actualPaid: 0,
        payoutDate: 2024-08-01T00:00:00.000Z,
        isFirstPayout: false,
        isLastPayout: false,
        isUpcoming: false,
        status: 'NO_PAYMENT',
        _id: new ObjectId("672ea7911070fc1cee98436f")
      },
      {
        period: {
          startDate: 2024-09-01T00:00:00.000Z,
          endDate: 2024-09-15T00:00:00.000Z,
          isFullMonth: false
        },
        amountDue: 481.25000000000006,
        actualPaid: 0,
        payoutDate: 2024-09-01T00:00:00.000Z,
        isFirstPayout: false,
        isLastPayout: true,
        isUpcoming: false,
        status: 'NO_PAYMENT',
        _id: new ObjectId("672ea7911070fc1cee984370")
      }
    ]

      at Object.log (tests/utils/payout.test.js:28:25)

  console.log
    {
      moveInDate: '2024-07-01',
      moveOutDate: '2024-08-15',
      paymentData: { roomRent: 1200 }
    }

      at Object.log (tests/utils/payout.test.js:90:25)

PASS tests/utils/payout.test.js
  test for ensuring amount of payouts
    #createPayoutsForReservation
      long term
        ✓ should get correct payout amount when moveInDate is first day of month and moveOutDate is last day of month (15 ms)
        ✓ should get correct payout amount when moveInDate is first day of month and moveOutDate is in the middle of month (23 ms)
        ✓ should get correct payout amount when moveInDate is in the middle of month and moveOutDate is last day of month (6 ms)
        ✓ should get correct payout amount when moveInDate is in the middle of month and moveOutDate is in the middle of month (4 ms)
      short term
        ✓ should get correct payout amount when moveInDate is first day of month and moveOutDate is last day of month (2 ms)
        ✓ should get correct payout amount when moveInDate is first day of month and moveOutDate is in the middle of month (4 ms)
        ✓ should get correct payout amount when moveInDate is in the middle of month and moveOutDate is last day of month (2 ms)
        ✓ should get correct payout amount when moveInDate is in the middle of month and moveOutDate is in the middle of month (2 ms)

PASS tests/utils/utils.test.js
  Utility functions
    #calculateTotalRentOfStay
      ✓ should get correct rent when moveInDate is first day of month and moveOutDate is last day of month (4 ms)
      ✓ should get correct rent when moveInDate is middle of month and moveOutDate is last day of month (1 ms)
      ✓ should get correct rent when moveInDate is first day of month and moveOutDate is middle of month (1 ms)
      ✓ should get correct rent when moveInDate is middle of month and moveOutDate is middle of month

-----------------------------|---------|----------|---------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
File                         | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
-----------------------------|---------|----------|---------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
All files                    |   29.09 |    14.92 |   15.34 |   30.94 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
 riipen-backend              |   69.04 |       50 |      40 |   69.04 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  app.js                     |   67.53 |       50 |      50 |   67.53 | 41,55,61-62,80-82,89-93,99-100,104-119                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
  db.js                      |   85.71 |      100 |       0 |   85.71 | 7                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
 riipen-backend/constants    |     100 |      100 |     100 |     100 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  constants.js               |     100 |      100 |     100 |     100 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
 riipen-backend/controllers  |   14.72 |        3 |    4.11 |   15.67 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  admin.js                   |   14.73 |     4.28 |    1.62 |   16.48 | 64-82,87-116,123-149,153-240,244-246,250-253,257-261,265-480,484-503,507-649,653-670,674-692,696-714,718-836,843,847-877,881-888,892-900,904-947,954-961,965-984,1000-1005,1017-1044,1055-1056,1075-1084,1096-1132,1144-1153,1165-1184,1196-1212,1224-1263,1275-1324,1336-1357,1368-1379,1393-1492,1504-1510,1527-1532,1544-1573,1585-1619,1631-1646,1658-1689,1701-1729,1741-1761,1778-1788,1800-1825,1837-1864,1876-1917,1929-1954,1966-1989,1998-2016,2025-2029,2037-2044,2049-2050,2057,2074-2184,2206-2210,2219-2223,2232-2236,2245-2253,2262-2268,2277-2281,2290-2294,2303-2307,2316-2323,2336,2340,2344,2348-2358,2363-2390,2394-2411,2415,2504-2533,2537-2540,2544-2548,2552-2617,2621-2760,2764-2783,2787-2818,2822-2892,2896-2905,2909-3009,3013-3023 
  apartments.js              |   16.98 |     5.06 |    9.52 |   17.03 | 51-219,226-297,304-429,434-439,443-456,460-588,593-609,613-620,633-661,665-680,684-704,708-745,749-761,777-891,895-905,943-956,1003-1007,1058,1080-1082,1096,1105-1120,1124-1129,1133-1146,1152-1185,1189-1190                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
  auth.js                    |   73.97 |       50 |   63.63 |   73.61 | 13-21,46,49,52-53,104-111,128,156,164-174                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
  common.js                  |      22 |        0 |       0 |      22 | 11-77,81-82,86,90-95                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
  feedback.js                |   13.69 |        0 |       0 |      20 | 14-29,40-58,68-97,112-150                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
  matching.js                |    4.06 |        0 |       0 |    4.62 | 11-474,490-495                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
  payments.js                |      32 |        0 |       0 |      32 | 10-43                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
  rent-requests.js           |   12.35 |        0 |       0 |    12.5 | 37-39,43-51,65-81,86-150,155-173,177-225,230-279,284-294,301-332,336-365,370-387,391-403,407-426,430-462,466-494,498-518,522-543,547-577,581-666,674-711,716-728,732-744,748-759,763-769,773-795,799-826,830-836,840-844,848-853,858-943,948-987,991-994,999,1004-1017,1053-1065,1070,1074-1079,1084-1203,1207-1220,1224-1235,1239-1247,1251-1258,1262-1275,1279-1292                                                                                                                                                                                                                                                                                                                                                                                           
  users.js                   |    9.98 |        0 |       0 |   10.45 | 54-146,162-195,199-204,208-213,217-226,230-273,277-291,295-310,314-373,378-422,426-459,463-527,531-560,564-615,620-640,653-705,714-799,803-812,816-856,861-887,893-899,906-915,921-933,940-979,984-1070,1074-1082,1087-1110,1115-1134                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
  websocket.js               |   21.73 |        0 |       0 |   26.31 | 6-23,27-28,32-33                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
 riipen-backend/handler      |   15.96 |        0 |       0 |   16.23 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  stripeEventHandler.js      |   15.96 |        0 |       0 |   16.23 | 38-57,61-118,123-138,143-244,248-281                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
 riipen-backend/middlewares  |   28.75 |     8.33 |    12.5 |   28.75 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  auth.js                    |   20.96 |        0 |       0 |   20.96 | 10-22,26-33,37-40,47-96,101-103                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  index.js                   |   55.55 |    33.33 |   33.33 |   55.55 | 6,12,19-23,27-31                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
 riipen-backend/models       |   39.43 |    13.86 |      10 |    59.3 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  admin.js                   |      75 |        0 |       0 |   85.71 | 17                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
  apartment.js               |   10.76 |        0 |       0 |   18.91 | 192-221                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
  city.js                    |     100 |      100 |     100 |     100 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  feedback.js                |     100 |      100 |     100 |     100 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  keyword-category.js        |     100 |      100 |     100 |     100 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  matching.js                |     100 |      100 |     100 |     100 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  neighborhood.js            |     100 |      100 |     100 |     100 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  payout.js                  |   25.92 |        0 |       0 |   41.17 | 47-56                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
  pending-rent-requests.js   |   57.83 |       50 |     100 |     100 | 148-185                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
  rent-requests.js           |   58.33 |        0 |       0 |   58.33 | 89,105-108                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
  sent-mails.js              |      25 |        0 |       0 |      40 | 16-21                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
  sent-message.js            |     100 |      100 |     100 |     100 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  templates.js               |   55.55 |        0 |       0 |   71.42 | 13-14                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
  token.js                   |     100 |      100 |     100 |     100 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  transaction.js             |   83.33 |      100 |       0 |   83.33 | 45                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
  user.js                    |    7.14 |        0 |       0 |   13.33 | 146-189                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
  webhook.js                 |     100 |      100 |     100 |     100 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
 riipen-backend/routes       |   95.81 |      100 |       0 |   95.81 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  admin.js                   |   96.29 |      100 |       0 |   96.29 | 60-61,138                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
  apartments.js              |     100 |      100 |     100 |     100 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  feedback.js                |     100 |      100 |     100 |     100 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  mail.js                    |     100 |      100 |     100 |     100 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  matching.js                |     100 |      100 |     100 |     100 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  rent-requests.js           |   91.66 |      100 |       0 |   91.66 | 55-56                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
  system.js                  |    62.5 |      100 |       0 |    62.5 | 5,9-10                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
  users.js                   |     100 |      100 |     100 |     100 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  utils.js                   |     100 |      100 |     100 |     100 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
 riipen-backend/services     |   28.39 |        0 |       0 |   28.75 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  mailservice.js             |   34.37 |        0 |       0 |   35.48 | 16-18,22-26,36-48,53-63                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
  messagebird.js             |   19.56 |        0 |       0 |   19.56 | 6-18,24-35,39-50,55-65,70-80                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
  stripe.js                  |     100 |      100 |     100 |     100 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
 riipen-backend/tests/helper |   72.22 |     72.6 |     100 |   71.69 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  availTestCaseBuilder.js    |   64.91 |    71.01 |     100 |   64.07 | 224-226,231-233,243-249,263-267,270-276,283-287,291-297,304-309,316-321,328-332,336-340,344-350,363-369,383-389,392-400,419-426,433-440,454-464,468-478,483-493                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  scenarioBuilder.js         |     100 |      100 |     100 |     100 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
 riipen-backend/utils        |   40.96 |    40.92 |   24.11 |   41.43 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  apartmentAvailability.js   |   74.71 |    69.69 |   81.25 |   75.29 | 44-45,59,124,155,170,177,207,221,226,231,261,277,282,287,296,315,323,338,353,358,386-393,409,425-435,454-461,475,488,508,522,566,576,589,594,599,617,633,642,664,675,685,701,708,720,733,749,758,763,775-796                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
  businessUtils.js           |   64.51 |    49.41 |   32.25 |   65.74 | 82-99,103,208-213,228-233,260-261,265-269,275,320-375,380-442                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
  dateUtils.js               |     100 |      100 |     100 |     100 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  emailTemplatesUtils.js     |    9.51 |        0 |       0 |    9.51 | 11-25,30-56,60,66,73-103,106-118,122-148,152-209,213-229,233-248,252-301,306,312-322,327,334-338,342-346,350,354,362-368,372-472,476-563,567-702,706,713-718,722-727,731,737-779,783,789-892,896,903-914,918-972,976-984                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
  error.js                   |   69.23 |      100 |   33.33 |   69.23 | 13,16,19,22                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
  helperUtils.js             |   16.66 |        0 |       0 |   17.77 | 7-62,67-71,77                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
  index.js                   |     100 |      100 |     100 |     100 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  log.js                     |   53.65 |    28.57 |    37.5 |   53.65 | 36-37,43-44,48-60,99-107,166,176,198-199,204                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
  paymentUtils.js            |   21.78 |        0 |    3.44 |   22.44 | 12-29,42-47,75,84,93-117,121-136,140-143,147-149,153-155,159-166,172-246                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
  payoutUtils.js             |   63.35 |    45.33 |   56.25 |   66.93 | 11-45,116-138,218-219,233-237,242-265,269-272,276-279                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
  s3Utils.js                 |    29.5 |        0 |       0 |    29.5 | 18-43,48-93,98-105,109-119,126-131                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
-----------------------------|---------|----------|---------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Test Suites: 5 passed, 5 total
Tests:       39 passed, 39 total
Snapshots:   0 total
Time:        16.209 s
Ran all test suites.
Jest did not exit one second after the test run has completed.

This usually means that there are asynchronous operations that weren't stopped in your tests. Consider running Jest with `--detectOpenHandles` to troubleshoot this issue.
Error: The operation was canceled.
```