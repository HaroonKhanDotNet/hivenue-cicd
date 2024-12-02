`FAIL`
audit(audit.md)
```js
# npm audit report

@babel/traverse  <7.23.2
Severity: critical
Babel vulnerable to arbitrary code execution when compiling specifically crafted malicious code - https://github.com/advisories/GHSA-67hx-6x53-jw92
fix available via `npm audit fix`
node_modules/@babel/traverse

ajv  <6.12.3
Severity: moderate
Prototype Pollution in Ajv - https://github.com/advisories/GHSA-v88g-cgmw-v5xw
fix available via `npm audit fix --force`
Will install html-pdf@1.5.0, which is a breaking change
node_modules/har-validator/node_modules/ajv
  har-validator  3.3.0 - 5.1.0
  Depends on vulnerable versions of ajv
  node_modules/har-validator
    request  *
    Depends on vulnerable versions of har-validator
    Depends on vulnerable versions of hawk
    Depends on vulnerable versions of tough-cookie
    node_modules/request
      phantomjs-prebuilt  *
      Depends on vulnerable versions of request
      node_modules/phantomjs-prebuilt
        html-pdf  >=2.0.0
        Depends on vulnerable versions of phantomjs-prebuilt
        node_modules/html-pdf

atob  <2.1.0
Severity: critical
Out-of-bounds Read in atob - https://github.com/advisories/GHSA-8w4h-3cm3-2pm2
fix available via `npm audit fix --force`
Will install atob@2.1.2, which is outside the stated dependency range
node_modules/atob

aws-sdk  <=2.1353.0
Severity: high
Prototype Pollution via file load in aws-sdk and @aws-sdk/shared-ini-file-loader - https://github.com/advisories/GHSA-rrc9-gqf8-8rwg
Depends on vulnerable versions of xml2js
fix available via `npm audit fix --force`
Will install aws-sdk@2.1692.0, which is outside the stated dependency range
node_modules/aws-sdk

axios  1.3.2 - 1.7.3
Severity: high
Server-Side Request Forgery in axios - https://github.com/advisories/GHSA-8hc4-vh64-cxmj
fix available via `npm audit fix`
node_modules/axios

body-parser  <=1.20.2
Severity: high
body-parser vulnerable to denial of service when url encoding is enabled - https://github.com/advisories/GHSA-qwcr-r2fm-qrc7
Depends on vulnerable versions of debug
Depends on vulnerable versions of qs
fix available via `npm audit fix --force`
Will install express@4.21.1, which is outside the stated dependency range
node_modules/body-parser
node_modules/express/node_modules/body-parser
  express  <=4.21.0 || 5.0.0-alpha.1 - 5.0.0
  Depends on vulnerable versions of body-parser
  Depends on vulnerable versions of cookie
  Depends on vulnerable versions of path-to-regexp
  Depends on vulnerable versions of send
  Depends on vulnerable versions of serve-static
  node_modules/express

braces  <=3.0.2
Severity: high
Regular Expression Denial of Service in braces - https://github.com/advisories/GHSA-g95f-p29q-9xw4
Regular Expression Denial of Service (ReDoS) in braces - https://github.com/advisories/GHSA-cwfw-4gq5-mrqx
Uncontrolled resource consumption in braces - https://github.com/advisories/GHSA-grv7-fg5c-xmjg
fix available via `npm audit fix --force`
Will install nodemon@1.19.4, which is outside the stated dependency range
node_modules/braces
node_modules/chokidar/node_modules/braces
node_modules/glob-stream/node_modules/braces
node_modules/readdirp/node_modules/braces
  micromatch  <=4.0.7
  Depends on vulnerable versions of braces
  Depends on vulnerable versions of braces
  node_modules/chokidar/node_modules/micromatch
  node_modules/glob-stream/node_modules/micromatch
  node_modules/micromatch
  node_modules/readdirp/node_modules/micromatch
    anymatch  1.2.0 - 2.0.0
    Depends on vulnerable versions of micromatch
    node_modules/chokidar/node_modules/anymatch
      chokidar  1.3.0 - 2.1.8
      Depends on vulnerable versions of anymatch
      node_modules/chokidar
        nodemon  1.3.5 - 2.0.16 || 2.0.18
        Depends on vulnerable versions of chokidar
        Depends on vulnerable versions of undefsafe
        Depends on vulnerable versions of update-notifier
        node_modules/nodemon
    glob-stream  5.3.0 - 5.3.5
    Depends on vulnerable versions of micromatch
    node_modules/glob-stream
      vinyl-fs  2.4.2 - 2.4.4
      Depends on vulnerable versions of glob-stream
      node_modules/vinyl-fs
    readdirp  2.2.0 - 2.2.1
    Depends on vulnerable versions of micromatch
    node_modules/readdirp

cookie  <0.7.0
cookie accepts cookie name, path, and domain with out of bounds characters - https://github.com/advisories/GHSA-pxg6-pf52-xh8x
fix available via `npm audit fix --force`
Will install socket.io@4.8.1, which is outside the stated dependency range
node_modules/cookie
node_modules/engine.io/node_modules/cookie
node_modules/express/node_modules/cookie
  cookie-parser  1.0.1 - 1.4.6
  Depends on vulnerable versions of cookie
  node_modules/cookie-parser
  engine.io  0.7.8 - 0.7.9 || 1.8.0 - 6.6.1
  Depends on vulnerable versions of cookie
  Depends on vulnerable versions of ws
  node_modules/engine.io
    socket.io  1.6.0 - 4.7.5
    Depends on vulnerable versions of engine.io
    node_modules/socket.io

cross-spawn  <6.0.6 || >=7.0.0 <7.0.5
Severity: high
Regular Expression Denial of Service (ReDoS) in cross-spawn - https://github.com/advisories/GHSA-3xgq-45jj-v275
Regular Expression Denial of Service (ReDoS) in cross-spawn - https://github.com/advisories/GHSA-3xgq-45jj-v275
fix available via `npm audit fix --force`
Will install gm@1.22.0, which is a breaking change
node_modules/cross-spawn
node_modules/execa/node_modules/cross-spawn
node_modules/gm/node_modules/cross-spawn
node_modules/imagemin-mozjpeg/node_modules/cross-spawn
  execa  0.5.0 - 0.9.0
  Depends on vulnerable versions of cross-spawn
  node_modules/execa
  node_modules/imagemin-mozjpeg/node_modules/execa
    exec-buffer  >=3.1.0
    Depends on vulnerable versions of execa
    node_modules/exec-buffer
    imagemin-mozjpeg  7.0.0
    Depends on vulnerable versions of execa
    Depends on vulnerable versions of mozjpeg
    node_modules/imagemin-mozjpeg
    term-size  1.0.0 - 1.2.0
    Depends on vulnerable versions of execa
    node_modules/term-size
      boxen  1.2.0 - 3.2.0
      Depends on vulnerable versions of term-size
      node_modules/boxen
        update-notifier  0.2.0 - 5.1.0
        Depends on vulnerable versions of boxen
        Depends on vulnerable versions of latest-version
        node_modules/update-notifier
  gm  >=1.23.0
  Depends on vulnerable versions of cross-spawn
  node_modules/gm

cryptiles  *
Severity: critical
Insufficient Entropy in cryptiles - https://github.com/advisories/GHSA-rq8g-5pc5-wrhr
Depends on vulnerable versions of boom
fix available via `npm audit fix`
node_modules/cryptiles

debug  <=2.6.8
Severity: high
debug Inefficient Regular Expression Complexity vulnerability - https://github.com/advisories/GHSA-9vvw-cc9w-f27h
Regular Expression Denial of Service in debug - https://github.com/advisories/GHSA-gxpj-cx7g-858c
Depends on vulnerable versions of ms
fix available via `npm audit fix --force`
Will install express@4.21.1, which is outside the stated dependency range
node_modules/debug

decompress  <4.2.1
Severity: critical
Path Traversal in decompress - https://github.com/advisories/GHSA-qgfr-5hqp-vrw9
fix available via `npm audit fix --force`
Will install imagemin-jpegtran@8.0.0, which is a breaking change
node_modules/decompress
  bin-build  >=2.1.1
  Depends on vulnerable versions of decompress
  Depends on vulnerable versions of download
  Depends on vulnerable versions of url-regex
  node_modules/bin-build
    mozjpeg  0.1.10 - 6.0.0
    Depends on vulnerable versions of bin-build
    Depends on vulnerable versions of bin-wrapper
    node_modules/mozjpeg
  gulp-decompress  <=2.0.1
  Depends on vulnerable versions of decompress
  Depends on vulnerable versions of gulp-util
  node_modules/gulp-decompress
    download  >=4.0.0
    Depends on vulnerable versions of caw
    Depends on vulnerable versions of got
    Depends on vulnerable versions of gulp-decompress
    node_modules/download
      bin-wrapper  >=0.4.0
      Depends on vulnerable versions of bin-version-check
      Depends on vulnerable versions of download
      node_modules/bin-wrapper
        jpegtran-bin  1.0.0 - 3.2.0
        Depends on vulnerable versions of bin-wrapper
        node_modules/jpegtran-bin
          imagemin-jpegtran  1.0.0 - 5.0.2
          Depends on vulnerable versions of jpegtran-bin
          node_modules/imagemin-jpegtran


follow-redirects  <=1.15.5
Severity: moderate
follow-redirects' Proxy-Authorization header kept across hosts - https://github.com/advisories/GHSA-cxjh-pqwp-8mfp
fix available via `npm audit fix`
node_modules/follow-redirects

got  <11.8.5
Severity: moderate
Got allows a redirect to a UNIX socket - https://github.com/advisories/GHSA-pfrx-2q88-qq97
fix available via `npm audit fix --force`
Will install imagemin-jpegtran@8.0.0, which is a breaking change
node_modules/got
node_modules/package-json/node_modules/got
  package-json  <=6.5.0
  Depends on vulnerable versions of got
  node_modules/package-json
    latest-version  0.2.0 - 5.1.0
    Depends on vulnerable versions of package-json
    node_modules/latest-version

hawk  <=9.0.0
Severity: high
Uncontrolled Resource Consumption in Hawk - https://github.com/advisories/GHSA-44pw-h2cw-w3vq
Depends on vulnerable versions of boom
Depends on vulnerable versions of hoek
Depends on vulnerable versions of sntp
fix available via `npm audit fix --force`
Will install html-pdf@1.5.0, which is a breaking change
node_modules/hawk

helmet-csp  1.2.2 - 2.9.0
Severity: moderate
Configuration Override in helmet-csp - https://github.com/advisories/GHSA-c3m8-x3cg-qm2c
fix available via `npm audit fix --force`
Will install helmet@3.23.3, which is outside the stated dependency range
node_modules/helmet-csp
  helmet  2.1.2 - 3.20.1
  Depends on vulnerable versions of helmet-csp
  node_modules/helmet

hoek  *
Severity: high
hoek subject to prototype pollution via the clone function. - https://github.com/advisories/GHSA-c429-5p7v-vgjp
fix available via `npm audit fix --force`
Will install html-pdf@1.5.0, which is a breaking change
node_modules/hoek
  boom  *
  Depends on vulnerable versions of hoek
  node_modules/boom
  node_modules/cryptiles/node_modules/boom
  sntp  0.0.0 || >=0.1.1
  Depends on vulnerable versions of hoek
  node_modules/sntp

ip  *
Severity: high
NPM IP package incorrectly identifies some private IP addresses as public - https://github.com/advisories/GHSA-78xj-cgh5-2h22
ip SSRF improper categorization in isPublic - https://github.com/advisories/GHSA-2p57-rm9w-gvfp
fix available via `npm audit fix`
node_modules/ip

jose  3.0.0 - 4.15.4
Severity: moderate
jose vulnerable to resource exhaustion via specifically crafted JWE with compressed plaintext - https://github.com/advisories/GHSA-hhhv-q57g-882q
fix available via `npm audit fix --force`
Will install messagebird@3.8.1, which is outside the stated dependency range
node_modules/jose
  messagebird  3.7.1 - 3.7.2
  Depends on vulnerable versions of jose
  node_modules/messagebird

jpeg-js  <=0.4.3
Severity: high
Infinite loop in jpeg-js - https://github.com/advisories/GHSA-xvf7-4v9q-58w6
Uncontrolled resource consumption in jpeg-js - https://github.com/advisories/GHSA-w7q9-p3jq-fmhm
fix available via `npm audit fix --force`
Will install jimp@1.6.0, which is a breaking change
node_modules/jpeg-js
node_modules/png-to-jpeg/node_modules/jpeg-js
  @jimp/jpeg  <=0.12.0
  Depends on vulnerable versions of jpeg-js
  node_modules/@jimp/jpeg
    @jimp/types  <=0.11.1-canary.891.908.0
    Depends on vulnerable versions of @jimp/jpeg
    node_modules/@jimp/types
      jimp  0.3.6-alpha.5 - 0.21.4--canary.1163.d07ed6254d130e2995d24101e93427ec091016e6.0
      Depends on vulnerable versions of @jimp/custom
      Depends on vulnerable versions of @jimp/types
      node_modules/jimp
  png-to-jpeg  *
  Depends on vulnerable versions of jpeg-js
  node_modules/png-to-jpeg

kind-of  6.0.0 - 6.0.2
Severity: high
Validation Bypass in kind-of - https://github.com/advisories/GHSA-6c8f-qphg-qjgp
fix available via `npm audit fix`
node_modules/base/node_modules/kind-of
node_modules/define-property/node_modules/kind-of
node_modules/snapdragon-node/node_modules/kind-of

lodash.template  *
Severity: high
Command Injection in lodash - https://github.com/advisories/GHSA-35jh-r3h4-6jhm
fix available via `npm audit fix --force`
Will install imagemin-jpegtran@8.0.0, which is a breaking change
node_modules/lodash.template
  gulp-util  >=1.1.0
  Depends on vulnerable versions of lodash.template
  node_modules/gulp-util


minimist  <=0.2.3
Severity: critical
Prototype Pollution in minimist - https://github.com/advisories/GHSA-vh95-rmgr-6w4m
Prototype Pollution in minimist - https://github.com/advisories/GHSA-xvch-5gv4-984h
fix available via `npm audit fix --force`
Will install jimp@1.6.0, which is a breaking change
node_modules/mkdirp/node_modules/minimist
  mkdirp  0.4.1 - 0.5.1
  Depends on vulnerable versions of minimist
  node_modules/mkdirp
    @jimp/core  <=0.21.4--canary.1163.d07ed6254d130e2995d24101e93427ec091016e6.0
    Depends on vulnerable versions of mkdirp
    Depends on vulnerable versions of phin
    node_modules/@jimp/core
      @jimp/custom  <=0.21.4--canary.1163.d07ed6254d130e2995d24101e93427ec091016e6.0
      Depends on vulnerable versions of @jimp/core
      node_modules/@jimp/custom

moment  <=2.29.3
Severity: high
Moment.js vulnerable to Inefficient Regular Expression Complexity - https://github.com/advisories/GHSA-wc69-rhjr-hc9g
Path Traversal: 'dir/../../filename' in moment.locale - https://github.com/advisories/GHSA-8hfj-j24r-96c4
fix available via `npm audit fix --force`
Will install moment@2.30.1, which is outside the stated dependency range
node_modules/moment

mongodb  5.0.0 - 5.7.0
Severity: moderate
MongoDB Driver may publish events containing authentication-related data - https://github.com/advisories/GHSA-vxvm-qww3-2fh7
fix available via `npm audit fix --force`
Will install mongoose@7.8.3, which is outside the stated dependency range
node_modules/mongodb
  mongoose  0.0.3 - 0.0.6 || 7.0.0-rc0 - 7.4.5
  Depends on vulnerable versions of mongodb
  node_modules/mongoose


ms  <2.0.0
Severity: moderate
Vercel ms Inefficient Regular Expression Complexity vulnerability - https://github.com/advisories/GHSA-w9mr-4mfr-499f
fix available via `npm audit fix --force`
Will install express@4.21.1, which is outside the stated dependency range
node_modules/ms

nodemailer  <=6.9.8
Severity: moderate
nodemailer ReDoS when trying to send a specially crafted email - https://github.com/advisories/GHSA-9h6g-pr28-7cqp
fix available via `npm audit fix --force`
Will install nodemailer@6.9.16, which is outside the stated dependency range
node_modules/nodemailer

path-to-regexp  <0.1.10
Severity: high
path-to-regexp outputs backtracking regular expressions - https://github.com/advisories/GHSA-9wv6-86v2-598j
fix available via `npm audit fix --force`
Will install express@4.21.1, which is outside the stated dependency range
node_modules/path-to-regexp

phin  <3.7.1
Severity: moderate
phin may include sensitive headers in subsequent requests after redirect - https://github.com/advisories/GHSA-x565-32qp-m3vf
fix available via `npm audit fix --force`
Will install jimp@1.6.0, which is a breaking change
node_modules/phin
  load-bmfont  1.4.0 - 1.4.1
  Depends on vulnerable versions of phin
  node_modules/load-bmfont

qs  <=6.2.3
Severity: high
Prototype Pollution Protection Bypass in qs - https://github.com/advisories/GHSA-gqgv-6jq5-jjj9
qs vulnerable to Prototype Pollution - https://github.com/advisories/GHSA-hrpp-h998-j3pp
fix available via `npm audit fix --force`
Will install express@4.21.1, which is outside the stated dependency range
node_modules/qs


semver  <=5.7.1 || 6.0.0 - 6.3.0 || 7.0.0 - 7.5.1
Severity: high
semver vulnerable to Regular Expression Denial of Service - https://github.com/advisories/GHSA-c2qf-rxjj-qqgw
semver vulnerable to Regular Expression Denial of Service - https://github.com/advisories/GHSA-c2qf-rxjj-qqgw
semver vulnerable to Regular Expression Denial of Service - https://github.com/advisories/GHSA-c2qf-rxjj-qqgw
fix available via `npm audit fix --force`
Will install imagemin-jpegtran@8.0.0, which is a breaking change
node_modules/bin-version-check/node_modules/semver
node_modules/jest-snapshot/node_modules/semver
node_modules/node-abi/node_modules/semver
node_modules/normalize-package-data/node_modules/semver
node_modules/package-json/node_modules/semver
node_modules/semver
node_modules/semver-diff/node_modules/semver
node_modules/semver-truncate/node_modules/semver
node_modules/sharp/node_modules/semver
node_modules/superagent/node_modules/semver
  bin-version-check  <=4.0.0
  Depends on vulnerable versions of bin-version
  Depends on vulnerable versions of semver
  node_modules/bin-version-check

semver-regex  <=3.1.3
Severity: high
semver-regex Regular Expression Denial of Service (ReDOS) - https://github.com/advisories/GHSA-44c6-4v22-4mhx
Regular expression denial of service in semver-regex - https://github.com/advisories/GHSA-4x5v-gmq8-25ch
fix available via `npm audit fix --force`
Will install imagemin-jpegtran@8.0.0, which is a breaking change
node_modules/semver-regex
  find-versions  <=3.2.0
  Depends on vulnerable versions of meow
  Depends on vulnerable versions of semver-regex
  node_modules/find-versions
    bin-version  <=4.0.0
    Depends on vulnerable versions of find-versions
    node_modules/bin-version

send  <0.19.0
send vulnerable to template injection that can lead to XSS - https://github.com/advisories/GHSA-m6fv-jmcg-4jfg
fix available via `npm audit fix --force`
Will install express@4.21.1, which is outside the stated dependency range
node_modules/send
  serve-static  <=1.16.0
  Depends on vulnerable versions of send
  node_modules/serve-static


sharp  <0.32.6
Severity: high
sharp vulnerability in libwebp dependency CVE-2023-4863 - https://github.com/advisories/GHSA-54xq-cgqr-rpm3
fix available via `npm audit fix --force`
Will install sharp@0.33.5, which is a breaking change
node_modules/sharp


tough-cookie  <4.1.3
Severity: moderate
tough-cookie Prototype Pollution vulnerability - https://github.com/advisories/GHSA-72xf-g2v4-qvf3
fix available via `npm audit fix --force`
Will install html-pdf@1.5.0, which is a breaking change
node_modules/tough-cookie

trim-newlines  <3.0.1
Severity: high
Uncontrolled Resource Consumption in trim-newlines - https://github.com/advisories/GHSA-7p7h-4mm5-852v
fix available via `npm audit fix --force`
Will install imagemin-jpegtran@8.0.0, which is a breaking change
node_modules/trim-newlines
  meow  3.4.0 - 5.0.0
  Depends on vulnerable versions of trim-newlines
  node_modules/meow

tunnel-agent  <0.6.0
Severity: moderate
Memory Exposure in tunnel-agent - https://github.com/advisories/GHSA-xc7v-wxcw-j472
fix available via `npm audit fix --force`
Will install imagemin-jpegtran@8.0.0, which is a breaking change
node_modules/tunnel-agent
  caw  <=2.0.0
  Depends on vulnerable versions of tunnel-agent
  node_modules/caw

undefsafe  <2.0.3
Severity: moderate
Prototype Pollution in undefsafe - https://github.com/advisories/GHSA-332q-7ff2-57h2
fix available via `npm audit fix --force`
Will install nodemon@1.19.4, which is outside the stated dependency range
node_modules/undefsafe

url-regex  *
Severity: high
Regular expression denial of service in url-regex - https://github.com/advisories/GHSA-v4rh-8p82-6h5w
fix available via `npm audit fix`
node_modules/url-regex

word-wrap  <1.2.4
Severity: moderate
word-wrap vulnerable to Regular Expression Denial of Service - https://github.com/advisories/GHSA-j8xg-fqg3-53r7
fix available via `npm audit fix`
node_modules/word-wrap

ws  8.0.0 - 8.17.0
Severity: high
ws affected by a DoS when handling a request with many HTTP headers - https://github.com/advisories/GHSA-3h5v-q93c-6h6q
fix available via `npm audit fix --force`
Will install socket.io-client@4.8.1, which is outside the stated dependency range
node_modules/ws
  engine.io-client  0.7.0 || 0.7.8 - 0.7.9 || 6.0.0 - 6.5.3
  Depends on vulnerable versions of ws
  node_modules/engine.io-client
    socket.io-client  4.3.0 - 4.6.2
    Depends on vulnerable versions of engine.io-client
    node_modules/socket.io-client
  socket.io-adapter  2.5.2 - 2.5.4
  Depends on vulnerable versions of ws
  node_modules/socket.io-adapter

xml2js  <0.5.0
Severity: moderate
xml2js is vulnerable to prototype pollution - https://github.com/advisories/GHSA-776f-qx25-q3cc
fix available via `npm audit fix --force`
Will install aws-sdk@2.1692.0, which is outside the stated dependency range
node_modules/xml2js
  parse-bmfont-xml  <=1.1.4
  Depends on vulnerable versions of xml2js
  node_modules/parse-bmfont-xml

97 vulnerabilities (4 low, 36 moderate, 44 high, 13 critical)

To address issues that do not require attention, run:
  npm audit fix

To address all issues possible (including breaking changes), run:
  npm audit fix --force

Some issues need review, and may require choosing
a different dependency.
```
