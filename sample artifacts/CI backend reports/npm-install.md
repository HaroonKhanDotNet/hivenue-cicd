`PASS`
npm-ci(npm-install.md)
```js
npm verb cli /opt/hostedtoolcache/node/18.12.0/x64/bin/node /opt/hostedtoolcache/node/18.12.0/x64/bin/npm
npm info using npm@8.19.2
npm info using node@v18.12.0
npm timing npm:load:whichnode Completed in 0ms
npm timing config:load:defaults Completed in 2ms
npm timing config:load:file:/opt/hostedtoolcache/node/18.12.0/x64/lib/node_modules/npm/npmrc Completed in 0ms
npm timing config:load:builtin Completed in 1ms
npm timing config:load:cli Completed in 1ms
npm timing config:load:env Completed in 1ms
npm timing config:load:file:/home/runner/work/backend-2/backend-2/.npmrc Completed in 1ms
npm timing config:load:project Completed in 11ms
npm timing config:load:file:/home/runner/.npmrc Completed in 0ms
npm timing config:load:user Completed in 0ms
npm timing config:load:file:/opt/hostedtoolcache/node/18.12.0/x64/etc/npmrc Completed in 0ms
npm timing config:load:global Completed in 0ms
npm timing config:load:validate Completed in 1ms
npm timing config:load:credentials Completed in 0ms
npm timing config:load:setEnvs Completed in 1ms
npm timing config:load Completed in 18ms
npm timing npm:load:configload Completed in 18ms
npm timing npm:load:mkdirpcache Completed in 1ms
npm timing npm:load:mkdirplogs Completed in 0ms
npm verb title npm ci
npm verb argv "ci" "--loglevel" "verbose"
npm timing npm:load:setTitle Completed in 1ms
npm timing config:load:flatten Completed in 2ms
npm timing npm:load:display Completed in 8ms
npm verb logfile logs-max:10 dir:/home/runner/.npm/_logs
npm verb logfile /home/runner/.npm/_logs/2024-12-02T05_33_28_443Z-debug-0.log
npm timing npm:load:logFile Completed in 4ms
npm timing npm:load:timers Completed in 0ms
npm timing npm:load:configScope Completed in 0ms
npm timing npm:load Completed in 33ms
npm timing arborist:ctor Completed in 1ms
npm timing idealTree:init Completed in 4ms
npm timing idealTree:userRequests Completed in 0ms
npm timing idealTree:#root Completed in 0ms
npm timing idealTree:buildDeps Completed in 2ms
npm timing idealTree:fixDepFlags Completed in 0ms
npm timing idealTree Completed in 23ms
npm timing npm-ci:rm Completed in 1419ms
npm timing reify:loadTrees Completed in 9ms
npm timing reify:diffTrees Completed in 14ms
npm timing reify:retireShallow Completed in 2ms
npm timing reify:createSparse Completed in 304ms
npm timing reify:loadBundles Completed in 0ms
npm verb reify failed optional dependency /home/runner/work/backend-2/backend-2/node_modules/fsevents
npm verb reify failed optional dependency /home/runner/work/backend-2/backend-2/node_modules/chokidar/node_modules/fsevents
npm verb reify failed optional dependency /home/runner/work/backend-2/backend-2/node_modules/bindings
npm verb reify failed optional dependency /home/runner/work/backend-2/backend-2/node_modules/nan
npm verb reify failed optional dependency /home/runner/work/backend-2/backend-2/node_modules/file-uri-to-path
npm timing reifyNode:node_modules/fsevents Completed in 288ms
npm timing reifyNode:node_modules/chokidar/node_modules/fsevents Completed in 281ms
npm http fetch POST 200 https://registry.npmjs.org/-/npm/v1/security/advisories/bulk 2365ms
npm timing auditReport:getReport Completed in 2383ms
npm timing metavuln:cache:get:security-advisory:express:hVvNcW1vjxrtQmaCwPKfE4Z8R62gR0ULNfdF0CLFRiFJto5sSTez9DCVLJ7vjZWLLbcdnPaPDC9ZDCECldX4GQ== Completed in 39ms
npm timing metavuln:cache:get:security-advisory:send:OShLTeaftGdoI6AC7xvJ84fklSsg8XN9g5w+pRFqXWtM66RkMgSjQaSgIRFeMMpYy/URhePqWfUgvGta5cUXXw== Completed in 29ms
npm timing metavuln:cache:get:security-advisory:serve-static:6/5/7wCvhynQFLFlm3uAL70rYGPKRtebq7fww92FL5lg7aniCfsBAW3IWMWnLUwSQWZGUr38TziTDlnBorKdEg== Completed in 29ms
npm timing metavuln:cache:get:security-advisory:socket.io:i04Ov73GVsgxj89gS7+811lN8e8Fiv+seBD4p2jUdmdonKXV8eGsJtzD4UDYvSniXYS3ayxAPBB0xPSZ6RUPXw== Completed in 29ms
npm timing reifyNode:node_modules/heic-decode Completed in 2534ms
npm timing reifyNode:node_modules/heic-convert Completed in 2535ms
npm timing reifyNode:node_modules/universalify Completed in 2658ms
npm timing reifyNode:node_modules/ip Completed in 2649ms
npm timing reifyNode:node_modules/hasha Completed in 2648ms
npm timing reifyNode:node_modules/@types/webidl-conversions Completed in 2636ms
npm timing reifyNode:node_modules/@types/stack-trace Completed in 2636ms
npm timing reifyNode:node_modules/@types/cors Completed in 2637ms
npm timing reifyNode:node_modules/@types/cookie Completed in 2637ms
npm timing reifyNode:node_modules/socket.io-parser/node_modules/ms Completed in 2673ms
npm timing reifyNode:node_modules/socket.io-client/node_modules/ms Completed in 2673ms
npm timing reifyNode:node_modules/socket.io/node_modules/ms Completed in 2673ms
npm timing reifyNode:node_modules/readdirp/node_modules/is-descriptor/node_modules/is-accessor-descriptor Completed in 2672ms
npm timing reifyNode:node_modules/readdirp/node_modules/is-descriptor/node_modules/is-data-descriptor Completed in 2673ms
npm timing reifyNode:node_modules/readdirp/node_modules/expand-brackets/node_modules/is-extendable Completed in 2673ms
npm timing reifyNode:node_modules/readdirp/node_modules/braces/node_modules/is-extendable Completed in 2673ms
npm timing reifyNode:node_modules/mquery/node_modules/ms Completed in 2670ms
npm timing reifyNode:node_modules/mongoose/node_modules/ms Completed in 2670ms
npm timing reifyNode:node_modules/hasha/node_modules/is-stream Completed in 2664ms
npm timing reifyNode:node_modules/extract-zip/node_modules/ms Completed in 2661ms
npm timing reifyNode:node_modules/engine.io-client/node_modules/ms Completed in 2660ms
npm timing reifyNode:node_modules/engine.io/node_modules/ms Completed in 2661ms
npm timing reifyNode:node_modules/chokidar/node_modules/micromatch/node_modules/array-unique Completed in 2658ms
npm timing reifyNode:node_modules/serialize-error Completed in 2705ms
npm timing reifyNode:node_modules/p-each-series Completed in 2703ms
npm timing reifyNode:node_modules/keypress Completed in 2702ms
npm timing reifyNode:node_modules/fn-args Completed in 2696ms
npm timing reifyNode:node_modules/valiquire-silent/node_modules/string_decoder Completed in 2721ms
npm timing reifyNode:node_modules/cli-table3/node_modules/string-width Completed in 2697ms
npm timing reifyNode:node_modules/cli-table3/node_modules/is-fullwidth-code-point Completed in 2697ms
npm timing reifyNode:node_modules/winston-slack-webhook-transport Completed in 2732ms
npm timing reifyNode:node_modules/memory-pager Completed in 2721ms
npm timing reifyNode:node_modules/depscan Completed in 2712ms
npm timing reifyNode:node_modules/base64id Completed in 2701ms
npm timing reifyNode:node_modules/valiquire-silent/node_modules/isarray Completed in 2740ms
npm timing reifyNode:node_modules/engine.io/node_modules/cookie Completed in 2718ms
npm timing reifyNode:node_modules/supertest Completed in 2814ms
npm timing reifyNode:node_modules/sparse-bitfield Completed in 2814ms
npm timing reifyNode:node_modules/sanitycheck Completed in 2813ms
npm timing reifyNode:node_modules/js Completed in 2809ms
npm timing reifyNode:node_modules/extract-zip Completed in 2802ms
npm timing reifyNode:node_modules/amdefine Completed in 2787ms
npm timing reifyNode:node_modules/@socket.io/component-emitter Completed in 2787ms
npm timing reifyNode:node_modules/phantomjs-prebuilt/node_modules/which Completed in 2819ms
npm timing reifyNode:node_modules/mongodb-connection-string-url/node_modules/webidl-conversions Completed in 2818ms
npm timing reifyNode:node_modules/extract-zip/node_modules/mkdirp Completed in 2808ms
npm timing reifyNode:node_modules/escodegen/node_modules/estraverse Completed in 2808ms
npm timing reifyNode:node_modules/@babel/runtime/node_modules/regenerator-runtime Completed in 2790ms
npm timing reifyNode:node_modules/sigmund Completed in 2841ms
npm timing metavuln:cache:get:security-advisory:debug:L19jp5umgpUymLyktjMZWvkppW4QuHjtPTwoT+IVkaazB/RgihOq/nHe4DPVgPKkhnrqVzKwIHeDSswadWaXKA== Completed in 490ms
npm timing metavuln:cache:get:security-advisory:debug:T7SD5O0puJcxkdT/91PXDGEYnraNqDqVwCj9elfwvCJK1CGPj1zYNcsts2SBIoTAw7DaXtKexDYdBGQk0QDWKQ== Completed in 489ms
npm timing metavuln:cache:get:security-advisory:ms:lRkwPXso2hhWj1PifuL3y93xU8G9YCFpC0ATu7pNDG2BKGKVSNFxoSrVWP3C6op2wRSOKr+NW9y50XXpJ3DH6A== Completed in 490ms
npm timing metavuln:cache:get:security-advisory:@babel/traverse:fh8hTevxKxxB/TjPLuIqX0xLWISD9TTk1zuqINuUa51u0luhTDHL+nc9unv55+ZUTUbbXP13tqvYywrH1nLIwg== Completed in 490ms
npm timing metavuln:cache:get:security-advisory:ajv:fc9Xax84FFXTCPgCV9Dx3GcE0NeSxWZAICRTBpsOXo8QixJHgBWM0Vs0qfBLWiQpiN3IwTma4utFRAriZjr9vg== Completed in 489ms
npm timing metavuln:cache:get:security-advisory:atob:J98FlN2Muk6AgkiAbI7W9xdwjXdFTJdiAMqDyZqUNIkUuDYbSimym8CtyO1TCtqeXFy/JS9TJh+55Fe6xrA7LQ== Completed in 489ms
npm timing metavuln:cache:get:security-advisory:aws-sdk:WpxrhfrOoebpP2B21LkzNHolrtIN9jbCXsKn0Nug97H6R8Fz3qIjLzLuqzHR7BdEjwTzn6719AaUQZI1quVjtw== Completed in 490ms
npm timing metavuln:cache:get:security-advisory:axios:A8udLrZcWN+DjwMEb6fshdN5n5UqnCxbUOi3f6updLXGwKik6oGDcb5NO4lCNOiL70Sj6OLiRrZ1dDDD3Cx4zQ== Completed in 489ms
npm timing metavuln:cache:get:security-advisory:kind-of:lPfVfHjGgjOB2z8yPw12sjEPkmD6qeK9t8p2vbLN09GsNCrqxjHBhuInJuQQ5DinpFMGwNyr+LSWS23gc3APQA== Completed in 490ms
npm timing metavuln:cache:get:security-advisory:semver:opCi/aWaSKqONMYnfnFEDkv8YHQsLRfA3enlX2IHlHYfFwv+CTH+ItWyYx1Vqalh3HK+Lk+xMxcq/HjPXMZwBQ== Completed in 489ms
npm timing metavuln:cache:get:security-advisory:semver:p+D+39wHY++/R33lUZG0KMP/hnOnJRkXbZzFUhU/wj3DA/pIbzZMGbxR9nwfqnZOi8we3cv5YqWbADcimZK1zA== Completed in 489ms
npm timing metavuln:cache:get:security-advisory:semver:rdIaM4IHRiV5W+0rBaujH8woXF8jX6QsWygSvAgx/mWGl1Fkg+2iT3YwpZhnGHRem0uOaOaU2DzASF/vkxJTbA== Completed in 489ms
npm timing metavuln:cache:get:security-advisory:body-parser:uoEU0GS6gk35ZdcQ5nagZYzZcDz5Th0PEvPIVa8rzwbO20pRdxYbAhpIm6Wc5MALXoWb1C4X8WqCtH02U0Wo1A== Completed in 488ms
npm timing metavuln:cache:get:security-advisory:braces:OV/4+5fZgoqfC743NsgdKkg1IaTYto4c916moYJ0wlLqNqSJewWZmkjHiibjgkdGJ0p9LjsMr41IRZ8wNgQzhg== Completed in 489ms
npm timing metavuln:cache:get:security-advisory:braces:JiXBFkEDkUnBQLw3PO6emUmmm2JXqgEbh+FhB3SNDS8k6Z0wM20irrfaOjjxYuMxZaKaDudvR037mtEoeqZzXw== Completed in 484ms
npm timing metavuln:cache:get:security-advisory:braces:3G3vKD4uuWZ6OkybWFslc09SOlERX38mrHc4QH8E2A/eHw9Pg3yb3+xq3ajiFEXJVTWeWyVwBPO/LMTeF85Ofg== Completed in 484ms
npm timing metavuln:cache:get:security-advisory:micromatch:TlYHmS8BZBwkbsPHbTfH2/e91KJnOnqfC63ZoKdiRy+yt6biPd8BwjBdyfPUht1+ZO675I3Gg00RQPYaWiOm8Q== Completed in 484ms
npm timing metavuln:cache:get:security-advisory:cookie:fiAgy8LdsBPaQEbo7M3TC0K1AVc7Dl69m8P2pmr6RTs1eBYnkyvV6lHHCRB0mAKtL1TSQPXxJVEHOqp48Uvhag== Completed in 483ms
npm timing metavuln:cache:get:security-advisory:cryptiles:ulvRd7WBpx0ga/zfhuLq8RUBrWk5DUE+FrKXduMCD6aLHQDq8YZnOP6vMVte0B/t5YQbMXKTjyF7PYg7rCEfiw== Completed in 483ms
npm timing metavuln:cache:get:security-advisory:decompress:gZVjgMrLp9dJzyQkcn4XBTrSSUXGrqPu00lw1U2qprNwW9ywchgJeaO4Az+5Eep0DEgtmtFPVMo58JRQGBBj4w== Completed in 483ms
npm timing metavuln:cache:get:security-advisory:express:lBXrUDHGQ8w6TsFbfO+dIpiL3mSEKXOF2OuvW+b7kHxIhUYJTgPXfCu70PLwR+5DiyOmPyeCmimiWIYaeIPBdw== Completed in 482ms
npm timing metavuln:cache:get:security-advisory:qs:LoPbTT6TaN6cDh/f2pnOqltx5ztxEjbTC5D/iF4FIzlS2VLfhH36o3KwlPdlh65Q72b3TzsQNKaHEo1ue7dLRQ== Completed in 482ms
npm timing metavuln:cache:get:security-advisory:qs:WJ+vjgpRfGrmhGpKB2Uzzy6NmGDSLmsoHgdQ3m+3LN6LW7X0O2QK6HrvMz0X7aaGUnogdkQlMELDJKMr9zsdyA== Completed in 482ms
npm timing metavuln:cache:get:security-advisory:follow-redirects:rD8yi3a8mVyeNvoX3wItq4e+Oa65QVDtc8KKes6VfIYPKX53VkWnOuxGYgUihdiwlz4i5mjg4yX/2qVYafhjyA== Completed in 482ms
npm timing metavuln:cache:get:security-advisory:got:6RwqOtyKHRfIYfVtDkU86+jmAkm03OLYFGvOQUWcpuzfU8h8RNz3w5ZFTGeJ+8QNC0jGK3xFL9UvdqMN+kLCrg== Completed in 482ms
npm timing metavuln:cache:get:security-advisory:hawk:Mp51eIN1esV0Dt0T1PQIIYWQqoo2+x7pcc0PDKKg71azbYOPDcqmQUIdl2UU1/OCqCI0D9xXcdGWX7ZJV/w18A== Completed in 482ms
npm timing metavuln:cache:get:security-advisory:jpeg-js:EWyFhO+1m3CtrNrw1Rkj4rZeydTrXmYKib8C6/yscNBh/XcngX9/PrQ+5EvWWKoDM9tW5HLjnLRqiS4R87lehQ== Completed in 481ms
npm timing metavuln:cache:get:security-advisory:jpeg-js:nh+fxyfA+Ss1BOZrSMf+X1NyFk0XIsyMZiJiJ66UOcx//h0YVALG/HBsOt4sUtGNHkYp/M7xCzpCpHHwWqDktA== Completed in 481ms
npm timing metavuln:cache:get:security-advisory:helmet-csp:c0ozEWszMMsnGEYdCKAoNWuKgJ3ey/EkstGikCJDSJBLgVXi2tBmIlYqkYlosEqa2hYDNLP1xI7C2I0mlBwnRA== Completed in 481ms
npm timing metavuln:cache:get:security-advisory:hoek:32smKM37e2vBT88jriFz1cAQxIxbf3lqfYvQLLRxIM+DMM77kSyHGU414lT7ywK+Atpe0Jr9Ak5XFV2NQgG5Rg== Completed in 481ms
npm timing metavuln:cache:get:security-advisory:ip:b30c5XyTTW4mB+FTN7C/h1vhoJFO9OI8Q+LTllMkSK3uH9C7IrxRvaSJh85+QHMX79NvRWdtpRRPVOFX+5JL7A== Completed in 481ms
npm timing metavuln:cache:get:security-advisory:ip:OJeo7tUWWyIh6QXADJtWrUkbzj0VhAfCmPTk6UVVoO5bD9tsqTnaNWVGSOXk9X+9QDW2vzTUF/sHZpD6agisng== Completed in 481ms
npm timing metavuln:cache:get:security-advisory:jose:EW3f8PiUAtqY3TVX6y8KuRosAB2vO4lkPfMFh6LwWFGwQQjkr45JtVR0ihyCRmO5DtRfRgxWtegp08Z/t/APaA== Completed in 481ms
npm timing metavuln:cache:get:security-advisory:lodash.template:al+VW8RfW7G2tqMwgyK9P7oNmFE2mUJNyGvwDksnYZhDVz+orC/gqUbCpr1Vk76i2YO8cAnd2ur+1jfthKI16g== Completed in 480ms
npm timing metavuln:cache:get:security-advisory:minimatch:K78MTPydVC71TgA6yNWF08NDuRrSlWyd3D7XChtIo1T1YS1B9ZxXE6nU5osCGX07iM2f8LNTA0sAg/5/2czDeA== Completed in 480ms
npm timing metavuln:cache:get:security-advisory:minimatch:V17OIdoDCKMsL6IbTp64TOVCHG2YXRQkmwFU7i3zvVGsUxfAfMWqRYB1FvN0tgRDKj27ZKHZDDYNKsHYY6pIWg== Completed in 479ms
npm timing metavuln:cache:get:security-advisory:minimist:QimlM5Z6RrlJkvnLve505LPmyXiRKjlmN2wsiL9+HewfCu+Fa13/XaY2fHzsWFIjaoVa5OLkSeRydwJ9iPePvQ== Completed in 480ms
npm timing metavuln:cache:get:security-advisory:minimist:rIccfKG/WgGQHCq61vlHWGeeRSnFST18fFsFAPa1Q+DaBX3wJ5inrhpj/FqqHv0K1bfrQHIcbJH1R0VYw1sW5g== Completed in 480ms
npm timing metavuln:cache:get:security-advisory:moment:phiPq6D18pLI2BJh/H9APlibjpz7Z1u2uFVfSTZTr+vMciJ+TRUdITZxZaiTInYcoao5HgCeACiM68p582IBUg== Completed in 480ms
npm timing metavuln:cache:get:security-advisory:moment:01kbW/6teAjLCLSZ0M2xPGeYETz9F5j3S3UpRT+/TCQaSz1WinELwHhoX08XP/pSTa+GyMVPQckBXojrmubMJg== Completed in 480ms
npm timing metavuln:cache:get:security-advisory:mongodb:kL0Tom4p3J8LAVDwKrQF/q+B0vLQld/QFQVuzmIs90v742tbXFcz36T6FB1lubh31HNSYZ5oTGtREFjnM7pY8A== Completed in 480ms
npm timing metavuln:cache:get:security-advisory:mongoose:7DEDTguQIg9v+2EK1lDOLMrGUCGR43Hbeh3yzlmxuaOOkQ+DSb+sgKhypzXPp6oYVl152VucTfDeZPGNJjwZTA== Completed in 480ms
npm timing metavuln:cache:get:security-advisory:nodemailer:3R+ZDqUGtmAOHqBo/GIHSnj4kIeziADiogmRK+KltHCL6n29j1eqw6rCDEkkFQXitiGnRa0hjWC7vLYgsIvPgg== Completed in 480ms
npm timing metavuln:cache:get:security-advisory:path-to-regexp:MGO+1pdJTigPi3TXGZyVn35t2czXVkYs+fgMO7RE91yslgH9FQoQuUVMgE+5KM1TF4oevhUauG5tddQcIK8Fzg== Completed in 479ms
npm timing metavuln:cache:get:security-advisory:phin:6hBGhHxy2M96VZVljrOWS5lu3liWSp2ONTtWYQ0pO5JcL607XXBhEWH676AVxD9MHs98TF10ElsFZsg1Y479aA== Completed in 480ms
npm timing metavuln:cache:get:security-advisory:tunnel-agent:exE+GmzNKlMlJalUNV5czlO+Eqow5R76LbbGDtkUVqHW0tjA9F/04kNFwWUdpYdLQBLo29bZ0Dwaixxv6H6h8w== Completed in 479ms
npm timing metavuln:cache:get:security-advisory:request:YWMj9j1MPluG/i7GM3/il619Yyh/e9mxa0CiULhZGXRZl+TQlFyAG7gUf9x/Cj8XvveNYjOq7h13G6ZKSAmEzg== Completed in 479ms
npm timing metavuln:cache:get:security-advisory:semver-regex:YtAbLnC89eWX7NhIrb5x5Rc0BiZi9ktamnQ9fndzazZQBYXcWMKzbo5JPfWdIIK/onxhYUOmHlfGIm5YmkSKOg== Completed in 479ms
npm timing metavuln:cache:get:security-advisory:semver-regex:NS2wdTTRXHHUU+OWkgIFVnkbxEAixdgzXKLP1doCGCtT15L/pAU6fsJfVqbtGBM8z67snlo7Pn1HPdVMv4VoiQ== Completed in 478ms
npm timing metavuln:cache:get:security-advisory:sharp:WMi/VGOiVsZ1LVY4z/g1FhnSXMsU0zpIl5aWN6O1GOrsiUoslku4b+Gy9sm37KGtGAyg2KEXKyrCmSKwD9F/iw== Completed in 477ms
npm timing metavuln:cache:get:security-advisory:tough-cookie:HH4YVJ2IpK7ANH6p8LNg+k61Fu3TjSqeiGZyE/iWXMDZiu9lna7Sl4I8RyLwD0qX6/1Wt6M1uDH5lAibFJHdLA== Completed in 477ms
npm timing metavuln:cache:get:security-advisory:trim-newlines:YPxiINvm1vOyaw/Rc3ZPSnoDOyXNhloBzWf5szm5TJ3e6/kJ8DdoZ2EcHOG1WtP92yUlDzGS4zWhKCSTRJQxrw== Completed in 477ms
npm timing metavuln:cache:get:security-advisory:undefsafe:KpkJErrkGULJZIW+9xOmSsIwMitOSm1iqrmnshUt71VPRI2QxhaSrpOws5aqRKdtUA3Uk87f7bqKOZfrxF+9jw== Completed in 477ms
npm timing metavuln:cache:get:security-advisory:url-regex:tlTtlXVwHNTLh7r0Mzz5G5Q8YHK+tmzsyJvjDQ1m2JAtUQksXDh3uTOqHzaqVW8TBv1Gw3RHg5jLdIbsbyvZWg== Completed in 476ms
npm timing metavuln:cache:get:security-advisory:word-wrap:KuD0u0TEe1lJ9Y8nnHJk0i8e4gFvU7OHiKayejHAsg0tkhQi4DZJqW9IueFOjMTqOQfbmCZrpVfHV9PCkdQdeA== Completed in 477ms
npm timing metavuln:cache:get:security-advisory:ws:v2Har794Be+6XfcvT/NJHW1cDl3bIscCiu/kNNCIy/l00C5P2Cx1BODrleH5tIDK9p3TMcvLzGMY0Lz9rde8Ww== Completed in 476ms
npm timing metavuln:cache:get:security-advisory:xml2js:BNDcnZXUQJUzgvJ6EUknK0EnnJupfOprQdlm0ChoO91dxd+6fSWgSw1o7DLvl4w73kNIr00oL8McocsqtpzZLQ== Completed in 476ms
npm timing reifyNode:node_modules/throttleit Completed in 2858ms
npm timing reifyNode:node_modules/kareem Completed in 2850ms
npm timing reifyNode:node_modules/jsonfile Completed in 2849ms
npm timing reifyNode:node_modules/klaw Completed in 2850ms
npm timing reifyNode:node_modules/@selderee/plugin-htmlparser2 Completed in 2829ms
npm timing reifyNode:node_modules/phantomjs-prebuilt/node_modules/jsonfile Completed in 2861ms
npm timing reifyNode:node_modules/winston-mail Completed in 2878ms
npm timing reifyNode:node_modules/socket.io-adapter Completed in 2871ms
npm timing reifyNode:node_modules/socket.io-parser/node_modules/debug Completed in 2885ms
npm timing reifyNode:node_modules/socket.io-client/node_modules/debug Completed in 2885ms
npm timing reifyNode:node_modules/socket.io/node_modules/debug Completed in 2885ms
npm timing reifyNode:node_modules/mquery/node_modules/debug Completed in 2880ms
npm timing reifyNode:node_modules/mongodb-connection-string-url/node_modules/punycode Completed in 2879ms
npm timing reifyNode:node_modules/engine.io-client/node_modules/debug Completed in 2870ms
npm timing reifyNode:node_modules/engine.io/node_modules/debug Completed in 2870ms
npm timing reifyNode:node_modules/engine.io/node_modules/cors Completed in 2870ms
npm timing reifyNode:node_modules/progress Completed in 2906ms
npm timing reifyNode:node_modules/leac Completed in 2906ms
npm timing reifyNode:node_modules/follow-redirects Completed in 2902ms
npm timing reifyNode:node_modules/valiquire-silent/node_modules/map-stream Completed in 2933ms
npm timing reifyNode:node_modules/proxy-from-env Completed in 3070ms
npm timing reifyNode:node_modules/request-progress Completed in 3075ms
npm WARN deprecated graceful-fs@2.0.3: please upgrade to graceful-fs 4 for compatibility with current and future versions of Node.js
npm timing reifyNode:node_modules/valiquire-silent/node_modules/graceful-fs Completed in 3089ms
npm timing reifyNode:node_modules/js/node_modules/commander Completed in 3076ms
npm timing reifyNode:node_modules/parseley Completed in 3986ms
npm timing reifyNode:node_modules/@types/whatwg-url Completed in 3965ms
npm timing reifyNode:node_modules/axios/node_modules/form-data Completed in 3969ms
npm http fetch GET 200 https://registry.npmjs.org/yauzl 3684ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/yargs-parser 3688ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/yallist 3687ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/y18n 3688ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/xtend 3690ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/xml-parse-from-string 3690ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/xmlbuilder 3692ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/xdg-basedir 3692ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/x-xss-protection 3693ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/write-file-atomic 3693ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/wrappy 3695ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/xml2js 3699ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/wrap-ansi 3697ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/word-wrap 3698ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/winston-transport 3700ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/winston 3701ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/widest-line 3702ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/whatwg-url 3704ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/xhr 3709ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/webidl-conversions 3706ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/wrap-fn 3710ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/walker 3706ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/vinyl-fs 3707ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/vinyl-assign 3712ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/vinyl 3713ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/which 3719ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/vary 3714ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/yocto-queue 3734ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/validate-npm-package-license 3717ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ware 3723ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/v8-to-istanbul 3719ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/uuid 3719ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/utils-merge 3725ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/util-deprecate 3726ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/utif 3726ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/use 3728ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/url-regex 3728ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/verror 3736ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/url 3730ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/urix 3732ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/uri-js 3732ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/update-notifier 3733ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/update-browserslist-db 3734ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/vali-date 3743ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/unset-value 3736ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/unpipe 3737ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/unique-string 3738ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/unique-stream 3738ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/union-value 3740ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/undefsafe 3740ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/uid-safe 3742ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/type-is 3746ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/url-parse-lax 3756ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/type-detect 3748ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/unzip-response 3755ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/tweetnacl 3744ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/tunnel-agent 3745ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/triple-beam 3745ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/trim-repeated 3746ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/type-fest 3757ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/tough-cookie 3755ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/tr46 3757ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/touch 3761ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/type-check 3774ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/to-regex-range 3763ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/to-regex 3764ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/trim-newlines 3769ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/to-fast-properties 3765ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/to-buffer 3767ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/to-absolute-glob 3768ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/toidentifier 3773ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/tinycolor2 3769ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/to-object-path 3774ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/time-stamp 3771ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/through2-filter 3773ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/through2 3773ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/through 3775ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/text-hex 3774ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/text-table 3776ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/tmpl 3786ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/test-exclude 3781ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/terminal-link 3783ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/timm 3789ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/tempfile 3786ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/temp-dir 3788ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/tar-fs 3781ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/supports-color 3781ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/supports-preserve-symlinks-flag 3784ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/text-encoding 3799ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/superagent 3786ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/timed-out 3788ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/term-size 3803ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/strip-indent 3794ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/strip-eof 3795ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/strip-final-newline 3796ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/strip-dirs 3797ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/strip-bom-stream 3798ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/strip-bom 3798ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/strip-json-comments 3803ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/stringstream 3800ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/supports-hyperlinks 3808ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/string-length 3802ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/strip-ansi 3805ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/string-width 3806ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/stream-combiner2 3805ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/stream-combiner 3806ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/string_decoder 3809ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/static-extend 3808ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/stat-mode 3813ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/stack-utils 3814ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/strip-outer 3815ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/stream-shift 3819ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/statuses 3819ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/split 3816ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/sshpk 3819ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/squeak 3821ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/spdx-exceptions 3820ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/spdx-correct 3820ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/sprintf-js 3824ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/source-map-url 3822ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/source-map-support 3823ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/source-map-resolve 3824ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/split-string 3834ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/typedarray 3824ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/sntp 3824ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/snapdragon-node 3825ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/snapdragon-util 3826ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/slug 3827ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/snapdragon 3829ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/sisteransi 3830ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/slash 3831ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/simple-swizzle 3832ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/simple-get 3834ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/simple-concat 3835ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/signal-exit 3837ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/sum-up 3838ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/spdx-expression-parse 3857ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/shebang-command 3846ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/shebang-regex 3848ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/setprototypeof 3848ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/source-map 3859ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/serve-static 3850ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/send 3851ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/spdx-license-ids 3875ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/semver-regex 3854ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/semver-diff 3854ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/semver 3855ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/seek-bzip 3856ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/scmp 3857ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/sax 3858ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/safer-buffer 3858ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/safe-stable-stringify 3864ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/safe-regex 3864ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/safe-buffer 3860ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/side-channel 3877ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/stack-trace 3861ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/reusify 3862ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/set-value 3880ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/resolve-url 3864ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/resolve-from 3864ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/resolve 3865ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/semver-truncate 3883ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/set-immediate-shim 3867ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/require-directory 3869ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/replace-ext 3869ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/repeating 3870ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/repeat-string 3875ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/repeat-element 3876ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/remove-trailing-separator 3876ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/registry-url 3878ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/run-parallel 3887ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/registry-auth-token 3879ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/regex-not 3880ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/regex-cache 3881ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/referrer-policy 3881ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/resolve.exports 3892ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ret 3892ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/readdirp 3885ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/read-pkg-up 3885ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/readable-stream 3887ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/read-pkg 3888ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/read-all-stream 3894ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/rc 3894ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/range-parser 3895ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/raw-body 3896ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/randomatic 3897ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/random-bytes 3898ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/regexpp 3907ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/resolve-cwd 3901ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/qs 3896ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/querystring 3904ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/regenerator-runtime 3913ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/pump 3900ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/pseudomap 3900ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ps-tree 3901ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/proxy-addr 3906ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/redent 3924ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/process-nextick-args 3909ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/process 3910ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ramda 3923ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/pretty-quick 3914ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/prettier 3915ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/preserve 3917ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/sharp 3963ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/prepend-http 3921ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/punycode 3928ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/posix-character-classes 3923ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/prompts 3928ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/png-to-jpeg 3925ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/png-js 3931ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/pretty-format 3936ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/prelude-ls 3938ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/pkg-dir 3936ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/pirates 3936ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/pinkie-promise 3938ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/pngjs 3941ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/platform 3942ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/picomatch 3941ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/prebuild-install 3948ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/pixelmatch 3948ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/performance-now 3947ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/pend 3949ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/pify 3952ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/path-to-regexp 3956ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/path-type 3960ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/pinkie 3964ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/path-key 3954ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/path-dirname 3955ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/pascalcase 3955ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/request 3968ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/parseurl 3959ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/parse-node-version 3959ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/parse-headers 3959ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/parse-bmfont-xml 3960ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/rimraf 3962ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/parse-glob 3964ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/parse-bmfont-ascii 3963ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/parent-module 3969ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/pako 3970ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/package-json 3971ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/p-try 3973ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/p-pipe 3974ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/p-locate 3974ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/pause-stream 3992ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/phin 3995ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/path-parse 3988ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/os-filter-obj 3980ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/onetime 3979ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/optionator 3981ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/one-time 3981ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/on-headers 3982ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/once 3984ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/on-finished 3988ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/omggif 3990ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/object.omit 3990ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/parse-bmfont-binary 3999ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/path-exists 4005ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/path-is-absolute 4007ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/sparkles 4088ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/path-is-inside 4010ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/parse-json 4001ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/oauth-sign 3991ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/object-assign 3993ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/npm-run-path 3993ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/normalize-path 3994ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/object-inspect 4004ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/normalize-package-data 3997ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/nodemailer 4001ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/object.pick 4015ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/nodemon 4007ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/node-releases 4009ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/object-visit 4021ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/node-addon-api 4011ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/node-forge 4014ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/nocache 4015ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/negotiator 4016ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/object-copy 4024ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/node-abi 4019ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/queue-microtask 4019ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/napi-build-utils 4021ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/mustache 4025ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/multipipe 4027ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/multiparty 4027ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/node-cron 4029ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/node-status-codes 4036ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/nan 4034ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ms 4032ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/node-int64 4040ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/morgan 4034ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/mozjpeg 4036ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ordered-read-streams 4036ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/mkdirp-classic 4036ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/moment 4039ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/mkdirp 4040ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/picocolors 4040ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/mixin-deep 4041ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/natural-compare 4056ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/minimist 4043ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/mimic-fn 4043ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/mime-types 4044ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/mime-db 4045ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/mimic-response 4046ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/minimatch 4052ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/methods 4049ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/messagebird 4049ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/merge-descriptors 4049ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/meow 4051ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/media-typer 4052ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/micromatch 4056ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/map-visit 4058ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/map-stream 4058ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/map-obj 4059ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/multimatch 4081ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/makeerror 4062ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/make-dir 4077ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/mime 4080ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/merge-stream 4079ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lowercase-keys 4080ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lru-cache 4083ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/longest 4085ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/loud-rejection 4087ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/logalot 4088ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/logform 4090ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash.templatesettings 4097ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash.reduce 4098ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash.restparam 4102ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash.template 4104ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash.merge 4104ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/math-random 4105ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash.isarray 4106ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash.isequal 4109ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash.isarguments 4103ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash.escape 4104ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash.defaults 4104ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash._root 4105ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/mri 4143ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash.assign 4108ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash._reevaluate 4108ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash._reescape 4113ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash._isiterateecall 4114ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lpad-align 4115ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash._createassigner 4116ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash._bindcallback 4117ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash._basevalues 4117ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash._basetostring 4119ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/p-finally 4183ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash._baseassign 4120ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/locate-path 4120ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/load-bmfont 4122ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash 4124ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash.keys 4125ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/levn 4125ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lines-and-columns 4126ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/leven 4131ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lazy-req 4131ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/nanomatch 4133ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lazystream 4134ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/kuler 4134ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/latest-version 4138ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash._getnative 4138ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/kind-of 4138ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jws 4139ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/load-json-file 4141ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/kleur 4144ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/json-stringify-safe 4143ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/json5 4145ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jsprim 4146ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/json-parse-even-better-errors 4140ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash._reinterpolate 4166ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/min-document 4194ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/json-schema 4148ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/json-bigint 4151ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jsbn 4151ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/js-tokens 4151ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/json-stable-stringify-without-jsonify 4152ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jsesc 4153ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/js-yaml 4154ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jmespath 4156ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jose 4158ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-worker 4161ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/js-sdsl 4163ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jpegtran-bin 4164ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jimp 4174ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jpeg-js 4177ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-resolve-dependencies 4178ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-validate 4181ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/stripe 4374ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-resolve 4190ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/react-is 4323ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-pnp-resolver 4213ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-runtime 4216ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-mock 4218ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-message-util 4221ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-regex-util 4222ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-get-type 4223ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-leak-detector 4226ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-matcher-utils 4229ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-environment-node 4238ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-docblock 4240ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-runner 4247ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-config 4245ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-diff 4249ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-haste-map 4254ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-changed-files 4248ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-circus 4253ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-snapshot 4266ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/istanbul-lib-report 4260ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/istanbul-lib-instrument 4270ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/istanbul-lib-coverage 4271ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/istanbul-reports 4272ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/isobject 4274ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/isexe 4274ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/isarray 4276ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-windows 4276ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-zip 4277ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-valid-glob 4279ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/isstream 4279ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-utf8 4280ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-url 4281ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-typedarray 4282ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-tar 4291ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-cli 4307ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-retry-allowed 4298ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-relative 4298ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/map-cache 4364ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-redirect 4301ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-posix-bracket 4301ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-plain-object 4303ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-path-inside 4304ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-plain-obj 4304ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-obj 4305ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-number 4306ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-npm 4307ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-natural-number 4307ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-jpg 4309ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-installed-globally 4310ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-glob 4316ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-gzip 4317ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-function 4313ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-generator-fn 4314ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/istanbul-lib-source-maps 4314ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-finite 4316ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-extglob 4316ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-primitive 4330ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-extendable 4319ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jwa 4362ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-core-module 4320ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-ci 4321ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-bzip2 4323ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-buffer 4330ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-binary-path 4331ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-arrayish 4332ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-absolute 4332ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ipaddr.js 4334ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ip-regex 4335ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash._basecopy 4397ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/os-tmpdir 4461ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/json-schema-traverse 4383ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/inflight 4338ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/indent-string 4340ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/imurmurhash 4340ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/import-local 4341ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-each 4343ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/import-fresh 4344ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/imagemin-mozjpeg 4345ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/imagemin-jpegtran 4353ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/imagemin 4353ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/imagemagick 4355ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ignore-by-default 4355ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/image-size 4357ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ignore 4359ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ienoopen 4359ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ieee754 4361ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/iconv-lite 4361ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/husky 4363ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/p-limit 4498ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/https-proxy-agent 4344ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/http-signature 4338ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/http-errors 4345ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/html-escaper 4344ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/hsts 4345ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/hide-powered-by 4332ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/hexoid 4332ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/helmet-csp 4333ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/helmet 4335ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/hawk 4336ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-fullwidth-code-point 4337ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/has-value 4337ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/hoek 4343ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/has-values 4341ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-stream 4353ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-equal-shallow 4409ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/has-gulplog 4343ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ini 4412ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/has-flag 4352ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/has 4353ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/har-validator 4355ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/gulplog 4356ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/gulp-util 4357ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/gulp-sourcemaps 4360ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/gulp-rename 4362ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/gulp-decompress 4363ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/gtoken 4365ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/grapheme-splitter 4367ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-util 4465ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/google-p12-pem 4372ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/graceful-fs 4382ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/google-auth-library 4382ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/gm 4385ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/glogg 4386ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/globby 4388ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/globals 4389ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/global-dirs 4390ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/global 4391ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/glob-stream 4392ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/glob-parent 4393ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/glob-base 4394ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/glob 4395ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/har-schema 4397ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/getpass 4397ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/import-lazy 4405ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/get-stream 4405ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/get-stdin 4407ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/get-proxy 4407ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/get-package-type 4408ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/get-intrinsic 4409ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/get-caller-file 4411ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/gcp-metadata 4411ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/gensync 4415ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/gaxios 4416ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/function-bind 4419ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/fs.realpath 4421ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/fs-constants 4421ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/from 4423ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/fresh 4433ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/frameguard 4435ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/fragment-cache 4441ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/forwarded 4442ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/formidable 4442ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/form-data 4444ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/forever-agent 4445ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/for-own 4446ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/for-in 4447ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/fn.name 4448ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/get-value 4449ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/flat-cache 4448ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/first-chunk-stream 4449ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/find-versions 4451ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-dotfile 4551ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/human-signals 4525ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/hosted-git-info 4461ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/fill-range 4463ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/filenamify 4464ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/filename-regex 4465ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/file-type 4465ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/file-uri-to-path 4467ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/figures 4468ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/file-entry-cache 4470ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/fecha 4471ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/fd-slicer 4471ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/fb-watchman 4472ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/fastq 4470ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/fast-text-encoding 4470ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/fast-safe-stringify 4478ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/fast-levenshtein 4479ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/fast-deep-equal 4480ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/hpkp 4544ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/fast-json-stable-stringify 4483ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/fancy-log 4484ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/filename-reserved-regex 4495ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/extend-shallow 4485ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/extend 4487ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/express 4489ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/expect-ct 4492ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/github-from-package 4493ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/expand-template 4494ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/expand-range 4495ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/expand-brackets 4502ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/exit 4503ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/exif-parser 4504ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/executable 4504ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/execa 4505ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/exec-series 4506ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/exec-buffer 4507ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/find-up 4528ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/finalhandler 4517ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/etag 4510ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/extglob 4521ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/estraverse 4513ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-watcher 4651ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/esprima 4516ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/esquery 4518ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/event-stream 4531ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/esutils 4534ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/eslint-utils 4535ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/eslint-scope 4538ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/extsprintf 4541ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/esrecurse 4547ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/escape-string-regexp 4547ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/escalade 4550ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/error-ex 4553ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/espree 4560ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/expect 4568ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/encodeurl 4601ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/end-of-stream 4606ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/enabled 4608ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/escape-html 4640ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/emailjs-mime-codec 4642ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/emailjs-base64 4652ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/eslint-visitor-keys 4662ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/emailjs 4663ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/emoji-regex 4684ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ecc-jsbn 4680ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/events 4684ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/duplexer2 4691ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/emittery 4701ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/duplexer 4695ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/download 4695ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/duplexify 4699ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/dotenv 4699ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/dont-sniff-mimetype 4700ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/dom-walk 4700ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/duplexer3 4705ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/flatted 4703ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/diff-sequences 4703ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/dezalgo 4705ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/destroy 4705ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/doctrine 4708ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/delayed-stream 4707ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/depd 4708ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/define-property 4708ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/deep-is 4709ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/detect-libc 4710ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/deep-extend 4711ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/decompress-targz 4708ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/decompress-unzip 4716ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/decompress-tarbz2 4718ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/decompress-tar 4720ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/each-async 4737ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/decompress-response 4722ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/dedent 4724ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/dot-prop 4740ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/eslint 4739ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/decode-uri-component 4743ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/dateformat 4744ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/decamelize 4745ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/currently-unhandled 4744ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/dashdash 4746ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/crypto-random-string 4746ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/debug 4751ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ee-first 4774ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/dasherize 4752ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/cryptiles 4751ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/country-list 4750ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/core-js 4751ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/crypto-browserify 4757ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/cors 4756ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/cookiejar 4757ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/decompress 4757ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/cross-spawn 4766ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/cookie-parser 4764ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/cookie 4765ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/convert-source-map 4766ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/content-type 4768ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/content-security-policy-builder 4768ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/create-error-class 4774ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/content-disposition 4770ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/console-stream 4772ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/configstore 4772ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/concat-stream 4773ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/concat-map 4778ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/compression 4780ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/compressible 4782ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/component-emitter 4782ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/commander 4783ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/combined-stream 4785ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/colorspace 4786ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/color-support 4787ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/color-name 4788ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/color-string 4789ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/color-convert 4785ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/color 4787ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/collection-visit 4788ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/dns-prefetch-control 4788ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/co 4789ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/clone-stats 4790ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/cliui 4791ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/clone 4797ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/class-utils 4797ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/cli-boxes 4798ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ci-info 4799ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/cjs-module-lexer 4800ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/chownr 4802ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/electron-to-chromium 4853ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/char-regex 4816ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/core-util-is 4836ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/chalk 4822ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/copy-descriptor 4843ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/camelize 4824ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/chokidar 4828ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest 5029ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/got 4936ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/caniuse-lite 4836ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/camelcase 4841ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/camelcase-keys 4842ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ecdsa-sig-formatter 4845ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/call-bind 4849ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/bytes 4849ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/cache-base 4852ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/buffer-to-vinyl 4852ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/buffer-from 4854ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/buffer-fill 4854ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/buffer-equal-constant-time 4851ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/buffer-equal 4851ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/buffer-alloc-unsafe 4851ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/buffer-crc32 4854ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/buffer-alloc 4854ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/buffer 4855ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/has-ansi 4979ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/caw 4857ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/braces 4858ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/brace-expansion 4864ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/boom 4864ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/boxen 4867ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/caseless 4882ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/body-parser 4870ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/bl 4872ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/bindings 4873ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/bin-wrapper 4874ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/cookie-signature 4878ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/bin-version 4878ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/bin-version-check 4879ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/bin-check 4879ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/bin-build 4880ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/beeper 4881ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/collect-v8-coverage 4888ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/bcrypt-pbkdf 4888ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/basic-auth 4889ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/base64-js 4889ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/base 4891ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/balanced-match 4892ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/babel-preset-current-node-syntax 4893ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/babel-preset-jest 4894ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/bignumber.js 4896ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/babel-jest 4897ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/binary-extensions 4899ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/aws4 4900ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/inherits 5102ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/atob 4902ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/asynckit 4908ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/async-each-series 4908ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/async-each 4906ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/assign-symbols 4907ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/assert-plus 4907ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/aws-sign2 4909ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/asap 4910ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/arrify 4910ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/array-unique 4912ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/capture-stack-trace 4946ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/array-series 4913ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/array-parallel 4914ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/array-flatten 4915ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/array-find-index 4916ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/array-differ 4918ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/arr-union 4922ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/arr-flatten 4924ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/arr-diff 4924ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/argparse 4925ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/archive-type 4927ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/anymatch 4927ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/any-base 4929ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ansi-wrap 4930ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/array-uniq 4931ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ansi-regex 4933ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ansi-gray 4933ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ansi-escapes 4935ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ansi-align 4936ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/babel-plugin-istanbul 4953ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/browserslist 4968ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/agent-base 4945ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/addressparser 4946ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ajv 4949ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/acorn-jsx 4952ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/acorn 4954ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/accepts 4955ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@types%2fyargs-parser 4952ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/abbrev 4954ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@types%2fyargs 4954ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@types%2ftriple-beam 4956ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/array-union 4972ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@types%2fstack-utils 4958ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@types%2fminimatch 4958ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@types%2fistanbul-reports 4965ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@types%2fistanbul-lib-report 4966ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@types%2fistanbul-lib-coverage 4967ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@types%2fgraceful-fs 4967ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/callsites 5019ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@types%2fbabel__template 4970ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@types%2fbabel__generator 4971ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@types%2fbabel__core 4972ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@types%2fbabel__traverse 4975ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@sinonjs%2ffake-timers 4974ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@sinonjs%2fcommons 4976ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/asn1 4976ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@nodelib%2ffs.scandir 4977ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@nodelib%2ffs.stat 4977ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/babel-plugin-jest-hoist 4985ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jridgewell%2fset-array 4984ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jridgewell%2fsourcemap-codec 4987ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jridgewell%2fgen-mapping 4986ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jridgewell%2ftrace-mapping 4990ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jridgewell%2fresolve-uri 4990ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp%2futils 4991ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp%2fpng 4993ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp%2ftiff 4996ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@sinclair%2ftypebox 5004ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp%2fplugins 5002ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/bmp-js 5057ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp%2fplugin-normalize 5010ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ansi-styles 5013ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@types%2fprettier 5027ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp%2fplugin-invert 5013ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp%2fplugin-gaussian 5014ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp%2fplugin-rotate 5023ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp%2fplugin-print 5025ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp%2fplugin-displace 5022ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp%2fplugin-mask 5024ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp%2ftypes 5042ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp%2fplugin-contain 5036ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp%2fplugin-resize 5047ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp%2fplugin-blit 5041ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp%2fplugin-blur 5044ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp%2fplugin-scale 5045ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp%2fplugin-flip 5052ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp%2fcore 5050ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp%2fplugin-dither 5059ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp%2fbmp 5065ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jest%2ftypes 5068ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp%2fplugin-cover 5069ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jest%2ftransform 5072ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jest%2fsource-map 5074ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@types%2fnode 5102ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jest%2fschemas 5093ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jest%2freporters 5094ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp%2fjpeg 5097ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jest%2fglobals 5100ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jest%2fexpect-utils 5101ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp%2fgif 5107ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jest%2fconsole 5103ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jest%2fcore 5106ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp%2fcustom 5116ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@istanbuljs%2fschema 5111ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@istanbuljs%2fload-nyc-config 5117ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@humanwhocodes%2fobject-schema 5118ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@humanwhocodes%2fmodule-importer 5119ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@humanwhocodes%2fconfig-array 5120ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@dabh%2fdiagnostics 5117ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@colors%2fcolors 5117ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@bcoe%2fv8-coverage 5119ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jest%2fexpect 5129ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel%2ftraverse 5121ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel%2ftemplate 5123ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel%2fplugin-syntax-typescript 5124ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel%2fpolyfill 5126ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel%2fplugin-syntax-top-level-await 5128ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel%2fplugin-syntax-optional-chaining 5132ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp%2fplugin-color 5153ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel%2fplugin-syntax-optional-catch-binding 5137ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel%2fplugin-syntax-nullish-coalescing-operator 5138ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel%2fplugin-syntax-numeric-separator 5139ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jest%2ftest-sequencer 5140ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel%2fplugin-syntax-json-strings 5142ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel%2fplugin-syntax-class-properties 5142ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel%2fplugin-syntax-import-meta 5144ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jest%2ffake-timers 5145ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel%2fplugin-syntax-async-generators 5147ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel%2fparser 5148ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel%2fhighlight 5151ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel%2fhelpers 5157ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel%2fhelper-validator-option 5159ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel%2fhelper-validator-identifier 5160ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel%2fplugin-syntax-bigint 5161ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel%2fhelper-split-export-declaration 5162ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel%2fhelper-simple-access 5163ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel%2fhelper-plugin-utils 5165ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel%2fhelper-module-transforms 5167ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel%2fhelper-function-name 5168ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel%2fhelper-hoist-variables 5169ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel%2fhelper-environment-visitor 5170ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel%2fhelper-compilation-targets 5176ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel%2fgenerator 5178ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel%2fcore 5180ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/bser 5256ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/has-symbols 5396ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel%2fcode-frame 5182ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@ampproject%2fremapping 5183ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-fullwidth-code-point 5184ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/string-width 5185ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel%2fhelper-string-parser 5186ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel%2ftypes 5206ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jest%2fenvironment 5216ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/readable-stream 5191ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/readable-stream 5198ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/string-width 5201ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@eslint%2feslintrc 5223ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/strip-bom 5204ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/replace-ext 5204ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/through2 5205ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/punycode 5204ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/core-util-is 5208ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/supports-color 5207ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/punycode 5209ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/escape-string-regexp 5209ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/co 5213ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/color-convert 5213ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/color-name 5220ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/chalk 5220ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ansi-styles 5221ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/isobject 5222ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/has-values 5224ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/has-value 5224ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/through2-filter 5225ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/through2 5225ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/isobject 5228ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-extendable 5227ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/escape-string-regexp 5229ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/extend-shallow 5229ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/through2 5231ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/string_decoder 5227ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/readable-stream 5228ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/isarray 5230ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/uuid 5239ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/tar-stream 5241ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/readable-stream 5243ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/buffer 5245ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/inherits 5247ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp%2fplugin-crop 5303ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/bl 5251ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/qs 5252ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ms 5253ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/form-data 5254ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/mime 5256ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/debug 5257ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/supports-color 5263ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/strip-ansi 5263ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/escape-string-regexp 5265ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ansi-styles 5265ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/chalk 5268ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/escape-string-regexp 5267ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/qs 5269ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-fullwidth-code-point 5294ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/strip-ansi 5271ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/merge-stream 5295ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/chalk 5273ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ansi-styles 5274ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/async 5300ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel%2fplugin-syntax-logical-assignment-operators 5277ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/strip-ansi 5282ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ansi-regex 5283ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/has-flag 5285ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-data-descriptor 5285ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/kind-of 5286ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-accessor-descriptor 5287ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@nodelib%2ffs.walk 5288ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/escape-string-regexp 5289ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/supports-color 5286ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/strip-ansi 5288ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/escape-string-regexp 5297ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ansi-styles 5288ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/chalk 5290ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/extend-shallow 5291ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ansi-regex 5292ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/atob 5297ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-extendable 5298ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/isobject 5298ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/kind-of 5299ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-descriptor 5300ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-data-descriptor 5301ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-accessor-descriptor 5301ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/define-property 5302ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/source-map 5304ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/supports-color 5320ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-descriptor 5306ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ansi-regex 5321ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-accessor-descriptor 5308ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/define-property 5310ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/escape-string-regexp 5310ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/tunnel-agent 5317ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/semver 5318ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/on-finished 5320ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ms 5322ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/inherits 5325ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/debug 5324ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/semver 5326ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-descriptor 5339ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/semver 5327ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/resolve-from 5329ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/uuid 5326ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/tunnel-agent 5327ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-data-descriptor 5340ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-extendable 5328ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/tar-stream 5906ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/extend-shallow 5336ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ms 5336ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/micromatch 5337ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/extend-shallow 5339ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/kind-of 5339ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/isobject 5341ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/kind-of 5357ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/kind-of 5343ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ms 5354ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-descriptor 5345ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-data-descriptor 5345ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-accessor-descriptor 5345ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/kind-of 5348ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/kind-of 5348ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/extglob 5353ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/define-property 5354ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/fill-range 5355ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/qs 5364ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/expand-brackets 5358ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/extend-shallow 5359ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/kind-of 5360ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-descriptor 5361ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/debug 5362ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-extendable 5369ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-number 5370ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/braces 5365ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/define-property 5368ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/find-up 5367ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/path-exists 5373ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/kind-of 5373ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/strip-json-comments 5374ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-number 5376ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/depd 5396ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/strip-bom 5398ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/http-errors 5398ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/p-locate 5376ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/p-limit 5377ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/npm-run-path 5377ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/human-signals 5378ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/extend-shallow 5388ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/array-unique 5389ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/onetime 5381ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/find-up 5382ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/execa 5387ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/arr-diff 5398ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jpeg-js 5389ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ansi-styles 5391ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/p-locate 5392ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/tunnel-agent 5394ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/locate-path 5398ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/p-limit 5397ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/chalk 5401ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/find-up 5400ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-glob 5401ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-extglob 5403ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/unzip-response 5403ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/timed-out 5405ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-stream 5406ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/semver 5413ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/get-stream 5419ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/got 5415ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/locate-path 5421ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-stream 5418ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel%2fhelper-module-imports 5419ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/kind-of 5420ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-accessor-descriptor 5420ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/define-property 5422ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ms 5421ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/semver 5423ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/isobject 5429ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/es6-promise 5427ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-descriptor 5433ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-data-descriptor 5428ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/debug 5437ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/path-key 5440ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/extend-shallow 5430ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/kind-of 5431ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/arr-diff 5431ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/array-unique 5433ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/readable-stream 5432ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/string_decoder 5435ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/statuses 5435ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/isarray 5436ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/semver 5443ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/duplexer2 5439ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/safe-buffer 5439ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/inherits 5446ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/http-errors 5448ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/array-union 5448ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/array-differ 5449ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/depd 5449ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ms 5451ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/minimist 5451ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/safe-buffer 5451ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/uuid 5464ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ms 5453ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/pify 5455ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/strip-bom 5455ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/parse-json 5455ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/supports-color 5456ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/camelcase 5458ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/onetime 5466ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/semver 5467ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/get-stream 5468ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/npm-run-path 5469ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/onetime 5469ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/execa 5471ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/npm-run-path 5467ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/get-stream 5467ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/define-property 5468ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/execa 5470ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/debug 5471ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/make-dir 5472ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/isobject 5473ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ci-info 5474ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-extendable 5506ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-path-inside 5481ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/debug 5501ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/which 5484ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/shebang-command 5485ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-extendable 5504ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/execa 5485ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/cross-spawn 5486ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/shebang-regex 5490ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/debug 5488ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lru-cache 5492ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/statuses 5491ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/yallist 5497ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/setprototypeof 5493ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/kind-of 5499ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ms 5502ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/kind-of 5501ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-stream 5508ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/json-schema-traverse 5501ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jest%2ftest-result 5661ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/fast-deep-equal 5503ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/vinyl 5504ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/through2 5505ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/strip-ansi 5499ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/supports-color 5499ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/replace-ext 5500ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/object-assign 5500ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/chalk 5501ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/escape-string-regexp 5493ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ansi-styles 5497ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ansi-regex 5496ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel%2fcompat-data 5660ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-stream 5484ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel%2fplugin-syntax-object-rest-spread 5672ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/semver 5640ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ajv 5531ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/aws-sdk 5747ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/yallist 5521ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/which 5521ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ms 5522ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lru-cache 5521ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/cross-spawn 5521ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/debug 5524ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/isobject 5575ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/normalize-path 5525ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-glob 5524ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-extglob 5524ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/glob-parent 5523ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-glob 5526ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/glob 5531ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/braces 5532ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-glob 5533ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ansi-regex 5596ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-number 5598ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/micromatch 5545ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/qs 5535ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-extglob 5540ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/glob-parent 5540ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/parse-json 5572ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/on-finished 5541ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ms 5541ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/debug 5542ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/raw-body 5541ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/safe-buffer 5543ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/qs 5543ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/through2 5590ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/on-finished 5551ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/iconv-lite 5550ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/http-errors 5541ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/depd 5542ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-extglob 5560ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/debug 5543ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/cookie 5544ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/body-parser 5543ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/bytes 5547ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/fill-range 5544ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/which 5544ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/shebang-regex 5544ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-number 5556ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lru-cache 5552ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/shebang-command 5555ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-stream 5555ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/cross-spawn 5556ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/inherits 5583ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ms 5585ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/pify 5559ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/eslint-visitor-keys 5561ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/yallist 5570ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/debug 5563ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/kind-of 5564ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/isobject 5565ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-descriptor 5565ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/rimraf 5573ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/through2 5576ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/vinyl 5578ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ms 5586ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-data-descriptor 5584ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/vinyl 5581ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/clone 5584ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/clone 5584ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-accessor-descriptor 5589ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/object-assign 5585ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/object-assign 5590ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/object-assign 5590ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/vinyl 5590ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ms 5576ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/safe-buffer 5578ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/boom 5599ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/debug 5586ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/color-convert 5587ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/clone 5604ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/color 5588ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/string-width 5589ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/isobject 5585ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-fullwidth-code-point 5591ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-descriptor 5587ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/write-file-atomic 5598ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/kind-of 5589ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/bytes 5600ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/strip-bom 5590ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/define-property 5591ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-glob 5586ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/micromatch 5599ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/normalize-path 5601ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-data-descriptor 5604ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/object-assign 5595ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/color-name 5615ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-extglob 5601ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/camelcase 5598ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/isobject 5598ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/uuid 5599ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/isobject 5600ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/glob-parent 5606ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/has-flag 5602ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/escape-string-regexp 5603ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/color-convert 5603ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/color-name 5604ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-arrayish 5611ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/chalk 5613ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/semver 5606ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ansi-styles 5615ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/uuid 5608ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/tempfile 5608ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/rimraf 5610ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-accessor-descriptor 5609ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/kind-of 5611ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/safe-buffer 5613ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/isobject 5612ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-descriptor 5612ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-accessor-descriptor 5613ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-data-descriptor 5616ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/file-type 5623ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/define-property 5630ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/uuid 5631ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/type-fest 5632ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ms 5633ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/debug 5634ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/resolve-from 5633ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/file-type 5637ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/p-locate 5637ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/p-limit 5637ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/js-yaml 5638ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/find-up 5638ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/camelcase 5638ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ansi-regex 5640ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ms 5646ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/argparse 5649ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/debug 5651ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/braces 5689ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/anymatch 5690ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/globals 5654ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/debug 5656ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ms 5658ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/supports-color 5658ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ms 5663ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/debug 5662ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/file-type 5700ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/color-name 5654ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/color-convert 5661ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/yallist 5651ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jridgewell%2fgen-mapping 5651ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/has-flag 5667ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/locate-path 5687ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lru-cache 5656ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/supports-color 5655ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/nopt 6387ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/buffer 5702ms (cache hit)
npm timing reifyNode:node_modules/mongodb-connection-string-url Completed in 7171ms
npm http fetch GET 200 https://registry.npmjs.org/escape-string-regexp 5815ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ms 5676ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/chalk 5680ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/escape-string-regexp 5691ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ms 5679ms (cache hit)
npm timing reifyNode:node_modules/valiquire-silent/node_modules/lru-cache Completed in 7202ms
npm timing reifyNode:node_modules/escodegen/node_modules/esutils Completed in 7180ms
npm http fetch GET 200 https://registry.npmjs.org/to-regex-range 5976ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ansi-styles 5691ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/debug 5693ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/detect-newline 6186ms (cache hit)
npm timing reifyNode:node_modules/tslib Completed in 7228ms
npm timing reifyNode:node_modules/domelementtype Completed in 7210ms
npm timing reifyNode:node_modules/deepmerge Completed in 7211ms
npm timing reifyNode:node_modules/cli-table3 Completed in 7209ms
npm timing reifyNode:node_modules/heic-convert/node_modules/jpeg-js Completed in 7221ms
npm timing reifyNode:node_modules/require-like Completed in 7242ms
npm WARN deprecated minimatch@0.2.14: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm timing reifyNode:node_modules/valiquire-silent/node_modules/minimatch Completed in 7285ms
npm timing reifyNode:node_modules/@logtail/types Completed in 7272ms
npm timing reifyNode:node_modules/mpath Completed in 7300ms
npm timing reifyNode:node_modules/node-fetch Completed in 7616ms
npm timing reifyNode:node_modules/selderee Completed in 7622ms
npm timing reifyNode:node_modules/html-to-text Completed in 7612ms
npm http fetch GET 200 https://registry.npmjs.org/debug 5301ms (cache hit)
npm timing metavuln:packument:debug Completed in 5302ms
npm timing metavuln:load:security-advisory:debug:1094457 Completed in 1ms
npm timing metavuln:calculate:security-advisory:debug:1094457 Completed in 5304ms
npm timing metavuln:load:security-advisory:debug:1096795 Completed in 1ms
npm timing metavuln:calculate:security-advisory:debug:1096795 Completed in 5303ms
npm http fetch GET 200 https://registry.npmjs.org/ms 5303ms (cache hit)
npm timing metavuln:packument:ms Completed in 5303ms
npm timing metavuln:load:security-advisory:ms:1094419 Completed in 1ms
npm timing metavuln:calculate:security-advisory:ms:1094419 Completed in 5304ms
npm http fetch GET 200 https://registry.npmjs.org/@babel%2ftraverse 5305ms (cache hit)
npm timing metavuln:packument:@babel/traverse Completed in 5306ms
npm timing metavuln:load:security-advisory:@babel/traverse:1096886 Completed in 1ms
npm timing metavuln:calculate:security-advisory:@babel/traverse:1096886 Completed in 5308ms
npm http fetch GET 200 https://registry.npmjs.org/atob 5307ms (cache hit)
npm timing metavuln:packument:atob Completed in 5307ms
npm timing metavuln:load:security-advisory:atob:1092318 Completed in 0ms
npm timing metavuln:calculate:security-advisory:atob:1092318 Completed in 5307ms
npm http fetch GET 200 https://registry.npmjs.org/ajv 5309ms (cache hit)
npm timing metavuln:packument:ajv Completed in 5311ms
npm timing metavuln:load:security-advisory:ajv:1097685 Completed in 4ms
npm timing metavuln:calculate:security-advisory:ajv:1097685 Completed in 5315ms
npm http fetch GET 200 https://registry.npmjs.org/axios 5315ms (cache hit)
npm timing metavuln:packument:axios Completed in 5318ms
npm timing metavuln:load:security-advisory:axios:1098583 Completed in 1ms
npm timing metavuln:calculate:security-advisory:axios:1098583 Completed in 5319ms
npm http fetch GET 200 https://registry.npmjs.org/kind-of 5318ms (cache hit)
npm timing metavuln:packument:kind-of Completed in 5319ms
npm timing metavuln:load:security-advisory:kind-of:1095056 Completed in 0ms
npm timing metavuln:calculate:security-advisory:kind-of:1095056 Completed in 5319ms
npm http fetch GET 200 https://registry.npmjs.org/semver 5319ms (cache hit)
npm timing metavuln:packument:semver Completed in 5320ms
npm timing metavuln:load:security-advisory:semver:1098562 Completed in 0ms
npm timing metavuln:calculate:security-advisory:semver:1098562 Completed in 5320ms
npm timing metavuln:load:security-advisory:semver:1098563 Completed in 1ms
npm timing metavuln:calculate:security-advisory:semver:1098563 Completed in 5321ms
npm timing metavuln:load:security-advisory:semver:1098564 Completed in 1ms
npm timing metavuln:calculate:security-advisory:semver:1098564 Completed in 5322ms
npm http fetch GET 200 https://registry.npmjs.org/body-parser 5329ms (cache hit)
npm timing metavuln:packument:body-parser Completed in 5330ms
npm timing metavuln:load:security-advisory:body-parser:1099520 Completed in 0ms
npm timing metavuln:calculate:security-advisory:body-parser:1099520 Completed in 5331ms
npm http fetch GET 200 https://registry.npmjs.org/braces 5326ms (cache hit)
npm timing metavuln:packument:braces Completed in 5331ms
npm timing metavuln:load:security-advisory:braces:1089939 Completed in 1ms
npm timing metavuln:calculate:security-advisory:braces:1089939 Completed in 5332ms
npm timing metavuln:load:security-advisory:braces:1098094 Completed in 0ms
npm timing metavuln:calculate:security-advisory:braces:1098094 Completed in 5327ms
npm timing metavuln:load:security-advisory:braces:1085715 Completed in 0ms
npm timing metavuln:calculate:security-advisory:braces:1085715 Completed in 5327ms
npm http fetch GET 200 https://registry.npmjs.org/micromatch 5327ms (cache hit)
npm timing metavuln:packument:micromatch Completed in 5327ms
npm timing metavuln:load:security-advisory:micromatch:1098681 Completed in 0ms
npm timing metavuln:calculate:security-advisory:micromatch:1098681 Completed in 5329ms
npm http fetch GET 200 https://registry.npmjs.org/cookie 5328ms (cache hit)
npm timing metavuln:packument:cookie Completed in 5328ms
npm timing metavuln:load:security-advisory:cookie:1099846 Completed in 0ms
npm timing metavuln:calculate:security-advisory:cookie:1099846 Completed in 5329ms
npm http fetch GET 200 https://registry.npmjs.org/cryptiles 5328ms (cache hit)
npm timing metavuln:packument:cryptiles Completed in 5329ms
npm timing metavuln:load:security-advisory:cryptiles:1095034 Completed in 0ms
npm timing metavuln:calculate:security-advisory:cryptiles:1095034 Completed in 5330ms
npm http fetch GET 200 https://registry.npmjs.org/decompress 5329ms (cache hit)
npm timing metavuln:packument:decompress Completed in 5329ms
npm timing metavuln:load:security-advisory:decompress:1091741 Completed in 0ms
npm timing metavuln:calculate:security-advisory:decompress:1091741 Completed in 5330ms
npm http fetch GET 200 https://registry.npmjs.org/express 5330ms (cache hit)
npm timing metavuln:packument:express Completed in 5333ms
npm timing metavuln:load:security-advisory:express:1099529 Completed in 8ms
npm timing metavuln:load:security-advisory:express:1096820 Completed in 1ms
npm timing metavuln:calculate:security-advisory:express:1096820 Completed in 5342ms
npm http fetch GET 200 https://registry.npmjs.org/qs 5343ms (cache hit)
npm timing metavuln:packument:qs Completed in 5343ms
npm timing metavuln:load:security-advisory:qs:1087525 Completed in 1ms
npm timing metavuln:calculate:security-advisory:qs:1087525 Completed in 5344ms
npm timing metavuln:load:security-advisory:qs:1096467 Completed in 0ms
npm timing metavuln:calculate:security-advisory:qs:1096467 Completed in 5344ms
npm http fetch GET 200 https://registry.npmjs.org/follow-redirects 5345ms (cache hit)
npm timing metavuln:packument:follow-redirects Completed in 5345ms
npm timing metavuln:load:security-advisory:follow-redirects:1096856 Completed in 1ms
npm timing metavuln:calculate:security-advisory:follow-redirects:1096856 Completed in 5346ms
npm http fetch GET 200 https://registry.npmjs.org/got 5346ms (cache hit)
npm timing metavuln:packument:got Completed in 5347ms
npm timing metavuln:load:security-advisory:got:1088948 Completed in 0ms
npm timing metavuln:calculate:security-advisory:got:1088948 Completed in 5348ms
npm http fetch GET 200 https://registry.npmjs.org/hawk 5348ms (cache hit)
npm timing metavuln:packument:hawk Completed in 5349ms
npm timing metavuln:load:security-advisory:hawk:1095062 Completed in 1ms
npm timing metavuln:calculate:security-advisory:hawk:1095062 Completed in 5350ms
npm http fetch GET 200 https://registry.npmjs.org/jpeg-js 5349ms (cache hit)
npm timing metavuln:packument:jpeg-js Completed in 5349ms
npm timing metavuln:load:security-advisory:jpeg-js:1093580 Completed in 0ms
npm timing metavuln:calculate:security-advisory:jpeg-js:1093580 Completed in 5349ms
npm timing metavuln:load:security-advisory:jpeg-js:1088964 Completed in 1ms
npm timing metavuln:calculate:security-advisory:jpeg-js:1088964 Completed in 5350ms
npm http fetch GET 200 https://registry.npmjs.org/hoek 5349ms (cache hit)
npm timing metavuln:packument:hoek Completed in 5350ms
npm timing metavuln:load:security-advisory:hoek:1096410 Completed in 6ms
npm timing metavuln:calculate:security-advisory:hoek:1096410 Completed in 5357ms
npm http fetch GET 200 https://registry.npmjs.org/ip 5357ms (cache hit)
npm timing metavuln:packument:ip Completed in 5357ms
npm timing metavuln:load:security-advisory:ip:1097721 Completed in 0ms
npm timing metavuln:calculate:security-advisory:ip:1097721 Completed in 5357ms
npm timing metavuln:load:security-advisory:ip:1099357 Completed in 0ms
npm timing metavuln:calculate:security-advisory:ip:1099357 Completed in 5358ms
npm http fetch GET 200 https://registry.npmjs.org/helmet-csp 5359ms (cache hit)
npm timing metavuln:packument:helmet-csp Completed in 5360ms
npm timing metavuln:load:security-advisory:helmet-csp:1086769 Completed in 0ms
npm timing metavuln:calculate:security-advisory:helmet-csp:1086769 Completed in 5360ms
npm http fetch GET 200 https://registry.npmjs.org/jose 5359ms (cache hit)
npm timing metavuln:packument:jose Completed in 5361ms
npm timing metavuln:load:security-advisory:jose:1096835 Completed in 1ms
npm timing metavuln:calculate:security-advisory:jose:1096835 Completed in 5362ms
npm http fetch GET 200 https://registry.npmjs.org/minimist 5360ms (cache hit)
npm timing metavuln:packument:minimist Completed in 5360ms
npm timing metavuln:load:security-advisory:minimist:1097677 Completed in 1ms
npm timing metavuln:calculate:security-advisory:minimist:1097677 Completed in 5361ms
npm timing metavuln:load:security-advisory:minimist:1096466 Completed in 0ms
npm timing metavuln:calculate:security-advisory:minimist:1096466 Completed in 5361ms
npm http fetch GET 200 https://registry.npmjs.org/lodash.template 5362ms (cache hit)
npm timing metavuln:packument:lodash.template Completed in 5362ms
npm timing metavuln:load:security-advisory:lodash.template:1096993 Completed in 0ms
npm timing metavuln:calculate:security-advisory:lodash.template:1096993 Completed in 5363ms
npm http fetch GET 200 https://registry.npmjs.org/aws-sdk 5382ms (cache hit)
npm timing metavuln:packument:aws-sdk Completed in 5397ms
npm timing metavuln:load:security-advisory:aws-sdk:1089198 Completed in 10ms
npm timing metavuln:calculate:security-advisory:aws-sdk:1089198 Completed in 5408ms
npm http fetch GET 200 https://registry.npmjs.org/minimatch 5394ms (cache hit)
npm timing metavuln:packument:minimatch Completed in 5395ms
npm timing metavuln:load:security-advisory:minimatch:1093710 Completed in 0ms
npm timing metavuln:calculate:security-advisory:minimatch:1093710 Completed in 5395ms
npm timing metavuln:load:security-advisory:minimatch:1096485 Completed in 1ms
npm timing metavuln:calculate:security-advisory:minimatch:1096485 Completed in 5395ms
npm http fetch GET 200 https://registry.npmjs.org/moment 5395ms (cache hit)
npm timing metavuln:packument:moment Completed in 5396ms
npm timing metavuln:load:security-advisory:moment:1095083 Completed in 0ms
npm timing metavuln:calculate:security-advisory:moment:1095083 Completed in 5396ms
npm timing metavuln:load:security-advisory:moment:1095072 Completed in 1ms
npm timing metavuln:calculate:security-advisory:moment:1095072 Completed in 5397ms
npm http fetch GET 200 https://registry.npmjs.org/mongoose 5399ms (cache hit)
npm timing metavuln:packument:mongoose Completed in 5411ms
npm timing metavuln:load:security-advisory:mongoose:1095082 Completed in 7ms
npm timing metavuln:calculate:security-advisory:mongoose:1095082 Completed in 5418ms
npm http fetch GET 200 https://registry.npmjs.org/path-to-regexp 5418ms (cache hit)
npm timing metavuln:packument:path-to-regexp Completed in 5418ms
npm timing metavuln:load:security-advisory:path-to-regexp:1099562 Completed in 1ms
npm timing metavuln:calculate:security-advisory:path-to-regexp:1099562 Completed in 5419ms
npm http fetch GET 200 https://registry.npmjs.org/semver-regex 5417ms (cache hit)
npm timing metavuln:packument:semver-regex Completed in 5418ms
npm timing metavuln:load:security-advisory:semver-regex:1092475 Completed in 0ms
npm timing metavuln:calculate:security-advisory:semver-regex:1092475 Completed in 5418ms
npm timing metavuln:load:security-advisory:semver-regex:1092605 Completed in 0ms
npm timing metavuln:calculate:security-advisory:semver-regex:1092605 Completed in 5418ms
npm http fetch GET 200 https://registry.npmjs.org/request 5419ms (cache hit)
npm timing metavuln:packument:request Completed in 5430ms
npm timing metavuln:load:security-advisory:request:1096727 Completed in 1ms
npm timing metavuln:calculate:security-advisory:request:1096727 Completed in 5441ms
npm http fetch GET 200 https://registry.npmjs.org/send 5441ms (cache hit)
npm timing metavuln:packument:send Completed in 5442ms
npm timing metavuln:load:security-advisory:send:1099525 Completed in 3ms
npm http fetch GET 200 https://registry.npmjs.org/serve-static 5445ms (cache hit)
npm timing metavuln:packument:serve-static Completed in 5447ms
npm timing metavuln:load:security-advisory:serve-static:1099527 Completed in 3ms
npm http fetch GET 200 https://registry.npmjs.org/socket.io 5458ms (cache hit)
npm timing metavuln:packument:socket.io Completed in 5462ms
npm timing metavuln:load:security-advisory:socket.io:1098556 Completed in 7ms
npm http fetch GET 200 https://registry.npmjs.org/sharp 5480ms (cache hit)
npm timing metavuln:packument:sharp Completed in 5482ms
npm timing metavuln:load:security-advisory:sharp:1094888 Completed in 1ms
npm timing metavuln:calculate:security-advisory:sharp:1094888 Completed in 5484ms
npm http fetch GET 200 https://registry.npmjs.org/tough-cookie 5484ms (cache hit)
npm timing metavuln:packument:tough-cookie Completed in 5490ms
npm timing metavuln:load:security-advisory:tough-cookie:1097682 Completed in 1ms
npm timing metavuln:calculate:security-advisory:tough-cookie:1097682 Completed in 5491ms
npm http fetch GET 200 https://registry.npmjs.org/trim-newlines 5491ms (cache hit)
npm timing metavuln:packument:trim-newlines Completed in 5492ms
npm timing metavuln:load:security-advisory:trim-newlines:1095100 Completed in 0ms
npm timing metavuln:calculate:security-advisory:trim-newlines:1095100 Completed in 5493ms
npm http fetch GET 200 https://registry.npmjs.org/undefsafe 5492ms (cache hit)
npm timing metavuln:packument:undefsafe Completed in 5494ms
npm timing metavuln:load:security-advisory:undefsafe:1089922 Completed in 0ms
npm timing metavuln:calculate:security-advisory:undefsafe:1089922 Completed in 5494ms
npm http fetch GET 200 https://registry.npmjs.org/nodemailer 5499ms (cache hit)
npm timing metavuln:packument:nodemailer Completed in 5512ms
npm timing metavuln:load:security-advisory:nodemailer:1096366 Completed in 4ms
npm timing metavuln:calculate:security-advisory:nodemailer:1096366 Completed in 5516ms
npm http fetch GET 200 https://registry.npmjs.org/url-regex 5515ms (cache hit)
npm timing metavuln:packument:url-regex Completed in 5516ms
npm timing metavuln:load:security-advisory:url-regex:1087482 Completed in 0ms
npm timing metavuln:calculate:security-advisory:url-regex:1087482 Completed in 5526ms
npm http fetch GET 200 https://registry.npmjs.org/ws 5525ms (cache hit)
npm timing metavuln:packument:ws Completed in 5528ms
npm timing metavuln:load:security-advisory:ws:1098392 Completed in 1ms
npm timing metavuln:calculate:security-advisory:ws:1098392 Completed in 5530ms
npm http fetch GET 200 https://registry.npmjs.org/word-wrap 5531ms (cache hit)
npm timing metavuln:packument:word-wrap Completed in 5532ms
npm timing metavuln:load:security-advisory:word-wrap:1097681 Completed in 0ms
npm timing metavuln:calculate:security-advisory:word-wrap:1097681 Completed in 5533ms
npm http fetch GET 200 https://registry.npmjs.org/xml2js 5532ms (cache hit)
npm timing metavuln:packument:xml2js Completed in 5533ms
npm timing metavuln:load:security-advisory:xml2js:1096693 Completed in 28ms
npm timing metavuln:calculate:security-advisory:xml2js:1096693 Completed in 5561ms
npm http fetch GET 200 https://registry.npmjs.org/phin 5568ms (cache hit)
npm timing metavuln:packument:phin Completed in 5582ms
npm timing metavuln:load:security-advisory:phin:1096967 Completed in 11ms
npm timing metavuln:calculate:security-advisory:phin:1096967 Completed in 5594ms
npm http fetch GET 200 https://registry.npmjs.org/tunnel-agent 5593ms (cache hit)
npm timing metavuln:packument:tunnel-agent Completed in 5594ms
npm timing metavuln:load:security-advisory:tunnel-agent:1085744 Completed in 0ms
npm timing metavuln:calculate:security-advisory:tunnel-agent:1085744 Completed in 5594ms
npm http fetch GET 200 https://registry.npmjs.org/mongodb 5601ms (cache hit)
npm timing metavuln:packument:mongodb Completed in 5612ms
npm timing metavuln:load:security-advisory:mongodb:1096428 Completed in 3ms
npm timing metavuln:calculate:security-advisory:mongodb:1096428 Completed in 5615ms
npm timing reifyNode:node_modules/valiquire-silent/node_modules/readable-stream Completed in 7995ms
npm timing reifyNode:node_modules/xmlhttprequest-ssl Completed in 8022ms
npm timing reifyNode:node_modules/kew Completed in 8008ms
npm timing reifyNode:node_modules/valiquire-silent/node_modules/detective Completed in 8027ms
npm timing reifyNode:node_modules/peberminta Completed in 8058ms
npm timing reifyNode:node_modules/escodegen Completed in 8046ms
npm timing reifyNode:node_modules/mongodb-connection-string-url/node_modules/tr46 Completed in 8059ms
npm timing reifyNode:node_modules/extract-zip/node_modules/debug Completed in 8050ms
npm WARN deprecated phantomjs-prebuilt@2.1.16: this package is now deprecated
npm timing reifyNode:node_modules/phantomjs-prebuilt Completed in 8087ms
npm timing reifyNode:node_modules/dom-serializer Completed in 8073ms
npm timing reifyNode:node_modules/cross-fetch Completed in 8201ms
npm timing reifyNode:node_modules/mongodb-connection-string-url/node_modules/whatwg-url Completed in 8217ms
npm timing reifyNode:node_modules/smart-buffer Completed in 8223ms
npm timing reifyNode:node_modules/mquery Completed in 8321ms
npm timing reifyNode:node_modules/domhandler Completed in 8309ms
npm timing reifyNode:node_modules/migrate-mongo/node_modules/commander Completed in 8322ms
npm WARN deprecated html-pdf@3.0.1: Please migrate your projects to a newer library like puppeteer
npm timing reifyNode:node_modules/html-pdf Completed in 8321ms
npm timing reifyNode:node_modules/valiquire-silent Completed in 8568ms
npm timing reifyNode:node_modules/ws Completed in 9513ms
npm timing reifyNode:node_modules/@logtail/winston Completed in 9476ms
npm timing reifyNode:node_modules/detective Completed in 11140ms
npm timing metavuln:cache:put:security-advisory:express:hVvNcW1vjxrtQmaCwPKfE4Z8R62gR0ULNfdF0CLFRiFJto5sSTez9DCVLJ7vjZWLLbcdnPaPDC9ZDCECldX4GQ== Completed in 3511ms
npm timing metavuln:calculate:security-advisory:express:1099529 Completed in 8852ms
npm timing metavuln:cache:put:security-advisory:serve-static:6/5/7wCvhynQFLFlm3uAL70rYGPKRtebq7fww92FL5lg7aniCfsBAW3IWMWnLUwSQWZGUr38TziTDlnBorKdEg== Completed in 3383ms
npm timing metavuln:calculate:security-advisory:serve-static:1099527 Completed in 8843ms
npm timing metavuln:cache:put:security-advisory:send:OShLTeaftGdoI6AC7xvJ84fklSsg8XN9g5w+pRFqXWtM66RkMgSjQaSgIRFeMMpYy/URhePqWfUgvGta5cUXXw== Completed in 3398ms
npm timing metavuln:calculate:security-advisory:send:1099525 Completed in 8843ms
npm timing metavuln:cache:put:security-advisory:socket.io:i04Ov73GVsgxj89gS7+811lN8e8Fiv+seBD4p2jUdmdonKXV8eGsJtzD4UDYvSniXYS3ayxAPBB0xPSZ6RUPXw== Completed in 3363ms
npm timing metavuln:calculate:security-advisory:socket.io:1098556 Completed in 8842ms
npm timing metavuln:packument:snapdragon Completed in 0ms
npm timing reifyNode:node_modules/socket.io-parser Completed in 11379ms
npm http fetch GET 200 https://registry.npmjs.org/yauzl/-/yauzl-2.10.0.tgz 7100ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/yargs-parser/-/yargs-parser-21.1.1.tgz 7099ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz 7097ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/y18n/-/y18n-5.0.8.tgz 7097ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/xtend/-/xtend-4.0.2.tgz 7096ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/xml-parse-from-string/-/xml-parse-from-string-1.0.1.tgz 7095ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/xmlbuilder/-/xmlbuilder-4.2.1.tgz 7094ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/x-xss-protection/-/x-xss-protection-1.1.0.tgz 7092ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/write-file-atomic/-/write-file-atomic-4.0.2.tgz 7090ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/xdg-basedir/-/xdg-basedir-3.0.0.tgz 7104ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz 7099ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/xml2js/-/xml2js-0.4.17.tgz 7098ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz 7098ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/winston-transport/-/winston-transport-4.5.0.tgz 7095ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/winston/-/winston-3.8.2.tgz 7094ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/widest-line/-/widest-line-2.0.1.tgz 7094ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/whatwg-url/-/whatwg-url-5.0.0.tgz 7092ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.3.tgz 7100ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-3.0.1.tgz 7091ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/wrap-fn/-/wrap-fn-0.1.5.tgz 7091ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/walker/-/walker-1.0.8.tgz 7093ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/vinyl-fs/-/vinyl-fs-2.4.4.tgz 7089ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/vinyl-assign/-/vinyl-assign-1.2.1.tgz 7087ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/xhr/-/xhr-2.6.0.tgz 7099ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/which/-/which-2.0.2.tgz 7085ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/vinyl/-/vinyl-1.2.0.tgz 7088ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz 7085ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/vary/-/vary-1.1.2.tgz 7087ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/v8-to-istanbul/-/v8-to-istanbul-9.0.1.tgz 7081ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/uuid/-/uuid-9.0.0.tgz 7076ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/validate-npm-package-license/-/validate-npm-package-license-3.0.4.tgz 7086ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz 7074ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ware/-/ware-1.3.0.tgz 7086ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/use/-/use-3.1.1.tgz 7073ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/url-regex/-/url-regex-3.2.0.tgz 7072ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/utif/-/utif-2.0.1.tgz 7076ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz 7079ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/url/-/url-0.10.3.tgz 7072ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/verror/-/verror-1.10.0.tgz 7073ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/update-notifier/-/update-notifier-2.5.0.tgz 7068ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.0.10.tgz 7067ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/urix/-/urix-0.1.0.tgz 7072ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz 7072ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz 7066ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/unique-string/-/unique-string-1.0.0.tgz 7065ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/unique-stream/-/unique-stream-2.3.1.tgz 7064ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/vali-date/-/vali-date-1.0.0.tgz 7070ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/undefsafe/-/undefsafe-0.0.3.tgz 7063ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz 7056ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/url-parse-lax/-/url-parse-lax-1.0.0.tgz 7056ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/type-detect/-/type-detect-4.0.8.tgz 7055ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/unzip-response/-/unzip-response-1.0.2.tgz 7054ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/tweetnacl/-/tweetnacl-0.14.5.tgz 7053ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.4.3.tgz 7053ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/triple-beam/-/triple-beam-1.3.0.tgz 7052ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/trim-repeated/-/trim-repeated-1.0.0.tgz 7052ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/type-fest/-/type-fest-0.20.2.tgz 7044ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/tough-cookie/-/tough-cookie-2.3.4.tgz 7043ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/tr46/-/tr46-0.0.3.tgz 7037ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/touch/-/touch-3.1.0.tgz 7038ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz 7036ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz 7036ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/to-regex/-/to-regex-3.0.2.tgz 7034ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/trim-newlines/-/trim-newlines-1.0.0.tgz 7034ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/to-fast-properties/-/to-fast-properties-2.0.0.tgz 7034ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/to-buffer/-/to-buffer-1.1.1.tgz 7032ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/to-absolute-glob/-/to-absolute-glob-0.1.1.tgz 7032ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz 7032ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/tinycolor2/-/tinycolor2-1.6.0.tgz 7032ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/to-object-path/-/to-object-path-0.3.0.tgz 7031ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/time-stamp/-/time-stamp-1.1.0.tgz 7031ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/through2-filter/-/through2-filter-2.0.0.tgz 7030ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/through2/-/through2-0.6.5.tgz 7029ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/through/-/through-2.3.8.tgz 7028ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/text-hex/-/text-hex-1.0.0.tgz 7028ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/text-table/-/text-table-0.2.0.tgz 7024ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/tmpl/-/tmpl-1.0.5.tgz 7022ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/test-exclude/-/test-exclude-6.0.0.tgz 7022ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/terminal-link/-/terminal-link-2.1.1.tgz 7020ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/timm/-/timm-1.7.1.tgz 7018ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/tempfile/-/tempfile-2.0.0.tgz 7017ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/temp-dir/-/temp-dir-1.0.0.tgz 7015ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/tar-fs/-/tar-fs-2.1.1.tgz 7013ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz 7011ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz 7011ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/text-encoding/-/text-encoding-0.7.0.tgz 7010ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/superagent/-/superagent-8.0.9.tgz 7008ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/timed-out/-/timed-out-2.0.0.tgz 7007ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/term-size/-/term-size-1.2.0.tgz 7002ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/strip-indent/-/strip-indent-1.0.1.tgz 7001ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/strip-eof/-/strip-eof-1.0.0.tgz 7000ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/strip-final-newline/-/strip-final-newline-2.0.0.tgz 7000ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/strip-dirs/-/strip-dirs-1.1.1.tgz 6999ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/strip-bom-stream/-/strip-bom-stream-1.0.0.tgz 6998ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/strip-bom/-/strip-bom-4.0.0.tgz 6998ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/unset-value/-/unset-value-1.0.0.tgz 7104ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/stringstream/-/stringstream-0.0.6.tgz 6996ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/supports-hyperlinks/-/supports-hyperlinks-2.3.0.tgz 6996ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/string-length/-/string-length-4.0.2.tgz 6994ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz 6994ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/string-width/-/string-width-2.1.1.tgz 6992ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/stream-combiner2/-/stream-combiner2-1.1.1.tgz 6992ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/stream-combiner/-/stream-combiner-0.0.4.tgz 6992ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/union-value/-/union-value-1.0.1.tgz 7103ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz 7002ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/uid-safe/-/uid-safe-2.1.5.tgz 7097ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz 6992ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/strip-outer/-/strip-outer-1.0.1.tgz 6983ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/stream-shift/-/stream-shift-1.0.1.tgz 6982ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/statuses/-/statuses-2.0.1.tgz 6982ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/split/-/split-0.3.3.tgz 6981ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/static-extend/-/static-extend-0.1.2.tgz 6990ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/stat-mode/-/stat-mode-0.2.2.tgz 6989ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/stack-utils/-/stack-utils-2.0.6.tgz 6988ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/spdx-correct/-/spdx-correct-3.1.1.tgz 6977ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/sshpk/-/sshpk-1.17.0.tgz 6983ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/source-map-url/-/source-map-url-0.4.1.tgz 6975ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/source-map-support/-/source-map-support-0.5.13.tgz 6975ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/source-map-resolve/-/source-map-resolve-0.5.3.tgz 6973ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/split-string/-/split-string-3.1.0.tgz 6968ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/typedarray/-/typedarray-0.0.6.tgz 6968ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/sntp/-/sntp-2.1.0.tgz 6968ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/snapdragon-node/-/snapdragon-node-2.1.1.tgz 6968ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/snapdragon-util/-/snapdragon-util-3.0.1.tgz 6968ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/slug/-/slug-8.2.2.tgz 6966ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/snapdragon/-/snapdragon-0.8.2.tgz 6965ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/sisteransi/-/sisteransi-1.0.5.tgz 6964ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/slash/-/slash-3.0.0.tgz 6963ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/simple-swizzle/-/simple-swizzle-0.2.2.tgz 6962ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/simple-get/-/simple-get-4.0.1.tgz 6960ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/simple-concat/-/simple-concat-1.0.1.tgz 6959ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.7.tgz 6958ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/sum-up/-/sum-up-1.0.3.tgz 6956ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/spdx-expression-parse/-/spdx-expression-parse-3.0.1.tgz 6949ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz 6949ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz 6947ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz 6947ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz 6946ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/serve-static/-/serve-static-1.15.0.tgz 6944ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/send/-/send-0.18.0.tgz 6943ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/spdx-license-ids/-/spdx-license-ids-3.0.12.tgz 6943ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/semver-regex/-/semver-regex-1.0.0.tgz 6941ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/semver-diff/-/semver-diff-2.1.0.tgz 6941ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/semver/-/semver-6.3.0.tgz 6939ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/seek-bzip/-/seek-bzip-1.0.6.tgz 6939ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/scmp/-/scmp-2.1.0.tgz 6939ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/sax/-/sax-1.2.1.tgz 6937ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz 6937ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/safe-stable-stringify/-/safe-stable-stringify-2.4.2.tgz 6932ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/safe-regex/-/safe-regex-1.1.0.tgz 6931ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.1.tgz 6930ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/side-channel/-/side-channel-1.0.4.tgz 6929ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/stack-trace/-/stack-trace-0.0.10.tgz 6929ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/reusify/-/reusify-1.0.4.tgz 6928ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/set-value/-/set-value-2.0.1.tgz 6927ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/resolve-url/-/resolve-url-0.2.1.tgz 6927ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz 6926ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/resolve/-/resolve-1.22.1.tgz 6925ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/semver-truncate/-/semver-truncate-1.1.2.tgz 6924ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/set-immediate-shim/-/set-immediate-shim-1.0.1.tgz 6923ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz 6923ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/replace-ext/-/replace-ext-1.0.1.tgz 6922ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/repeating/-/repeating-2.0.1.tgz 6917ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/repeat-string/-/repeat-string-1.6.1.tgz 6916ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/repeat-element/-/repeat-element-1.1.4.tgz 6916ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/remove-trailing-separator/-/remove-trailing-separator-1.1.0.tgz 6915ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/registry-url/-/registry-url-3.1.0.tgz 6914ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz 6913ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/registry-auth-token/-/registry-auth-token-3.4.0.tgz 6912ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/regex-not/-/regex-not-1.0.2.tgz 6912ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/regex-cache/-/regex-cache-0.4.4.tgz 6911ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/referrer-policy/-/referrer-policy-1.1.0.tgz 6911ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/resolve.exports/-/resolve.exports-1.1.1.tgz 6909ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ret/-/ret-0.1.15.tgz 6909ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/readdirp/-/readdirp-2.2.1.tgz 6908ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-1.0.1.tgz 6908ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.7.tgz 6906ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/read-pkg/-/read-pkg-1.1.0.tgz 6901ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/read-all-stream/-/read-all-stream-3.1.0.tgz 6900ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/rc/-/rc-1.2.8.tgz 6899ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz 6898ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/raw-body/-/raw-body-2.1.7.tgz 6898ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/randomatic/-/randomatic-3.1.1.tgz 6896ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/random-bytes/-/random-bytes-1.0.0.tgz 6896ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/regexpp/-/regexpp-3.2.0.tgz 6895ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/qs/-/qs-6.2.0.tgz 6890ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/resolve-cwd/-/resolve-cwd-3.0.0.tgz 6894ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/querystring/-/querystring-0.2.0.tgz 6891ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.13.11.tgz 6890ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/pump/-/pump-3.0.0.tgz 6889ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/pseudomap/-/pseudomap-1.0.2.tgz 6889ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ps-tree/-/ps-tree-1.2.0.tgz 6883ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.7.tgz 6883ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/redent/-/redent-1.0.0.tgz 6882ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz 6880ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/process/-/process-0.11.10.tgz 6879ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ramda/-/ramda-0.26.1.tgz 6880ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/pretty-quick/-/pretty-quick-3.1.3.tgz 6879ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/sharp/-/sharp-0.31.3.tgz 6873ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/preserve/-/preserve-0.2.0.tgz 6877ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/prepend-http/-/prepend-http-1.0.4.tgz 6873ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/punycode/-/punycode-1.4.1.tgz 6872ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/posix-character-classes/-/posix-character-classes-0.1.1.tgz 6872ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/prompts/-/prompts-2.4.2.tgz 6872ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/png-to-jpeg/-/png-to-jpeg-1.0.1.tgz 6867ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/png-js/-/png-js-0.1.1.tgz 6871ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/pretty-format/-/pretty-format-28.1.3.tgz 6882ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz 6881ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/pirates/-/pirates-4.0.5.tgz 6879ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/squeak/-/squeak-1.3.0.tgz 7067ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/pngjs/-/pngjs-3.4.0.tgz 6877ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/pinkie-promise/-/pinkie-promise-2.0.1.tgz 6879ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/platform/-/platform-1.3.5.tgz 6876ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz 6875ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/prebuild-install/-/prebuild-install-7.1.1.tgz 6873ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/performance-now/-/performance-now-2.1.0.tgz 6870ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/pixelmatch/-/pixelmatch-4.0.2.tgz 6874ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/pend/-/pend-1.2.0.tgz 6870ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.7.tgz 6861ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/pify/-/pify-2.3.0.tgz 6865ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/pinkie/-/pinkie-2.0.4.tgz 6859ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/path-type/-/path-type-1.1.0.tgz 6861ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz 6860ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/path-dirname/-/path-dirname-1.0.2.tgz 6858ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/pascalcase/-/pascalcase-0.1.1.tgz 6858ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/request/-/request-2.85.0.tgz 6856ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz 6855ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/parse-node-version/-/parse-node-version-1.0.1.tgz 6855ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/parse-headers/-/parse-headers-2.0.5.tgz 6855ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/parse-bmfont-xml/-/parse-bmfont-xml-1.1.4.tgz 6853ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/rimraf/-/rimraf-3.0.2.tgz 6853ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/parse-glob/-/parse-glob-3.0.4.tgz 6852ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/parse-bmfont-ascii/-/parse-bmfont-ascii-1.0.6.tgz 6846ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz 6846ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/pako/-/pako-1.0.11.tgz 6845ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/package-json/-/package-json-4.0.1.tgz 6844ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/p-try/-/p-try-2.2.0.tgz 6844ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/p-pipe/-/p-pipe-1.2.0.tgz 6842ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz 6841ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/pause-stream/-/pause-stream-0.0.11.tgz 6840ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz 6838ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/phin/-/phin-2.9.3.tgz 6840ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/os-filter-obj/-/os-filter-obj-1.0.3.tgz 6838ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/onetime/-/onetime-1.1.0.tgz 6837ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/optionator/-/optionator-0.9.1.tgz 6836ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/on-headers/-/on-headers-1.0.2.tgz 6834ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/once/-/once-1.4.0.tgz 6833ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/on-finished/-/on-finished-2.3.0.tgz 6829ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/omggif/-/omggif-1.0.10.tgz 6827ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/object.omit/-/object.omit-2.0.1.tgz 6827ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/parse-bmfont-binary/-/parse-bmfont-binary-1.0.6.tgz 6826ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz 6825ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz 6824ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/sparkles/-/sparkles-1.0.1.tgz 6824ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/path-is-inside/-/path-is-inside-1.0.2.tgz 6824ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/parse-json/-/parse-json-5.2.0.tgz 6822ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz 6820ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/oauth-sign/-/oauth-sign-0.8.2.tgz 6822ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/spdx-exceptions/-/spdx-exceptions-2.3.0.tgz 7096ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz 6819ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/pkg-dir/-/pkg-dir-4.2.0.tgz 6913ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/sprintf-js/-/sprintf-js-1.0.3.tgz 7096ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/npm-run-path/-/npm-run-path-2.0.2.tgz 6823ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-2.5.0.tgz 6816ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/object-inspect/-/object-inspect-1.12.3.tgz 6821ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/node-forge/-/node-forge-1.3.1.tgz 6800ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/nocache/-/nocache-2.0.0.tgz 6800ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/negotiator/-/negotiator-0.6.3.tgz 6798ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/node-abi/-/node-abi-3.32.0.tgz 6796ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/object-copy/-/object-copy-0.1.0.tgz 6798ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/napi-build-utils/-/napi-build-utils-1.0.2.tgz 6794ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz 6796ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/mustache/-/mustache-2.3.2.tgz 6789ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/multipipe/-/multipipe-0.1.2.tgz 6788ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/multiparty/-/multiparty-4.2.3.tgz 6787ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/node-cron/-/node-cron-3.0.2.tgz 6786ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/node-status-codes/-/node-status-codes-1.0.0.tgz 6786ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/nan/-/nan-2.17.0.tgz 6784ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ms/-/ms-0.7.1.tgz 6784ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/node-int64/-/node-int64-0.4.0.tgz 6782ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/morgan/-/morgan-1.10.0.tgz 6781ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/mozjpeg/-/mozjpeg-5.0.0.tgz 6780ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ordered-read-streams/-/ordered-read-streams-0.3.0.tgz 6779ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/mkdirp-classic/-/mkdirp-classic-0.5.3.tgz 6779ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/moment/-/moment-2.29.1.tgz 6780ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz 6771ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/picocolors/-/picocolors-1.0.0.tgz 6775ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/mixin-deep/-/mixin-deep-1.3.2.tgz 6775ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/minimist/-/minimist-1.2.7.tgz 6773ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/mimic-fn/-/mimic-fn-2.1.0.tgz 6773ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz 6769ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/mimic-response/-/mimic-response-3.1.0.tgz 6769ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz 6768ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/methods/-/methods-1.1.2.tgz 6766ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/messagebird/-/messagebird-3.7.1.tgz 6766ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.1.tgz 6766ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/meow/-/meow-3.7.0.tgz 6764ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz 6763ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/micromatch/-/micromatch-4.0.5.tgz 6759ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/map-visit/-/map-visit-1.0.0.tgz 6757ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/map-stream/-/map-stream-0.1.0.tgz 6757ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/map-obj/-/map-obj-1.0.1.tgz 6756ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/multimatch/-/multimatch-4.0.0.tgz 6755ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/makeerror/-/makeerror-1.0.12.tgz 6741ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/make-dir/-/make-dir-1.3.0.tgz 6739ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/mime/-/mime-1.6.0.tgz 6738ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/merge-stream/-/merge-stream-2.0.0.tgz 6737ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lowercase-keys/-/lowercase-keys-1.0.1.tgz 6736ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lru-cache/-/lru-cache-6.0.0.tgz 6734ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/longest/-/longest-1.0.1.tgz 6732ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/loud-rejection/-/loud-rejection-1.6.0.tgz 6730ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/logalot/-/logalot-2.1.0.tgz 6729ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/logform/-/logform-2.5.1.tgz 6722ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash.templatesettings/-/lodash.templatesettings-3.1.1.tgz 6720ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash.reduce/-/lodash.reduce-4.6.0.tgz 6719ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash.restparam/-/lodash.restparam-3.6.1.tgz 6717ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash.template/-/lodash.template-3.6.2.tgz 6715ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash.merge/-/lodash.merge-4.6.2.tgz 6713ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/math-random/-/math-random-1.0.4.tgz 6712ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash.isarray/-/lodash.isarray-3.0.4.tgz 6712ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash.isequal/-/lodash.isequal-4.5.0.tgz 6711ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash.isarguments/-/lodash.isarguments-3.1.0.tgz 6710ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash.defaults/-/lodash.defaults-3.1.2.tgz 6708ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash.escape/-/lodash.escape-3.2.0.tgz 6709ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash._root/-/lodash._root-3.0.1.tgz 6707ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/mri/-/mri-1.2.0.tgz 6706ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash.assign/-/lodash.assign-3.2.0.tgz 6706ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash._reescape/-/lodash._reescape-3.0.0.tgz 6699ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash._reevaluate/-/lodash._reevaluate-3.0.0.tgz 6702ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash._isiterateecall/-/lodash._isiterateecall-3.0.9.tgz 6701ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lpad-align/-/lpad-align-1.1.2.tgz 6700ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash._createassigner/-/lodash._createassigner-3.1.1.tgz 6700ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash._bindcallback/-/lodash._bindcallback-3.0.1.tgz 6701ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash._basevalues/-/lodash._basevalues-3.0.0.tgz 6701ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash._basetostring/-/lodash._basetostring-3.0.1.tgz 6700ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/p-finally/-/p-finally-1.0.0.tgz 6699ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash._baseassign/-/lodash._baseassign-3.2.0.tgz 6699ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz 6699ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/load-bmfont/-/load-bmfont-1.4.1.tgz 6698ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz 6698ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash.keys/-/lodash.keys-3.1.2.tgz 6697ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/levn/-/levn-0.4.1.tgz 6696ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.2.4.tgz 6692ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/leven/-/leven-3.1.0.tgz 6691ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lazy-req/-/lazy-req-1.1.0.tgz 6691ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/nanomatch/-/nanomatch-1.2.13.tgz 6689ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lazystream/-/lazystream-1.0.1.tgz 6689ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/kuler/-/kuler-2.0.0.tgz 6688ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/latest-version/-/latest-version-3.1.0.tgz 6687ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash._getnative/-/lodash._getnative-3.9.1.tgz 6687ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz 6686ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jws/-/jws-4.0.0.tgz 6684ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/load-json-file/-/load-json-file-1.1.0.tgz 6684ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/nodemailer/-/nodemailer-6.9.1.tgz 6878ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/json-stringify-safe/-/json-stringify-safe-5.0.1.tgz 6683ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/nodemon/-/nodemon-1.12.0.tgz 6876ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/json5/-/json5-2.2.3.tgz 6683ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jsprim/-/jsprim-1.4.2.tgz 6682ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/json-parse-even-better-errors/-/json-parse-even-better-errors-2.3.1.tgz 6677ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/min-document/-/min-document-2.19.0.tgz 6675ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/json-schema/-/json-schema-0.4.0.tgz 6675ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/json-bigint/-/json-bigint-1.0.0.tgz 6674ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jsbn/-/jsbn-0.1.1.tgz 6673ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz 6673ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz 6673ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/node-addon-api/-/node-addon-api-5.1.0.tgz 6877ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jsesc/-/jsesc-2.5.2.tgz 6673ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.0.tgz 6671ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jmespath/-/jmespath-0.15.0.tgz 6670ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/kleur/-/kleur-3.0.3.tgz 6697ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash._reinterpolate/-/lodash._reinterpolate-3.0.0.tgz 6686ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jpegtran-bin/-/jpegtran-bin-3.2.0.tgz 6657ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jose/-/jose-3.20.4.tgz 6670ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-resolve-dependencies/-/jest-resolve-dependencies-28.1.3.tgz 6648ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-validate/-/jest-validate-28.1.3.tgz 6646ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/stripe/-/stripe-8.194.0.tgz 6640ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-resolve/-/jest-resolve-28.1.3.tgz 6637ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/react-is/-/react-is-18.2.0.tgz 6618ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-pnp-resolver/-/jest-pnp-resolver-1.2.3.tgz 6616ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-runtime/-/jest-runtime-28.1.3.tgz 6613ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-worker/-/jest-worker-28.1.3.tgz 6671ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-mock/-/jest-mock-28.1.3.tgz 6610ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-regex-util/-/jest-regex-util-28.0.2.tgz 6607ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-message-util/-/jest-message-util-28.1.3.tgz 6608ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-leak-detector/-/jest-leak-detector-28.1.3.tgz 6603ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-matcher-utils/-/jest-matcher-utils-28.1.3.tgz 6593ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-environment-node/-/jest-environment-node-28.1.3.tgz 6590ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-docblock/-/jest-docblock-28.1.1.tgz 6589ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-runner/-/jest-runner-28.1.3.tgz 6586ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jpeg-js/-/jpeg-js-0.3.7.tgz 6660ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-config/-/jest-config-28.1.3.tgz 6582ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jimp/-/jimp-0.6.0.tgz 6665ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-haste-map/-/jest-haste-map-28.1.3.tgz 6579ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-get-type/-/jest-get-type-28.0.2.tgz 6613ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-circus/-/jest-circus-28.1.3.tgz 6571ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-diff/-/jest-diff-28.1.3.tgz 6585ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/istanbul-lib-instrument/-/istanbul-lib-instrument-5.2.1.tgz 6557ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/istanbul-lib-coverage/-/istanbul-lib-coverage-3.2.0.tgz 6555ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/istanbul-reports/-/istanbul-reports-3.1.5.tgz 6554ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-changed-files/-/jest-changed-files-28.1.3.tgz 6579ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz 6553ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz 6552ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/istanbul-lib-report/-/istanbul-lib-report-3.0.0.tgz 6570ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-windows/-/is-windows-1.0.2.tgz 6552ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-zip/-/is-zip-1.0.0.tgz 6551ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/isstream/-/isstream-0.1.2.tgz 6549ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-utf8/-/is-utf8-0.2.1.tgz 6550ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-url/-/is-url-1.2.4.tgz 6549ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-typedarray/-/is-typedarray-1.0.0.tgz 6541ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-snapshot/-/jest-snapshot-28.1.3.tgz 6577ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/isobject/-/isobject-2.1.0.tgz 6569ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-cli/-/jest-cli-28.1.3.tgz 6543ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-valid-glob/-/is-valid-glob-0.3.0.tgz 6563ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-retry-allowed/-/is-retry-allowed-1.2.0.tgz 6542ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-redirect/-/is-redirect-1.0.0.tgz 6538ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-posix-bracket/-/is-posix-bracket-0.1.1.tgz 6538ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-tar/-/is-tar-1.0.0.tgz 6551ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-plain-object/-/is-plain-object-2.0.4.tgz 6537ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-relative/-/is-relative-0.1.3.tgz 6543ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-obj/-/is-obj-1.0.1.tgz 6535ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz 6534ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/map-cache/-/map-cache-0.2.2.tgz 6543ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-natural-number/-/is-natural-number-2.1.1.tgz 6533ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-path-inside/-/is-path-inside-3.0.3.tgz 6539ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/node-releases/-/node-releases-2.0.10.tgz 6926ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-plain-obj/-/is-plain-obj-1.1.0.tgz 6539ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-npm/-/is-npm-1.0.0.tgz 6536ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-gzip/-/is-gzip-1.0.0.tgz 6524ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-generator-fn/-/is-generator-fn-2.1.0.tgz 6522ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-installed-globally/-/is-installed-globally-0.1.0.tgz 6529ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz 6527ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-finite/-/is-finite-1.1.0.tgz 6521ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-function/-/is-function-1.0.2.tgz 6525ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz 6518ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jwa/-/jwa-2.0.0.tgz 6517ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-core-module/-/is-core-module-2.11.0.tgz 6517ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/object-visit/-/object-visit-1.0.1.tgz 6930ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/object.pick/-/object.pick-1.3.0.tgz 6939ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/istanbul-lib-source-maps/-/istanbul-lib-source-maps-4.0.1.tgz 6526ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-ci/-/is-ci-1.2.1.tgz 6516ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-bzip2/-/is-bzip2-1.0.0.tgz 6516ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-buffer/-/is-buffer-1.1.6.tgz 6509ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz 6526ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-absolute/-/is-absolute-0.1.7.tgz 6506ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz 6505ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ip-regex/-/ip-regex-1.0.3.tgz 6504ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-primitive/-/is-primitive-2.0.0.tgz 6527ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lodash._basecopy/-/lodash._basecopy-3.0.1.tgz 6504ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-binary-path/-/is-binary-path-1.0.1.tgz 6511ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/os-tmpdir/-/os-tmpdir-1.0.2.tgz 6504ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz 6511ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz 6500ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/import-local/-/import-local-3.1.0.tgz 6499ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-each/-/jest-each-28.1.3.tgz 6497ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz 6505ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz 6505ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/imagemin-mozjpeg/-/imagemin-mozjpeg-7.0.0.tgz 6490ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/imagemin/-/imagemin-5.3.1.tgz 6487ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/imagemagick/-/imagemagick-0.1.3.tgz 6487ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ignore-by-default/-/ignore-by-default-1.0.1.tgz 6486ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/indent-string/-/indent-string-2.1.0.tgz 6506ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.0.tgz 6500ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/imagemin-jpegtran/-/imagemin-jpegtran-5.0.2.tgz 6492ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ieee754/-/ieee754-1.2.1.tgz 6481ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.13.tgz 6481ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ignore/-/ignore-5.2.4.tgz 6486ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/husky/-/husky-8.0.1.tgz 6478ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ienoopen/-/ienoopen-1.0.0.tgz 6486ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/image-size/-/image-size-0.6.2.tgz 6489ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/http-errors/-/http-errors-1.5.1.tgz 6468ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/http-signature/-/http-signature-1.2.0.tgz 6471ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/hsts/-/hsts-2.1.0.tgz 6466ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/hide-powered-by/-/hide-powered-by-1.0.0.tgz 6466ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/hexoid/-/hexoid-1.0.0.tgz 6465ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz 6482ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-5.0.1.tgz 6480ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/helmet/-/helmet-3.12.0.tgz 6463ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz 6460ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/html-escaper/-/html-escaper-2.0.2.tgz 6472ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/hoek/-/hoek-4.2.1.tgz 6458ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/has-values/-/has-values-1.0.0.tgz 6457ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/helmet-csp/-/helmet-csp-2.7.0.tgz 6468ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-stream/-/is-stream-2.0.1.tgz 6456ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/hawk/-/hawk-6.0.2.tgz 6465ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ini/-/ini-1.3.8.tgz 6447ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/has-value/-/has-value-1.0.0.tgz 6463ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/has/-/has-1.0.3.tgz 6445ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-equal-shallow/-/is-equal-shallow-0.1.3.tgz 6458ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/har-validator/-/har-validator-5.0.3.tgz 6443ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/has-gulplog/-/has-gulplog-0.1.0.tgz 6452ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/gulp-sourcemaps/-/gulp-sourcemaps-1.6.0.tgz 6437ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz 6449ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/gulp-util/-/gulp-util-3.0.8.tgz 6441ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/gtoken/-/gtoken-6.1.2.tgz 6431ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/grapheme-splitter/-/grapheme-splitter-1.0.4.tgz 6430ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/gulplog/-/gulplog-1.0.0.tgz 6445ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-util/-/jest-util-28.1.3.tgz 6426ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/gulp-rename/-/gulp-rename-1.4.0.tgz 6439ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/google-auth-library/-/google-auth-library-8.7.0.tgz 6413ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/gulp-decompress/-/gulp-decompress-1.2.0.tgz 6437ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.10.tgz 6418ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/glogg/-/glogg-1.0.2.tgz 6412ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/globby/-/globby-6.1.0.tgz 6410ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/global-dirs/-/global-dirs-0.1.1.tgz 6407ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/global/-/global-4.4.0.tgz 6406ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/glob-stream/-/glob-stream-5.3.5.tgz 6405ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz 6404ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/google-p12-pem/-/google-p12-pem-4.0.1.tgz 6423ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/glob/-/glob-7.2.3.tgz 6402ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/gm/-/gm-1.23.1.tgz 6417ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/globals/-/globals-13.20.0.tgz 6412ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/import-lazy/-/import-lazy-2.1.0.tgz 6393ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/glob-base/-/glob-base-0.3.0.tgz 6406ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/get-stdin/-/get-stdin-4.0.1.tgz 6391ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/get-package-type/-/get-package-type-0.1.0.tgz 6388ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/har-schema/-/har-schema-2.0.0.tgz 6404ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.2.0.tgz 6388ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/getpass/-/getpass-0.1.7.tgz 6397ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/get-stream/-/get-stream-3.0.0.tgz 6396ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/gaxios/-/gaxios-5.0.2.tgz 6378ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/get-proxy/-/get-proxy-1.1.0.tgz 6394ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz 6376ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/fs-constants/-/fs-constants-1.0.0.tgz 6376ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz 6389ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/from/-/from-0.1.7.tgz 6366ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz 6365ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/frameguard/-/frameguard-3.0.0.tgz 6358ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/forwarded/-/forwarded-0.2.0.tgz 6356ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz 6388ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/form-data/-/form-data-2.3.3.tgz 6353ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/function-bind/-/function-bind-1.1.1.tgz 6383ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/for-own/-/for-own-0.1.5.tgz 6352ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/for-in/-/for-in-1.0.2.tgz 6351ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/formidable/-/formidable-2.1.2.tgz 6357ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/get-value/-/get-value-2.0.6.tgz 6348ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/fragment-cache/-/fragment-cache-0.2.1.tgz 6361ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/flat-cache/-/flat-cache-3.0.4.tgz 6347ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/forever-agent/-/forever-agent-0.6.1.tgz 6356ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/fn.name/-/fn.name-1.1.0.tgz 6353ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/human-signals/-/human-signals-2.1.0.tgz 6335ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.8.9.tgz 6334ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/fill-range/-/fill-range-7.0.1.tgz 6333ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/filenamify/-/filenamify-1.2.1.tgz 6332ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/find-versions/-/find-versions-1.2.1.tgz 6347ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/filename-regex/-/filename-regex-2.0.1.tgz 6332ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/file-uri-to-path/-/file-uri-to-path-1.0.0.tgz 6329ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/figures/-/figures-1.7.0.tgz 6327ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/first-chunk-stream/-/first-chunk-stream-1.0.0.tgz 6351ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/fecha/-/fecha-4.2.3.tgz 6325ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-dotfile/-/is-dotfile-1.0.3.tgz 6342ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/fd-slicer/-/fd-slicer-1.1.0.tgz 6325ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/file-type/-/file-type-4.4.0.tgz 6333ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-6.0.1.tgz 6329ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/fb-watchman/-/fb-watchman-2.0.2.tgz 6326ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/fastq/-/fastq-1.15.0.tgz 6324ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz 6315ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz 6312ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz 6311ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/filename-reserved-regex/-/filename-reserved-regex-1.0.0.tgz 6308ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/fancy-log/-/fancy-log-1.3.3.tgz 6310ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz 6307ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/extend/-/extend-3.0.2.tgz 6307ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/express/-/express-4.18.2.tgz 6303ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/expect-ct/-/expect-ct-0.1.0.tgz 6302ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/fast-safe-stringify/-/fast-safe-stringify-2.1.1.tgz 6320ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/hpkp/-/hpkp-2.0.0.tgz 6315ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/github-from-package/-/github-from-package-0.0.0.tgz 6302ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/expand-brackets/-/expand-brackets-0.1.5.tgz 6296ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/expand-range/-/expand-range-1.8.2.tgz 6304ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/exit/-/exit-0.1.2.tgz 6302ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/exif-parser/-/exif-parser-0.1.12.tgz 6302ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/execa/-/execa-0.7.0.tgz 6299ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/executable/-/executable-1.1.0.tgz 6301ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/exec-series/-/exec-series-1.0.3.tgz 6299ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz 6296ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/finalhandler/-/finalhandler-1.2.0.tgz 6295ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/exec-buffer/-/exec-buffer-3.2.0.tgz 6300ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/etag/-/etag-1.8.1.tgz 6296ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz 6292ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/extglob/-/extglob-0.3.2.tgz 6295ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest-watcher/-/jest-watcher-28.1.3.tgz 6291ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz 6289ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/esquery/-/esquery-1.4.0.tgz 6280ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/event-stream/-/event-stream-3.3.4.tgz 6276ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz 6273ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/eslint-utils/-/eslint-utils-3.0.0.tgz 6271ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/eslint-scope/-/eslint-scope-7.1.1.tgz 6267ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz 6258ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/escalade/-/escalade-3.1.1.tgz 6255ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/error-ex/-/error-ex-1.3.2.tgz 6251ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/extsprintf/-/extsprintf-1.3.0.tgz 6266ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/expect/-/expect-28.1.3.tgz 6207ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.4.4.tgz 6201ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz 6206ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz 6169ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/enabled/-/enabled-2.0.0.tgz 6187ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/emailjs-base64/-/emailjs-base64-1.1.4.tgz 6156ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/emailjs-mime-codec/-/emailjs-mime-codec-2.0.9.tgz 6168ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.3.0.tgz 6154ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/emailjs/-/emailjs-2.2.0.tgz 6133ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ecc-jsbn/-/ecc-jsbn-0.1.2.tgz 6126ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz 6131ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/duplexer2/-/duplexer2-0.1.4.tgz 6116ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/events/-/events-1.1.1.tgz 6119ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/emittery/-/emittery-0.10.2.tgz 6115ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/duplexer/-/duplexer-0.1.2.tgz 6115ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/duplexify/-/duplexify-3.7.1.tgz 6113ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/download/-/download-4.4.3.tgz 6114ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/dotenv/-/dotenv-4.0.0.tgz 6113ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/dont-sniff-mimetype/-/dont-sniff-mimetype-1.0.0.tgz 6120ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/dom-walk/-/dom-walk-0.1.2.tgz 6120ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/duplexer3/-/duplexer3-0.1.5.tgz 6119ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/flatted/-/flatted-3.2.7.tgz 6118ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/diff-sequences/-/diff-sequences-28.1.1.tgz 6117ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/dezalgo/-/dezalgo-1.0.4.tgz 6116ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/espree/-/espree-9.4.1.tgz 6276ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/doctrine/-/doctrine-3.0.0.tgz 6115ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz 6114ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/depd/-/depd-1.1.2.tgz 6113ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/define-property/-/define-property-2.0.2.tgz 6113ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz 6112ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-jpg/-/is-jpg-1.0.1.tgz 6666ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/deep-extend/-/deep-extend-0.6.0.tgz 6111ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/decompress-tar/-/decompress-tar-3.1.0.tgz 6097ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/fast-text-encoding/-/fast-text-encoding-1.0.6.tgz 6389ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/dot-prop/-/dot-prop-4.2.1.tgz 6091ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/expand-template/-/expand-template-2.0.3.tgz 6361ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/eslint/-/eslint-8.27.0.tgz 6077ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/each-async/-/each-async-1.1.1.tgz 6099ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/dedent/-/dedent-0.7.0.tgz 6096ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/decompress-response/-/decompress-response-6.0.0.tgz 6099ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/decode-uri-component/-/decode-uri-component-0.2.2.tgz 6078ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/decamelize/-/decamelize-1.2.0.tgz 6076ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/currently-unhandled/-/currently-unhandled-0.4.1.tgz 6075ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/crypto-random-string/-/crypto-random-string-1.0.0.tgz 6073ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz 6071ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/dasherize/-/dasherize-2.0.0.tgz 6070ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/dateformat/-/dateformat-2.2.0.tgz 6080ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/cryptiles/-/cryptiles-3.1.4.tgz 6069ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/country-list/-/country-list-2.2.0.tgz 6069ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/dashdash/-/dashdash-1.14.1.tgz 6077ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/cors/-/cors-2.8.4.tgz 6064ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/debug/-/debug-2.2.0.tgz 6075ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.1.tgz 7030ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/crypto-browserify/-/crypto-browserify-1.0.9.tgz 6067ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/cookie/-/cookie-0.3.1.tgz 6054ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/cookiejar/-/cookiejar-2.1.4.tgz 6065ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/content-type/-/content-type-1.0.5.tgz 6052ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/decompress/-/decompress-3.0.0.tgz 6061ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/create-error-class/-/create-error-class-3.0.2.tgz 6051ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/cookie-parser/-/cookie-parser-1.4.3.tgz 6058ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/configstore/-/configstore-3.1.5.tgz 6048ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/convert-source-map/-/convert-source-map-1.9.0.tgz 6057ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/console-stream/-/console-stream-0.1.1.tgz 6050ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/content-security-policy-builder/-/content-security-policy-builder-2.0.0.tgz 6055ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/compression/-/compression-1.7.2.tgz 6041ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz 6044ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/compressible/-/compressible-2.0.18.tgz 6041ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/component-emitter/-/component-emitter-1.3.0.tgz 6040ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/colorspace/-/colorspace-1.1.4.tgz 6037ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz 6038ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/color-support/-/color-support-1.1.3.tgz 6036ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz 6035ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/color-string/-/color-string-1.9.1.tgz 6034ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz 6033ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/collection-visit/-/collection-visit-1.0.0.tgz 6031ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/color/-/color-4.2.3.tgz 6032ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/dns-prefetch-control/-/dns-prefetch-control-0.1.0.tgz 6031ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/co/-/co-4.6.0.tgz 6031ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/clone-stats/-/clone-stats-0.0.1.tgz 6029ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/cliui/-/cliui-8.0.1.tgz 6025ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.4.tgz 6062ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/class-utils/-/class-utils-0.3.6.tgz 6023ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/cli-boxes/-/cli-boxes-1.0.0.tgz 6022ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/concat-stream/-/concat-stream-1.6.2.tgz 6055ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ci-info/-/ci-info-3.7.1.tgz 6021ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/char-regex/-/char-regex-1.0.2.tgz 6004ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/commander/-/commander-2.20.3.tgz 6048ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/cjs-module-lexer/-/cjs-module-lexer-1.2.2.tgz 6022ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/clone/-/clone-1.0.4.tgz 6028ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/copy-descriptor/-/copy-descriptor-0.1.1.tgz 5997ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/chownr/-/chownr-1.1.4.tgz 6022ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jest/-/jest-28.1.0.tgz 5991ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/camelize/-/camelize-1.0.0.tgz 5998ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/chokidar/-/chokidar-1.7.0.tgz 5996ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/got/-/got-5.6.0.tgz 5989ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001451.tgz 5983ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/camelcase-keys/-/camelcase-keys-2.1.0.tgz 5981ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz 5982ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.3.tgz 6005ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ecdsa-sig-formatter/-/ecdsa-sig-formatter-1.0.11.tgz 5976ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.4.292.tgz 6014ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/cache-base/-/cache-base-1.0.1.tgz 5973ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz 6005ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/buffer-to-vinyl/-/buffer-to-vinyl-1.1.0.tgz 5973ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.2.tgz 5972ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/buffer-equal/-/buffer-equal-0.0.1.tgz 5969ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/buffer-equal-constant-time/-/buffer-equal-constant-time-1.0.1.tgz 5970ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/buffer-alloc-unsafe/-/buffer-alloc-unsafe-1.1.0.tgz 5969ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/buffer/-/buffer-4.9.1.tgz 5964ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/buffer-crc32/-/buffer-crc32-0.2.13.tgz 5968ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/buffer-alloc/-/buffer-alloc-1.2.0.tgz 5968ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/has-ansi/-/has-ansi-2.0.0.tgz 5965ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/caw/-/caw-1.2.0.tgz 5965ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/braces/-/braces-3.0.2.tgz 5959ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz 5958ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/boom/-/boom-4.3.1.tgz 5957ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/boxen/-/boxen-1.3.0.tgz 5955ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/caseless/-/caseless-0.12.0.tgz 5954ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/bl/-/bl-1.2.3.tgz 5950ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/body-parser/-/body-parser-1.15.2.tgz 5952ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/bindings/-/bindings-1.5.0.tgz 5948ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/bin-wrapper/-/bin-wrapper-3.0.2.tgz 5945ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.6.tgz 5943ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/bin-version/-/bin-version-1.0.4.tgz 5943ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/bin-version-check/-/bin-version-check-2.1.0.tgz 5942ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/bin-check/-/bin-check-2.0.0.tgz 5941ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/bin-build/-/bin-build-2.2.0.tgz 5940ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/beeper/-/beeper-1.1.1.tgz 5933ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/collect-v8-coverage/-/collect-v8-coverage-1.0.1.tgz 5933ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/bcrypt-pbkdf/-/bcrypt-pbkdf-1.0.2.tgz 5932ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/basic-auth/-/basic-auth-2.0.1.tgz 5931ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/base64-js/-/base64-js-1.5.1.tgz 5930ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz 5928ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/base/-/base-0.11.2.tgz 5930ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/babel-preset-jest/-/babel-preset-jest-28.1.3.tgz 5926ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/babel-preset-current-node-syntax/-/babel-preset-current-node-syntax-1.0.1.tgz 5928ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/bignumber.js/-/bignumber.js-9.1.1.tgz 5925ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/babel-jest/-/babel-jest-28.1.3.tgz 5923ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/binary-extensions/-/binary-extensions-1.13.1.tgz 5922ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/call-bind/-/call-bind-1.0.2.tgz 5995ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/atob/-/atob-2.0.3.tgz 5914ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/bytes/-/bytes-2.4.0.tgz 5995ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/buffer-fill/-/buffer-fill-1.0.0.tgz 5990ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz 5921ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz 5915ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/aws4/-/aws4-1.12.0.tgz 5924ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/assert-plus/-/assert-plus-1.0.0.tgz 5912ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/async-each-series/-/async-each-series-1.1.0.tgz 5916ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/assign-symbols/-/assign-symbols-1.0.0.tgz 5914ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/asap/-/asap-2.0.6.tgz 5911ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/async-each/-/async-each-1.0.6.tgz 5916ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/array-unique/-/array-unique-0.2.1.tgz 5910ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/array-series/-/array-series-0.1.5.tgz 5908ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/arrify/-/arrify-2.0.1.tgz 5912ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz 5906ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/aws-sign2/-/aws-sign2-0.7.0.tgz 5916ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/capture-stack-trace/-/capture-stack-trace-1.0.2.tgz 5911ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/array-differ/-/array-differ-1.0.0.tgz 5901ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/arr-diff/-/arr-diff-2.0.0.tgz 5897ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/array-find-index/-/array-find-index-1.0.2.tgz 5908ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/array-parallel/-/array-parallel-0.1.3.tgz 5910ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz 5898ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/arr-union/-/arr-union-3.1.0.tgz 5903ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/arr-flatten/-/arr-flatten-1.1.0.tgz 5901ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/anymatch/-/anymatch-3.1.3.tgz 5897ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/archive-type/-/archive-type-3.2.0.tgz 5899ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/any-base/-/any-base-1.1.0.tgz 5896ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ansi-gray/-/ansi-gray-0.1.1.tgz 5891ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ansi-align/-/ansi-align-2.0.0.tgz 5889ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ansi-escapes/-/ansi-escapes-4.3.2.tgz 5890ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/browserslist/-/browserslist-4.21.5.tgz 5881ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/babel-plugin-istanbul/-/babel-plugin-istanbul-6.1.1.tgz 5888ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/agent-base/-/agent-base-6.0.2.tgz 5880ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/addressparser/-/addressparser-0.3.2.tgz 5879ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz 5875ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.2.tgz 5875ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/accepts/-/accepts-1.3.8.tgz 5872ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/acorn/-/acorn-8.8.2.tgz 5873ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@types/yargs-parser/-/yargs-parser-21.0.0.tgz 5871ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ansi-wrap/-/ansi-wrap-0.1.0.tgz 5902ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/array-uniq/-/array-uniq-1.0.3.tgz 5902ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@types/yargs/-/yargs-17.0.22.tgz 5869ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz 5901ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/array-union/-/array-union-1.0.2.tgz 5867ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@types/istanbul-reports/-/istanbul-reports-3.0.1.tgz 5859ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@types/minimatch/-/minimatch-3.0.5.tgz 5860ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@types/istanbul-lib-coverage/-/istanbul-lib-coverage-2.0.4.tgz 5857ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@types/istanbul-lib-report/-/istanbul-lib-report-3.0.0.tgz 5858ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz 5862ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@types/graceful-fs/-/graceful-fs-4.1.6.tgz 5864ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz 5883ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@types/triple-beam/-/triple-beam-1.3.2.tgz 5881ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@types/stack-utils/-/stack-utils-2.0.1.tgz 5879ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@types/babel__generator/-/babel__generator-7.6.4.tgz 5863ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@types/babel__core/-/babel__core-7.20.0.tgz 5863ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@types/babel__template/-/babel__template-7.4.1.tgz 5867ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/asn1/-/asn1-0.2.6.tgz 5859ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@sinonjs/commons/-/commons-1.8.6.tgz 5860ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz 5852ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/babel-plugin-jest-hoist/-/babel-plugin-jest-hoist-28.1.3.tgz 5851ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jridgewell/set-array/-/set-array-1.1.2.tgz 5851ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@types/babel__traverse/-/babel__traverse-7.18.3.tgz 5867ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@sinonjs/fake-timers/-/fake-timers-9.1.2.tgz 5867ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.17.tgz 5849ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.1.1.tgz 5852ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp/utils/-/utils-0.6.8.tgz 5847ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz 5866ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp/png/-/png-0.6.8.tgz 5846ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp/plugins/-/plugins-0.6.8.tgz 5837ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/bmp-js/-/bmp-js-0.1.0.tgz 5831ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@sinclair/typebox/-/typebox-0.24.51.tgz 5843ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.4.14.tgz 5859ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.0.tgz 5856ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@types/prettier/-/prettier-2.7.2.tgz 5828ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp/tiff/-/tiff-0.6.8.tgz 5851ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp/plugin-gaussian/-/plugin-gaussian-0.6.8.tgz 5826ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz 5834ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp/plugin-print/-/plugin-print-0.6.8.tgz 5822ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp/plugin-normalize/-/plugin-normalize-0.6.8.tgz 5837ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp/plugin-invert/-/plugin-invert-0.6.8.tgz 5833ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp/plugin-contain/-/plugin-contain-0.6.8.tgz 5814ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp/plugin-mask/-/plugin-mask-0.6.8.tgz 5821ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp/types/-/types-0.6.8.tgz 5818ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp/plugin-blit/-/plugin-blit-0.6.8.tgz 5811ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp/plugin-resize/-/plugin-resize-0.6.8.tgz 5814ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp/plugin-scale/-/plugin-scale-0.6.8.tgz 5807ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp/plugin-flip/-/plugin-flip-0.6.8.tgz 5804ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp/core/-/core-0.6.8.tgz 5800ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp/plugin-dither/-/plugin-dither-0.6.8.tgz 5791ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp/plugin-rotate/-/plugin-rotate-0.6.8.tgz 5841ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jest/types/-/types-28.1.3.tgz 5787ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jest/source-map/-/source-map-28.1.2.tgz 5779ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp/plugin-displace/-/plugin-displace-0.6.8.tgz 5837ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jest/transform/-/transform-28.1.3.tgz 5782ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp/plugin-blur/-/plugin-blur-0.6.8.tgz 5814ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/core-js/-/core-js-2.6.12.tgz 6198ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/prettier/-/prettier-2.7.1.tgz 7344ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp/jpeg/-/jpeg-0.6.8.tgz 5764ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jest/reporters/-/reporters-28.1.3.tgz 5768ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jest/globals/-/globals-28.1.3.tgz 5763ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jest/expect-utils/-/expect-utils-28.1.3.tgz 5762ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jest/console/-/console-28.1.3.tgz 5758ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp/plugin-cover/-/plugin-cover-0.6.8.tgz 5798ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp/custom/-/custom-0.6.8.tgz 5754ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@istanbuljs/schema/-/schema-0.1.3.tgz 5748ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@istanbuljs/load-nyc-config/-/load-nyc-config-1.1.0.tgz 5748ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jest/schemas/-/schemas-28.1.3.tgz 5777ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@humanwhocodes/module-importer/-/module-importer-1.0.1.tgz 5747ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@humanwhocodes/object-schema/-/object-schema-1.2.1.tgz 5748ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@dabh/diagnostics/-/diagnostics-2.0.3.tgz 5745ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp/gif/-/gif-0.6.8.tgz 5768ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@colors/colors/-/colors-1.5.0.tgz 5746ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@bcoe/v8-coverage/-/v8-coverage-0.2.3.tgz 5745ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jest/expect/-/expect-28.1.3.tgz 5744ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp/bmp/-/bmp-0.6.8.tgz 5812ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel/template/-/template-7.20.7.tgz 5741ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel/plugin-syntax-typescript/-/plugin-syntax-typescript-7.20.0.tgz 5740ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel/traverse/-/traverse-7.20.13.tgz 5745ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel/plugin-syntax-top-level-await/-/plugin-syntax-top-level-await-7.14.5.tgz 5735ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel/plugin-syntax-optional-chaining/-/plugin-syntax-optional-chaining-7.8.3.tgz 5734ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel/polyfill/-/polyfill-7.12.1.tgz 5743ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel/plugin-syntax-optional-catch-binding/-/plugin-syntax-optional-catch-binding-7.8.3.tgz 5731ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel/plugin-syntax-nullish-coalescing-operator/-/plugin-syntax-nullish-coalescing-operator-7.8.3.tgz 5730ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel/plugin-syntax-numeric-separator/-/plugin-syntax-numeric-separator-7.10.4.tgz 5730ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jest/test-sequencer/-/test-sequencer-28.1.3.tgz 5727ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel/plugin-syntax-json-strings/-/plugin-syntax-json-strings-7.8.3.tgz 5727ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel/plugin-syntax-class-properties/-/plugin-syntax-class-properties-7.12.13.tgz 5727ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel/plugin-syntax-import-meta/-/plugin-syntax-import-meta-7.10.4.tgz 5726ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jest/fake-timers/-/fake-timers-28.1.3.tgz 5724ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel/plugin-syntax-async-generators/-/plugin-syntax-async-generators-7.8.4.tgz 5723ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/detect-libc/-/detect-libc-2.0.1.tgz 6289ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/decompress-targz/-/decompress-targz-3.1.0.tgz 6279ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel/helpers/-/helpers-7.20.13.tgz 5714ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.18.6.tgz 5713ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.19.1.tgz 5713ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel/plugin-syntax-bigint/-/plugin-syntax-bigint-7.8.3.tgz 5713ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.18.6.tgz 5712ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel/helper-simple-access/-/helper-simple-access-7.20.2.tgz 5711ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.20.2.tgz 5710ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.20.11.tgz 5709ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel/helper-function-name/-/helper-function-name-7.19.0.tgz 5707ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel/helper-hoist-variables/-/helper-hoist-variables-7.18.6.tgz 5706ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel/helper-environment-visitor/-/helper-environment-visitor-7.18.9.tgz 5701ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.20.7.tgz 5699ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel/generator/-/generator-7.20.14.tgz 5698ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp/plugin-color/-/plugin-color-0.6.8.tgz 5751ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/bser/-/bser-2.1.1.tgz 5695ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/has-symbols/-/has-symbols-1.0.3.tgz 5695ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.18.6.tgz 5693ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz 5691ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@ampproject/remapping/-/remapping-2.2.0.tgz 5692ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.19.4.tgz 5689ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz 5692ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel/core/-/core-7.20.12.tgz 5701ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jest/environment/-/environment-28.1.3.tgz 5687ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz 5681ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz 5679ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jest/core/-/core-28.1.3.tgz 5798ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel/types/-/types-7.20.7.tgz 5692ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/strip-bom/-/strip-bom-2.0.0.tgz 5676ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/punycode/-/punycode-1.3.2.tgz 5672ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/through2/-/through2-2.0.5.tgz 5674ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz 5671ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.2.tgz 5672ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/co/-/co-3.1.0.tgz 5665ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/punycode/-/punycode-2.3.0.tgz 5671ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz 5683ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz 5666ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@humanwhocodes/config-array/-/config-array-0.11.8.tgz 5790ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz 5658ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz 5658ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/has-values/-/has-values-0.1.4.tgz 5657ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/through2-filter/-/through2-filter-3.0.0.tgz 5655ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/replace-ext/-/replace-ext-0.0.1.tgz 5683ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/has-value/-/has-value-0.3.1.tgz 5657ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/isobject/-/isobject-2.1.0.tgz 5655ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/through2/-/through2-2.0.5.tgz 5657ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz 5654ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz 5654ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-1.4.1.tgz 5690ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz 5668ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/string_decoder/-/string_decoder-0.10.31.tgz 5652ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz 5667ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/uuid/-/uuid-3.4.0.tgz 5639ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/readable-stream/-/readable-stream-1.0.34.tgz 5651ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/extend-shallow/-/extend-shallow-3.0.2.tgz 5657ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/isarray/-/isarray-0.0.1.tgz 5644ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz 5681ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz 5637ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/through2/-/through2-2.0.5.tgz 5658ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/buffer/-/buffer-5.7.1.tgz 5637ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jimp/plugin-crop/-/plugin-crop-0.6.8.tgz 5634ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/bl/-/bl-4.1.0.tgz 5633ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/tar-stream/-/tar-stream-2.2.0.tgz 5644ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/qs/-/qs-6.11.0.tgz 5632ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/debug/-/debug-4.3.4.tgz 5623ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/mime/-/mime-2.6.0.tgz 5630ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz 5622ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/supports-color/-/supports-color-2.0.0.tgz 5623ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz 5621ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz 5644ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/chalk/-/chalk-1.1.3.tgz 5620ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz 5619ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/qs/-/qs-6.11.0.tgz 5618ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/form-data/-/form-data-4.0.0.tgz 5637ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ansi-styles/-/ansi-styles-2.2.1.tgz 5625ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz 5619ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ms/-/ms-2.1.2.tgz 5642ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/chalk/-/chalk-1.1.3.tgz 5618ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ansi-styles/-/ansi-styles-2.2.1.tgz 5617ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz 5623ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/merge-stream/-/merge-stream-1.0.1.tgz 5622ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.1.tgz 5609ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz 5606ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel/plugin-syntax-logical-assignment-operators/-/plugin-syntax-logical-assignment-operators-7.10.4.tgz 5612ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz 5607ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz 5606ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz 5605ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/supports-color/-/supports-color-2.0.0.tgz 5604ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz 5602ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ansi-styles/-/ansi-styles-2.2.1.tgz 5601ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz 5616ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/extend-shallow/-/extend-shallow-3.0.2.tgz 5600ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz 5616ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/chalk/-/chalk-1.1.3.tgz 5602ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz 5597ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-2.0.0.tgz 5611ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/decompress-unzip/-/decompress-unzip-3.4.0.tgz 6346ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/atob/-/atob-2.1.2.tgz 5598ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/gcp-metadata/-/gcp-metadata-5.2.0.tgz 6716ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz 5597ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz 5594ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz 5596ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz 5595ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz 5603ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz 5591ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz 5593ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/async/-/async-3.2.4.tgz 5639ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz 5600ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz 5590ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz 5593ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz 5586ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.6.0.tgz 5584ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/kind-of/-/kind-of-6.0.2.tgz 5608ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ms/-/ms-2.1.3.tgz 5578ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/semver/-/semver-7.3.8.tgz 5583ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/supports-color/-/supports-color-2.0.0.tgz 5602ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/semver/-/semver-5.7.1.tgz 5574ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz 5574ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/debug/-/debug-2.6.9.tgz 5578ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz 5568ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz 5581ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/on-finished/-/on-finished-2.4.1.tgz 5585ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.6.0.tgz 5571ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/resolve-from/-/resolve-from-5.0.0.tgz 5575ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz 5566ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ms/-/ms-2.0.0.tgz 5562ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/extend-shallow/-/extend-shallow-3.0.2.tgz 5559ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz 5559ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/semver/-/semver-5.7.1.tgz 5578ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/uuid/-/uuid-3.4.0.tgz 5576ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz 5559ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz 5558ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/micromatch/-/micromatch-3.1.10.tgz 5563ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz 5555ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz 5558ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz 5555ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ms/-/ms-2.0.0.tgz 5558ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz 5553ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/tar-stream/-/tar-stream-1.6.2.tgz 5572ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/extend-shallow/-/extend-shallow-3.0.2.tgz 5571ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz 5557ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/extglob/-/extglob-2.0.4.tgz 5549ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/qs/-/qs-6.5.3.tgz 5545ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/expand-brackets/-/expand-brackets-2.1.4.tgz 5544ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz 5543ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz 5640ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz 5543ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz 5542ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz 5539ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz 5538ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz 5536ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/find-up/-/find-up-1.1.2.tgz 5539ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz 5537ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/braces/-/braces-2.3.2.tgz 5548ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/path-exists/-/path-exists-2.1.0.tgz 5539ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-2.0.1.tgz 5538ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-number/-/is-number-4.0.0.tgz 5536ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/strip-bom/-/strip-bom-2.0.0.tgz 5535ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/depd/-/depd-2.0.0.tgz 5536ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz 5533ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz 5564ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz 5529ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz 5570ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/array-unique/-/array-unique-0.3.2.tgz 5529ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/human-signals/-/human-signals-1.1.1.tgz 5533ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/onetime/-/onetime-5.1.2.tgz 5529ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/execa/-/execa-4.1.0.tgz 5523ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz 5526ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/arr-diff/-/arr-diff-4.0.0.tgz 5523ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz 5519ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ansi-styles/-/ansi-styles-5.2.0.tgz 5520ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.6.0.tgz 5518ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz 5517ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz 5517ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/chalk/-/chalk-3.0.0.tgz 5514ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz 5514ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-glob/-/is-glob-2.0.1.tgz 5512ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-extglob/-/is-extglob-1.0.0.tgz 5511ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/npm-run-path/-/npm-run-path-4.0.1.tgz 5544ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-stream/-/is-stream-1.1.0.tgz 5504ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/timed-out/-/timed-out-4.0.1.tgz 5510ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/semver/-/semver-5.7.1.tgz 5503ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/get-stream/-/get-stream-5.2.0.tgz 5503ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz 5498ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/got/-/got-6.7.1.tgz 5500ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.18.6.tgz 5497ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-stream/-/is-stream-1.1.0.tgz 5499ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz 5496ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz 5498ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ms/-/ms-2.0.0.tgz 5494ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/http-errors/-/http-errors-2.0.0.tgz 5556ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/semver/-/semver-5.7.1.tgz 5493ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz 5492ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz 5482ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/es6-promise/-/es6-promise-3.3.1.tgz 5489ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz 5482ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz 5556ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/extend-shallow/-/extend-shallow-3.0.2.tgz 5479ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/path-key/-/path-key-2.0.1.tgz 5481ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz 5478ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/arr-diff/-/arr-diff-4.0.0.tgz 5478ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/array-unique/-/array-unique-0.3.2.tgz 5477ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/readable-stream/-/readable-stream-1.1.14.tgz 5476ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/statuses/-/statuses-1.5.0.tgz 5474ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/string_decoder/-/string_decoder-0.10.31.tgz 5476ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/isarray/-/isarray-0.0.1.tgz 5475ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/semver/-/semver-7.3.8.tgz 5474ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz 5467ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/duplexer2/-/duplexer2-0.0.2.tgz 5475ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz 5468ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/debug/-/debug-2.6.9.tgz 5492ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/unzip-response/-/unzip-response-2.0.1.tgz 5534ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/http-errors/-/http-errors-1.8.1.tgz 5469ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz 5513ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/depd/-/depd-2.0.0.tgz 5468ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz 5465ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/array-union/-/array-union-2.1.0.tgz 5472ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ms/-/ms-2.1.3.tgz 5465ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/uuid/-/uuid-8.3.2.tgz 5466ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/pify/-/pify-3.0.0.tgz 5464ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/supports-color/-/supports-color-8.1.1.tgz 5460ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/parse-json/-/parse-json-2.2.0.tgz 5463ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/onetime/-/onetime-5.1.2.tgz 5452ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/camelcase/-/camelcase-6.3.0.tgz 5455ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/semver/-/semver-7.3.8.tgz 5453ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/array-differ/-/array-differ-3.0.0.tgz 5479ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/onetime/-/onetime-5.1.2.tgz 5450ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/npm-run-path/-/npm-run-path-4.0.1.tgz 5451ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/execa/-/execa-5.1.1.tgz 5449ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/npm-run-path/-/npm-run-path-4.0.1.tgz 5447ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ms/-/ms-2.0.0.tgz 5479ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz 5445ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/get-stream/-/get-stream-6.0.1.tgz 5448ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/execa/-/execa-5.1.1.tgz 5445ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/debug/-/debug-4.3.4.tgz 5444ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/minimist/-/minimist-0.0.8.tgz 5480ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ci-info/-/ci-info-1.6.0.tgz 5435ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/get-stream/-/get-stream-6.0.1.tgz 5457ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-path-inside/-/is-path-inside-1.0.1.tgz 5434ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/make-dir/-/make-dir-3.1.0.tgz 5445ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz 5445ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/which/-/which-1.3.1.tgz 5432ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz 5430ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/execa/-/execa-0.8.0.tgz 5429ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/cross-spawn/-/cross-spawn-5.1.0.tgz 5428ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/shebang-regex/-/shebang-regex-1.0.0.tgz 5427ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/debug/-/debug-4.3.4.tgz 5426ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lru-cache/-/lru-cache-4.1.5.tgz 5424ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/statuses/-/statuses-1.5.0.tgz 5424ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/yallist/-/yallist-2.1.2.tgz 5423ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.0.2.tgz 5416ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/kind-of/-/kind-of-4.0.0.tgz 5416ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ms/-/ms-2.1.2.tgz 5415ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz 5414ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-stream/-/is-stream-1.1.0.tgz 5413ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.3.1.tgz 5413ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jest/test-result/-/test-result-28.1.3.tgz 5411ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-1.1.0.tgz 5411ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/through2/-/through2-2.0.5.tgz 5408ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/vinyl/-/vinyl-0.5.3.tgz 5410ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/supports-color/-/supports-color-2.0.0.tgz 5406ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz 5408ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/replace-ext/-/replace-ext-0.0.1.tgz 5406ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/object-assign/-/object-assign-3.0.0.tgz 5405ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/chalk/-/chalk-1.1.3.tgz 5404ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz 5397ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ansi-styles/-/ansi-styles-2.2.1.tgz 5397ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz 5395ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-stream/-/is-stream-1.1.0.tgz 5393ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz 5450ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.20.14.tgz 5395ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/semver/-/semver-7.3.8.tgz 5391ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel/plugin-syntax-object-rest-spread/-/plugin-syntax-object-rest-spread-7.8.3.tgz 5394ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/debug/-/debug-2.6.9.tgz 5449ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ajv/-/ajv-5.5.2.tgz 5389ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/yallist/-/yallist-2.1.2.tgz 5359ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lru-cache/-/lru-cache-4.1.5.tgz 5354ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/shebang-command/-/shebang-command-1.2.0.tgz 5449ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/debug/-/debug-3.2.7.tgz 5352ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/jpeg-js/-/jpeg-js-0.1.2.tgz 5594ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/js-sdsl/-/js-sdsl-4.3.0.tgz 7214ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/aws-sdk/-/aws-sdk-2.153.0.tgz 5371ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@types/node/-/node-18.13.0.tgz 6003ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/cross-spawn/-/cross-spawn-4.0.2.tgz 5365ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/which/-/which-1.3.1.tgz 5370ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ms/-/ms-2.1.3.tgz 5369ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz 5363ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel/highlight/-/highlight-7.18.6.tgz 5922ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-glob/-/is-glob-3.1.0.tgz 5357ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/glob-parent/-/glob-parent-3.1.0.tgz 5358ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/normalize-path/-/normalize-path-2.1.1.tgz 5363ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-glob/-/is-glob-2.0.1.tgz 5346ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz 5345ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz 5344ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/braces/-/braces-1.8.5.tgz 5349ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/micromatch/-/micromatch-2.3.11.tgz 5343ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-extglob/-/is-extglob-1.0.0.tgz 5341ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/glob/-/glob-5.0.15.tgz 5351ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/glob-parent/-/glob-parent-2.0.0.tgz 5341ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-glob/-/is-glob-2.0.1.tgz 5366ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/parse-json/-/parse-json-2.2.0.tgz 5341ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/qs/-/qs-6.11.0.tgz 5344ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz 5335ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/raw-body/-/raw-body-2.5.1.tgz 5336ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/through2/-/through2-2.0.5.tgz 5327ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ms/-/ms-2.0.0.tgz 5340ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/qs/-/qs-6.11.0.tgz 5329ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/on-finished/-/on-finished-2.4.1.tgz 5327ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/on-finished/-/on-finished-2.4.1.tgz 5343ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/depd/-/depd-2.0.0.tgz 5322ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz 5326ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-extglob/-/is-extglob-1.0.0.tgz 5322ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/debug/-/debug-2.6.9.tgz 5343ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/body-parser/-/body-parser-1.20.1.tgz 5318ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz 5318ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/fill-range/-/fill-range-2.2.4.tgz 5317ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/http-errors/-/http-errors-2.0.0.tgz 5328ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/debug/-/debug-2.6.9.tgz 5324ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/which/-/which-1.3.1.tgz 5317ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lru-cache/-/lru-cache-4.1.5.tgz 5306ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/shebang-command/-/shebang-command-1.2.0.tgz 5305ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-stream/-/is-stream-1.1.0.tgz 5303ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/cookie/-/cookie-0.5.0.tgz 5325ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz 5301ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ms/-/ms-2.0.0.tgz 5300ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/pify/-/pify-3.0.0.tgz 5299ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/shebang-regex/-/shebang-regex-1.0.0.tgz 5313ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-2.1.0.tgz 5298ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-number/-/is-number-2.1.0.tgz 5313ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/debug/-/debug-4.3.4.tgz 5295ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/cross-spawn/-/cross-spawn-5.1.0.tgz 5307ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/kind-of/-/kind-of-6.0.2.tgz 5294ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz 5290ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/rimraf/-/rimraf-2.7.1.tgz 5281ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz 5293ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ms/-/ms-2.1.2.tgz 5276ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/vinyl/-/vinyl-0.4.6.tgz 5277ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/vinyl/-/vinyl-0.4.6.tgz 5274ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/yallist/-/yallist-2.1.2.tgz 5301ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/clone/-/clone-0.2.0.tgz 5273ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/clone/-/clone-0.2.0.tgz 5271ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/through2/-/through2-2.0.5.tgz 5282ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/object-assign/-/object-assign-2.1.1.tgz 5268ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz 5280ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/object-assign/-/object-assign-2.1.1.tgz 5270ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz 5274ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/vinyl/-/vinyl-0.4.6.tgz 5269ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz 5260ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/object-assign/-/object-assign-2.1.1.tgz 5274ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/debug/-/debug-2.6.9.tgz 5258ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ms/-/ms-2.0.0.tgz 5270ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/boom/-/boom-5.2.0.tgz 5267ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/clone/-/clone-0.2.0.tgz 5264ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz 5261ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz 5266ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/color/-/color-3.2.1.tgz 5264ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/write-file-atomic/-/write-file-atomic-2.4.3.tgz 5258ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz 5257ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/strip-bom/-/strip-bom-2.0.0.tgz 5255ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz 5263ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-glob/-/is-glob-2.0.1.tgz 5248ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz 5263ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz 5256ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz 5263ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/object-assign/-/object-assign-3.0.0.tgz 5244ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/bytes/-/bytes-3.0.0.tgz 5260ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz 5244ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-extglob/-/is-extglob-1.0.0.tgz 5243ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/normalize-path/-/normalize-path-2.1.1.tgz 5248ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz 5241ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/camelcase/-/camelcase-2.1.1.tgz 5243ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/micromatch/-/micromatch-2.3.11.tgz 5252ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz 5239ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz 5251ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/glob-parent/-/glob-parent-2.0.0.tgz 5241ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz 5239ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz 5238ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.3.2.tgz 5229ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz 5244ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/semver/-/semver-4.3.6.tgz 5228ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/uuid/-/uuid-2.0.3.tgz 5226ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz 5229ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/rimraf/-/rimraf-2.7.1.tgz 5224ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/tempfile/-/tempfile-1.1.1.tgz 5227ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/uuid/-/uuid-2.0.3.tgz 5251ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz 5225ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/kind-of/-/kind-of-6.0.2.tgz 5224ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz 5223ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz 5223ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz 5222ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz 5220ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz 5241ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz 5204ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz 5239ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/file-type/-/file-type-3.9.0.tgz 5209ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/type-fest/-/type-fest-0.21.3.tgz 5202ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/resolve-from/-/resolve-from-5.0.0.tgz 5199ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/debug/-/debug-4.3.4.tgz 5201ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz 5216ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz 5197ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/file-type/-/file-type-9.0.0.tgz 5198ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz 5197ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/js-yaml/-/js-yaml-3.14.1.tgz 5196ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz 5195ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/camelcase/-/camelcase-4.1.0.tgz 5194ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz 5186ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ms/-/ms-2.1.2.tgz 5185ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/uuid/-/uuid-3.1.0.tgz 5213ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/braces/-/braces-1.8.5.tgz 5180ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/anymatch/-/anymatch-1.3.2.tgz 5179ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/debug/-/debug-4.3.4.tgz 5174ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/globals/-/globals-11.12.0.tgz 5177ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ms/-/ms-2.1.2.tgz 5211ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz 5173ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ms/-/ms-2.1.2.tgz 5175ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/argparse/-/argparse-1.0.10.tgz 5188ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/debug/-/debug-4.3.4.tgz 5171ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/file-type/-/file-type-3.9.0.tgz 5169ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz 5161ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/debug/-/debug-4.3.4.tgz 5188ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz 5157ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/destroy/-/destroy-1.2.0.tgz 6585ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.2.tgz 5159ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz 5155ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz 5153ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/debug/-/debug-2.6.9.tgz 5727ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/nopt/-/nopt-1.0.10.tgz 5153ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/buffer/-/buffer-5.7.1.tgz 5150ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/decompress-tarbz2/-/decompress-tarbz2-3.1.0.tgz 6569ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz 5170ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz 6771ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@babel/parser/-/parser-7.20.15.tgz 6022ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz 5169ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz 5151ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ms/-/ms-2.1.2.tgz 5150ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz 5179ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz 5150ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz 5149ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ms/-/ms-2.1.2.tgz 5141ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.3.tgz 6525ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/to-regex-range/-/to-regex-range-2.1.1.tgz 5137ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz 5136ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/debug/-/debug-4.3.4.tgz 5134ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/ms/-/ms-2.1.2.tgz 5195ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz 7499ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/one-time/-/one-time-1.0.0.tgz 7594ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz 5833ms (cache hit)
npm timing reifyNode:node_modules/@logtail/node Completed in 12337ms
npm http fetch GET 200 https://registry.npmjs.org/is-extglob/-/is-extglob-1.0.0.tgz 5523ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz 5818ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/strip-bom/-/strip-bom-2.0.0.tgz 5673ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/detect-newline/-/detect-newline-3.1.0.tgz 5291ms (cache hit)
npm timing reifyNode:node_modules/valiquire-silent/node_modules/readdirp Completed in 12971ms
npm timing reifyNode:node_modules/saslprep Completed in 13212ms
npm timing metavuln:cache:get:security-advisory:body-parser:KjOIXr+0XwT78n341QBZOXPYLbrN1xY9S+oLufCIaZVZBeinaImaKUPA7hAswctZs3odo0t9RQyqgPG9rvZmhQ== Completed in 2215ms
npm timing metavuln:load:security-advisory:body-parser:L19jp5umgpUymLyktjMZWvkppW4QuHjtPTwoT+IVkaazB/RgihOq/nHe4DPVgPKkhnrqVzKwIHeDSswadWaXKA== Completed in 1ms
npm timing metavuln:calculate:security-advisory:body-parser:L19jp5umgpUymLyktjMZWvkppW4QuHjtPTwoT+IVkaazB/RgihOq/nHe4DPVgPKkhnrqVzKwIHeDSswadWaXKA== Completed in 2217ms
npm timing metavuln:cache:get:security-advisory:snapdragon:h3souqthUkb8+xK/vZ2NyDzJuMDl/2W7PZtJRJu6X00FzNWAq+Ogr3kStlQhPiHnWa6/tY+KXIG0rWz+BwcGzw== Completed in 2217ms
npm timing metavuln:load:security-advisory:snapdragon:L19jp5umgpUymLyktjMZWvkppW4QuHjtPTwoT+IVkaazB/RgihOq/nHe4DPVgPKkhnrqVzKwIHeDSswadWaXKA== Completed in 0ms
npm timing metavuln:calculate:security-advisory:snapdragon:L19jp5umgpUymLyktjMZWvkppW4QuHjtPTwoT+IVkaazB/RgihOq/nHe4DPVgPKkhnrqVzKwIHeDSswadWaXKA== Completed in 2217ms
npm timing reifyNode:node_modules/@logtail/core Completed in 13492ms
npm timing reifyNode:node_modules/engine.io-parser Completed in 13632ms
npm timing reifyNode:node_modules/yauzl Completed in 13689ms
npm timing reifyNode:node_modules/yallist Completed in 13689ms
npm timing reifyNode:node_modules/xtend Completed in 13689ms
npm timing reifyNode:node_modules/xml-parse-from-string Completed in 13690ms
npm timing reifyNode:node_modules/x-xss-protection Completed in 13690ms
npm timing reifyNode:node_modules/write-file-atomic Completed in 13690ms
npm timing reifyNode:node_modules/xdg-basedir Completed in 13691ms
npm timing reifyNode:node_modules/wrappy Completed in 13690ms
npm timing reifyNode:node_modules/xml2js Completed in 13692ms
npm timing reifyNode:node_modules/wrap-ansi Completed in 13691ms
npm timing reifyNode:node_modules/widest-line Completed in 13692ms
npm timing reifyNode:node_modules/word-wrap Completed in 13693ms
npm timing reifyNode:node_modules/webidl-conversions Completed in 13693ms
npm timing reifyNode:node_modules/wrap-fn Completed in 13693ms
npm timing reifyNode:node_modules/walker Completed in 13694ms
npm timing reifyNode:node_modules/vinyl-assign Completed in 13693ms
npm timing reifyNode:node_modules/xhr Completed in 13696ms
npm timing reifyNode:node_modules/vary Completed in 13694ms
npm timing reifyNode:node_modules/validate-npm-package-license Completed in 13694ms
npm timing reifyNode:node_modules/util-deprecate Completed in 13693ms
npm timing reifyNode:node_modules/ware Completed in 13697ms
npm timing reifyNode:node_modules/use Completed in 13694ms
npm timing reifyNode:node_modules/url-regex Completed in 13695ms
npm timing reifyNode:node_modules/utif Completed in 13695ms
npm timing reifyNode:node_modules/utils-merge Completed in 13695ms
npm timing reifyNode:node_modules/verror Completed in 13698ms
npm timing reifyNode:node_modules/update-notifier Completed in 13696ms
npm timing reifyNode:node_modules/update-browserslist-db Completed in 13697ms
npm timing reifyNode:node_modules/urix Completed in 13697ms
npm timing reifyNode:node_modules/unpipe Completed in 13698ms
npm timing reifyNode:node_modules/unique-string Completed in 13697ms
npm timing reifyNode:node_modules/unique-stream Completed in 13697ms
npm timing reifyNode:node_modules/vali-date Completed in 13700ms
npm timing reifyNode:node_modules/undefsafe Completed in 13698ms
npm timing reifyNode:node_modules/type-is Completed in 13699ms
npm timing reifyNode:node_modules/url-parse-lax Completed in 13700ms
npm timing reifyNode:node_modules/type-detect Completed in 13700ms
npm timing reifyNode:node_modules/unzip-response Completed in 13701ms
npm timing reifyNode:node_modules/tunnel-agent Completed in 13701ms
npm timing reifyNode:node_modules/trim-repeated Completed in 13701ms
npm timing reifyNode:node_modules/touch Completed in 13701ms
npm timing reifyNode:node_modules/type-check Completed in 13702ms
npm timing reifyNode:node_modules/to-regex-range Completed in 13702ms
npm timing reifyNode:node_modules/to-regex Completed in 13702ms
npm timing reifyNode:node_modules/trim-newlines Completed in 13703ms
npm timing reifyNode:node_modules/to-fast-properties Completed in 13703ms
npm timing reifyNode:node_modules/to-buffer Completed in 13703ms
npm timing reifyNode:node_modules/to-absolute-glob Completed in 13704ms
npm timing reifyNode:node_modules/toidentifier Completed in 13704ms
npm timing reifyNode:node_modules/to-object-path Completed in 13705ms
npm timing reifyNode:node_modules/time-stamp Completed in 13705ms
npm timing reifyNode:node_modules/through2-filter Completed in 13705ms
npm timing reifyNode:node_modules/through2 Completed in 13706ms
npm timing reifyNode:node_modules/text-hex Completed in 13705ms
npm timing reifyNode:node_modules/tmpl Completed in 13707ms
npm timing reifyNode:node_modules/test-exclude Completed in 13706ms
npm timing reifyNode:node_modules/terminal-link Completed in 13707ms
npm timing reifyNode:node_modules/tempfile Completed in 13707ms
npm timing reifyNode:node_modules/temp-dir Completed in 13708ms
npm timing reifyNode:node_modules/supports-color Completed in 13707ms
npm timing reifyNode:node_modules/supports-preserve-symlinks-flag Completed in 13709ms
npm timing reifyNode:node_modules/timed-out Completed in 13710ms
npm timing reifyNode:node_modules/strip-indent Completed in 13709ms
npm timing reifyNode:node_modules/strip-eof Completed in 13709ms
npm timing reifyNode:node_modules/strip-final-newline Completed in 13710ms
npm timing reifyNode:node_modules/strip-dirs Completed in 13710ms
npm timing reifyNode:node_modules/strip-bom-stream Completed in 13711ms
npm timing reifyNode:node_modules/strip-bom Completed in 13710ms
npm timing reifyNode:node_modules/unset-value Completed in 13715ms
npm timing reifyNode:node_modules/stringstream Completed in 13711ms
npm timing reifyNode:node_modules/supports-hyperlinks Completed in 13712ms
npm timing reifyNode:node_modules/string-length Completed in 13712ms
npm timing reifyNode:node_modules/strip-ansi Completed in 13712ms
npm timing reifyNode:node_modules/string-width Completed in 13712ms
npm timing reifyNode:node_modules/stream-combiner2 Completed in 13713ms
npm timing reifyNode:node_modules/stream-combiner Completed in 13713ms
npm timing reifyNode:node_modules/union-value Completed in 13718ms
npm timing reifyNode:node_modules/strip-json-comments Completed in 13715ms
npm timing reifyNode:node_modules/uid-safe Completed in 13718ms
npm timing reifyNode:node_modules/string_decoder Completed in 13715ms
npm timing reifyNode:node_modules/strip-outer Completed in 13716ms
npm timing reifyNode:node_modules/stream-shift Completed in 13716ms
npm timing reifyNode:node_modules/statuses Completed in 13716ms
npm timing reifyNode:node_modules/which Completed in 13725ms
npm timing reifyNode:node_modules/static-extend Completed in 13717ms
npm timing reifyNode:node_modules/stat-mode Completed in 13717ms
npm timing reifyNode:node_modules/stack-utils Completed in 13718ms
npm timing reifyNode:node_modules/spdx-correct Completed in 13718ms
npm timing reifyNode:node_modules/source-map-url Completed in 13719ms
npm timing reifyNode:node_modules/source-map-resolve Completed in 13719ms
npm timing reifyNode:node_modules/split-string Completed in 13720ms
npm timing reifyNode:node_modules/sntp Completed in 13719ms
npm timing reifyNode:node_modules/snapdragon-node Completed in 13720ms
npm timing reifyNode:node_modules/snapdragon-util Completed in 13720ms
npm timing reifyNode:node_modules/slug Completed in 13720ms
npm timing reifyNode:node_modules/sisteransi Completed in 13721ms
npm timing reifyNode:node_modules/slash Completed in 13721ms
npm timing reifyNode:node_modules/simple-swizzle Completed in 13722ms
npm timing reifyNode:node_modules/simple-get Completed in 13722ms
npm timing reifyNode:node_modules/simple-concat Completed in 13722ms
npm timing reifyNode:node_modules/signal-exit Completed in 13723ms
npm timing reifyNode:node_modules/sum-up Completed in 13725ms
npm timing reifyNode:node_modules/spdx-expression-parse Completed in 13725ms
npm timing reifyNode:node_modules/shebang-command Completed in 13724ms
npm timing reifyNode:node_modules/shebang-regex Completed in 13724ms
npm timing reifyNode:node_modules/setprototypeof Completed in 13725ms
npm timing reifyNode:node_modules/serve-static Completed in 13725ms
npm timing reifyNode:node_modules/spdx-license-ids Completed in 13727ms
npm timing reifyNode:node_modules/semver-regex Completed in 13726ms
npm timing reifyNode:node_modules/semver-diff Completed in 13730ms
npm timing reifyNode:node_modules/send Completed in 13731ms
npm timing reifyNode:node_modules/sax Completed in 13731ms
npm timing reifyNode:node_modules/safer-buffer Completed in 13731ms
npm timing reifyNode:node_modules/safe-stable-stringify Completed in 13731ms
npm timing reifyNode:node_modules/safe-buffer Completed in 13732ms
npm timing reifyNode:node_modules/stack-trace Completed in 13734ms
npm timing reifyNode:node_modules/reusify Completed in 13733ms
npm timing reifyNode:node_modules/set-value Completed in 13734ms
npm timing reifyNode:node_modules/resolve-url Completed in 13733ms
npm timing reifyNode:node_modules/resolve-from Completed in 13734ms
npm timing reifyNode:node_modules/semver-truncate Completed in 13735ms
npm timing reifyNode:node_modules/set-immediate-shim Completed in 13736ms
npm timing reifyNode:node_modules/require-directory Completed in 13735ms
npm timing reifyNode:node_modules/replace-ext Completed in 13736ms
npm timing reifyNode:node_modules/repeating Completed in 13736ms
npm timing reifyNode:node_modules/repeat-string Completed in 13736ms
npm timing reifyNode:node_modules/repeat-element Completed in 13737ms
npm timing reifyNode:node_modules/remove-trailing-separator Completed in 13737ms
npm timing reifyNode:node_modules/run-parallel Completed in 13738ms
npm timing reifyNode:node_modules/registry-url Completed in 13738ms
npm timing reifyNode:node_modules/regex-not Completed in 13738ms
npm timing reifyNode:node_modules/regex-cache Completed in 13739ms
npm timing reifyNode:node_modules/referrer-policy Completed in 13739ms
npm timing reifyNode:node_modules/resolve.exports Completed in 13740ms
npm timing reifyNode:node_modules/ret Completed in 13740ms
npm timing reifyNode:node_modules/readdirp Completed in 13740ms
npm timing reifyNode:node_modules/read-pkg-up Completed in 13740ms
npm timing reifyNode:node_modules/read-pkg Completed in 13740ms
npm timing reifyNode:node_modules/read-all-stream Completed in 13741ms
npm timing reifyNode:node_modules/range-parser Completed in 13742ms
npm timing reifyNode:node_modules/raw-body Completed in 13742ms
npm timing reifyNode:node_modules/randomatic Completed in 13743ms
npm timing reifyNode:node_modules/random-bytes Completed in 13744ms
npm timing reifyNode:node_modules/resolve-cwd Completed in 13745ms
npm timing reifyNode:node_modules/regenerator-runtime Completed in 13746ms
npm timing reifyNode:node_modules/pump Completed in 13746ms
npm timing reifyNode:node_modules/pseudomap Completed in 13746ms
npm timing reifyNode:node_modules/ps-tree Completed in 13747ms
npm timing reifyNode:node_modules/proxy-addr Completed in 13747ms
npm timing reifyNode:node_modules/redent Completed in 13749ms
npm timing reifyNode:node_modules/process-nextick-args Completed in 13748ms
npm timing reifyNode:node_modules/process Completed in 13749ms
npm timing reifyNode:node_modules/yocto-queue Completed in 13762ms
npm timing reifyNode:node_modules/preserve Completed in 13750ms
npm timing reifyNode:node_modules/punycode Completed in 13750ms
npm timing reifyNode:node_modules/posix-character-classes Completed in 13750ms
npm timing reifyNode:node_modules/png-to-jpeg Completed in 13751ms
npm timing reifyNode:node_modules/pirates Completed in 13750ms
npm timing reifyNode:node_modules/squeak Completed in 13755ms
npm timing reifyNode:node_modules/pinkie-promise Completed in 13751ms
npm timing reifyNode:node_modules/platform Completed in 13752ms
npm timing reifyNode:node_modules/pend Completed in 13752ms
npm timing reifyNode:node_modules/path-to-regexp Completed in 13752ms
npm timing reifyNode:node_modules/pify Completed in 13753ms
npm timing reifyNode:node_modules/pinkie Completed in 13753ms
npm timing reifyNode:node_modules/path-type Completed in 13753ms
npm timing reifyNode:node_modules/path-key Completed in 13753ms
npm timing reifyNode:node_modules/path-dirname Completed in 13754ms
npm timing reifyNode:node_modules/pascalcase Completed in 13754ms
npm timing reifyNode:node_modules/parseurl Completed in 13754ms
npm timing reifyNode:node_modules/parse-node-version Completed in 13754ms
npm timing reifyNode:node_modules/parse-headers Completed in 13755ms
npm timing reifyNode:node_modules/parse-bmfont-xml Completed in 13755ms
npm timing reifyNode:node_modules/rimraf Completed in 13759ms
npm timing reifyNode:node_modules/parse-glob Completed in 13757ms
npm timing reifyNode:node_modules/parse-bmfont-ascii Completed in 13757ms
npm timing reifyNode:node_modules/parent-module Completed in 13758ms
npm timing reifyNode:node_modules/package-json Completed in 13758ms
npm timing reifyNode:node_modules/p-try Completed in 13759ms
npm timing reifyNode:node_modules/p-pipe Completed in 13758ms
npm timing reifyNode:node_modules/p-locate Completed in 13759ms
npm timing reifyNode:node_modules/pause-stream Completed in 13760ms
npm timing reifyNode:node_modules/path-parse Completed in 13761ms
npm timing reifyNode:node_modules/phin Completed in 13761ms
npm timing reifyNode:node_modules/os-filter-obj Completed in 13760ms
npm timing reifyNode:node_modules/onetime Completed in 13761ms
npm timing reifyNode:node_modules/optionator Completed in 13761ms
npm timing reifyNode:node_modules/on-headers Completed in 13762ms
npm timing reifyNode:node_modules/once Completed in 13762ms
npm timing reifyNode:node_modules/on-finished Completed in 13763ms
npm timing reifyNode:node_modules/omggif Completed in 13763ms
npm timing reifyNode:node_modules/object.omit Completed in 13764ms
npm timing reifyNode:node_modules/parse-bmfont-binary Completed in 13765ms
npm timing reifyNode:node_modules/path-exists Completed in 13765ms
npm timing reifyNode:node_modules/path-is-absolute Completed in 13766ms
npm timing reifyNode:node_modules/sparkles Completed in 13770ms
npm timing reifyNode:node_modules/path-is-inside Completed in 13767ms
npm timing reifyNode:node_modules/parse-json Completed in 13767ms
npm timing reifyNode:node_modules/object-assign Completed in 13767ms
npm timing reifyNode:node_modules/oauth-sign Completed in 13767ms
npm timing reifyNode:node_modules/spdx-exceptions Completed in 13772ms
npm timing reifyNode:node_modules/normalize-path Completed in 13768ms
npm timing reifyNode:node_modules/npm-run-path Completed in 13769ms
npm timing reifyNode:node_modules/pkg-dir Completed in 13771ms
npm timing reifyNode:node_modules/nocache Completed in 13769ms
npm timing reifyNode:node_modules/object-copy Completed in 13770ms
npm timing reifyNode:node_modules/safe-regex Completed in 13774ms
npm timing reifyNode:node_modules/napi-build-utils Completed in 13770ms
npm timing reifyNode:node_modules/queue-microtask Completed in 13774ms
npm timing reifyNode:node_modules/multipipe Completed in 13771ms
npm timing reifyNode:node_modules/multiparty Completed in 13772ms
npm timing reifyNode:node_modules/node-status-codes Completed in 13773ms
npm timing reifyNode:node_modules/ms Completed in 13773ms
npm timing reifyNode:node_modules/node-int64 Completed in 13773ms
npm timing reifyNode:node_modules/morgan Completed in 13774ms
npm timing reifyNode:node_modules/mozjpeg Completed in 13782ms
npm timing reifyNode:node_modules/ordered-read-streams Completed in 13783ms
npm timing reifyNode:node_modules/mkdirp-classic Completed in 13782ms
npm timing reifyNode:node_modules/natural-compare Completed in 13783ms
npm timing reifyNode:node_modules/picocolors Completed in 13786ms
npm timing reifyNode:node_modules/mixin-deep Completed in 13783ms
npm timing reifyNode:node_modules/mimic-fn Completed in 13784ms
npm timing reifyNode:node_modules/mimic-response Completed in 13785ms
npm timing reifyNode:node_modules/minimatch Completed in 13785ms
npm timing reifyNode:node_modules/methods Completed in 13785ms
npm timing reifyNode:node_modules/merge-descriptors Completed in 13786ms
npm timing reifyNode:node_modules/meow Completed in 13787ms
npm timing reifyNode:node_modules/media-typer Completed in 13787ms
npm timing reifyNode:node_modules/micromatch Completed in 13788ms
npm timing reifyNode:node_modules/map-visit Completed in 13788ms
npm timing reifyNode:node_modules/map-stream Completed in 13789ms
npm timing reifyNode:node_modules/map-obj Completed in 13789ms
npm timing reifyNode:node_modules/multimatch Completed in 13791ms
npm timing reifyNode:node_modules/makeerror Completed in 13790ms
npm timing reifyNode:node_modules/make-dir Completed in 13790ms
npm timing reifyNode:node_modules/merge-stream Completed in 13791ms
npm timing reifyNode:node_modules/lowercase-keys Completed in 13791ms
npm timing reifyNode:node_modules/lru-cache Completed in 13792ms
npm timing reifyNode:node_modules/longest Completed in 13792ms
npm timing reifyNode:node_modules/loud-rejection Completed in 13792ms
npm timing reifyNode:node_modules/logalot Completed in 13792ms
npm timing reifyNode:node_modules/lodash.templatesettings Completed in 13792ms
npm timing reifyNode:node_modules/lodash.reduce Completed in 13793ms
npm timing reifyNode:node_modules/lodash.restparam Completed in 13793ms
npm timing reifyNode:node_modules/lodash.template Completed in 13794ms
npm timing reifyNode:node_modules/lodash.merge Completed in 13794ms
npm timing reifyNode:node_modules/math-random Completed in 13795ms
npm timing reifyNode:node_modules/lodash.isarray Completed in 13794ms
npm timing reifyNode:node_modules/lodash.isequal Completed in 13795ms
npm timing reifyNode:node_modules/lodash.isarguments Completed in 13796ms
npm timing reifyNode:node_modules/lodash.defaults Completed in 13796ms
npm timing reifyNode:node_modules/lodash.escape Completed in 13797ms
npm timing reifyNode:node_modules/lodash._root Completed in 13798ms
npm timing reifyNode:node_modules/mri Completed in 13800ms
npm timing reifyNode:node_modules/lodash.assign Completed in 13798ms
npm timing reifyNode:node_modules/lodash._reescape Completed in 13799ms
npm timing reifyNode:node_modules/lodash._reevaluate Completed in 13799ms
npm timing reifyNode:node_modules/lodash._isiterateecall Completed in 13800ms
npm timing reifyNode:node_modules/lpad-align Completed in 13801ms
npm timing reifyNode:node_modules/lodash._createassigner Completed in 13801ms
npm timing reifyNode:node_modules/lodash._bindcallback Completed in 13801ms
npm timing reifyNode:node_modules/lodash._basevalues Completed in 13801ms
npm timing reifyNode:node_modules/lodash._basetostring Completed in 13802ms
npm timing reifyNode:node_modules/p-finally Completed in 13805ms
npm timing reifyNode:node_modules/lodash._baseassign Completed in 13803ms
npm timing reifyNode:node_modules/locate-path Completed in 13803ms
npm timing reifyNode:node_modules/load-bmfont Completed in 13804ms
npm timing reifyNode:node_modules/lodash.keys Completed in 13804ms
npm timing reifyNode:node_modules/levn Completed in 13805ms
npm timing reifyNode:node_modules/lines-and-columns Completed in 13806ms
npm timing reifyNode:node_modules/leven Completed in 13806ms
npm timing reifyNode:node_modules/lazy-req Completed in 13806ms
npm timing reifyNode:node_modules/kuler Completed in 13807ms
npm timing reifyNode:node_modules/latest-version Completed in 13808ms
npm timing reifyNode:node_modules/lodash._getnative Completed in 13808ms
npm timing reifyNode:node_modules/kind-of Completed in 13808ms
npm timing reifyNode:node_modules/jws Completed in 13808ms
npm timing reifyNode:node_modules/load-json-file Completed in 13809ms
npm timing reifyNode:node_modules/json-stringify-safe Completed in 13809ms
npm timing reifyNode:node_modules/jsprim Completed in 13809ms
npm timing reifyNode:node_modules/json-schema Completed in 13810ms
npm timing reifyNode:node_modules/json-bigint Completed in 13810ms
npm timing reifyNode:node_modules/jsbn Completed in 13811ms
npm timing reifyNode:node_modules/js-tokens Completed in 13811ms
npm timing reifyNode:node_modules/jsesc Completed in 13812ms
npm timing reifyNode:node_modules/lodash._reinterpolate Completed in 13814ms
npm timing reifyNode:node_modules/jest-resolve-dependencies Completed in 13813ms
npm timing reifyNode:node_modules/react-is Completed in 13820ms
npm timing reifyNode:node_modules/jest-pnp-resolver Completed in 13814ms
npm timing reifyNode:node_modules/jest-runtime Completed in 13815ms
npm timing reifyNode:node_modules/jest-mock Completed in 13815ms
npm timing reifyNode:node_modules/jest-regex-util Completed in 13816ms
npm timing reifyNode:node_modules/jest-message-util Completed in 13815ms
npm timing reifyNode:node_modules/jest-leak-detector Completed in 13816ms
npm timing reifyNode:node_modules/jest-matcher-utils Completed in 13816ms
npm timing reifyNode:node_modules/jest-environment-node Completed in 13816ms
npm timing reifyNode:node_modules/jest-docblock Completed in 13817ms
npm timing reifyNode:node_modules/jest-runner Completed in 13818ms
npm timing reifyNode:node_modules/kleur Completed in 13819ms
npm timing reifyNode:node_modules/jest-get-type Completed in 13819ms
npm timing reifyNode:node_modules/jest-changed-files Completed in 13820ms
npm timing reifyNode:node_modules/isexe Completed in 13821ms
npm timing reifyNode:node_modules/isarray Completed in 13822ms
npm timing reifyNode:node_modules/is-zip Completed in 13823ms
npm timing reifyNode:node_modules/isstream Completed in 13823ms
npm timing reifyNode:node_modules/is-utf8 Completed in 13823ms
npm timing reifyNode:node_modules/is-url Completed in 13824ms
npm timing reifyNode:node_modules/is-typedarray Completed in 13824ms
npm timing reifyNode:node_modules/isobject Completed in 13824ms
npm timing reifyNode:node_modules/is-valid-glob Completed in 13825ms
npm timing reifyNode:node_modules/is-retry-allowed Completed in 13825ms
npm timing reifyNode:node_modules/is-redirect Completed in 13825ms
npm timing reifyNode:node_modules/is-posix-bracket Completed in 13825ms
npm timing reifyNode:node_modules/is-tar Completed in 13826ms
npm timing reifyNode:node_modules/is-plain-object Completed in 13826ms
npm timing reifyNode:node_modules/is-relative Completed in 13826ms
npm timing reifyNode:node_modules/is-obj Completed in 13826ms
npm timing reifyNode:node_modules/is-number Completed in 13825ms
npm timing reifyNode:node_modules/map-cache Completed in 13830ms
npm timing reifyNode:node_modules/is-natural-number Completed in 13826ms
npm timing reifyNode:node_modules/is-path-inside Completed in 13827ms
npm timing reifyNode:node_modules/node-releases Completed in 13832ms
npm timing reifyNode:node_modules/is-plain-obj Completed in 13828ms
npm timing reifyNode:node_modules/is-npm Completed in 13827ms
npm timing reifyNode:node_modules/is-gzip Completed in 13827ms
npm timing reifyNode:node_modules/is-generator-fn Completed in 13827ms
npm timing reifyNode:node_modules/is-installed-globally Completed in 13828ms
npm timing reifyNode:node_modules/is-glob Completed in 13828ms
npm timing reifyNode:node_modules/is-finite Completed in 13830ms
npm timing reifyNode:node_modules/is-function Completed in 13830ms
npm timing reifyNode:node_modules/is-extendable Completed in 13831ms
npm timing reifyNode:node_modules/jwa Completed in 13833ms
npm timing reifyNode:node_modules/is-core-module Completed in 13831ms
npm timing reifyNode:node_modules/object-visit Completed in 13838ms
npm timing reifyNode:node_modules/object.pick Completed in 13838ms
npm timing reifyNode:node_modules/is-ci Completed in 13833ms
npm timing reifyNode:node_modules/is-bzip2 Completed in 13833ms
npm timing reifyNode:node_modules/is-buffer Completed in 13834ms
npm timing reifyNode:node_modules/is-extglob Completed in 13834ms
npm timing reifyNode:node_modules/is-absolute Completed in 13834ms
npm timing reifyNode:node_modules/ipaddr.js Completed in 13835ms
npm timing reifyNode:node_modules/ip-regex Completed in 13835ms
npm timing reifyNode:node_modules/is-primitive Completed in 13837ms
npm timing reifyNode:node_modules/lodash._basecopy Completed in 13839ms
npm timing reifyNode:node_modules/is-binary-path Completed in 13836ms
npm timing reifyNode:node_modules/os-tmpdir Completed in 13843ms
npm timing reifyNode:node_modules/is-arrayish Completed in 13837ms
npm timing reifyNode:node_modules/imurmurhash Completed in 13838ms
npm timing reifyNode:node_modules/import-local Completed in 13838ms
npm timing reifyNode:node_modules/inflight Completed in 13839ms
npm timing reifyNode:node_modules/imagemin-mozjpeg Completed in 13839ms
npm timing reifyNode:node_modules/imagemin Completed in 13838ms
npm timing reifyNode:node_modules/imagemagick Completed in 13839ms
npm timing reifyNode:node_modules/ignore-by-default Completed in 13839ms
npm timing reifyNode:node_modules/indent-string Completed in 13841ms
npm timing reifyNode:node_modules/import-fresh Completed in 13841ms
npm timing reifyNode:node_modules/imagemin-jpegtran Completed in 13840ms
npm timing reifyNode:node_modules/ieee754 Completed in 13841ms
npm timing reifyNode:node_modules/ignore Completed in 13841ms
npm timing reifyNode:node_modules/husky Completed in 13841ms
npm timing reifyNode:node_modules/ienoopen Completed in 13842ms
npm timing reifyNode:node_modules/http-errors Completed in 13842ms
npm timing reifyNode:node_modules/hsts Completed in 13843ms
npm timing reifyNode:node_modules/hide-powered-by Completed in 13843ms
npm timing reifyNode:node_modules/hexoid Completed in 13843ms
npm timing reifyNode:node_modules/p-limit Completed in 13851ms
npm timing reifyNode:node_modules/helmet Completed in 13844ms
npm timing reifyNode:node_modules/is-fullwidth-code-point Completed in 13846ms
npm timing reifyNode:node_modules/hoek Completed in 13845ms
npm timing reifyNode:node_modules/has-values Completed in 13845ms
npm timing reifyNode:node_modules/is-stream Completed in 13848ms
npm timing reifyNode:node_modules/ini Completed in 13848ms
npm timing reifyNode:node_modules/has-value Completed in 13846ms
npm timing reifyNode:node_modules/has Completed in 13846ms
npm timing reifyNode:node_modules/is-equal-shallow Completed in 13849ms
npm timing reifyNode:node_modules/har-validator Completed in 13847ms
npm timing reifyNode:node_modules/has-gulplog Completed in 13847ms
npm timing reifyNode:node_modules/gulp-sourcemaps Completed in 13848ms
npm timing reifyNode:node_modules/has-flag Completed in 13848ms
npm timing reifyNode:node_modules/gtoken Completed in 13848ms
npm timing reifyNode:node_modules/gulplog Completed in 13850ms
npm timing reifyNode:node_modules/gulp-rename Completed in 13850ms
npm timing reifyNode:node_modules/gulp-decompress Completed in 13851ms
npm timing reifyNode:node_modules/graceful-fs Completed in 13851ms
npm timing reifyNode:node_modules/glogg Completed in 13851ms
npm timing reifyNode:node_modules/globby Completed in 13852ms
npm timing reifyNode:node_modules/global-dirs Completed in 13852ms
npm timing reifyNode:node_modules/global Completed in 13853ms
npm timing reifyNode:node_modules/glob-stream Completed in 13854ms
npm timing reifyNode:node_modules/glob-parent Completed in 13854ms
npm timing reifyNode:node_modules/glob Completed in 13855ms
npm timing reifyNode:node_modules/globals Completed in 13856ms
npm timing reifyNode:node_modules/import-lazy Completed in 13860ms
npm timing reifyNode:node_modules/glob-base Completed in 13857ms
npm timing reifyNode:node_modules/get-stdin Completed in 13858ms
npm timing reifyNode:node_modules/get-package-type Completed in 13859ms
npm timing reifyNode:node_modules/getpass Completed in 13860ms
npm timing reifyNode:node_modules/get-stream Completed in 13860ms
npm timing reifyNode:node_modules/get-proxy Completed in 13861ms
npm timing reifyNode:node_modules/fs.realpath Completed in 13862ms
npm timing reifyNode:node_modules/fs-constants Completed in 13862ms
npm timing reifyNode:node_modules/get-caller-file Completed in 13863ms
npm timing reifyNode:node_modules/from Completed in 13863ms
npm timing reifyNode:node_modules/fresh Completed in 13863ms
npm timing reifyNode:node_modules/frameguard Completed in 13863ms
npm timing reifyNode:node_modules/forwarded Completed in 13863ms
npm timing reifyNode:node_modules/gensync Completed in 13864ms
npm timing reifyNode:node_modules/for-own Completed in 13864ms
npm timing reifyNode:node_modules/for-in Completed in 13864ms
npm timing reifyNode:node_modules/get-value Completed in 13866ms
npm timing reifyNode:node_modules/fragment-cache Completed in 13865ms
npm timing reifyNode:node_modules/flat-cache Completed in 13866ms
npm timing reifyNode:node_modules/forever-agent Completed in 13866ms
npm timing reifyNode:node_modules/fn.name Completed in 13866ms
npm timing reifyNode:node_modules/hosted-git-info Completed in 13870ms
npm timing reifyNode:node_modules/fill-range Completed in 13867ms
npm timing reifyNode:node_modules/filenamify Completed in 13867ms
npm timing reifyNode:node_modules/find-versions Completed in 13868ms
npm timing reifyNode:node_modules/file-uri-to-path Completed in 13868ms
npm timing reifyNode:node_modules/figures Completed in 13868ms
npm timing reifyNode:node_modules/first-chunk-stream Completed in 13869ms
npm timing reifyNode:node_modules/is-dotfile Completed in 13873ms
npm timing reifyNode:node_modules/fd-slicer Completed in 13869ms
npm timing reifyNode:node_modules/file-type Completed in 13870ms
npm timing reifyNode:node_modules/file-entry-cache Completed in 13870ms
npm timing reifyNode:node_modules/fb-watchman Completed in 13871ms
npm timing reifyNode:node_modules/fast-levenshtein Completed in 13871ms
npm timing reifyNode:node_modules/filename-reserved-regex Completed in 13872ms
npm timing reifyNode:node_modules/fancy-log Completed in 13871ms
npm timing reifyNode:node_modules/extend-shallow Completed in 13871ms
npm timing reifyNode:node_modules/extend Completed in 13872ms
npm timing reifyNode:node_modules/expect-ct Completed in 13872ms
npm timing reifyNode:node_modules/hpkp Completed in 13877ms
npm timing reifyNode:node_modules/expand-brackets Completed in 13873ms
npm timing reifyNode:node_modules/expand-range Completed in 13874ms
npm timing reifyNode:node_modules/execa Completed in 13874ms
npm timing reifyNode:node_modules/executable Completed in 13874ms
npm timing reifyNode:node_modules/exec-series Completed in 13874ms
npm timing reifyNode:node_modules/find-up Completed in 13876ms
npm timing reifyNode:node_modules/finalhandler Completed in 13877ms
npm timing reifyNode:node_modules/exec-buffer Completed in 13875ms
npm timing reifyNode:node_modules/etag Completed in 13875ms
npm timing reifyNode:node_modules/estraverse Completed in 13875ms
npm timing reifyNode:node_modules/extglob Completed in 13877ms
npm timing reifyNode:node_modules/escape-string-regexp Completed in 13877ms
npm timing reifyNode:node_modules/escalade Completed in 13876ms
npm timing reifyNode:node_modules/error-ex Completed in 13877ms
npm timing reifyNode:node_modules/extsprintf Completed in 13879ms
npm timing reifyNode:node_modules/end-of-stream Completed in 13878ms
npm timing reifyNode:node_modules/encodeurl Completed in 13878ms
npm timing reifyNode:node_modules/escape-html Completed in 13879ms
npm timing reifyNode:node_modules/enabled Completed in 13879ms
npm timing reifyNode:node_modules/ecc-jsbn Completed in 13879ms
npm timing reifyNode:node_modules/filename-regex Completed in 13883ms
npm timing reifyNode:node_modules/emoji-regex Completed in 13880ms
npm timing reifyNode:node_modules/duplexer2 Completed in 13880ms
npm timing reifyNode:node_modules/emittery Completed in 13881ms
npm timing reifyNode:node_modules/duplexer Completed in 13881ms
npm timing reifyNode:node_modules/duplexify Completed in 13882ms
npm timing reifyNode:node_modules/download Completed in 13882ms
npm timing reifyNode:node_modules/dotenv Completed in 13882ms
npm timing reifyNode:node_modules/dont-sniff-mimetype Completed in 13882ms
npm timing reifyNode:node_modules/dom-walk Completed in 13882ms
npm timing reifyNode:node_modules/duplexer3 Completed in 13883ms
npm timing reifyNode:node_modules/diff-sequences Completed in 13883ms
npm timing reifyNode:node_modules/dezalgo Completed in 13883ms
npm timing reifyNode:node_modules/define-property Completed in 13885ms
npm timing reifyNode:node_modules/delayed-stream Completed in 13885ms
npm timing reifyNode:node_modules/deep-is Completed in 13886ms
npm timing reifyNode:node_modules/is-jpg Completed in 13894ms
npm timing reifyNode:node_modules/deep-extend Completed in 13886ms
npm timing reifyNode:node_modules/decompress-tar Completed in 13886ms
npm timing reifyNode:node_modules/fast-text-encoding Completed in 13891ms
npm timing reifyNode:node_modules/dot-prop Completed in 13888ms
npm timing reifyNode:node_modules/expand-template Completed in 13890ms
npm timing reifyNode:node_modules/each-async Completed in 13889ms
npm timing reifyNode:node_modules/dedent Completed in 13888ms
npm timing reifyNode:node_modules/decompress-response Completed in 13887ms
npm timing reifyNode:node_modules/decode-uri-component Completed in 13887ms
npm timing reifyNode:node_modules/decamelize Completed in 13888ms
npm timing reifyNode:node_modules/currently-unhandled Completed in 13888ms
npm timing reifyNode:node_modules/crypto-random-string Completed in 13888ms
npm timing reifyNode:node_modules/ee-first Completed in 13891ms
npm timing reifyNode:node_modules/dasherize Completed in 13889ms
npm timing reifyNode:node_modules/cryptiles Completed in 13889ms
npm timing reifyNode:node_modules/country-list Completed in 13890ms
npm timing reifyNode:node_modules/prepend-http Completed in 13907ms
npm timing reifyNode:node_modules/cookie Completed in 13891ms
npm timing reifyNode:node_modules/cookiejar Completed in 13891ms
npm timing reifyNode:node_modules/content-type Completed in 13892ms
npm timing reifyNode:node_modules/decompress Completed in 13892ms
npm timing reifyNode:node_modules/create-error-class Completed in 13892ms
npm timing reifyNode:node_modules/cookie-parser Completed in 13893ms
npm timing reifyNode:node_modules/configstore Completed in 13892ms
npm timing reifyNode:node_modules/convert-source-map Completed in 13893ms
npm timing reifyNode:node_modules/console-stream Completed in 13893ms
npm timing reifyNode:node_modules/content-security-policy-builder Completed in 13894ms
npm timing reifyNode:node_modules/compression Completed in 13893ms
npm timing reifyNode:node_modules/concat-map Completed in 13894ms
npm timing reifyNode:node_modules/compressible Completed in 13894ms
npm timing reifyNode:node_modules/component-emitter Completed in 13894ms
npm timing reifyNode:node_modules/colorspace Completed in 13895ms
npm timing reifyNode:node_modules/combined-stream Completed in 13895ms
npm timing reifyNode:node_modules/color-support Completed in 13895ms
npm timing reifyNode:node_modules/color-name Completed in 13896ms
npm timing reifyNode:node_modules/color-string Completed in 13896ms
npm timing reifyNode:node_modules/collection-visit Completed in 13896ms
npm timing reifyNode:node_modules/color-convert Completed in 13896ms
npm timing reifyNode:node_modules/dns-prefetch-control Completed in 13899ms
npm timing reifyNode:node_modules/color Completed in 13897ms
npm timing reifyNode:node_modules/clone-stats Completed in 13897ms
npm timing reifyNode:node_modules/co Completed in 13898ms
npm timing reifyNode:node_modules/content-disposition Completed in 13898ms
npm timing reifyNode:node_modules/class-utils Completed in 13898ms
npm timing reifyNode:node_modules/cli-boxes Completed in 13899ms
npm timing reifyNode:node_modules/concat-stream Completed in 13899ms
npm timing reifyNode:node_modules/ci-info Completed in 13898ms
npm timing reifyNode:node_modules/char-regex Completed in 13899ms
npm timing reifyNode:node_modules/commander Completed in 13900ms
npm timing reifyNode:node_modules/clone Completed in 13901ms
npm timing reifyNode:node_modules/copy-descriptor Completed in 13902ms
npm timing reifyNode:node_modules/chownr Completed in 13900ms
npm timing reifyNode:node_modules/jest Completed in 13912ms
npm timing reifyNode:node_modules/camelize Completed in 13893ms
npm timing reifyNode:node_modules/got Completed in 13909ms
npm timing reifyNode:node_modules/chokidar Completed in 13901ms
npm timing reifyNode:node_modules/camelcase Completed in 13894ms
npm timing reifyNode:node_modules/core-util-is Completed in 13904ms
npm timing reifyNode:node_modules/ecdsa-sig-formatter Completed in 13907ms
npm timing reifyNode:node_modules/cache-base Completed in 13895ms
npm timing reifyNode:node_modules/buffer-to-vinyl Completed in 13895ms
npm timing reifyNode:node_modules/chalk Completed in 13904ms
npm timing reifyNode:node_modules/buffer-equal Completed in 13896ms
npm timing reifyNode:node_modules/buffer-from Completed in 13896ms
npm timing reifyNode:node_modules/buffer-equal-constant-time Completed in 13897ms
npm timing reifyNode:node_modules/buffer-alloc-unsafe Completed in 13897ms
npm timing reifyNode:node_modules/buffer-crc32 Completed in 13897ms
npm timing reifyNode:node_modules/buffer-alloc Completed in 13897ms
npm timing reifyNode:node_modules/caw Completed in 13906ms
npm timing reifyNode:node_modules/brace-expansion Completed in 13898ms
npm timing reifyNode:node_modules/boom Completed in 13898ms
npm timing reifyNode:node_modules/boxen Completed in 13898ms
npm timing reifyNode:node_modules/has-ansi Completed in 13917ms
npm timing reifyNode:node_modules/bl Completed in 13899ms
npm timing reifyNode:node_modules/bindings Completed in 13899ms
npm timing reifyNode:node_modules/caseless Completed in 13901ms
npm timing reifyNode:node_modules/cookie-signature Completed in 13911ms
npm timing reifyNode:node_modules/bin-wrapper Completed in 13900ms
npm timing reifyNode:node_modules/bin-version-check Completed in 13901ms
npm timing reifyNode:node_modules/bin-version Completed in 13901ms
npm timing reifyNode:node_modules/bin-build Completed in 13901ms
npm timing reifyNode:node_modules/bin-check Completed in 13902ms
npm timing reifyNode:node_modules/collect-v8-coverage Completed in 13912ms
npm timing reifyNode:node_modules/bcrypt-pbkdf Completed in 13902ms
npm timing reifyNode:node_modules/basic-auth Completed in 13902ms
npm timing reifyNode:node_modules/base64-js Completed in 13902ms
npm timing reifyNode:node_modules/balanced-match Completed in 13902ms
npm timing reifyNode:node_modules/base Completed in 13902ms
npm timing reifyNode:node_modules/beeper Completed in 13904ms
npm timing reifyNode:node_modules/babel-preset-jest Completed in 13903ms
npm timing reifyNode:node_modules/babel-preset-current-node-syntax Completed in 13903ms
npm timing reifyNode:node_modules/babel-jest Completed in 13904ms
npm timing reifyNode:node_modules/binary-extensions Completed in 13905ms
npm timing reifyNode:node_modules/is-windows Completed in 13927ms
npm timing reifyNode:node_modules/atob Completed in 13905ms
npm timing reifyNode:node_modules/buffer-fill Completed in 13907ms
npm timing reifyNode:node_modules/inherits Completed in 13927ms
npm timing reifyNode:node_modules/bytes Completed in 13908ms
npm timing reifyNode:node_modules/assert-plus Completed in 13906ms
npm timing reifyNode:node_modules/aws4 Completed in 13907ms
npm timing reifyNode:node_modules/async-each-series Completed in 13907ms
npm timing reifyNode:node_modules/assign-symbols Completed in 13907ms
npm timing reifyNode:node_modules/asap Completed in 13908ms
npm timing reifyNode:node_modules/async-each Completed in 13908ms
npm timing reifyNode:node_modules/array-unique Completed in 13908ms
npm timing reifyNode:node_modules/array-series Completed in 13909ms
npm timing reifyNode:node_modules/arrify Completed in 13909ms
npm timing reifyNode:node_modules/array-flatten Completed in 13909ms
npm timing reifyNode:node_modules/aws-sign2 Completed in 13910ms
npm timing reifyNode:node_modules/capture-stack-trace Completed in 13912ms
npm timing reifyNode:node_modules/array-differ Completed in 13910ms
npm timing reifyNode:node_modules/arr-diff Completed in 13911ms
npm timing reifyNode:node_modules/array-find-index Completed in 13911ms
npm timing reifyNode:node_modules/array-parallel Completed in 13911ms
npm timing reifyNode:node_modules/arr-union Completed in 13912ms
npm timing reifyNode:node_modules/arr-flatten Completed in 13912ms
npm timing reifyNode:node_modules/anymatch Completed in 13912ms
npm timing reifyNode:node_modules/archive-type Completed in 13913ms
npm timing reifyNode:node_modules/any-base Completed in 13913ms
npm timing reifyNode:node_modules/ansi-gray Completed in 13912ms
npm timing reifyNode:node_modules/ansi-align Completed in 13913ms
npm timing reifyNode:node_modules/ansi-escapes Completed in 13913ms
npm timing reifyNode:node_modules/babel-plugin-istanbul Completed in 13915ms
npm timing reifyNode:node_modules/addressparser Completed in 13914ms
npm timing reifyNode:node_modules/acorn-jsx Completed in 13914ms
npm timing reifyNode:node_modules/accepts Completed in 13915ms
npm timing reifyNode:node_modules/@types/yargs-parser Completed in 13915ms
npm timing reifyNode:node_modules/ansi-wrap Completed in 13916ms
npm timing reifyNode:node_modules/array-uniq Completed in 13917ms
npm timing reifyNode:node_modules/@types/yargs Completed in 13916ms
npm timing reifyNode:node_modules/ansi-regex Completed in 13916ms
npm timing reifyNode:node_modules/array-union Completed in 13918ms
npm timing reifyNode:node_modules/@types/istanbul-reports Completed in 13917ms
npm timing reifyNode:node_modules/@types/minimatch Completed in 13917ms
npm timing reifyNode:node_modules/@types/istanbul-lib-coverage Completed in 13918ms
npm timing reifyNode:node_modules/@types/istanbul-lib-report Completed in 13918ms
npm timing reifyNode:node_modules/callsites Completed in 13921ms
npm timing reifyNode:node_modules/@types/graceful-fs Completed in 13919ms
npm timing reifyNode:node_modules/abbrev Completed in 13919ms
npm timing reifyNode:node_modules/@types/triple-beam Completed in 13919ms
npm timing reifyNode:node_modules/@types/stack-utils Completed in 13920ms
npm timing reifyNode:node_modules/@types/babel__generator Completed in 13920ms
npm timing reifyNode:node_modules/@types/babel__core Completed in 13920ms
npm timing reifyNode:node_modules/@types/babel__template Completed in 13921ms
npm timing reifyNode:node_modules/babel-plugin-jest-hoist Completed in 13922ms
npm timing reifyNode:node_modules/@jridgewell/set-array Completed in 13921ms
npm timing reifyNode:node_modules/@types/babel__traverse Completed in 13922ms
npm timing reifyNode:node_modules/@jimp/utils Completed in 13922ms
npm timing reifyNode:node_modules/@jimp/plugins Completed in 13922ms
npm timing reifyNode:node_modules/ansi-styles Completed in 13925ms
npm timing reifyNode:node_modules/@jimp/plugin-invert Completed in 13924ms
npm timing reifyNode:node_modules/@jimp/types Completed in 13924ms
npm timing reifyNode:node_modules/@jimp/plugin-dither Completed in 13925ms
npm timing reifyNode:node_modules/@jest/source-map Completed in 13926ms
npm timing reifyNode:node_modules/@jest/globals Completed in 13927ms
npm timing reifyNode:node_modules/@jest/expect-utils Completed in 13927ms
npm timing reifyNode:node_modules/@jest/console Completed in 13928ms
npm timing reifyNode:node_modules/@istanbuljs/schema Completed in 13928ms
npm timing reifyNode:node_modules/@istanbuljs/load-nyc-config Completed in 13928ms
npm timing reifyNode:node_modules/@jest/schemas Completed in 13929ms
npm timing reifyNode:node_modules/@jimp/gif Completed in 13929ms
npm timing reifyNode:node_modules/@jest/expect Completed in 13930ms
npm timing reifyNode:node_modules/@babel/plugin-syntax-typescript Completed in 13930ms
npm timing reifyNode:node_modules/@babel/plugin-syntax-top-level-await Completed in 13930ms
npm timing reifyNode:node_modules/@babel/plugin-syntax-optional-chaining Completed in 13930ms
npm timing reifyNode:node_modules/@babel/plugin-syntax-optional-catch-binding Completed in 13931ms
npm timing reifyNode:node_modules/@babel/plugin-syntax-nullish-coalescing-operator Completed in 13931ms
npm timing reifyNode:node_modules/@babel/plugin-syntax-numeric-separator Completed in 13931ms
npm timing reifyNode:node_modules/@jest/test-sequencer Completed in 13933ms
npm timing reifyNode:node_modules/@babel/plugin-syntax-json-strings Completed in 13932ms
npm timing reifyNode:node_modules/@jest/fake-timers Completed in 13934ms
npm timing reifyNode:node_modules/@babel/plugin-syntax-async-generators Completed in 13933ms
npm timing reifyNode:node_modules/detect-libc Completed in 13949ms
npm timing reifyNode:node_modules/decompress-targz Completed in 13950ms
npm timing reifyNode:node_modules/@babel/helper-validator-option Completed in 13933ms
npm timing reifyNode:node_modules/@babel/plugin-syntax-bigint Completed in 13934ms
npm timing reifyNode:node_modules/@babel/helper-split-export-declaration Completed in 13934ms
npm timing reifyNode:node_modules/@babel/helper-simple-access Completed in 13934ms
npm timing reifyNode:node_modules/@babel/helper-plugin-utils Completed in 13934ms
npm timing reifyNode:node_modules/@babel/plugin-syntax-class-properties Completed in 13936ms
npm timing reifyNode:node_modules/@babel/helper-hoist-variables Completed in 13936ms
npm timing reifyNode:node_modules/@babel/helper-environment-visitor Completed in 13936ms
npm timing reifyNode:node_modules/camelcase-keys Completed in 13942ms
npm timing reifyNode:node_modules/bser Completed in 13942ms
npm timing reifyNode:node_modules/@babel/code-frame Completed in 13937ms
npm timing reifyNode:node_modules/yargs/node_modules/is-fullwidth-code-point Completed in 13983ms
npm timing reifyNode:node_modules/@babel/helper-string-parser Completed in 13938ms
npm timing reifyNode:node_modules/yargs/node_modules/string-width Completed in 13983ms
npm timing reifyNode:node_modules/@jest/environment Completed in 13941ms
npm timing reifyNode:node_modules/vinyl-fs/node_modules/strip-bom Completed in 13983ms
npm timing reifyNode:node_modules/url/node_modules/punycode Completed in 13981ms
npm timing reifyNode:node_modules/vinyl-fs/node_modules/through2 Completed in 13984ms
npm timing reifyNode:node_modules/update-notifier/node_modules/supports-color Completed in 13982ms
npm timing reifyNode:node_modules/verror/node_modules/core-util-is Completed in 13984ms
npm timing reifyNode:node_modules/wrap-fn/node_modules/co Completed in 13985ms
npm timing reifyNode:node_modules/uri-js/node_modules/punycode Completed in 13982ms
npm timing reifyNode:node_modules/update-notifier/node_modules/color-convert Completed in 13982ms
npm timing reifyNode:node_modules/wrap-ansi/node_modules/string-width Completed in 13986ms
npm timing reifyNode:node_modules/@humanwhocodes/config-array Completed in 13943ms
npm timing reifyNode:node_modules/update-notifier/node_modules/ansi-styles Completed in 13983ms
npm timing reifyNode:node_modules/unset-value/node_modules/isobject Completed in 13983ms
npm timing reifyNode:node_modules/unset-value/node_modules/has-values Completed in 13984ms
npm timing reifyNode:node_modules/unique-stream/node_modules/through2-filter Completed in 13983ms
npm timing reifyNode:node_modules/vinyl/node_modules/replace-ext Completed in 13989ms
npm timing reifyNode:node_modules/unset-value/node_modules/has-value Completed in 13987ms
npm timing reifyNode:node_modules/unset-value/node_modules/has-value/node_modules/isobject Completed in 13988ms
npm timing reifyNode:node_modules/unique-stream/node_modules/through2 Completed in 13987ms
npm timing reifyNode:node_modules/to-regex/node_modules/is-extendable Completed in 13986ms
npm timing reifyNode:node_modules/trim-repeated/node_modules/escape-string-regexp Completed in 13988ms
npm timing reifyNode:node_modules/update-notifier/node_modules/color-name Completed in 13989ms
npm timing reifyNode:node_modules/through2/node_modules/string_decoder Completed in 13988ms
npm timing reifyNode:node_modules/update-notifier/node_modules/chalk Completed in 13990ms
npm timing reifyNode:node_modules/to-regex/node_modules/extend-shallow Completed in 13989ms
npm timing reifyNode:node_modules/through2/node_modules/isarray Completed in 13988ms
npm timing reifyNode:node_modules/update-notifier/node_modules/escape-string-regexp Completed in 13992ms
npm timing reifyNode:node_modules/through2-filter/node_modules/through2 Completed in 13990ms
npm timing reifyNode:node_modules/tar-fs/node_modules/tar-stream Completed in 13990ms
npm timing reifyNode:node_modules/superagent/node_modules/debug Completed in 13990ms
npm timing reifyNode:node_modules/sum-up/node_modules/strip-ansi Completed in 13990ms
npm timing reifyNode:node_modules/sum-up/node_modules/supports-color Completed in 13991ms
npm timing reifyNode:node_modules/sum-up/node_modules/escape-string-regexp Completed in 13991ms
npm timing reifyNode:node_modules/tar-fs/node_modules/inherits Completed in 13992ms
npm timing reifyNode:node_modules/sum-up/node_modules/chalk Completed in 13991ms
npm timing reifyNode:node_modules/strip-outer/node_modules/escape-string-regexp Completed in 13992ms
npm timing reifyNode:node_modules/superagent/node_modules/form-data Completed in 13993ms
npm timing reifyNode:node_modules/sum-up/node_modules/ansi-styles Completed in 13994ms
npm timing reifyNode:node_modules/strip-dirs/node_modules/strip-ansi Completed in 13995ms
npm timing reifyNode:node_modules/superagent/node_modules/ms Completed in 13995ms
npm timing reifyNode:node_modules/strip-dirs/node_modules/chalk Completed in 13996ms
npm timing reifyNode:node_modules/strip-dirs/node_modules/ansi-styles Completed in 13996ms
npm timing reifyNode:node_modules/wrap-ansi/node_modules/is-fullwidth-code-point Completed in 14004ms
npm timing reifyNode:node_modules/vinyl-fs/node_modules/merge-stream Completed in 14005ms
npm timing reifyNode:node_modules/@babel/plugin-syntax-logical-assignment-operators Completed in 13962ms
npm timing reifyNode:node_modules/static-extend/node_modules/is-descriptor/node_modules/kind-of Completed in 13998ms
npm timing reifyNode:node_modules/static-extend/node_modules/is-accessor-descriptor Completed in 13998ms
npm timing reifyNode:node_modules/squeak/node_modules/supports-color Completed in 13999ms
npm timing reifyNode:node_modules/squeak/node_modules/strip-ansi Completed in 13999ms
npm timing reifyNode:node_modules/squeak/node_modules/ansi-styles Completed in 14000ms
npm timing reifyNode:node_modules/string-width/node_modules/strip-ansi Completed in 14000ms
npm timing reifyNode:node_modules/split-string/node_modules/extend-shallow Completed in 14001ms
npm timing reifyNode:node_modules/update-notifier/node_modules/has-flag Completed in 14006ms
npm timing reifyNode:node_modules/squeak/node_modules/chalk Completed in 14002ms
npm timing reifyNode:node_modules/squeak/node_modules/ansi-regex Completed in 14002ms
npm timing reifyNode:node_modules/stack-utils/node_modules/escape-string-regexp Completed in 14002ms
npm timing reifyNode:node_modules/decompress-unzip Completed in 13984ms
npm timing reifyNode:node_modules/snapdragon-node/node_modules/isobject Completed in 14002ms
npm timing reifyNode:node_modules/snapdragon-node/node_modules/is-data-descriptor Completed in 14003ms
npm timing reifyNode:node_modules/snapdragon-node/node_modules/is-descriptor Completed in 14003ms
npm timing reifyNode:node_modules/snapdragon-node/node_modules/is-accessor-descriptor Completed in 14004ms
npm timing reifyNode:node_modules/split-string/node_modules/is-extendable Completed in 14005ms
npm timing reifyNode:node_modules/strip-dirs/node_modules/ansi-regex Completed in 14006ms
npm timing reifyNode:node_modules/snapdragon/node_modules/is-descriptor Completed in 14005ms
npm timing reifyNode:node_modules/snapdragon-node/node_modules/define-property Completed in 14005ms
npm timing reifyNode:node_modules/@babel/plugin-syntax-import-meta Completed in 13971ms
npm timing reifyNode:node_modules/snapdragon/node_modules/define-property Completed in 14006ms
npm timing reifyNode:node_modules/snapdragon/node_modules/is-accessor-descriptor Completed in 14006ms
npm timing reifyNode:node_modules/squeak/node_modules/escape-string-regexp Completed in 14008ms
npm timing reifyNode:node_modules/sharp/node_modules/tunnel-agent Completed in 14007ms
npm timing reifyNode:node_modules/snapdragon-node/node_modules/kind-of Completed in 14007ms
npm timing reifyNode:node_modules/send/node_modules/ms Completed in 14008ms
npm timing reifyNode:node_modules/@babel/helper-function-name Completed in 13973ms
npm timing reifyNode:node_modules/json-parse-even-better-errors Completed in 14000ms
npm timing reifyNode:node_modules/strip-dirs/node_modules/supports-color Completed in 14011ms
npm timing reifyNode:node_modules/semver-truncate/node_modules/semver Completed in 14009ms
npm timing reifyNode:node_modules/static-extend/node_modules/is-descriptor Completed in 14011ms
npm timing reifyNode:node_modules/snapdragon/node_modules/is-data-descriptor Completed in 14010ms
npm timing reifyNode:node_modules/send/node_modules/inherits Completed in 14010ms
npm timing reifyNode:node_modules/send/node_modules/on-finished Completed in 14011ms
npm timing reifyNode:node_modules/request/node_modules/tunnel-agent Completed in 14010ms
npm timing reifyNode:node_modules/resolve-cwd/node_modules/resolve-from Completed in 14010ms
npm timing reifyNode:node_modules/regex-not/node_modules/is-extendable Completed in 14011ms
npm timing reifyNode:node_modules/readdirp/node_modules/ms Completed in 14011ms
npm timing reifyNode:node_modules/readdirp/node_modules/micromatch/node_modules/extend-shallow Completed in 14011ms
npm timing reifyNode:node_modules/readdirp/node_modules/kind-of Completed in 14012ms
npm timing reifyNode:node_modules/semver-diff/node_modules/semver Completed in 14013ms
npm timing reifyNode:node_modules/readdirp/node_modules/isobject Completed in 14013ms
npm timing reifyNode:node_modules/snapdragon/node_modules/is-descriptor/node_modules/kind-of Completed in 14014ms
npm timing reifyNode:node_modules/readdirp/node_modules/is-descriptor Completed in 14013ms
npm timing reifyNode:node_modules/readdirp/node_modules/is-number/node_modules/kind-of Completed in 14014ms
npm timing reifyNode:node_modules/readdirp/node_modules/is-data-descriptor Completed in 14014ms
npm timing reifyNode:node_modules/send/node_modules/debug/node_modules/ms Completed in 14015ms
npm timing reifyNode:node_modules/readdirp/node_modules/is-data-descriptor/node_modules/kind-of Completed in 14015ms
npm timing reifyNode:node_modules/tar-stream Completed in 14019ms
npm timing reifyNode:node_modules/regex-not/node_modules/extend-shallow Completed in 14016ms
npm timing reifyNode:node_modules/readdirp/node_modules/is-accessor-descriptor Completed in 14016ms
npm timing reifyNode:node_modules/readdirp/node_modules/expand-brackets Completed in 14016ms
npm timing reifyNode:node_modules/readdirp/node_modules/expand-brackets/node_modules/extend-shallow Completed in 14017ms
npm timing reifyNode:node_modules/strip-dirs/node_modules/escape-string-regexp Completed in 14020ms
npm timing reifyNode:node_modules/string-width/node_modules/ansi-regex Completed in 14019ms
npm timing reifyNode:node_modules/readdirp/node_modules/expand-brackets/node_modules/kind-of Completed in 14018ms
npm timing reifyNode:node_modules/readdirp/node_modules/expand-brackets/node_modules/is-descriptor Completed in 14018ms
npm timing reifyNode:node_modules/readdirp/node_modules/is-extendable Completed in 14018ms
npm timing reifyNode:node_modules/readdirp/node_modules/is-number Completed in 14019ms
npm timing reifyNode:node_modules/readdirp/node_modules/expand-brackets/node_modules/define-property Completed in 14019ms
npm timing reifyNode:node_modules/read-pkg-up/node_modules/find-up Completed in 14018ms
npm timing reifyNode:node_modules/randomatic/node_modules/kind-of Completed in 14019ms
npm timing reifyNode:node_modules/readdirp/node_modules/braces Completed in 14020ms
npm timing reifyNode:node_modules/read-pkg-up/node_modules/path-exists Completed in 14019ms
npm timing reifyNode:node_modules/rc/node_modules/strip-json-comments Completed in 14020ms
npm timing reifyNode:node_modules/randomatic/node_modules/is-number Completed in 14020ms
npm timing reifyNode:node_modules/strip-bom-stream/node_modules/strip-bom Completed in 14023ms
npm timing reifyNode:node_modules/send/node_modules/depd Completed in 14023ms
npm timing reifyNode:node_modules/pretty-quick/node_modules/p-locate Completed in 14021ms
npm timing reifyNode:node_modules/readdirp/node_modules/fill-range Completed in 14022ms
npm timing reifyNode:node_modules/readdirp/node_modules/braces/node_modules/extend-shallow Completed in 14022ms
npm timing reifyNode:node_modules/readdirp/node_modules/is-accessor-descriptor/node_modules/kind-of Completed in 14023ms
npm timing reifyNode:node_modules/readdirp/node_modules/array-unique Completed in 14022ms
npm timing reifyNode:node_modules/pretty-quick/node_modules/onetime Completed in 14031ms
npm timing reifyNode:node_modules/pretty-quick/node_modules/find-up Completed in 14031ms
npm timing reifyNode:node_modules/readdirp/node_modules/arr-diff Completed in 14032ms
npm timing reifyNode:node_modules/pkg-dir/node_modules/p-locate Completed in 14032ms
npm timing reifyNode:node_modules/pretty-format/node_modules/ansi-styles Completed in 14033ms
npm timing reifyNode:node_modules/prebuild-install/node_modules/tunnel-agent Completed in 14033ms
npm timing reifyNode:node_modules/pretty-quick/node_modules/locate-path Completed in 14034ms
npm timing reifyNode:node_modules/pkg-dir/node_modules/p-limit Completed in 14033ms
npm timing reifyNode:node_modules/pretty-quick/node_modules/chalk Completed in 14034ms
npm timing reifyNode:node_modules/pkg-dir/node_modules/find-up Completed in 14034ms
npm timing reifyNode:node_modules/parse-glob/node_modules/is-glob Completed in 14034ms
npm timing reifyNode:node_modules/parse-glob/node_modules/is-extglob Completed in 14035ms
npm timing reifyNode:node_modules/pretty-quick/node_modules/npm-run-path Completed in 14036ms
npm timing reifyNode:node_modules/package-json/node_modules/is-stream Completed in 14035ms
npm timing reifyNode:node_modules/package-json/node_modules/timed-out Completed in 14036ms
npm timing reifyNode:node_modules/package-json/node_modules/semver Completed in 14036ms
npm timing reifyNode:node_modules/pretty-quick/node_modules/get-stream Completed in 14038ms
npm timing reifyNode:node_modules/pkg-dir/node_modules/locate-path Completed in 14037ms
npm timing reifyNode:node_modules/package-json/node_modules/got Completed in 14037ms
npm timing reifyNode:node_modules/static-extend/node_modules/is-data-descriptor Completed in 14041ms
npm timing reifyNode:node_modules/@babel/helper-module-imports Completed in 14006ms
npm timing reifyNode:node_modules/ordered-read-streams/node_modules/is-stream Completed in 14037ms
npm timing reifyNode:node_modules/object-copy/node_modules/is-accessor-descriptor Completed in 14037ms
npm timing reifyNode:node_modules/object-copy/node_modules/is-descriptor/node_modules/kind-of Completed in 14038ms
npm timing reifyNode:node_modules/nodemon/node_modules/ms Completed in 14038ms
npm timing reifyNode:node_modules/send/node_modules/http-errors Completed in 14042ms
npm timing reifyNode:node_modules/normalize-package-data/node_modules/semver Completed in 14039ms
npm timing reifyNode:node_modules/object-visit/node_modules/isobject Completed in 14039ms
npm timing reifyNode:node_modules/object-copy/node_modules/is-descriptor Completed in 14039ms
npm timing reifyNode:node_modules/object-copy/node_modules/is-data-descriptor Completed in 14040ms
npm timing reifyNode:node_modules/pretty-quick/node_modules/p-limit Completed in 14042ms
npm timing reifyNode:node_modules/nanomatch/node_modules/extend-shallow Completed in 14039ms
npm timing reifyNode:node_modules/npm-run-path/node_modules/path-key Completed in 14041ms
npm timing reifyNode:node_modules/nanomatch/node_modules/kind-of Completed in 14040ms
npm timing reifyNode:node_modules/nanomatch/node_modules/arr-diff Completed in 14040ms
npm timing reifyNode:node_modules/nanomatch/node_modules/array-unique Completed in 14041ms
npm timing reifyNode:node_modules/multiparty/node_modules/statuses Completed in 14041ms
npm timing reifyNode:node_modules/multipipe/node_modules/string_decoder Completed in 14041ms
npm timing reifyNode:node_modules/multipipe/node_modules/isarray Completed in 14042ms
npm timing reifyNode:node_modules/multiparty/node_modules/safe-buffer Completed in 14042ms
npm timing reifyNode:node_modules/multipipe/node_modules/duplexer2 Completed in 14042ms
npm timing reifyNode:node_modules/multiparty/node_modules/inherits Completed in 14043ms
npm timing reifyNode:node_modules/package-json/node_modules/unzip-response Completed in 14045ms
npm timing reifyNode:node_modules/multiparty/node_modules/http-errors Completed in 14043ms
npm timing reifyNode:node_modules/object-copy/node_modules/define-property Completed in 14045ms
npm timing reifyNode:node_modules/morgan/node_modules/depd Completed in 14044ms
npm timing reifyNode:node_modules/messagebird/node_modules/safe-buffer Completed in 14043ms
npm timing reifyNode:node_modules/multimatch/node_modules/array-union Completed in 14045ms
npm timing reifyNode:node_modules/logform/node_modules/ms Completed in 14043ms
npm timing reifyNode:node_modules/make-dir/node_modules/pify Completed in 14045ms
npm timing reifyNode:node_modules/jest-worker/node_modules/supports-color Completed in 14043ms
npm timing reifyNode:node_modules/load-json-file/node_modules/parse-json Completed in 14044ms
npm timing reifyNode:node_modules/jest-runtime/node_modules/onetime Completed in 14044ms
npm timing reifyNode:node_modules/jest-validate/node_modules/camelcase Completed in 14044ms
npm timing reifyNode:node_modules/multimatch/node_modules/array-differ Completed in 14047ms
npm timing reifyNode:node_modules/jest-changed-files/node_modules/onetime Completed in 14044ms
npm timing reifyNode:node_modules/jest-runtime/node_modules/npm-run-path Completed in 14045ms
npm timing reifyNode:node_modules/jest-changed-files/node_modules/npm-run-path Completed in 14045ms
npm timing reifyNode:node_modules/morgan/node_modules/ms Completed in 14049ms
npm timing reifyNode:node_modules/static-extend/node_modules/define-property Completed in 14055ms
npm timing reifyNode:node_modules/jest-changed-files/node_modules/get-stream Completed in 14045ms
npm timing reifyNode:node_modules/istanbul-lib-source-maps/node_modules/debug Completed in 14046ms
npm timing reifyNode:node_modules/is-ci/node_modules/ci-info Completed in 14045ms
npm timing reifyNode:node_modules/jest-runtime/node_modules/get-stream Completed in 14048ms
npm timing reifyNode:node_modules/is-installed-globally/node_modules/is-path-inside Completed in 14046ms
npm timing reifyNode:node_modules/is-plain-object/node_modules/isobject Completed in 14047ms
npm timing reifyNode:node_modules/istanbul-lib-report/node_modules/make-dir Completed in 14048ms
npm timing reifyNode:node_modules/mixin-deep/node_modules/is-extendable Completed in 14051ms
npm timing reifyNode:node_modules/imagemin-mozjpeg/node_modules/which Completed in 14046ms
npm timing reifyNode:node_modules/imagemin-mozjpeg/node_modules/execa Completed in 14047ms
npm timing reifyNode:node_modules/https-proxy-agent/node_modules/debug Completed in 14047ms
npm timing reifyNode:node_modules/imagemin-mozjpeg/node_modules/shebang-regex Completed in 14047ms
npm timing reifyNode:node_modules/imagemin-mozjpeg/node_modules/lru-cache Completed in 14048ms
npm timing reifyNode:node_modules/http-errors/node_modules/statuses Completed in 14048ms
npm timing reifyNode:node_modules/imagemin-mozjpeg/node_modules/yallist Completed in 14050ms
npm timing reifyNode:node_modules/has-values/node_modules/kind-of Completed in 14048ms
npm timing reifyNode:node_modules/http-errors/node_modules/setprototypeof Completed in 14049ms
npm timing reifyNode:node_modules/https-proxy-agent/node_modules/ms Completed in 14049ms
npm timing reifyNode:node_modules/has-values/node_modules/is-number/node_modules/kind-of Completed in 14049ms
npm timing reifyNode:node_modules/imagemin-mozjpeg/node_modules/is-stream Completed in 14050ms
npm timing reifyNode:node_modules/@jest/test-result Completed in 14029ms
npm timing reifyNode:node_modules/har-validator/node_modules/fast-deep-equal Completed in 14050ms
npm timing reifyNode:node_modules/gulp-util/node_modules/through2 Completed in 14050ms
npm timing reifyNode:node_modules/gulp-util/node_modules/vinyl Completed in 14050ms
npm timing reifyNode:node_modules/gulp-util/node_modules/supports-color Completed in 14051ms
npm timing reifyNode:node_modules/gulp-util/node_modules/strip-ansi Completed in 14051ms
npm timing reifyNode:node_modules/gulp-util/node_modules/replace-ext Completed in 14051ms
npm timing reifyNode:node_modules/gulp-util/node_modules/object-assign Completed in 14052ms
npm timing reifyNode:node_modules/gulp-util/node_modules/chalk Completed in 14052ms
npm timing reifyNode:node_modules/gulp-util/node_modules/escape-string-regexp Completed in 14052ms
npm timing reifyNode:node_modules/gulp-util/node_modules/ansi-styles Completed in 14053ms
npm timing reifyNode:node_modules/gulp-util/node_modules/ansi-regex Completed in 14054ms
npm timing reifyNode:node_modules/got/node_modules/is-stream Completed in 14054ms
npm timing reifyNode:node_modules/nanomatch/node_modules/is-extendable Completed in 14062ms
npm timing reifyNode:node_modules/@babel/plugin-syntax-object-rest-spread Completed in 14034ms
npm timing reifyNode:node_modules/gm/node_modules/yallist Completed in 14056ms
npm timing reifyNode:node_modules/gm/node_modules/lru-cache Completed in 14056ms
npm timing reifyNode:node_modules/imagemin-mozjpeg/node_modules/shebang-command Completed in 14059ms
npm timing reifyNode:node_modules/gm/node_modules/cross-spawn Completed in 14058ms
npm timing reifyNode:node_modules/gm/node_modules/which Completed in 14058ms
npm timing reifyNode:node_modules/gm/node_modules/ms Completed in 14058ms
npm timing reifyNode:node_modules/has-value/node_modules/isobject Completed in 14060ms
npm timing reifyNode:node_modules/@babel/highlight Completed in 14038ms
npm timing reifyNode:node_modules/glob-stream/node_modules/is-glob Completed in 14059ms
npm timing reifyNode:node_modules/glob-stream/node_modules/glob-parent Completed in 14059ms
npm timing reifyNode:node_modules/glob-stream/node_modules/normalize-path Completed in 14060ms
npm timing reifyNode:node_modules/glob-base/node_modules/is-glob Completed in 14060ms
npm timing reifyNode:node_modules/has-ansi/node_modules/ansi-regex Completed in 14061ms
npm timing reifyNode:node_modules/has-values/node_modules/is-number Completed in 14062ms
npm timing reifyNode:node_modules/glob-stream/node_modules/braces Completed in 14061ms
npm timing reifyNode:node_modules/glob-base/node_modules/is-extglob Completed in 14061ms
npm timing reifyNode:node_modules/glob-stream/node_modules/glob Completed in 14062ms
npm timing reifyNode:node_modules/glob-base/node_modules/glob-parent Completed in 14062ms
npm timing reifyNode:node_modules/glob-stream/node_modules/micromatch/node_modules/is-glob Completed in 14062ms
npm timing reifyNode:node_modules/got/node_modules/parse-json Completed in 14063ms
npm timing reifyNode:node_modules/express/node_modules/safe-buffer Completed in 14061ms
npm timing reifyNode:node_modules/express/node_modules/raw-body Completed in 14061ms
npm timing reifyNode:node_modules/gulp-sourcemaps/node_modules/through2 Completed in 14065ms
npm timing reifyNode:node_modules/finalhandler/node_modules/ms Completed in 14063ms
npm timing reifyNode:node_modules/express/node_modules/on-finished Completed in 14062ms
npm timing reifyNode:node_modules/finalhandler/node_modules/on-finished Completed in 14064ms
npm timing reifyNode:node_modules/express/node_modules/depd Completed in 14063ms
npm timing reifyNode:node_modules/extglob/node_modules/is-extglob Completed in 14064ms
npm timing reifyNode:node_modules/express/node_modules/bytes Completed in 14064ms
npm timing reifyNode:node_modules/expand-range/node_modules/fill-range Completed in 14064ms
npm timing reifyNode:node_modules/express/node_modules/http-errors Completed in 14065ms
npm timing reifyNode:node_modules/execa/node_modules/lru-cache Completed in 14064ms
npm timing reifyNode:node_modules/execa/node_modules/shebang-command Completed in 14064ms
npm timing reifyNode:node_modules/execa/node_modules/is-stream Completed in 14065ms
npm timing reifyNode:node_modules/express/node_modules/cookie Completed in 14066ms
npm timing reifyNode:node_modules/express/node_modules/inherits Completed in 14066ms
npm timing reifyNode:node_modules/express/node_modules/ms Completed in 14067ms
npm timing reifyNode:node_modules/exec-buffer/node_modules/pify Completed in 14066ms
npm timing reifyNode:node_modules/execa/node_modules/shebang-regex Completed in 14066ms
npm timing reifyNode:node_modules/eslint-utils/node_modules/eslint-visitor-keys Completed in 14067ms
npm timing reifyNode:node_modules/expand-range/node_modules/is-number Completed in 14068ms
npm timing reifyNode:node_modules/eslint/node_modules/debug Completed in 14067ms
npm timing reifyNode:node_modules/define-property/node_modules/kind-of Completed in 14066ms
npm timing reifyNode:node_modules/define-property/node_modules/is-descriptor Completed in 14066ms
npm timing reifyNode:node_modules/exec-buffer/node_modules/rimraf Completed in 14068ms
npm timing reifyNode:node_modules/define-property/node_modules/isobject Completed in 14067ms
npm timing reifyNode:node_modules/eslint/node_modules/ms Completed in 14069ms
npm timing reifyNode:node_modules/decompress-targz/node_modules/vinyl Completed in 14067ms
npm timing reifyNode:node_modules/decompress-tarbz2/node_modules/vinyl Completed in 14068ms
npm timing reifyNode:node_modules/execa/node_modules/yallist Completed in 14070ms
npm timing reifyNode:node_modules/decompress-targz/node_modules/clone Completed in 14068ms
npm timing reifyNode:node_modules/decompress-tarbz2/node_modules/clone Completed in 14068ms
npm timing reifyNode:node_modules/decompress-unzip/node_modules/through2 Completed in 14069ms
npm timing reifyNode:node_modules/decompress-tarbz2/node_modules/object-assign Completed in 14069ms
npm timing reifyNode:node_modules/define-property/node_modules/is-data-descriptor Completed in 14069ms
npm timing reifyNode:node_modules/decompress-targz/node_modules/object-assign Completed in 14070ms
npm timing reifyNode:node_modules/define-property/node_modules/is-accessor-descriptor Completed in 14070ms
npm timing reifyNode:node_modules/decompress-tar/node_modules/vinyl Completed in 14069ms
npm timing reifyNode:node_modules/content-disposition/node_modules/safe-buffer Completed in 14069ms
npm timing reifyNode:node_modules/decompress-tar/node_modules/object-assign Completed in 14070ms
npm timing reifyNode:node_modules/compression/node_modules/ms Completed in 14069ms
npm timing reifyNode:node_modules/cryptiles/node_modules/boom Completed in 14071ms
npm timing reifyNode:node_modules/decompress-tar/node_modules/clone Completed in 14071ms
npm timing reifyNode:node_modules/execa/node_modules/which Completed in 14074ms
npm timing reifyNode:node_modules/cliui/node_modules/string-width Completed in 14071ms
npm timing reifyNode:node_modules/colorspace/node_modules/color-convert Completed in 14071ms
npm timing reifyNode:node_modules/colorspace/node_modules/color Completed in 14071ms
npm timing reifyNode:node_modules/configstore/node_modules/write-file-atomic Completed in 14072ms
npm timing reifyNode:node_modules/class-utils/node_modules/is-descriptor/node_modules/kind-of Completed in 14071ms
npm timing reifyNode:node_modules/gulp-sourcemaps/node_modules/strip-bom Completed in 14080ms
npm timing reifyNode:node_modules/class-utils/node_modules/isobject Completed in 14071ms
npm timing reifyNode:node_modules/chokidar/node_modules/is-glob Completed in 14072ms
npm timing reifyNode:node_modules/cliui/node_modules/is-fullwidth-code-point Completed in 14073ms
npm timing reifyNode:node_modules/class-utils/node_modules/define-property Completed in 14072ms
npm timing reifyNode:node_modules/class-utils/node_modules/is-descriptor Completed in 14073ms
npm timing reifyNode:node_modules/caw/node_modules/object-assign Completed in 14073ms
npm timing reifyNode:node_modules/compression/node_modules/bytes Completed in 14074ms
npm timing reifyNode:node_modules/colorspace/node_modules/color-name Completed in 14075ms
npm timing reifyNode:node_modules/chokidar/node_modules/is-extglob Completed in 14074ms
npm timing reifyNode:node_modules/chokidar/node_modules/normalize-path Completed in 14074ms
npm timing reifyNode:node_modules/cache-base/node_modules/isobject Completed in 14067ms
npm timing reifyNode:node_modules/camelcase-keys/node_modules/camelcase Completed in 14067ms
npm timing reifyNode:node_modules/class-utils/node_modules/is-data-descriptor Completed in 14075ms
npm timing reifyNode:node_modules/chokidar/node_modules/glob-parent Completed in 14076ms
npm timing reifyNode:node_modules/boxen/node_modules/escape-string-regexp Completed in 14067ms
npm timing reifyNode:node_modules/boxen/node_modules/color-convert Completed in 14067ms
npm timing reifyNode:node_modules/simple-swizzle/node_modules/is-arrayish Completed in 14098ms
npm timing reifyNode:node_modules/object.pick/node_modules/isobject Completed in 14094ms
npm timing reifyNode:node_modules/boxen/node_modules/ansi-styles Completed in 14069ms
npm timing reifyNode:node_modules/bin-build/node_modules/rimraf Completed in 14069ms
npm timing reifyNode:node_modules/bin-build/node_modules/tempfile Completed in 14069ms
npm timing reifyNode:node_modules/class-utils/node_modules/is-accessor-descriptor Completed in 14079ms
npm timing reifyNode:node_modules/base/node_modules/kind-of Completed in 14069ms
npm timing reifyNode:node_modules/basic-auth/node_modules/safe-buffer Completed in 14071ms
npm timing reifyNode:node_modules/base/node_modules/isobject Completed in 14070ms
npm timing reifyNode:node_modules/base/node_modules/is-descriptor Completed in 14070ms
npm timing reifyNode:node_modules/base/node_modules/is-accessor-descriptor Completed in 14071ms
npm timing reifyNode:node_modules/boxen/node_modules/color-name Completed in 14072ms
npm timing reifyNode:node_modules/boxen/node_modules/chalk Completed in 14072ms
npm timing reifyNode:node_modules/archive-type/node_modules/file-type Completed in 14072ms
npm timing reifyNode:node_modules/@istanbuljs/load-nyc-config/node_modules/resolve-from Completed in 14070ms
npm timing reifyNode:node_modules/agent-base/node_modules/debug Completed in 14071ms
npm timing reifyNode:node_modules/base/node_modules/is-data-descriptor Completed in 14073ms
npm timing reifyNode:node_modules/@istanbuljs/load-nyc-config/node_modules/p-locate Completed in 14071ms
npm timing reifyNode:node_modules/@jimp/core/node_modules/file-type Completed in 14071ms
npm timing reifyNode:node_modules/@istanbuljs/load-nyc-config/node_modules/p-limit Completed in 14072ms
npm timing reifyNode:node_modules/@istanbuljs/load-nyc-config/node_modules/find-up Completed in 14071ms
npm timing reifyNode:node_modules/boxen/node_modules/camelcase Completed in 14075ms
npm timing reifyNode:node_modules/boxen/node_modules/has-flag Completed in 14076ms
npm timing reifyNode:node_modules/sum-up/node_modules/ansi-regex Completed in 14108ms
npm timing reifyNode:node_modules/@humanwhocodes/config-array/node_modules/ms Completed in 14072ms
npm timing reifyNode:node_modules/chokidar/node_modules/braces Completed in 14086ms
npm timing reifyNode:node_modules/chokidar/node_modules/anymatch Completed in 14086ms
npm timing reifyNode:node_modules/@humanwhocodes/config-array/node_modules/debug Completed in 14073ms
npm timing reifyNode:node_modules/@babel/traverse/node_modules/globals Completed in 14074ms
npm timing reifyNode:node_modules/agent-base/node_modules/ms Completed in 14076ms
npm timing reifyNode:node_modules/@babel/highlight/node_modules/supports-color Completed in 14074ms
npm timing reifyNode:node_modules/@babel/traverse/node_modules/ms Completed in 14075ms
npm timing reifyNode:node_modules/@babel/traverse/node_modules/debug Completed in 14075ms
npm timing reifyNode:node_modules/buffer-to-vinyl/node_modules/file-type Completed in 14080ms
npm timing reifyNode:node_modules/@babel/highlight/node_modules/color-convert Completed in 14075ms
npm timing reifyNode:node_modules/@eslint/eslintrc/node_modules/debug Completed in 14076ms
npm timing reifyNode:node_modules/@babel/highlight/node_modules/has-flag Completed in 14075ms
npm timing reifyNode:node_modules/destroy Completed in 14093ms
npm timing reifyNode:node_modules/@babel/helper-compilation-targets/node_modules/lru-cache Completed in 14076ms
npm timing reifyNode:node_modules/boxen/node_modules/supports-color Completed in 14082ms
npm timing reifyNode:node_modules/nopt Completed in 14108ms
npm timing reifyNode:node_modules/base/node_modules/define-property Completed in 14082ms
npm timing reifyNode:node_modules/decompress-tarbz2 Completed in 14095ms
npm timing reifyNode:node_modules/@babel/helper-compilation-targets/node_modules/yallist Completed in 14079ms
npm timing reifyNode:node_modules/esrecurse Completed in 14098ms
npm timing reifyNode:node_modules/@istanbuljs/load-nyc-config/node_modules/locate-path Completed in 14083ms
npm timing reifyNode:node_modules/figures/node_modules/escape-string-regexp Completed in 14102ms
npm timing reifyNode:node_modules/istanbul-lib-source-maps/node_modules/ms Completed in 14108ms
npm timing reifyNode:node_modules/@babel/highlight/node_modules/color-name Completed in 14082ms
npm timing reifyNode:node_modules/@babel/highlight/node_modules/chalk Completed in 14083ms
npm timing reifyNode:node_modules/@babel/highlight/node_modules/escape-string-regexp Completed in 14083ms
npm timing reifyNode:node_modules/@babel/core/node_modules/ms Completed in 14084ms
npm timing reifyNode:node_modules/cross-spawn Completed in 14100ms
npm timing reifyNode:node_modules/readdirp/node_modules/to-regex-range Completed in 14119ms
npm timing reifyNode:node_modules/@babel/highlight/node_modules/ansi-styles Completed in 14085ms
npm timing reifyNode:node_modules/@babel/core/node_modules/debug Completed in 14086ms
npm timing reifyNode:node_modules/@eslint/eslintrc/node_modules/ms Completed in 14087ms
npm timing reifyNode:node_modules/whatwg-url Completed in 14131ms
npm timing reifyNode:node_modules/mime-types Completed in 14116ms
npm timing reifyNode:node_modules/one-time Completed in 14119ms
npm timing reifyNode:node_modules/source-map-support Completed in 14125ms
npm timing reifyNode:node_modules/typedarray Completed in 14129ms
npm timing reifyNode:node_modules/semver Completed in 14125ms
npm timing reifyNode:node_modules/scmp Completed in 14124ms
npm timing reifyNode:node_modules/negotiator Completed in 14122ms
npm timing reifyNode:node_modules/jpeg-js Completed in 14122ms
npm timing reifyNode:node_modules/json-schema-traverse Completed in 14123ms
npm timing reifyNode:node_modules/glob-stream/node_modules/micromatch/node_modules/is-extglob Completed in 14121ms
npm timing reifyNode:node_modules/readdirp/node_modules/extglob/node_modules/define-property Completed in 14133ms
npm timing reifyNode:node_modules/load-json-file/node_modules/strip-bom Completed in 14128ms
npm timing reifyNode:node_modules/cliui Completed in 14116ms
npm timing reifyNode:node_modules/@sinonjs/fake-timers Completed in 14106ms
npm timing reifyNode:node_modules/@jimp/plugin-gaussian Completed in 14106ms
npm timing reifyNode:node_modules/@jimp/plugin-scale Completed in 14106ms
npm timing reifyNode:node_modules/@jimp/plugin-flip Completed in 14107ms
npm timing reifyNode:node_modules/@jimp/plugin-displace Completed in 14107ms
npm timing reifyNode:node_modules/@jimp/plugin-cover Completed in 14108ms
npm timing reifyNode:node_modules/@jimp/custom Completed in 14108ms
npm timing reifyNode:node_modules/tar-fs/node_modules/buffer Completed in 14146ms
npm timing reifyNode:node_modules/@jest/types Completed in 14111ms
npm timing reifyNode:node_modules/gm/node_modules/debug Completed in 14134ms
npm timing reifyNode:node_modules/detect-newline Completed in 14131ms
npm timing reifyNode:node_modules/@jimp/core/node_modules/buffer Completed in 14117ms
npm timing reifyNode:node_modules/y18n Completed in 14161ms
npm timing reifyNode:node_modules/url Completed in 14158ms
npm timing reifyNode:node_modules/triple-beam Completed in 14157ms
npm timing reifyNode:node_modules/through Completed in 14156ms
npm timing reifyNode:node_modules/term-size Completed in 14156ms
npm timing reifyNode:node_modules/snapdragon Completed in 14154ms
npm timing reifyNode:node_modules/side-channel Completed in 14154ms
npm timing reifyNode:node_modules/normalize-package-data Completed in 14151ms
npm timing reifyNode:node_modules/lazystream Completed in 14149ms
npm timing reifyNode:node_modules/fast-deep-equal Completed in 14144ms
npm timing reifyNode:node_modules/fast-safe-stringify Completed in 14146ms
npm timing reifyNode:node_modules/esutils Completed in 14145ms
npm timing reifyNode:node_modules/eslint-visitor-keys Completed in 14145ms
npm timing reifyNode:node_modules/debug Completed in 14143ms
npm timing reifyNode:node_modules/asn1 Completed in 14132ms
npm timing reifyNode:node_modules/@jimp/plugin-contain Completed in 14132ms
npm timing reifyNode:node_modules/@jest/transform Completed in 14132ms
npm timing reifyNode:node_modules/@jridgewell/resolve-uri Completed in 14133ms
npm timing reifyNode:node_modules/@humanwhocodes/module-importer Completed in 14132ms
npm timing reifyNode:node_modules/superagent/node_modules/mime Completed in 14170ms
npm timing reifyNode:node_modules/source-map-resolve/node_modules/atob Completed in 14170ms
npm timing reifyNode:node_modules/har-validator/node_modules/json-schema-traverse Completed in 14158ms
npm timing reifyNode:node_modules/engine.io Completed in 14155ms
npm timing reifyNode:node_modules/vinyl Completed in 14181ms
npm timing reifyNode:node_modules/split Completed in 14175ms
npm timing reifyNode:node_modules/prelude-ls Completed in 14174ms
npm timing reifyNode:node_modules/mime Completed in 14171ms
npm timing reifyNode:node_modules/jpegtran-bin Completed in 14170ms
npm timing reifyNode:node_modules/istanbul-lib-coverage Completed in 14170ms
npm timing reifyNode:node_modules/html-escaper Completed in 14169ms
npm timing reifyNode:node_modules/get-intrinsic Completed in 14168ms
npm timing reifyNode:node_modules/function-bind Completed in 14169ms
npm timing reifyNode:node_modules/github-from-package Completed in 14170ms
npm timing reifyNode:node_modules/gulp-util Completed in 14172ms
npm timing reifyNode:node_modules/dashdash Completed in 14165ms
npm timing reifyNode:node_modules/browserslist Completed in 14155ms
npm timing reifyNode:node_modules/@jimp/plugin-normalize Completed in 14153ms
npm timing reifyNode:node_modules/@jimp/plugin-mask Completed in 14154ms
npm timing reifyNode:node_modules/readdirp/node_modules/extglob Completed in 14188ms
npm timing reifyNode:node_modules/glob-stream/node_modules/micromatch Completed in 14178ms
npm timing reifyNode:node_modules/chokidar/node_modules/micromatch Completed in 14171ms
npm timing metavuln:cache:get:security-advisory:debug:LoJ6loxaIypRwIYp7DxJNhNvF/S+L3GsA/4IB1nVZzVERfQkhyyTsxAuoTEGt7sFEohAYnzxvg/x/bDu1424Hw== Completed in 751ms
npm timing metavuln:load:security-advisory:debug:lRkwPXso2hhWj1PifuL3y93xU8G9YCFpC0ATu7pNDG2BKGKVSNFxoSrVWP3C6op2wRSOKr+NW9y50XXpJ3DH6A== Completed in 1ms
npm timing metavuln:calculate:security-advisory:debug:lRkwPXso2hhWj1PifuL3y93xU8G9YCFpC0ATu7pNDG2BKGKVSNFxoSrVWP3C6op2wRSOKr+NW9y50XXpJ3DH6A== Completed in 752ms
npm timing metavuln:packument:@babel/core Completed in 1ms
npm timing metavuln:packument:@babel/helper-module-transforms Completed in 1ms
npm timing metavuln:packument:@babel/helpers Completed in 0ms
npm timing metavuln:packument:jest-snapshot Completed in 0ms
npm timing reifyNode:node_modules/seek-bzip Completed in 14197ms
npm timing reifyNode:node_modules/rc Completed in 14195ms
npm timing reifyNode:node_modules/nanomatch Completed in 14194ms
npm timing reifyNode:node_modules/istanbul-lib-source-maps Completed in 14192ms
npm timing reifyNode:node_modules/jest-each Completed in 14192ms
npm timing reifyNode:node_modules/https-proxy-agent Completed in 14190ms
npm timing reifyNode:node_modules/braces Completed in 14174ms
npm timing reifyNode:node_modules/call-bind Completed in 14176ms
npm timing reifyNode:node_modules/@jridgewell/sourcemap-codec Completed in 14173ms
npm timing reifyNode:node_modules/istanbul-lib-report Completed in 14198ms
npm timing reifyNode:node_modules/@babel/helper-validator-identifier Completed in 14172ms
npm timing reifyNode:node_modules/mkdirp/node_modules/minimist Completed in 14204ms
npm timing reifyNode:node_modules/imagemin-mozjpeg/node_modules/cross-spawn Completed in 14199ms
npm timing reifyNode:node_modules/execa/node_modules/cross-spawn Completed in 14195ms
npm timing reifyNode:node_modules/v8-to-istanbul Completed in 14228ms
npm timing reifyNode:node_modules/prebuild-install Completed in 14222ms
npm timing reifyNode:node_modules/jest-resolve Completed in 14222ms
npm timing reifyNode:node_modules/istanbul-lib-instrument Completed in 14222ms
npm timing reifyNode:node_modules/google-p12-pem Completed in 14219ms
npm timing reifyNode:node_modules/agent-base Completed in 14202ms
npm timing reifyNode:node_modules/tar-fs/node_modules/bl Completed in 14239ms
npm timing reifyNode:node_modules/readdirp/node_modules/micromatch Completed in 14236ms
npm timing reifyNode:node_modules/phantomjs-prebuilt/node_modules/fs-extra Completed in 14235ms
npm timing reifyNode:node_modules/pretty-quick/node_modules/execa Completed in 14236ms
npm timing reifyNode:node_modules/es6-promise Completed in 14224ms
npm timing reifyNode:node_modules/@pdf-lib/upng Completed in 14210ms
npm timing reifyNode:node_modules/text-table Completed in 14246ms
npm timing reifyNode:node_modules/querystring Completed in 14242ms
npm timing reifyNode:node_modules/picomatch Completed in 14242ms
npm timing reifyNode:node_modules/doctrine Completed in 14231ms
npm timing reifyNode:node_modules/depd Completed in 14231ms
npm timing reifyNode:node_modules/body-parser Completed in 14220ms
npm timing reifyNode:node_modules/argparse Completed in 14220ms
npm timing reifyNode:node_modules/@jridgewell/gen-mapping Completed in 14219ms
npm timing reifyNode:node_modules/@jimp/plugin-rotate Completed in 14220ms
npm timing reifyNode:node_modules/jest-runtime/node_modules/execa Completed in 14248ms
npm timing reifyNode:node_modules/jest-changed-files/node_modules/execa Completed in 14247ms
npm timing reifyNode:node_modules/aws-sdk/node_modules/uuid Completed in 14227ms
npm timing reifyNode:node_modules/fs-extra Completed in 14246ms
npm timing reifyNode:node_modules/registry-auth-token Completed in 14260ms
npm timing reifyNode:node_modules/http-signature Completed in 14252ms
npm timing reifyNode:node_modules/form-data Completed in 14251ms
npm timing reifyNode:node_modules/flatted Completed in 14251ms
npm timing reifyNode:node_modules/cjs-module-lexer Completed in 14245ms
npm timing reifyNode:node_modules/espree Completed in 14252ms
npm timing reifyNode:node_modules/pretty-quick/node_modules/human-signals Completed in 14267ms
npm timing reifyNode:node_modules/node-abi Completed in 14270ms
npm timing reifyNode:node_modules/mime-db Completed in 14270ms
npm timing reifyNode:node_modules/jest-validate Completed in 14269ms
npm timing reifyNode:node_modules/jest-watcher Completed in 14271ms
npm timing reifyNode:node_modules/json-stable-stringify-without-jsonify Completed in 14272ms
npm timing reifyNode:node_modules/has-symbols Completed in 14270ms
npm timing reifyNode:node_modules/@ampproject/remapping Completed in 14248ms
npm timing reifyNode:node_modules/through2/node_modules/readable-stream Completed in 14287ms
npm timing reifyNode:node_modules/gcp-metadata Completed in 14271ms
npm timing reifyNode:node_modules/@babel/compat-data Completed in 14250ms
npm timing reifyNode:node_modules/performance-now Completed in 14285ms
npm timing reifyNode:node_modules/fastq Completed in 14277ms
npm timing reifyNode:node_modules/human-signals Completed in 14281ms
npm timing reifyNode:node_modules/asynckit Completed in 14263ms
npm timing reifyNode:node_modules/express/node_modules/body-parser Completed in 14282ms
npm timing reifyNode:node_modules/winston-transport Completed in 14309ms
npm timing reifyNode:node_modules/tr46 Completed in 14306ms
npm timing reifyNode:node_modules/pretty-quick Completed in 14300ms
npm timing reifyNode:node_modules/fast-json-stable-stringify Completed in 14291ms
npm timing reifyNode:node_modules/emailjs-base64 Completed in 14289ms
npm timing reifyNode:node_modules/@types/prettier Completed in 14275ms
npm timing reifyNode:node_modules/@humanwhocodes/object-schema Completed in 14274ms
npm timing reifyNode:node_modules/@jimp/plugin-crop Completed in 14276ms
npm timing reifyNode:node_modules/send/node_modules/debug Completed in 14310ms
npm timing reifyNode:node_modules/multipipe/node_modules/readable-stream Completed in 14306ms
npm timing reifyNode:node_modules/nodemon/node_modules/debug Completed in 14307ms
npm timing reifyNode:node_modules/morgan/node_modules/debug Completed in 14307ms
npm timing reifyNode:node_modules/finalhandler/node_modules/debug Completed in 14299ms
npm timing reifyNode:node_modules/express/node_modules/debug Completed in 14298ms
npm timing reifyNode:node_modules/compression/node_modules/debug Completed in 14293ms
npm timing reifyNode:node_modules/readdirp/node_modules/debug Completed in 14313ms
npm timing reifyNode:node_modules/jest-diff Completed in 14310ms
npm timing reifyNode:node_modules/emailjs Completed in 14304ms
npm timing reifyNode:node_modules/bin-build/node_modules/uuid Completed in 14295ms
npm timing reifyNode:node_modules/buffer-to-vinyl/node_modules/uuid Completed in 14296ms
npm timing reifyNode:node_modules/htmlparser2 Completed in 14316ms
npm timing reifyNode:node_modules/tough-cookie Completed in 14333ms
npm timing reifyNode:node_modules/sprintf-js Completed in 14330ms
npm timing reifyNode:node_modules/jest-circus Completed in 14322ms
npm timing reifyNode:node_modules/image-size Completed in 14321ms
npm timing reifyNode:node_modules/hawk Completed in 14322ms
npm timing reifyNode:node_modules/grapheme-splitter Completed in 14321ms
npm timing reifyNode:node_modules/event-stream Completed in 14318ms
npm timing reifyNode:node_modules/tempfile/node_modules/uuid Completed in 14339ms
npm timing reifyNode:node_modules/@babel/helper-compilation-targets Completed in 14302ms
npm timing reifyNode:node_modules/request/node_modules/uuid Completed in 14336ms
npm timing metavuln:cache:get:security-advisory:@babel/core:Idr19O1BWN7Ji8lOUQqlOu5vFd3Dme2aLTIgj1JujlTXoJ0gJxeohEbcRfGsCKgxL+80SuhifAhuzkQKeteDXw== Completed in 146ms
npm timing metavuln:load:security-advisory:@babel/core:fh8hTevxKxxB/TjPLuIqX0xLWISD9TTk1zuqINuUa51u0luhTDHL+nc9unv55+ZUTUbbXP13tqvYywrH1nLIwg== Completed in 0ms
npm timing metavuln:calculate:security-advisory:@babel/core:fh8hTevxKxxB/TjPLuIqX0xLWISD9TTk1zuqINuUa51u0luhTDHL+nc9unv55+ZUTUbbXP13tqvYywrH1nLIwg== Completed in 147ms
npm timing metavuln:cache:get:security-advisory:@babel/helper-module-transforms:i9AXGinmgnkgZMoXsD9MJh/oMJWo77yPLwQMbDJ7U4AsM7/5Bh+2nRrQUZfplvG/XoDQGHSyKBLwRrd93+EgoA== Completed in 148ms
npm timing metavuln:load:security-advisory:@babel/helper-module-transforms:fh8hTevxKxxB/TjPLuIqX0xLWISD9TTk1zuqINuUa51u0luhTDHL+nc9unv55+ZUTUbbXP13tqvYywrH1nLIwg== Completed in 1ms
npm timing metavuln:calculate:security-advisory:@babel/helper-module-transforms:fh8hTevxKxxB/TjPLuIqX0xLWISD9TTk1zuqINuUa51u0luhTDHL+nc9unv55+ZUTUbbXP13tqvYywrH1nLIwg== Completed in 149ms
npm timing metavuln:cache:get:security-advisory:@babel/helpers:H68P+tcnjXNqC34x4OhedeF/TUIs70ZE74F7E/eIE4T3mEQdH5A7cXMXqlOe5rLb0OrI4PtuR9AxLrQGU7zP8w== Completed in 150ms
npm timing metavuln:load:security-advisory:@babel/helpers:fh8hTevxKxxB/TjPLuIqX0xLWISD9TTk1zuqINuUa51u0luhTDHL+nc9unv55+ZUTUbbXP13tqvYywrH1nLIwg== Completed in 1ms
npm timing metavuln:calculate:security-advisory:@babel/helpers:fh8hTevxKxxB/TjPLuIqX0xLWISD9TTk1zuqINuUa51u0luhTDHL+nc9unv55+ZUTUbbXP13tqvYywrH1nLIwg== Completed in 151ms
npm timing metavuln:cache:get:security-advisory:jest-snapshot:yGkyf97AMLO1fHwiofSDDGIL7EuvGhJfqVT+opa32xxcdsDn2QqBzQVrkkQKGwNLRopsBbWE9q1imjZrax29Xw== Completed in 151ms
npm timing metavuln:load:security-advisory:jest-snapshot:fh8hTevxKxxB/TjPLuIqX0xLWISD9TTk1zuqINuUa51u0luhTDHL+nc9unv55+ZUTUbbXP13tqvYywrH1nLIwg== Completed in 1ms
npm timing metavuln:calculate:security-advisory:jest-snapshot:fh8hTevxKxxB/TjPLuIqX0xLWISD9TTk1zuqINuUa51u0luhTDHL+nc9unv55+ZUTUbbXP13tqvYywrH1nLIwg== Completed in 152ms
npm timing metavuln:packument:har-validator Completed in 0ms
npm timing reifyNode:node_modules/yargs-parser Completed in 14368ms
npm timing reifyNode:node_modules/tweetnacl Completed in 14363ms
npm timing reifyNode:node_modules/qs Completed in 14357ms
npm timing reifyNode:node_modules/jest-snapshot Completed in 14353ms
npm timing reifyNode:node_modules/har-schema Completed in 14350ms
npm timing reifyNode:node_modules/@nodelib/fs.stat Completed in 14332ms
npm timing reifyNode:node_modules/electron-to-chromium Completed in 14348ms
npm timing reifyNode:node_modules/@jimp/plugin-blur Completed in 14333ms
npm timing reifyNode:node_modules/regexpp Completed in 14368ms
npm timing reifyNode:node_modules/gaxios Completed in 14359ms
npm timing reifyNode:node_modules/@dabh/diagnostics Completed in 14339ms
npm timing reifyNode:node_modules/timm Completed in 14381ms
npm timing reifyNode:node_modules/pretty-format Completed in 14376ms
npm timing reifyNode:node_modules/jest-util Completed in 14372ms
npm timing reifyNode:node_modules/fecha Completed in 14367ms
npm timing reifyNode:node_modules/eslint-scope Completed in 14365ms
npm timing reifyNode:node_modules/expect Completed in 14367ms
npm timing reifyNode:node_modules/events Completed in 14366ms
npm timing reifyNode:node_modules/cors Completed in 14364ms
npm timing reifyNode:node_modules/dateformat Completed in 14365ms
npm timing reifyNode:node_modules/escodegen/node_modules/source-map Completed in 14372ms
npm timing reifyNode:node_modules/xmlbuilder Completed in 14399ms
npm timing reifyNode:node_modules/jest-cli Completed in 14382ms
npm timing reifyNode:node_modules/esprima Completed in 14376ms
npm timing reifyNode:node_modules/@jimp/jpeg Completed in 14361ms
npm timing reifyNode:node_modules/@babel/helper-module-transforms Completed in 14360ms
npm timing reifyNode:node_modules/@babel/generator/node_modules/@jridgewell/gen-mapping Completed in 14362ms
npm timing reifyNode:node_modules/jest-worker Completed in 14393ms
npm timing reifyNode:node_modules/exit Completed in 14386ms
npm timing reifyNode:node_modules/escodegen/node_modules/esprima Completed in 14386ms
npm timing reifyNode:node_modules/emailjs-mime-codec Completed in 14391ms
npm timing reifyNode:node_modules/mkdirp Completed in 14402ms
npm timing reifyNode:node_modules/@babel/template Completed in 14376ms
npm timing reifyNode:node_modules/bin-version-check/node_modules/semver Completed in 14382ms
npm timing reifyNode:node_modules/vinyl-fs Completed in 14422ms
npm timing reifyNode:node_modules/minimist Completed in 14409ms
npm timing reifyNode:node_modules/jest-config Completed in 14407ms
npm timing reifyNode:node_modules/helmet-csp Completed in 14405ms
npm timing reifyNode:node_modules/eslint-utils Completed in 14401ms
npm timing reifyNode:node_modules/@jimp/bmp Completed in 14385ms
npm timing reifyNode:node_modules/request Completed in 14422ms
npm timing reifyNode:node_modules/@jridgewell/trace-mapping Completed in 14393ms
npm timing reifyNode:node_modules/@nodelib/fs.scandir Completed in 14394ms
npm timing reifyNode:node_modules/socks Completed in 14430ms
npm timing reifyNode:node_modules/migrate-mongo Completed in 14423ms
npm timing reifyNode:node_modules/@colors/colors Completed in 14399ms
npm timing reifyNode:node_modules/sift Completed in 14435ms
npm timing metavuln:cache:get:security-advisory:har-validator:XASMpmv+KkTtFiv3BfFUJzX1GwiLRTyd0MrwQOWLd8n3QuqhBZko9WEquJDHZdxMfiiKLmKDpQCAi64K1s6AKg== Completed in 87ms
npm timing metavuln:load:security-advisory:har-validator:fc9Xax84FFXTCPgCV9Dx3GcE0NeSxWZAICRTBpsOXo8QixJHgBWM0Vs0qfBLWiQpiN3IwTma4utFRAriZjr9vg== Completed in 0ms
npm timing metavuln:calculate:security-advisory:har-validator:fc9Xax84FFXTCPgCV9Dx3GcE0NeSxWZAICRTBpsOXo8QixJHgBWM0Vs0qfBLWiQpiN3IwTma4utFRAriZjr9vg== Completed in 87ms
npm timing reifyNode:node_modules/gm Completed in 14454ms
npm timing reifyNode:node_modules/express Completed in 14453ms
npm timing reifyNode:node_modules/bignumber.js Completed in 14439ms
npm timing reifyNode:node_modules/formidable Completed in 14461ms
npm timing reifyNode:node_modules/request/node_modules/qs Completed in 14476ms
npm timing reifyNode:node_modules/min-document Completed in 14474ms
npm timing reifyNode:node_modules/readable-stream Completed in 14479ms
npm timing reifyNode:node_modules/jest-haste-map Completed in 14473ms
npm timing reifyNode:node_modules/@jimp/png Completed in 14450ms
npm timing reifyNode:node_modules/@nodelib/fs.walk Completed in 14452ms
npm timing reifyNode:node_modules/mustache Completed in 14482ms
npm timing reifyNode:node_modules/@jest/reporters Completed in 14455ms
npm timing reifyNode:node_modules/tinycolor2 Completed in 14495ms
npm timing reifyNode:node_modules/@babel/polyfill Completed in 14459ms
npm timing reifyNode:node_modules/superagent/node_modules/qs Completed in 14495ms
npm timing reifyNode:node_modules/stripe/node_modules/qs Completed in 14496ms
npm timing reifyNode:node_modules/nodemon/node_modules/es6-promise Completed in 14490ms
npm timing reifyNode:node_modules/formidable/node_modules/qs Completed in 14481ms
npm timing reifyNode:node_modules/express/node_modules/qs Completed in 14480ms
npm timing reifyNode:node_modules/winston-transport/node_modules/readable-stream Completed in 14508ms
npm timing reifyNode:node_modules/winston/node_modules/readable-stream Completed in 14508ms
npm timing reifyNode:node_modules/tar-fs/node_modules/readable-stream Completed in 14502ms
npm timing reifyNode:node_modules/json5 Completed in 14499ms
npm timing reifyNode:node_modules/acorn Completed in 14478ms
npm timing metavuln:cache:get:security-advisory:winston-slack-webhook-transport:nzEt4ipSRIrERztoOw21n0Ywhu4JirCABs+xj/VXQsBI6+pAWioMSqxsRTcsKDIdAtGiOuM3iRdBsAMMcLCn5A== Completed in 64ms
npm timing reifyNode:node_modules/@jimp/plugin-color Completed in 14487ms
npm timing reifyNode:node_modules/object-inspect Completed in 14519ms
npm timing reifyNode:node_modules/@jimp/plugin-resize Completed in 14491ms
npm timing reifyNode:node_modules/@istanbuljs/load-nyc-config/node_modules/argparse Completed in 14492ms
npm timing reifyNode:node_modules/node-addon-api Completed in 14523ms
npm timing reifyNode:node_modules/domutils Completed in 14513ms
npm timing reifyNode:node_modules/text-encoding Completed in 14534ms
npm timing reifyNode:node_modules/express/node_modules/iconv-lite Completed in 14520ms
npm timing reifyNode:node_modules/tar-fs Completed in 14539ms
npm timing reifyNode:node_modules/type-fest Completed in 14586ms
npm timing reifyNode:node_modules/exif-parser Completed in 14569ms
npm timing reifyNode:node_modules/jmespath Completed in 14577ms
npm http fetch GET 200 https://registry.npmjs.org/winston-slack-webhook-transport 143ms (cache hit)
npm timing metavuln:packument:winston-slack-webhook-transport Completed in 145ms
npm timing metavuln:load:security-advisory:winston-slack-webhook-transport:A8udLrZcWN+DjwMEb6fshdN5n5UqnCxbUOi3f6updLXGwKik6oGDcb5NO4lCNOiL70Sj6OLiRrZ1dDDD3Cx4zQ== Completed in 0ms
npm timing metavuln:calculate:security-advisory:winston-slack-webhook-transport:A8udLrZcWN+DjwMEb6fshdN5n5UqnCxbUOi3f6updLXGwKik6oGDcb5NO4lCNOiL70Sj6OLiRrZ1dDDD3Cx4zQ== Completed in 145ms
npm timing metavuln:packument:is-accessor-descriptor Completed in 7ms
npm timing metavuln:packument:is-data-descriptor Completed in 1ms
npm timing metavuln:packument:is-descriptor Completed in 1ms
npm timing reifyNode:node_modules/ansi-escapes/node_modules/type-fest Completed in 14589ms
npm timing reifyNode:node_modules/iconv-lite Completed in 14611ms
npm timing reifyNode:node_modules/sharp/node_modules/semver Completed in 14643ms
npm timing reifyNode:node_modules/node-abi/node_modules/semver Completed in 14639ms
npm timing reifyNode:node_modules/jest-snapshot/node_modules/semver Completed in 14636ms
npm timing reifyNode:node_modules/superagent/node_modules/semver Completed in 14647ms
npm timing reifyNode:node_modules/libheif-js Completed in 14645ms
npm timing reifyNode:node_modules/yargs Completed in 14664ms
npm timing reifyNode:node_modules/superagent Completed in 14663ms
npm timing reifyNode:node_modules/@sinonjs/commons Completed in 14632ms
npm timing metavuln:cache:get:security-advisory:is-accessor-descriptor:JVPT3zkjKDpoWUYPHlA3Rp5k7Io+YrUKc6rZVBYAEf5Rm6zbrhwgNPK1aGQTejS+UeVdBzBdZikSv4954Lnrxg== Completed in 76ms
npm timing metavuln:load:security-advisory:is-accessor-descriptor:lPfVfHjGgjOB2z8yPw12sjEPkmD6qeK9t8p2vbLN09GsNCrqxjHBhuInJuQQ5DinpFMGwNyr+LSWS23gc3APQA== Completed in 0ms
npm timing metavuln:calculate:security-advisory:is-accessor-descriptor:lPfVfHjGgjOB2z8yPw12sjEPkmD6qeK9t8p2vbLN09GsNCrqxjHBhuInJuQQ5DinpFMGwNyr+LSWS23gc3APQA== Completed in 77ms
npm timing metavuln:cache:get:security-advisory:is-data-descriptor:fOUwoEzWV551ozw8ZRDzHo/J9Lu2cR9gSJn1WS93hIblZ+qf8BwJLlEcaKDHdPQ/Sv5Lnb6znvSZP3129a7hWQ== Completed in 80ms
npm timing metavuln:load:security-advisory:is-data-descriptor:lPfVfHjGgjOB2z8yPw12sjEPkmD6qeK9t8p2vbLN09GsNCrqxjHBhuInJuQQ5DinpFMGwNyr+LSWS23gc3APQA== Completed in 0ms
npm timing metavuln:calculate:security-advisory:is-data-descriptor:lPfVfHjGgjOB2z8yPw12sjEPkmD6qeK9t8p2vbLN09GsNCrqxjHBhuInJuQQ5DinpFMGwNyr+LSWS23gc3APQA== Completed in 80ms
npm timing metavuln:cache:get:security-advisory:is-descriptor:/+LuV+PvFSZc2heL6lr89EU78aWs6LxZd5tCuVAEOyaOzH2EXJ3jEH0+UvKQ6zT/owrgSICVNCPC6PwlITTyMw== Completed in 74ms
npm timing metavuln:load:security-advisory:is-descriptor:lPfVfHjGgjOB2z8yPw12sjEPkmD6qeK9t8p2vbLN09GsNCrqxjHBhuInJuQQ5DinpFMGwNyr+LSWS23gc3APQA== Completed in 0ms
npm timing metavuln:calculate:security-advisory:is-descriptor:lPfVfHjGgjOB2z8yPw12sjEPkmD6qeK9t8p2vbLN09GsNCrqxjHBhuInJuQQ5DinpFMGwNyr+LSWS23gc3APQA== Completed in 75ms
npm timing metavuln:packument:node-abi Completed in 0ms
npm timing metavuln:packument:superagent Completed in 0ms
npm timing reifyNode:node_modules/sshpk Completed in 14684ms
npm timing reifyNode:node_modules/@jest/core Completed in 14658ms
npm timing reifyNode:node_modules/node-cron Completed in 14696ms
npm timing reifyNode:node_modules/js-yaml Completed in 14694ms
npm timing reifyNode:node_modules/buffer Completed in 14677ms
npm timing reifyNode:node_modules/entities Completed in 14691ms
npm timing metavuln:cache:get:security-advisory:jest-snapshot:O4PWxArA7k4kDi23uhrMNOHCCYjsKO0mKeQgRHu9Hhey4X/B/Pj3baeG5DKcfdgnD7jQeRlvTHZiFbCssar7dA== Completed in 44ms
npm timing metavuln:load:security-advisory:jest-snapshot:opCi/aWaSKqONMYnfnFEDkv8YHQsLRfA3enlX2IHlHYfFwv+CTH+ItWyYx1Vqalh3HK+Lk+xMxcq/HjPXMZwBQ== Completed in 1ms
npm timing metavuln:calculate:security-advisory:jest-snapshot:opCi/aWaSKqONMYnfnFEDkv8YHQsLRfA3enlX2IHlHYfFwv+CTH+ItWyYx1Vqalh3HK+Lk+xMxcq/HjPXMZwBQ== Completed in 45ms
npm timing metavuln:cache:get:security-advisory:node-abi:F/cTWU63dAkiJDXm5uCgscrQz+JmMAO5yrDJMfTHy3d9L3vdewZgWeXFinWtsh3/X6yDmUfQr3U16fUfB3GC8Q== Completed in 45ms
npm timing metavuln:load:security-advisory:node-abi:opCi/aWaSKqONMYnfnFEDkv8YHQsLRfA3enlX2IHlHYfFwv+CTH+ItWyYx1Vqalh3HK+Lk+xMxcq/HjPXMZwBQ== Completed in 1ms
npm timing metavuln:calculate:security-advisory:node-abi:opCi/aWaSKqONMYnfnFEDkv8YHQsLRfA3enlX2IHlHYfFwv+CTH+ItWyYx1Vqalh3HK+Lk+xMxcq/HjPXMZwBQ== Completed in 46ms
npm timing metavuln:cache:get:security-advisory:sharp:+d70xYZ3V+5qD8mT+REaW7pBaosswTLCsnypict5Uz0+I4vd641PUX+nKTJboXmDhtu85vSw81jBeWm/87QfKQ== Completed in 46ms
npm timing metavuln:load:security-advisory:sharp:opCi/aWaSKqONMYnfnFEDkv8YHQsLRfA3enlX2IHlHYfFwv+CTH+ItWyYx1Vqalh3HK+Lk+xMxcq/HjPXMZwBQ== Completed in 0ms
npm timing metavuln:calculate:security-advisory:sharp:opCi/aWaSKqONMYnfnFEDkv8YHQsLRfA3enlX2IHlHYfFwv+CTH+ItWyYx1Vqalh3HK+Lk+xMxcq/HjPXMZwBQ== Completed in 47ms
npm timing metavuln:cache:get:security-advisory:superagent:uXkx+TtPPPYEJk5e0NMCJ5Fh5sk+R0KngQBUWLZ40zvTHHvGjcUXtCcjqV8jbioqbhWQ1pdAvGah/p8DV26JBg== Completed in 48ms
npm timing metavuln:load:security-advisory:superagent:opCi/aWaSKqONMYnfnFEDkv8YHQsLRfA3enlX2IHlHYfFwv+CTH+ItWyYx1Vqalh3HK+Lk+xMxcq/HjPXMZwBQ== Completed in 1ms
npm timing metavuln:calculate:security-advisory:superagent:opCi/aWaSKqONMYnfnFEDkv8YHQsLRfA3enlX2IHlHYfFwv+CTH+ItWyYx1Vqalh3HK+Lk+xMxcq/HjPXMZwBQ== Completed in 49ms
npm timing metavuln:packument:bin-version-check Completed in 2ms
npm timing metavuln:packument:normalize-package-data Completed in 1ms
npm timing metavuln:packument:package-json Completed in 1ms
npm timing metavuln:packument:semver-diff Completed in 1ms
npm timing metavuln:packument:semver-truncate Completed in 1ms
npm timing reifyNode:node_modules/pngjs Completed in 14731ms
npm timing reifyNode:node_modules/@logtail/tools Completed in 14702ms
npm timing reifyNode:node_modules/logform Completed in 14729ms
npm timing reifyNode:node_modules/snapdragon/node_modules/source-map Completed in 14742ms
npm timing reifyNode:node_modules/@jimp/plugin-blit Completed in 14716ms
npm timing reifyNode:node_modules/source-map Completed in 14751ms
npm timing reifyNode:node_modules/socket.io Completed in 14753ms
npm timing reifyNode:node_modules/esquery Completed in 14744ms
npm timing reifyNode:node_modules/@istanbuljs/load-nyc-config/node_modules/js-yaml Completed in 14732ms
npm timing reifyNode:node_modules/@jimp/core Completed in 14737ms
npm timing reifyNode:node_modules/@pdf-lib/standard-fonts Completed in 14739ms
npm timing metavuln:cache:get:security-advisory:bin-version-check:T3hwak+Wrh+USVzMhNjjsXDIpPfzSJqyYF0GjfzHSODGuHTc8EV0PN9TFj5Y+gFumA1zHulrBdtvgRHx5Ig1nQ== Completed in 44ms
npm timing metavuln:load:security-advisory:bin-version-check:p+D+39wHY++/R33lUZG0KMP/hnOnJRkXbZzFUhU/wj3DA/pIbzZMGbxR9nwfqnZOi8we3cv5YqWbADcimZK1zA== Completed in 0ms
npm timing metavuln:calculate:security-advisory:bin-version-check:p+D+39wHY++/R33lUZG0KMP/hnOnJRkXbZzFUhU/wj3DA/pIbzZMGbxR9nwfqnZOi8we3cv5YqWbADcimZK1zA== Completed in 44ms
npm timing metavuln:cache:get:security-advisory:normalize-package-data:EaQxXSCVAE62N24ShffhBYfVoTP76mi1QnGscDU3XnTVIXqLs6ToqP5Aj0eNbn84zqBqMTEZKR3g55VJrcJ5VQ== Completed in 43ms
npm timing metavuln:load:security-advisory:normalize-package-data:p+D+39wHY++/R33lUZG0KMP/hnOnJRkXbZzFUhU/wj3DA/pIbzZMGbxR9nwfqnZOi8we3cv5YqWbADcimZK1zA== Completed in 1ms
npm timing metavuln:calculate:security-advisory:normalize-package-data:p+D+39wHY++/R33lUZG0KMP/hnOnJRkXbZzFUhU/wj3DA/pIbzZMGbxR9nwfqnZOi8we3cv5YqWbADcimZK1zA== Completed in 44ms
npm timing metavuln:cache:get:security-advisory:package-json:TcZC4RUWbMu98F1HOeTX/AJU7dsIdjUr1LLnv3QiSUu8/RtYLNyEizxsSmtPIysEwZ5BCZjga8i52tdAZQ2W7A== Completed in 46ms
npm timing metavuln:load:security-advisory:package-json:p+D+39wHY++/R33lUZG0KMP/hnOnJRkXbZzFUhU/wj3DA/pIbzZMGbxR9nwfqnZOi8we3cv5YqWbADcimZK1zA== Completed in 0ms
npm timing metavuln:calculate:security-advisory:package-json:p+D+39wHY++/R33lUZG0KMP/hnOnJRkXbZzFUhU/wj3DA/pIbzZMGbxR9nwfqnZOi8we3cv5YqWbADcimZK1zA== Completed in 46ms
npm timing metavuln:cache:get:security-advisory:semver-diff:QIYM1fjt0+oFeEwbC7gvu2plfm5r0pAVV0uJ5nYz40pajRE7EtfbjTGGiYBP8AsQuqwRCiGOG9/shSs8iALONQ== Completed in 47ms
npm timing metavuln:load:security-advisory:semver-diff:p+D+39wHY++/R33lUZG0KMP/hnOnJRkXbZzFUhU/wj3DA/pIbzZMGbxR9nwfqnZOi8we3cv5YqWbADcimZK1zA== Completed in 0ms
npm timing metavuln:calculate:security-advisory:semver-diff:p+D+39wHY++/R33lUZG0KMP/hnOnJRkXbZzFUhU/wj3DA/pIbzZMGbxR9nwfqnZOi8we3cv5YqWbADcimZK1zA== Completed in 47ms
npm timing metavuln:cache:get:security-advisory:semver-truncate:2YqvPd3f4NqF8+HD83uUysiswfUBjEyl9xYjFSYyoeOeYfFd0Rcy8EIjkgMpOVsCIfBjCDSAD+130Py1IILMNQ== Completed in 47ms
npm timing metavuln:load:security-advisory:semver-truncate:p+D+39wHY++/R33lUZG0KMP/hnOnJRkXbZzFUhU/wj3DA/pIbzZMGbxR9nwfqnZOi8we3cv5YqWbADcimZK1zA== Completed in 0ms
npm timing metavuln:calculate:security-advisory:semver-truncate:p+D+39wHY++/R33lUZG0KMP/hnOnJRkXbZzFUhU/wj3DA/pIbzZMGbxR9nwfqnZOi8we3cv5YqWbADcimZK1zA== Completed in 48ms
npm timing metavuln:packument:@babel/helper-compilation-targets Completed in 1ms
npm timing metavuln:packument:istanbul-lib-instrument Completed in 0ms
npm timing metavuln:packument:make-dir Completed in 0ms
npm timing reifyNode:node_modules/winston Completed in 14795ms
npm timing reifyNode:node_modules/@sinclair/typebox Completed in 14756ms
npm timing reifyNode:node_modules/bmp-js Completed in 14761ms
npm timing reifyNode:node_modules/@babel/helpers Completed in 14757ms
npm timing reifyNode:node_modules/@eslint/eslintrc Completed in 14765ms
npm timing reifyNode:node_modules/uri-js Completed in 14806ms
npm timing reifyNode:node_modules/pixelmatch Completed in 14798ms
npm timing reifyNode:node_modules/pako Completed in 14801ms
npm timing reifyNode:node_modules/sharp Completed in 14807ms
npm timing metavuln:cache:get:security-advisory:@babel/core:lbLkrgYDXAaKQ5xDP0q6h+EHtQ2GozslsAvNpBmgaLAR63PynGIA4sVfT6jfdarL560HRGZMk2jO1zCqo/UxrA== Completed in 33ms
npm timing metavuln:load:security-advisory:@babel/core:rdIaM4IHRiV5W+0rBaujH8woXF8jX6QsWygSvAgx/mWGl1Fkg+2iT3YwpZhnGHRem0uOaOaU2DzASF/vkxJTbA== Completed in 1ms
npm timing metavuln:calculate:security-advisory:@babel/core:rdIaM4IHRiV5W+0rBaujH8woXF8jX6QsWygSvAgx/mWGl1Fkg+2iT3YwpZhnGHRem0uOaOaU2DzASF/vkxJTbA== Completed in 34ms
npm timing metavuln:cache:get:security-advisory:@babel/helper-compilation-targets:+S+qJuRmMlo7l9taW1hobNFh57pQfpoPLG9+ahIMDkVM607JrLT9zR2FzluGGFy6vtkfZwQ6MNniStGpdVtXGg== Completed in 36ms
npm timing metavuln:load:security-advisory:@babel/helper-compilation-targets:rdIaM4IHRiV5W+0rBaujH8woXF8jX6QsWygSvAgx/mWGl1Fkg+2iT3YwpZhnGHRem0uOaOaU2DzASF/vkxJTbA== Completed in 0ms
npm timing metavuln:calculate:security-advisory:@babel/helper-compilation-targets:rdIaM4IHRiV5W+0rBaujH8woXF8jX6QsWygSvAgx/mWGl1Fkg+2iT3YwpZhnGHRem0uOaOaU2DzASF/vkxJTbA== Completed in 36ms
npm timing metavuln:cache:get:security-advisory:istanbul-lib-instrument:Jz+aLedcUQ5nv8KeI/49kn+g1Wu4bKZPnA7XQgmqZmbFfc2B2peNumvpvnF7OrevKtVC64QjubKp1EG1I82zfg== Completed in 36ms
npm timing metavuln:load:security-advisory:istanbul-lib-instrument:rdIaM4IHRiV5W+0rBaujH8woXF8jX6QsWygSvAgx/mWGl1Fkg+2iT3YwpZhnGHRem0uOaOaU2DzASF/vkxJTbA== Completed in 0ms
npm timing metavuln:calculate:security-advisory:istanbul-lib-instrument:rdIaM4IHRiV5W+0rBaujH8woXF8jX6QsWygSvAgx/mWGl1Fkg+2iT3YwpZhnGHRem0uOaOaU2DzASF/vkxJTbA== Completed in 36ms
npm timing metavuln:cache:get:security-advisory:make-dir:4mEtmCltvPmWQUYgzrJRceXWU20a4n2VdbkP3iuSf9JcY+ciVfAn2jwHMn5Ky2Bp/eHAVZKg78VkzXmUBTJcVw== Completed in 37ms
npm timing metavuln:load:security-advisory:make-dir:rdIaM4IHRiV5W+0rBaujH8woXF8jX6QsWygSvAgx/mWGl1Fkg+2iT3YwpZhnGHRem0uOaOaU2DzASF/vkxJTbA== Completed in 0ms
npm timing metavuln:calculate:security-advisory:make-dir:rdIaM4IHRiV5W+0rBaujH8woXF8jX6QsWygSvAgx/mWGl1Fkg+2iT3YwpZhnGHRem0uOaOaU2DzASF/vkxJTbA== Completed in 37ms
npm timing reifyNode:node_modules/@babel/generator Completed in 14782ms
npm timing reifyNode:node_modules/node-cron/node_modules/uuid Completed in 14818ms
npm timing reifyNode:node_modules/messagebird Completed in 14818ms
npm timing reifyNode:node_modules/nan Completed in 14824ms
npm timing reifyNode:node_modules/uuid Completed in 14842ms
npm timing reifyNode:node_modules/@bcoe/v8-coverage Completed in 14803ms
npm timing metavuln:cache:get:security-advisory:express:jvTd6gzTcOHtTpI+4CX7Ne4qICdj+n1Uun+dHPDk1JAyy9ltqA8JnsvVhBi+M0Y+kR5QoSv5YqjecJACWBUhEA== Completed in 31ms
npm timing metavuln:load:security-advisory:express:uoEU0GS6gk35ZdcQ5nagZYzZcDz5Th0PEvPIVa8rzwbO20pRdxYbAhpIm6Wc5MALXoWb1C4X8WqCtH02U0Wo1A== Completed in 1ms
npm timing metavuln:calculate:security-advisory:express:uoEU0GS6gk35ZdcQ5nagZYzZcDz5Th0PEvPIVa8rzwbO20pRdxYbAhpIm6Wc5MALXoWb1C4X8WqCtH02U0Wo1A== Completed in 32ms
npm timing reifyNode:node_modules/nodemon Completed in 14857ms
npm timing reifyNode:node_modules/prompts Completed in 14861ms
npm timing reifyNode:node_modules/@jimp/tiff Completed in 14832ms
npm timing metavuln:cache:get:security-advisory:micromatch:BLF3cOIAtZaU7fkKQSd6xiIxjEHO7Vsc2jei42/p8mgtpNzpd1AF8W8ZROhTEZsW4JYdHihNRrRcEbEuowIZ+g== Completed in 21ms
npm timing metavuln:load:security-advisory:micromatch:OV/4+5fZgoqfC743NsgdKkg1IaTYto4c916moYJ0wlLqNqSJewWZmkjHiibjgkdGJ0p9LjsMr41IRZ8wNgQzhg== Completed in 0ms
npm timing metavuln:calculate:security-advisory:micromatch:OV/4+5fZgoqfC743NsgdKkg1IaTYto4c916moYJ0wlLqNqSJewWZmkjHiibjgkdGJ0p9LjsMr41IRZ8wNgQzhg== Completed in 21ms
npm timing reifyNode:node_modules/socket.io-client Completed in 14887ms
npm timing metavuln:cache:get:security-advisory:micromatch:KLlQrQSexijh/BbB4FSM3fP0/MIDSj3iMiApgG1JwuVrHt48fzZ8fAIdgNu2TyvXdqnfHV2kIjol+N5OzsIiGQ== Completed in 19ms
npm timing metavuln:load:security-advisory:micromatch:JiXBFkEDkUnBQLw3PO6emUmmm2JXqgEbh+FhB3SNDS8k6Z0wM20irrfaOjjxYuMxZaKaDudvR037mtEoeqZzXw== Completed in 0ms
npm timing metavuln:calculate:security-advisory:micromatch:JiXBFkEDkUnBQLw3PO6emUmmm2JXqgEbh+FhB3SNDS8k6Z0wM20irrfaOjjxYuMxZaKaDudvR037mtEoeqZzXw== Completed in 20ms
npm timing metavuln:packument:anymatch Completed in 1ms
npm timing metavuln:packument:glob-stream Completed in 1ms
npm timing metavuln:packument:@jest/core Completed in 1ms
npm timing metavuln:packument:@jest/transform Completed in 1ms
npm timing metavuln:packument:jest-config Completed in 0ms
npm timing metavuln:packument:jest-haste-map Completed in 0ms
npm timing metavuln:packument:jest-message-util Completed in 0ms
npm timing metavuln:packument:readdirp Completed in 0ms
npm timing reifyNode:node_modules/istanbul-reports Completed in 14886ms
npm timing reifyNode:node_modules/esprima-fb Completed in 14891ms
npm timing metavuln:cache:get:security-advisory:anymatch:C+Y+5g22ECUgMwYK5kbds5fa1pbqRCqHkJnP+QGMn2/UUEOgcRQD58J8UZIaPbSky0UY6POlZ38kWR8+8DQerA== Completed in 27ms
npm timing metavuln:load:security-advisory:anymatch:TlYHmS8BZBwkbsPHbTfH2/e91KJnOnqfC63ZoKdiRy+yt6biPd8BwjBdyfPUht1+ZO675I3Gg00RQPYaWiOm8Q== Completed in 0ms
npm timing metavuln:calculate:security-advisory:anymatch:TlYHmS8BZBwkbsPHbTfH2/e91KJnOnqfC63ZoKdiRy+yt6biPd8BwjBdyfPUht1+ZO675I3Gg00RQPYaWiOm8Q== Completed in 28ms
npm timing metavuln:cache:get:security-advisory:glob-stream:lbYqzSKufy4fRJ58BYCaKEqi30BHuMA037ImWcpmmqFiribsdiFrnk7Giaoh7G2x9i1QT2KnSOjbLX4X3QbhvA== Completed in 28ms
npm timing metavuln:load:security-advisory:glob-stream:TlYHmS8BZBwkbsPHbTfH2/e91KJnOnqfC63ZoKdiRy+yt6biPd8BwjBdyfPUht1+ZO675I3Gg00RQPYaWiOm8Q== Completed in 0ms
npm timing metavuln:calculate:security-advisory:glob-stream:TlYHmS8BZBwkbsPHbTfH2/e91KJnOnqfC63ZoKdiRy+yt6biPd8BwjBdyfPUht1+ZO675I3Gg00RQPYaWiOm8Q== Completed in 28ms
npm timing metavuln:cache:get:security-advisory:@jest/core:03W5UBAiciMv+HbF52DVjKaiJDsW8n4o9l0N1bD9irL9aHp0XpkH6yRZbIXa21hJn/+RFQL1MCcLgDa/4eDK4w== Completed in 29ms
npm timing metavuln:load:security-advisory:@jest/core:TlYHmS8BZBwkbsPHbTfH2/e91KJnOnqfC63ZoKdiRy+yt6biPd8BwjBdyfPUht1+ZO675I3Gg00RQPYaWiOm8Q== Completed in 1ms
npm timing metavuln:calculate:security-advisory:@jest/core:TlYHmS8BZBwkbsPHbTfH2/e91KJnOnqfC63ZoKdiRy+yt6biPd8BwjBdyfPUht1+ZO675I3Gg00RQPYaWiOm8Q== Completed in 30ms
npm timing metavuln:cache:get:security-advisory:@jest/transform:frAXQpmFOgCLjrxLELwz/nGg5XiK/ZNDWwX3TPmrK4kjdo/GsnOnUL1px5EXlvvS4e0p7qsR8mhVO87fIAkI8w== Completed in 30ms
npm timing metavuln:load:security-advisory:@jest/transform:TlYHmS8BZBwkbsPHbTfH2/e91KJnOnqfC63ZoKdiRy+yt6biPd8BwjBdyfPUht1+ZO675I3Gg00RQPYaWiOm8Q== Completed in 0ms
npm timing metavuln:calculate:security-advisory:@jest/transform:TlYHmS8BZBwkbsPHbTfH2/e91KJnOnqfC63ZoKdiRy+yt6biPd8BwjBdyfPUht1+ZO675I3Gg00RQPYaWiOm8Q== Completed in 31ms
npm timing metavuln:cache:get:security-advisory:jest-config:PG5LJK++mIH2P5/BoeATw87eF+FfSdFbgEqp2CbnYYA8L17aFlVzq09vZtR3BFwoyR+3hWRZY28YfyQmAblGOg== Completed in 32ms
npm timing metavuln:load:security-advisory:jest-config:TlYHmS8BZBwkbsPHbTfH2/e91KJnOnqfC63ZoKdiRy+yt6biPd8BwjBdyfPUht1+ZO675I3Gg00RQPYaWiOm8Q== Completed in 1ms
npm timing metavuln:calculate:security-advisory:jest-config:TlYHmS8BZBwkbsPHbTfH2/e91KJnOnqfC63ZoKdiRy+yt6biPd8BwjBdyfPUht1+ZO675I3Gg00RQPYaWiOm8Q== Completed in 33ms
npm timing metavuln:cache:get:security-advisory:jest-haste-map:jM3bS1o4htRu+ACRH1gcErU4U2Iaalvaat1pZmyWiirmghW1371hURc/aE7fgn6m9mU4kt8GRZ0gy4wwGUZ7mQ== Completed in 33ms
npm timing metavuln:load:security-advisory:jest-haste-map:TlYHmS8BZBwkbsPHbTfH2/e91KJnOnqfC63ZoKdiRy+yt6biPd8BwjBdyfPUht1+ZO675I3Gg00RQPYaWiOm8Q== Completed in 2ms
npm timing metavuln:calculate:security-advisory:jest-haste-map:TlYHmS8BZBwkbsPHbTfH2/e91KJnOnqfC63ZoKdiRy+yt6biPd8BwjBdyfPUht1+ZO675I3Gg00RQPYaWiOm8Q== Completed in 35ms
npm timing metavuln:cache:get:security-advisory:jest-message-util:9e3+mtFMiM85wWr/OL6NNUJH/DnoduwxZZ0/PtDHjHEr2KrplOGkwoZ+9A9Of+V7gemgG4bDnVLxA6nt6hgQOQ== Completed in 35ms
npm timing metavuln:load:security-advisory:jest-message-util:TlYHmS8BZBwkbsPHbTfH2/e91KJnOnqfC63ZoKdiRy+yt6biPd8BwjBdyfPUht1+ZO675I3Gg00RQPYaWiOm8Q== Completed in 1ms
npm timing metavuln:calculate:security-advisory:jest-message-util:TlYHmS8BZBwkbsPHbTfH2/e91KJnOnqfC63ZoKdiRy+yt6biPd8BwjBdyfPUht1+ZO675I3Gg00RQPYaWiOm8Q== Completed in 36ms
npm timing metavuln:cache:get:security-advisory:readdirp:+d2UgLgLX0t1wXyh0jk2ydQmsHFQTQdQOXdd04Dn1M4prOXYadgasbs10uoOQrgaW94BQUaQP/nksfL9GaTFFg== Completed in 37ms
npm timing metavuln:load:security-advisory:readdirp:TlYHmS8BZBwkbsPHbTfH2/e91KJnOnqfC63ZoKdiRy+yt6biPd8BwjBdyfPUht1+ZO675I3Gg00RQPYaWiOm8Q== Completed in 0ms
npm timing metavuln:calculate:security-advisory:readdirp:TlYHmS8BZBwkbsPHbTfH2/e91KJnOnqfC63ZoKdiRy+yt6biPd8BwjBdyfPUht1+ZO675I3Gg00RQPYaWiOm8Q== Completed in 37ms
npm timing metavuln:packument:cookie-parser Completed in 1ms
npm timing reifyNode:node_modules/@babel/traverse Completed in 14909ms
npm timing reifyNode:node_modules/@babel/parser Completed in 14914ms
npm timing reifyNode:node_modules/@msgpack/msgpack Completed in 14921ms
npm timing metavuln:cache:get:security-advisory:cookie-parser:sDlhNVhVzHLlr5NOn1oZNoOUuqBS15f8C34c2B5V4HALuMj8x8t0nGF9Ey9QqedEK3SyeRoDDHIIBKbICoF5zA== Completed in 29ms
npm timing metavuln:load:security-advisory:cookie-parser:fiAgy8LdsBPaQEbo7M3TC0K1AVc7Dl69m8P2pmr6RTs1eBYnkyvV6lHHCRB0mAKtL1TSQPXxJVEHOqp48Uvhag== Completed in 1ms
npm timing metavuln:calculate:security-advisory:cookie-parser:fiAgy8LdsBPaQEbo7M3TC0K1AVc7Dl69m8P2pmr6RTs1eBYnkyvV6lHHCRB0mAKtL1TSQPXxJVEHOqp48Uvhag== Completed in 30ms
npm timing metavuln:cache:get:security-advisory:engine.io:Mcx1pu1tFBRK+2CJSQ02aQaSnGemn5aAV5HZ4krfLDYYTFYYsJHyMH5q38DiUEMvU9bVqHGQ6D909djb+WJnww== Completed in 30ms
npm timing metavuln:cache:get:security-advisory:express:wpiLhoazHuPn1BZx3aoZElXRJGtv0L0hAoLu6mSYyQJJZRllThEbX+Zz/Sao2aEUznMvCOKVfYofpLqfRxfcfQ== Completed in 29ms
npm timing metavuln:load:security-advisory:express:fiAgy8LdsBPaQEbo7M3TC0K1AVc7Dl69m8P2pmr6RTs1eBYnkyvV6lHHCRB0mAKtL1TSQPXxJVEHOqp48Uvhag== Completed in 1ms
npm timing metavuln:calculate:security-advisory:express:fiAgy8LdsBPaQEbo7M3TC0K1AVc7Dl69m8P2pmr6RTs1eBYnkyvV6lHHCRB0mAKtL1TSQPXxJVEHOqp48Uvhag== Completed in 31ms
npm timing reifyNode:node_modules/google-auth-library Completed in 14947ms
npm timing reifyNode:node_modules/engine.io-client Completed in 14947ms
npm timing reifyNode:node_modules/png-js Completed in 14970ms
npm http fetch GET 200 https://registry.npmjs.org/engine.io 56ms (cache hit)
npm timing metavuln:packument:engine.io Completed in 58ms
npm timing metavuln:load:security-advisory:engine.io:fiAgy8LdsBPaQEbo7M3TC0K1AVc7Dl69m8P2pmr6RTs1eBYnkyvV6lHHCRB0mAKtL1TSQPXxJVEHOqp48Uvhag== Completed in 0ms
npm timing metavuln:calculate:security-advisory:engine.io:fiAgy8LdsBPaQEbo7M3TC0K1AVc7Dl69m8P2pmr6RTs1eBYnkyvV6lHHCRB0mAKtL1TSQPXxJVEHOqp48Uvhag== Completed in 59ms
npm timing reifyNode:node_modules/nodemailer Completed in 14993ms
npm timing metavuln:cache:get:security-advisory:hawk:n0C7oTmp6DaxruCwrgyILlWE2YDUIv8ZTgPHF4fY7jHBfOld5lOEP2m5Asn+hsnJJ0tpllc66k5x5uQPRV/q0g== Completed in 21ms
npm timing metavuln:load:security-advisory:hawk:ulvRd7WBpx0ga/zfhuLq8RUBrWk5DUE+FrKXduMCD6aLHQDq8YZnOP6vMVte0B/t5YQbMXKTjyF7PYg7rCEfiw== Completed in 0ms
npm timing metavuln:calculate:security-advisory:hawk:ulvRd7WBpx0ga/zfhuLq8RUBrWk5DUE+FrKXduMCD6aLHQDq8YZnOP6vMVte0B/t5YQbMXKTjyF7PYg7rCEfiw== Completed in 21ms
npm timing metavuln:packument:bin-build Completed in 0ms
npm timing metavuln:packument:gulp-decompress Completed in 0ms
npm timing metavuln:cache:get:security-advisory:bin-build:YEt1pRpt8fw1aLRCwf4Dm6zawTGeTAdr7vOknqjxsBGqZecLtqvp7xRPeiYcTi9hovBh+okJc4kIWRKdsjeoKw== Completed in 18ms
npm timing metavuln:load:security-advisory:bin-build:gZVjgMrLp9dJzyQkcn4XBTrSSUXGrqPu00lw1U2qprNwW9ywchgJeaO4Az+5Eep0DEgtmtFPVMo58JRQGBBj4w== Completed in 0ms
npm timing metavuln:calculate:security-advisory:bin-build:gZVjgMrLp9dJzyQkcn4XBTrSSUXGrqPu00lw1U2qprNwW9ywchgJeaO4Az+5Eep0DEgtmtFPVMo58JRQGBBj4w== Completed in 19ms
npm timing metavuln:cache:get:security-advisory:gulp-decompress:3vcTJt03pHaBs46WoRNznXAtVDUARoAmnkA/1Hf9pii8qF5pz2vLt3Yk+qJ+YLGPH1KnlmEWrsWKtn77i8el3g== Completed in 19ms
npm timing metavuln:load:security-advisory:gulp-decompress:gZVjgMrLp9dJzyQkcn4XBTrSSUXGrqPu00lw1U2qprNwW9ywchgJeaO4Az+5Eep0DEgtmtFPVMo58JRQGBBj4w== Completed in 0ms
npm timing metavuln:calculate:security-advisory:gulp-decompress:gZVjgMrLp9dJzyQkcn4XBTrSSUXGrqPu00lw1U2qprNwW9ywchgJeaO4Az+5Eep0DEgtmtFPVMo58JRQGBBj4w== Completed in 19ms
npm timing reifyNode:node_modules/bson Completed in 15017ms
npm timing metavuln:cache:get:security-advisory:body-parser:GWxnUjanGYKttLQXGOrWHdZNn304enNmApvKE47ixhu0BVMhpUcjFW7EUSKwPwx6RXx8dprXigCB34aYZic5ew== Completed in 17ms
npm timing metavuln:load:security-advisory:body-parser:LoPbTT6TaN6cDh/f2pnOqltx5ztxEjbTC5D/iF4FIzlS2VLfhH36o3KwlPdlh65Q72b3TzsQNKaHEo1ue7dLRQ== Completed in 0ms
npm timing metavuln:calculate:security-advisory:body-parser:LoPbTT6TaN6cDh/f2pnOqltx5ztxEjbTC5D/iF4FIzlS2VLfhH36o3KwlPdlh65Q72b3TzsQNKaHEo1ue7dLRQ== Completed in 18ms
npm timing reifyNode:node_modules/ajv Completed in 15026ms
npm timing reifyNode:node_modules/node-forge Completed in 15057ms
npm timing metavuln:cache:get:security-advisory:axios:g0cPY/YCyfNQBQc5xvX1Rv/Pnu+Abo/9VYnXr0kknl/D4PDAveHfq5W15La0QmuOhFzr048GUEXk5y2rJeaRNw== Completed in 14ms
npm timing metavuln:load:security-advisory:axios:rD8yi3a8mVyeNvoX3wItq4e+Oa65QVDtc8KKes6VfIYPKX53VkWnOuxGYgUihdiwlz4i5mjg4yX/2qVYafhjyA== Completed in 0ms
npm timing metavuln:calculate:security-advisory:axios:rD8yi3a8mVyeNvoX3wItq4e+Oa65QVDtc8KKes6VfIYPKX53VkWnOuxGYgUihdiwlz4i5mjg4yX/2qVYafhjyA== Completed in 15ms
npm timing metavuln:packument:download Completed in 0ms
npm timing reifyNode:node_modules/@jimp/plugin-print Completed in 15034ms
npm timing metavuln:cache:get:security-advisory:download:nKiTPqPWWtt6ZVvgqb8Y/yu/1j2EbKc2v8K9tCp5FBXu4CBE4286Q+8m374EBOGmL3Oy73G2nUfdvIKeMq8FmA== Completed in 19ms
npm timing metavuln:load:security-advisory:download:6RwqOtyKHRfIYfVtDkU86+jmAkm03OLYFGvOQUWcpuzfU8h8RNz3w5ZFTGeJ+8QNC0jGK3xFL9UvdqMN+kLCrg== Completed in 0ms
npm timing metavuln:calculate:security-advisory:download:6RwqOtyKHRfIYfVtDkU86+jmAkm03OLYFGvOQUWcpuzfU8h8RNz3w5ZFTGeJ+8QNC0jGK3xFL9UvdqMN+kLCrg== Completed in 19ms
npm timing metavuln:cache:get:security-advisory:package-json:cXSOzFEMMrNmriTdTGZCU6xykKZ0LsIH6Aen5R37rgyTgB4yHl2T+r1Q/nhFOu5TIllPmEKmLe6MLJw1CYwPAg== Completed in 19ms
npm timing metavuln:load:security-advisory:package-json:6RwqOtyKHRfIYfVtDkU86+jmAkm03OLYFGvOQUWcpuzfU8h8RNz3w5ZFTGeJ+8QNC0jGK3xFL9UvdqMN+kLCrg== Completed in 0ms
npm timing metavuln:calculate:security-advisory:package-json:6RwqOtyKHRfIYfVtDkU86+jmAkm03OLYFGvOQUWcpuzfU8h8RNz3w5ZFTGeJ+8QNC0jGK3xFL9UvdqMN+kLCrg== Completed in 19ms
npm timing reifyNode:node_modules/winston/node_modules/async Completed in 15102ms
npm timing metavuln:cache:get:security-advisory:request:mPG3zzSF73nF5xpyBQpY8S249lLD+OYdGWAC4SVUv1RA2GFfYzVy29yvanQ9TnDZVCWeiPM4mY7KWHDLZeL0sg== Completed in 16ms
npm timing metavuln:load:security-advisory:request:Mp51eIN1esV0Dt0T1PQIIYWQqoo2+x7pcc0PDKKg71azbYOPDcqmQUIdl2UU1/OCqCI0D9xXcdGWX7ZJV/w18A== Completed in 1ms
npm timing metavuln:calculate:security-advisory:request:Mp51eIN1esV0Dt0T1PQIIYWQqoo2+x7pcc0PDKKg71azbYOPDcqmQUIdl2UU1/OCqCI0D9xXcdGWX7ZJV/w18A== Completed in 17ms
npm timing metavuln:packument:@jimp/jpeg Completed in 0ms
npm timing metavuln:packument:png-to-jpeg Completed in 1ms
npm timing reifyNode:node_modules/axios Completed in 15077ms
npm timing metavuln:cache:get:security-advisory:@jimp/jpeg:TQXRrVK9/ppbBgkqEtq2DeLxFwcdtLjNgXYlZ+SsZyoYOnuTyFf/ajcOk8V71Y3Qdv/UhIbarN+70vsxrMoUWA== Completed in 13ms
npm timing metavuln:load:security-advisory:@jimp/jpeg:EWyFhO+1m3CtrNrw1Rkj4rZeydTrXmYKib8C6/yscNBh/XcngX9/PrQ+5EvWWKoDM9tW5HLjnLRqiS4R87lehQ== Completed in 1ms
npm timing metavuln:calculate:security-advisory:@jimp/jpeg:EWyFhO+1m3CtrNrw1Rkj4rZeydTrXmYKib8C6/yscNBh/XcngX9/PrQ+5EvWWKoDM9tW5HLjnLRqiS4R87lehQ== Completed in 14ms
npm timing metavuln:cache:get:security-advisory:png-to-jpeg:K/XPhau5A8uI/QxhpFqIkhiGWqRjBcCdfF8adu5N4bhBiqoyYsCtM2zZFwbg2aNlRqEGvWxn+rdHTA7eX5ROrQ== Completed in 14ms
npm timing metavuln:load:security-advisory:png-to-jpeg:EWyFhO+1m3CtrNrw1Rkj4rZeydTrXmYKib8C6/yscNBh/XcngX9/PrQ+5EvWWKoDM9tW5HLjnLRqiS4R87lehQ== Completed in 0ms
npm timing metavuln:calculate:security-advisory:png-to-jpeg:EWyFhO+1m3CtrNrw1Rkj4rZeydTrXmYKib8C6/yscNBh/XcngX9/PrQ+5EvWWKoDM9tW5HLjnLRqiS4R87lehQ== Completed in 15ms
npm timing metavuln:packument:helmet Completed in 0ms
npm timing reifyNode:node_modules/@babel/runtime Completed in 15085ms
npm timing metavuln:cache:get:security-advisory:helmet:b9k6s8iiYEc237NLlP4qTgliLg6Z9t/sSRFv6T7T50hKdvFvzfJYAHp+Si29JN2fFKjD5rfbaNGL/XFN5CuCLA== Completed in 14ms
npm timing metavuln:load:security-advisory:helmet:c0ozEWszMMsnGEYdCKAoNWuKgJ3ey/EkstGikCJDSJBLgVXi2tBmIlYqkYlosEqa2hYDNLP1xI7C2I0mlBwnRA== Completed in 1ms
npm timing metavuln:calculate:security-advisory:helmet:c0ozEWszMMsnGEYdCKAoNWuKgJ3ey/EkstGikCJDSJBLgVXi2tBmIlYqkYlosEqa2hYDNLP1xI7C2I0mlBwnRA== Completed in 15ms
npm timing metavuln:packument:boom Completed in 0ms
npm timing metavuln:packument:sntp Completed in 1ms
npm timing reifyNode:node_modules/resolve Completed in 15131ms
npm timing metavuln:cache:get:security-advisory:boom:4uM7dp+hxvcDHeu1O5PcdMSfijBIBr53EzxJ7d6bIbpoPlwTZyeAm0ECayPEbC0Dt6fu6sjWGxkAiBLuorwH2g== Completed in 13ms
npm timing metavuln:load:security-advisory:boom:32smKM37e2vBT88jriFz1cAQxIxbf3lqfYvQLLRxIM+DMM77kSyHGU414lT7ywK+Atpe0Jr9Ak5XFV2NQgG5Rg== Completed in 0ms
npm timing metavuln:calculate:security-advisory:boom:32smKM37e2vBT88jriFz1cAQxIxbf3lqfYvQLLRxIM+DMM77kSyHGU414lT7ywK+Atpe0Jr9Ak5XFV2NQgG5Rg== Completed in 13ms
npm timing metavuln:cache:get:security-advisory:hawk:Kw09CF/Xb9e2rojGy73mdP4kRpAbrR79dMilp2Cw6fIe9F4p44i8vNUqlsD6vvQ9H2ujZWEiAWmli4lBH+8pZw== Completed in 14ms
npm timing metavuln:load:security-advisory:hawk:32smKM37e2vBT88jriFz1cAQxIxbf3lqfYvQLLRxIM+DMM77kSyHGU414lT7ywK+Atpe0Jr9Ak5XFV2NQgG5Rg== Completed in 0ms
npm timing metavuln:calculate:security-advisory:hawk:32smKM37e2vBT88jriFz1cAQxIxbf3lqfYvQLLRxIM+DMM77kSyHGU414lT7ywK+Atpe0Jr9Ak5XFV2NQgG5Rg== Completed in 14ms
npm timing metavuln:cache:get:security-advisory:sntp:xT/FIvQA40N+5PmRcAXvfQxWVmLd2qhqfZ4KOKmawz6ykeQO//Kkdjm8UgM2kmHEDvwun0831/HbDBpBVBmxZg== Completed in 14ms
npm timing metavuln:load:security-advisory:sntp:32smKM37e2vBT88jriFz1cAQxIxbf3lqfYvQLLRxIM+DMM77kSyHGU414lT7ywK+Atpe0Jr9Ak5XFV2NQgG5Rg== Completed in 0ms
npm timing metavuln:calculate:security-advisory:sntp:32smKM37e2vBT88jriFz1cAQxIxbf3lqfYvQLLRxIM+DMM77kSyHGU414lT7ywK+Atpe0Jr9Ak5XFV2NQgG5Rg== Completed in 14ms
npm timing reifyNode:node_modules/@babel/core Completed in 15116ms
npm timing metavuln:cache:get:security-advisory:socks:ZyRUcRmD1MNtaR/fRKhPv5VhG5no8wY0FkhGlAZmdaDLXgOItG6TaYDtgnEgHx5N6uAbGMSuMt20p4OZPEpG3Q== Completed in 16ms
npm timing reifyNode:node_modules/har-validator/node_modules/ajv Completed in 15154ms
npm http fetch GET 200 https://registry.npmjs.org/socks 30ms (cache hit)
npm timing metavuln:packument:socks Completed in 30ms
npm timing metavuln:load:security-advisory:socks:b30c5XyTTW4mB+FTN7C/h1vhoJFO9OI8Q+LTllMkSK3uH9C7IrxRvaSJh85+QHMX79NvRWdtpRRPVOFX+5JL7A== Completed in 1ms
npm timing metavuln:calculate:security-advisory:socks:b30c5XyTTW4mB+FTN7C/h1vhoJFO9OI8Q+LTllMkSK3uH9C7IrxRvaSJh85+QHMX79NvRWdtpRRPVOFX+5JL7A== Completed in 32ms
npm timing metavuln:packument:messagebird Completed in 0ms
npm timing metavuln:cache:get:security-advisory:messagebird:uNd3KsErUvW6HLBfy386TFQyuy2prjUGT2bR/u5DHvbLjacKPNJK6Lzj1vsElYBdnCBVDamOL2X0m4Pn0g9hxw== Completed in 10ms
npm timing metavuln:load:security-advisory:messagebird:EW3f8PiUAtqY3TVX6y8KuRosAB2vO4lkPfMFh6LwWFGwQQjkr45JtVR0ihyCRmO5DtRfRgxWtegp08Z/t/APaA== Completed in 0ms
npm timing metavuln:calculate:security-advisory:messagebird:EW3f8PiUAtqY3TVX6y8KuRosAB2vO4lkPfMFh6LwWFGwQQjkr45JtVR0ihyCRmO5DtRfRgxWtegp08Z/t/APaA== Completed in 10ms
npm timing metavuln:packument:gulp-util Completed in 0ms
npm timing reifyNode:node_modules/crypto-browserify Completed in 15177ms
npm timing metavuln:cache:get:security-advisory:gulp-util:iEndOmfnL7iUEAtvo5pDiQLHCcYMpn7BDuIhPlgYgQ9oVLT/jNAY12Cq64yQAasDxp4mdK/vp36kbyFnAwUxZw== Completed in 11ms
npm timing metavuln:load:security-advisory:gulp-util:al+VW8RfW7G2tqMwgyK9P7oNmFE2mUJNyGvwDksnYZhDVz+orC/gqUbCpr1Vk76i2YO8cAnd2ur+1jfthKI16g== Completed in 0ms
npm timing metavuln:calculate:security-advisory:gulp-util:al+VW8RfW7G2tqMwgyK9P7oNmFE2mUJNyGvwDksnYZhDVz+orC/gqUbCpr1Vk76i2YO8cAnd2ur+1jfthKI16g== Completed in 11ms
npm timing metavuln:cache:get:security-advisory:readdirp:jMyYPT0cBf3hOdV1DGAxNzvwu/GWmLcXKprkNesIT3orMV+89Sq9YRgFgSmYXxrcDfAHnuLyvjq/v8aPyhbDJw== Completed in 9ms
npm timing metavuln:load:security-advisory:readdirp:K78MTPydVC71TgA6yNWF08NDuRrSlWyd3D7XChtIo1T1YS1B9ZxXE6nU5osCGX07iM2f8LNTA0sAg/5/2czDeA== Completed in 0ms
npm timing metavuln:calculate:security-advisory:readdirp:K78MTPydVC71TgA6yNWF08NDuRrSlWyd3D7XChtIo1T1YS1B9ZxXE6nU5osCGX07iM2f8LNTA0sAg/5/2czDeA== Completed in 9ms
npm timing metavuln:packument:mkdirp Completed in 0ms
npm timing metavuln:cache:get:security-advisory:mkdirp:8D65IKszMyM3EEdZ4p4aTVGoyY96MZh/JoJyPAs+VTuW6OMYNmhRZ8rWWlisMoj+vosQXayIm02FiyBEYiWXQQ== Completed in 11ms
npm timing metavuln:load:security-advisory:mkdirp:QimlM5Z6RrlJkvnLve505LPmyXiRKjlmN2wsiL9+HewfCu+Fa13/XaY2fHzsWFIjaoVa5OLkSeRydwJ9iPePvQ== Completed in 0ms
npm timing metavuln:calculate:security-advisory:mkdirp:QimlM5Z6RrlJkvnLve505LPmyXiRKjlmN2wsiL9+HewfCu+Fa13/XaY2fHzsWFIjaoVa5OLkSeRydwJ9iPePvQ== Completed in 11ms
npm timing reifyNode:node_modules/valiquire-silent/node_modules/esprima Completed in 15229ms
npm timing metavuln:cache:get:security-advisory:migrate-mongo:9WhUxjf9LQP98TQRKGoUjKSY3rQIm2n/CbPm4SkORDH3822WYO8YYKMJZiC6DnCbCMzEk5DX3MKmcAeG42SuaA== Completed in 12ms
npm timing metavuln:cache:get:security-advisory:mongoose:HeOUhzZQCcBE5UU1wxFt+S13zfeeWQtugEiy6C5JZSsUQ3DXboAFdfKi5p1JpW8OEhbfn5qHoTj2/YZNMMNpYg== Completed in 12ms
npm timing metavuln:load:security-advisory:mongoose:kL0Tom4p3J8LAVDwKrQF/q+B0vLQld/QFQVuzmIs90v742tbXFcz36T6FB1lubh31HNSYZ5oTGtREFjnM7pY8A== Completed in 3ms
npm timing metavuln:calculate:security-advisory:mongoose:kL0Tom4p3J8LAVDwKrQF/q+B0vLQld/QFQVuzmIs90v742tbXFcz36T6FB1lubh31HNSYZ5oTGtREFjnM7pY8A== Completed in 15ms
npm http fetch GET 200 https://registry.npmjs.org/migrate-mongo 37ms (cache hit)
npm timing metavuln:packument:migrate-mongo Completed in 38ms
npm timing metavuln:load:security-advisory:migrate-mongo:kL0Tom4p3J8LAVDwKrQF/q+B0vLQld/QFQVuzmIs90v742tbXFcz36T6FB1lubh31HNSYZ5oTGtREFjnM7pY8A== Completed in 0ms
npm timing metavuln:calculate:security-advisory:migrate-mongo:kL0Tom4p3J8LAVDwKrQF/q+B0vLQld/QFQVuzmIs90v742tbXFcz36T6FB1lubh31HNSYZ5oTGtREFjnM7pY8A== Completed in 38ms
npm timing reifyNode:node_modules/jimp Completed in 15279ms
npm timing reifyNode:node_modules/png-to-jpeg/node_modules/jpeg-js Completed in 15294ms
npm timing metavuln:cache:get:security-advisory:express:rT3NvJVkQ/88Msx6/Jy+yX0rnG51IL6fcI7HNTejs6EC3xbaoIFvF8zk2TGhCwnefscotuiJiewzaHZjBqrORQ== Completed in 24ms
npm timing metavuln:load:security-advisory:express:MGO+1pdJTigPi3TXGZyVn35t2czXVkYs+fgMO7RE91yslgH9FQoQuUVMgE+5KM1TF4oevhUauG5tddQcIK8Fzg== Completed in 0ms
npm timing metavuln:calculate:security-advisory:express:MGO+1pdJTigPi3TXGZyVn35t2czXVkYs+fgMO7RE91yslgH9FQoQuUVMgE+5KM1TF4oevhUauG5tddQcIK8Fzg== Completed in 24ms
npm timing metavuln:packument:@jimp/core Completed in 0ms
npm timing metavuln:packument:load-bmfont Completed in 0ms
npm timing reifyNode:node_modules/js-sdsl Completed in 15302ms
npm timing metavuln:cache:get:security-advisory:@jimp/core:o5ecFq/G4npJOrYC1m85jywQz/lnDzisR9W+xYYxk/dORCU49KYiROfKymcVXnrDUdwpqmezmRKaP7QDAQGnlA== Completed in 13ms
npm timing metavuln:load:security-advisory:@jimp/core:6hBGhHxy2M96VZVljrOWS5lu3liWSp2ONTtWYQ0pO5JcL607XXBhEWH676AVxD9MHs98TF10ElsFZsg1Y479aA== Completed in 1ms
npm timing metavuln:calculate:security-advisory:@jimp/core:6hBGhHxy2M96VZVljrOWS5lu3liWSp2ONTtWYQ0pO5JcL607XXBhEWH676AVxD9MHs98TF10ElsFZsg1Y479aA== Completed in 14ms
npm timing metavuln:cache:get:security-advisory:load-bmfont:MqeXzhDgykyFBprxpXGm7A+cYMRtWjrTKK+uvu6dsSEKnl0qki7yEQ1Aqusppa1XP5KO8VhCCcl58bxwuKcgdw== Completed in 15ms
npm timing metavuln:load:security-advisory:load-bmfont:6hBGhHxy2M96VZVljrOWS5lu3liWSp2ONTtWYQ0pO5JcL607XXBhEWH676AVxD9MHs98TF10ElsFZsg1Y479aA== Completed in 0ms
npm timing metavuln:calculate:security-advisory:load-bmfont:6hBGhHxy2M96VZVljrOWS5lu3liWSp2ONTtWYQ0pO5JcL607XXBhEWH676AVxD9MHs98TF10ElsFZsg1Y479aA== Completed in 15ms
npm timing metavuln:packument:caw Completed in 0ms
npm timing metavuln:cache:get:security-advisory:caw:Hq9U+2UM0eY4hN885FrpjIE0H/eJQAR0Ldyk/hl4d8XJ/nEnkGHvw3zhZZFBVAm+zIj0OzXM+UXgqhd8Cg8HVQ== Completed in 17ms
npm timing metavuln:load:security-advisory:caw:exE+GmzNKlMlJalUNV5czlO+Eqow5R76LbbGDtkUVqHW0tjA9F/04kNFwWUdpYdLQBLo29bZ0Dwaixxv6H6h8w== Completed in 0ms
npm timing metavuln:calculate:security-advisory:caw:exE+GmzNKlMlJalUNV5czlO+Eqow5R76LbbGDtkUVqHW0tjA9F/04kNFwWUdpYdLQBLo29bZ0Dwaixxv6H6h8w== Completed in 18ms
npm timing metavuln:cache:get:security-advisory:phantomjs-prebuilt:1wj+4Khney4ibKxbYBYBvSf7ANVJrWUj7R/wc6zYBoBz9fT5EAsI8P535b/nh0A61PVOBtDXaPaXlzO5Ep3aAw== Completed in 13ms
npm http fetch GET 200 https://registry.npmjs.org/phantomjs-prebuilt 25ms (cache hit)
npm timing metavuln:packument:phantomjs-prebuilt Completed in 26ms
npm timing metavuln:load:security-advisory:phantomjs-prebuilt:YWMj9j1MPluG/i7GM3/il619Yyh/e9mxa0CiULhZGXRZl+TQlFyAG7gUf9x/Cj8XvveNYjOq7h13G6ZKSAmEzg== Completed in 0ms
npm timing metavuln:calculate:security-advisory:phantomjs-prebuilt:YWMj9j1MPluG/i7GM3/il619Yyh/e9mxa0CiULhZGXRZl+TQlFyAG7gUf9x/Cj8XvveNYjOq7h13G6ZKSAmEzg== Completed in 26ms
npm timing metavuln:packument:find-versions Completed in 0ms
npm timing metavuln:cache:get:security-advisory:find-versions:CVKXb73UVJZGgCLST44FeuUQzZpGXluUU/+FDUkG9JEpvRcfcenLMKyOJk+JD4eFxobsczPdd0f8H1VsfgJB9g== Completed in 10ms
npm timing metavuln:load:security-advisory:find-versions:YtAbLnC89eWX7NhIrb5x5Rc0BiZi9ktamnQ9fndzazZQBYXcWMKzbo5JPfWdIIK/onxhYUOmHlfGIm5YmkSKOg== Completed in 0ms
npm timing metavuln:calculate:security-advisory:find-versions:YtAbLnC89eWX7NhIrb5x5Rc0BiZi9ktamnQ9fndzazZQBYXcWMKzbo5JPfWdIIK/onxhYUOmHlfGIm5YmkSKOg== Completed in 11ms
npm timing metavuln:cache:get:security-advisory:express:xLZ7vThFpE1wlRWTPTFOjjJ1i5Wu8q/HC4n4uyTn1eNHaD3tpDEm5B24gTw6/wesKir2r8HYImjCcIpkG5zKYw== Completed in 5ms
npm timing metavuln:load:security-advisory:express:OShLTeaftGdoI6AC7xvJ84fklSsg8XN9g5w+pRFqXWtM66RkMgSjQaSgIRFeMMpYy/URhePqWfUgvGta5cUXXw== Completed in 20ms
npm timing metavuln:cache:get:security-advisory:serve-static:+4ES5L6wOU+n07z1dxXG80UrqDTSPCvHDdGabQr8AKIBUHjLmwOE4rkwa/jvhXc/6NudzDSsLDHTHXsv066Big== Completed in 27ms
npm timing metavuln:load:security-advisory:serve-static:OShLTeaftGdoI6AC7xvJ84fklSsg8XN9g5w+pRFqXWtM66RkMgSjQaSgIRFeMMpYy/URhePqWfUgvGta5cUXXw== Completed in 4ms
npm timing metavuln:cache:put:security-advisory:express:xLZ7vThFpE1wlRWTPTFOjjJ1i5Wu8q/HC4n4uyTn1eNHaD3tpDEm5B24gTw6/wesKir2r8HYImjCcIpkG5zKYw== Completed in 31ms
npm timing metavuln:calculate:security-advisory:express:OShLTeaftGdoI6AC7xvJ84fklSsg8XN9g5w+pRFqXWtM66RkMgSjQaSgIRFeMMpYy/URhePqWfUgvGta5cUXXw== Completed in 58ms
npm timing metavuln:cache:put:security-advisory:serve-static:+4ES5L6wOU+n07z1dxXG80UrqDTSPCvHDdGabQr8AKIBUHjLmwOE4rkwa/jvhXc/6NudzDSsLDHTHXsv066Big== Completed in 28ms
npm timing metavuln:calculate:security-advisory:serve-static:OShLTeaftGdoI6AC7xvJ84fklSsg8XN9g5w+pRFqXWtM66RkMgSjQaSgIRFeMMpYy/URhePqWfUgvGta5cUXXw== Completed in 59ms
npm timing metavuln:cache:get:security-advisory:express:A4TsuZI2o2e0Ax7EVEf6x3DHWrVSBPtfBMqN7I7BuTJxGdmyNf2R1CKhxVqsL77dRLUncIkqSwPzs6u/8nVzzg== Completed in 1ms
npm timing metavuln:load:security-advisory:express:6/5/7wCvhynQFLFlm3uAL70rYGPKRtebq7fww92FL5lg7aniCfsBAW3IWMWnLUwSQWZGUr38TziTDlnBorKdEg== Completed in 21ms
npm timing reifyNode:node_modules/@babel/types Completed in 15442ms
npm timing reifyNode:node_modules/@types/node Completed in 15444ms
npm timing metavuln:cache:put:security-advisory:express:A4TsuZI2o2e0Ax7EVEf6x3DHWrVSBPtfBMqN7I7BuTJxGdmyNf2R1CKhxVqsL77dRLUncIkqSwPzs6u/8nVzzg== Completed in 24ms
npm timing metavuln:calculate:security-advisory:express:6/5/7wCvhynQFLFlm3uAL70rYGPKRtebq7fww92FL5lg7aniCfsBAW3IWMWnLUwSQWZGUr38TziTDlnBorKdEg== Completed in 46ms
npm timing metavuln:cache:get:security-advisory:request:SXLdKIK0oNYiZcJA1zcvQ9uMNgtFuJ8RsciawDgUvI3vk/phuqOevDPc9iKvTxXaWKJ78SqXWm85UEYG2mYHYA== Completed in 9ms
npm timing metavuln:load:security-advisory:request:HH4YVJ2IpK7ANH6p8LNg+k61Fu3TjSqeiGZyE/iWXMDZiu9lna7Sl4I8RyLwD0qX6/1Wt6M1uDH5lAibFJHdLA== Completed in 0ms
npm timing metavuln:calculate:security-advisory:request:HH4YVJ2IpK7ANH6p8LNg+k61Fu3TjSqeiGZyE/iWXMDZiu9lna7Sl4I8RyLwD0qX6/1Wt6M1uDH5lAibFJHdLA== Completed in 9ms
npm timing metavuln:packument:meow Completed in 1ms
npm timing reifyNode:node_modules/stripe Completed in 15499ms
npm timing metavuln:cache:get:security-advisory:meow:OInI38OxbR/CqbLYJsBlHQ/u2oVjtoeW9YVAh43xhFJ9WG7JvoeE5dSoy2fhqkN/JFfrVHda+LEH1FKTTwJQAA== Completed in 15ms
npm timing metavuln:load:security-advisory:meow:YPxiINvm1vOyaw/Rc3ZPSnoDOyXNhloBzWf5szm5TJ3e6/kJ8DdoZ2EcHOG1WtP92yUlDzGS4zWhKCSTRJQxrw== Completed in 1ms
npm timing metavuln:calculate:security-advisory:meow:YPxiINvm1vOyaw/Rc3ZPSnoDOyXNhloBzWf5szm5TJ3e6/kJ8DdoZ2EcHOG1WtP92yUlDzGS4zWhKCSTRJQxrw== Completed in 16ms
npm timing metavuln:packument:nodemon Completed in 0ms
npm timing metavuln:cache:get:security-advisory:nodemon:CuiqLvLTATx94BAyG4HlDhkdpebQGsHfcbolm4DtWVa6wF5/25R5D8LqJ9Tje7dvLbl1tzM0e+K+uhSyhNaD5g== Completed in 11ms
npm timing metavuln:load:security-advisory:nodemon:KpkJErrkGULJZIW+9xOmSsIwMitOSm1iqrmnshUt71VPRI2QxhaSrpOws5aqRKdtUA3Uk87f7bqKOZfrxF+9jw== Completed in 1ms
npm timing metavuln:calculate:security-advisory:nodemon:KpkJErrkGULJZIW+9xOmSsIwMitOSm1iqrmnshUt71VPRI2QxhaSrpOws5aqRKdtUA3Uk87f7bqKOZfrxF+9jw== Completed in 12ms
npm timing metavuln:cache:get:security-advisory:bin-build:kkAyN1ooZXh7VprT8SgKl/3T2WxB9W0nWDFbT/9vYWqobeXoi2BcZOzCFmINPZeMh937vFg9QzMsQFywn4aG1A== Completed in 11ms
npm timing metavuln:load:security-advisory:bin-build:tlTtlXVwHNTLh7r0Mzz5G5Q8YHK+tmzsyJvjDQ1m2JAtUQksXDh3uTOqHzaqVW8TBv1Gw3RHg5jLdIbsbyvZWg== Completed in 0ms
npm timing metavuln:calculate:security-advisory:bin-build:tlTtlXVwHNTLh7r0Mzz5G5Q8YHK+tmzsyJvjDQ1m2JAtUQksXDh3uTOqHzaqVW8TBv1Gw3RHg5jLdIbsbyvZWg== Completed in 11ms
npm timing metavuln:packument:optionator Completed in 0ms
npm timing metavuln:cache:get:security-advisory:optionator:d3EtRFOK2NSdRvdJ7dD+oD0t3GdM6aO4C5FrF5XFrC4G8KIzrav+eygasuAS0o8Y0g/suyvNYQwl8w2ZW4G/5A== Completed in 8ms
npm timing metavuln:load:security-advisory:optionator:KuD0u0TEe1lJ9Y8nnHJk0i8e4gFvU7OHiKayejHAsg0tkhQi4DZJqW9IueFOjMTqOQfbmCZrpVfHV9PCkdQdeA== Completed in 1ms
npm timing metavuln:calculate:security-advisory:optionator:KuD0u0TEe1lJ9Y8nnHJk0i8e4gFvU7OHiKayejHAsg0tkhQi4DZJqW9IueFOjMTqOQfbmCZrpVfHV9PCkdQdeA== Completed in 9ms
npm timing metavuln:cache:get:security-advisory:engine.io:eh8Bym5n1a+gR6VsjAS5iHiVs86/9/qnqLR7EOXl7UUziM28DdDljzSrMzHF70Sl8u0v87nRBmJYWT+vOVlaJQ== Completed in 8ms
npm timing metavuln:load:security-advisory:engine.io:v2Har794Be+6XfcvT/NJHW1cDl3bIscCiu/kNNCIy/l00C5P2Cx1BODrleH5tIDK9p3TMcvLzGMY0Lz9rde8Ww== Completed in 1ms
npm timing metavuln:calculate:security-advisory:engine.io:v2Har794Be+6XfcvT/NJHW1cDl3bIscCiu/kNNCIy/l00C5P2Cx1BODrleH5tIDK9p3TMcvLzGMY0Lz9rde8Ww== Completed in 9ms
npm timing metavuln:cache:get:security-advisory:engine.io-client:nGH7QhgGB9ptPizAbRixqicEa0m21rLHjdhYKHHwCkqlZQVrpuRpfgklABsoU/xpbEOKlcb0CzbSErWMr541Kg== Completed in 9ms
npm timing metavuln:cache:get:security-advisory:socket.io-adapter:CISQdaAujH9c1/t5Y0vKhAySzbI2BtBjKvnUDi1W95ABhPSlYHGa/Jej+DibTIUZx7Vsf2QT8ikxR//T1h9feg== Completed in 9ms
npm http fetch GET 200 https://registry.npmjs.org/engine.io-client 21ms (cache hit)
npm timing metavuln:packument:engine.io-client Completed in 23ms
npm timing metavuln:load:security-advisory:engine.io-client:v2Har794Be+6XfcvT/NJHW1cDl3bIscCiu/kNNCIy/l00C5P2Cx1BODrleH5tIDK9p3TMcvLzGMY0Lz9rde8Ww== Completed in 1ms
npm timing metavuln:calculate:security-advisory:engine.io-client:v2Har794Be+6XfcvT/NJHW1cDl3bIscCiu/kNNCIy/l00C5P2Cx1BODrleH5tIDK9p3TMcvLzGMY0Lz9rde8Ww== Completed in 24ms
npm http fetch GET 200 https://registry.npmjs.org/socket.io-adapter 23ms (cache hit)
npm timing metavuln:packument:socket.io-adapter Completed in 25ms
npm timing metavuln:load:security-advisory:socket.io-adapter:v2Har794Be+6XfcvT/NJHW1cDl3bIscCiu/kNNCIy/l00C5P2Cx1BODrleH5tIDK9p3TMcvLzGMY0Lz9rde8Ww== Completed in 0ms
npm timing metavuln:calculate:security-advisory:socket.io-adapter:v2Har794Be+6XfcvT/NJHW1cDl3bIscCiu/kNNCIy/l00C5P2Cx1BODrleH5tIDK9p3TMcvLzGMY0Lz9rde8Ww== Completed in 25ms
npm timing metavuln:packument:parse-bmfont-xml Completed in 0ms
npm timing metavuln:cache:get:security-advisory:aws-sdk:1YliJolbYGJU6TRpaoW5EB7v8blJ2PLdY6x7JjJf3ybfBbm/piBdJ2TAZ2E+vxAVGRqccIuOAK8tgyxHjTV7ag== Completed in 13ms
npm timing metavuln:load:security-advisory:aws-sdk:BNDcnZXUQJUzgvJ6EUknK0EnnJupfOprQdlm0ChoO91dxd+6fSWgSw1o7DLvl4w73kNIr00oL8McocsqtpzZLQ== Completed in 12ms
npm timing metavuln:calculate:security-advisory:aws-sdk:BNDcnZXUQJUzgvJ6EUknK0EnnJupfOprQdlm0ChoO91dxd+6fSWgSw1o7DLvl4w73kNIr00oL8McocsqtpzZLQ== Completed in 25ms
npm timing metavuln:cache:get:security-advisory:parse-bmfont-xml:tF2djAAMRkkWVUTvtl1uEHyUKzmM09bJwnifK2uyc2eGvaCV8/qy4IPReg4hiy+aNl5GG69CD3dU59/+IIOzSA== Completed in 26ms
npm timing metavuln:load:security-advisory:parse-bmfont-xml:BNDcnZXUQJUzgvJ6EUknK0EnnJupfOprQdlm0ChoO91dxd+6fSWgSw1o7DLvl4w73kNIr00oL8McocsqtpzZLQ== Completed in 0ms
npm timing metavuln:calculate:security-advisory:parse-bmfont-xml:BNDcnZXUQJUzgvJ6EUknK0EnnJupfOprQdlm0ChoO91dxd+6fSWgSw1o7DLvl4w73kNIr00oL8McocsqtpzZLQ== Completed in 26ms
npm timing metavuln:cache:get:security-advisory:request:erfj8H3LlpDckinv5MJSx2usplIOx1dmT7Dy33mrZleHtrE2N5A7r0Rf6IfyLW0xpqLTN6pepkm+ws1Txi85bg== Completed in 12ms
npm timing metavuln:load:security-advisory:request:XASMpmv+KkTtFiv3BfFUJzX1GwiLRTyd0MrwQOWLd8n3QuqhBZko9WEquJDHZdxMfiiKLmKDpQCAi64K1s6AKg== Completed in 0ms
npm timing metavuln:calculate:security-advisory:request:XASMpmv+KkTtFiv3BfFUJzX1GwiLRTyd0MrwQOWLd8n3QuqhBZko9WEquJDHZdxMfiiKLmKDpQCAi64K1s6AKg== Completed in 12ms
npm timing metavuln:packument:bin-wrapper Completed in 0ms
npm timing metavuln:cache:get:security-advisory:bin-wrapper:teZ3T/n8LWM2bhoz8rxP3eqS4RneqZw0YEQj2WA3sGTssF4HEsLlyBcHANoTxY9nhJanNAP1ksoaDeichZ4TBA== Completed in 8ms
npm timing metavuln:load:security-advisory:bin-wrapper:T3hwak+Wrh+USVzMhNjjsXDIpPfzSJqyYF0GjfzHSODGuHTc8EV0PN9TFj5Y+gFumA1zHulrBdtvgRHx5Ig1nQ== Completed in 1ms
npm timing metavuln:calculate:security-advisory:bin-wrapper:T3hwak+Wrh+USVzMhNjjsXDIpPfzSJqyYF0GjfzHSODGuHTc8EV0PN9TFj5Y+gFumA1zHulrBdtvgRHx5Ig1nQ== Completed in 9ms
npm timing metavuln:packument:chokidar Completed in 0ms
npm timing metavuln:cache:get:security-advisory:chokidar:bkmCLPlfbk0tO6fbujoEGQ9NQmHu5QXMy3t175eIavEZn+kf/1+RKIOzFwgZ6xsuYKWe7tmM47TIygiezcZLig== Completed in 18ms
npm timing metavuln:load:security-advisory:chokidar:C+Y+5g22ECUgMwYK5kbds5fa1pbqRCqHkJnP+QGMn2/UUEOgcRQD58J8UZIaPbSky0UY6POlZ38kWR8+8DQerA== Completed in 0ms
npm timing metavuln:calculate:security-advisory:chokidar:C+Y+5g22ECUgMwYK5kbds5fa1pbqRCqHkJnP+QGMn2/UUEOgcRQD58J8UZIaPbSky0UY6POlZ38kWR8+8DQerA== Completed in 18ms
npm timing metavuln:packument:vinyl-fs Completed in 0ms
npm timing metavuln:cache:get:security-advisory:vinyl-fs:BGRWn/PLshZT+B6HCoXv1/uCwJ1PuuhtRJmhTOGhjXORYLTcb01TBi7ADRB4lp6fyIwKTkMO+UTACtzI5ChQDQ== Completed in 11ms
npm timing metavuln:load:security-advisory:vinyl-fs:lbYqzSKufy4fRJ58BYCaKEqi30BHuMA037ImWcpmmqFiribsdiFrnk7Giaoh7G2x9i1QT2KnSOjbLX4X3QbhvA== Completed in 4ms
npm timing metavuln:calculate:security-advisory:vinyl-fs:lbYqzSKufy4fRJ58BYCaKEqi30BHuMA037ImWcpmmqFiribsdiFrnk7Giaoh7G2x9i1QT2KnSOjbLX4X3QbhvA== Completed in 16ms
npm timing metavuln:cache:get:security-advisory:chokidar:x8ofmd1KmlZGQEmRHyYwdUzBaWv+0WL9jUJM99sWQJTfaf6Ydl+6Ps7TiGDsG53UTQS7OHQC0p3wcHu36him1Q== Completed in 15ms
npm timing metavuln:load:security-advisory:chokidar:+d2UgLgLX0t1wXyh0jk2ydQmsHFQTQdQOXdd04Dn1M4prOXYadgasbs10uoOQrgaW94BQUaQP/nksfL9GaTFFg== Completed in 0ms
npm timing metavuln:calculate:security-advisory:chokidar:+d2UgLgLX0t1wXyh0jk2ydQmsHFQTQdQOXdd04Dn1M4prOXYadgasbs10uoOQrgaW94BQUaQP/nksfL9GaTFFg== Completed in 15ms
npm timing reifyNode:node_modules/mongoose Completed in 15673ms
npm timing metavuln:cache:get:security-advisory:socket.io:0ekIi3SgysaPXExVzjeASiqW/XiKfvOgtrSAmSTBLfTObiHChBJJ6/ROLcsnnaGBCKzjGWpyeQRyZTlEbUFMDg== Completed in 10ms
npm timing metavuln:load:security-advisory:socket.io:Mcx1pu1tFBRK+2CJSQ02aQaSnGemn5aAV5HZ4krfLDYYTFYYsJHyMH5q38DiUEMvU9bVqHGQ6D909djb+WJnww== Completed in 1ms
npm timing metavuln:calculate:security-advisory:socket.io:Mcx1pu1tFBRK+2CJSQ02aQaSnGemn5aAV5HZ4krfLDYYTFYYsJHyMH5q38DiUEMvU9bVqHGQ6D909djb+WJnww== Completed in 11ms
npm timing metavuln:packument:jpegtran-bin Completed in 1ms
npm timing metavuln:packument:mozjpeg Completed in 1ms
npm timing metavuln:cache:get:security-advisory:jpegtran-bin:ynzXerBrb95vtr4ZhPnmiYDLZJtHRaCYXk0H0efBiUr6vCT/OlE4YCE5rf0kKozibWcZMu4kclGlOfFEn8dpCw== Completed in 10ms
npm timing metavuln:load:security-advisory:jpegtran-bin:YEt1pRpt8fw1aLRCwf4Dm6zawTGeTAdr7vOknqjxsBGqZecLtqvp7xRPeiYcTi9hovBh+okJc4kIWRKdsjeoKw== Completed in 0ms
npm timing metavuln:calculate:security-advisory:jpegtran-bin:YEt1pRpt8fw1aLRCwf4Dm6zawTGeTAdr7vOknqjxsBGqZecLtqvp7xRPeiYcTi9hovBh+okJc4kIWRKdsjeoKw== Completed in 10ms
npm timing metavuln:cache:get:security-advisory:mozjpeg:EsqtSk5LIN5I9x7KdQrenNqQiq1dTFxnlnHaSZ4T/yrdQuxJGEcMh0yB5Cam9TM2mXzrHTHURfBSWCtvYTk5yg== Completed in 10ms
npm timing metavuln:load:security-advisory:mozjpeg:YEt1pRpt8fw1aLRCwf4Dm6zawTGeTAdr7vOknqjxsBGqZecLtqvp7xRPeiYcTi9hovBh+okJc4kIWRKdsjeoKw== Completed in 1ms
npm timing metavuln:calculate:security-advisory:mozjpeg:YEt1pRpt8fw1aLRCwf4Dm6zawTGeTAdr7vOknqjxsBGqZecLtqvp7xRPeiYcTi9hovBh+okJc4kIWRKdsjeoKw== Completed in 11ms
npm timing metavuln:cache:get:security-advisory:download:cpee3VedaZ5wC7C6vdZrXljxXIla+lTgyizBMgCaCRVeAV/c4FEMZFdJrx99xv1O/VyYZi/fD26enSNlOky/Zw== Completed in 14ms
npm timing metavuln:load:security-advisory:download:3vcTJt03pHaBs46WoRNznXAtVDUARoAmnkA/1Hf9pii8qF5pz2vLt3Yk+qJ+YLGPH1KnlmEWrsWKtn77i8el3g== Completed in 0ms
npm timing metavuln:calculate:security-advisory:download:3vcTJt03pHaBs46WoRNznXAtVDUARoAmnkA/1Hf9pii8qF5pz2vLt3Yk+qJ+YLGPH1KnlmEWrsWKtn77i8el3g== Completed in 14ms
npm timing metavuln:cache:get:security-advisory:bin-build:+w6Y/TMU1pbDsOE8fqZLf3ay3dMSVVzQScHlxRw5VO/k/6V6/pNHfNOJ6TZ20ODxENFhViLAFc6Bjx4vdEG+Zw== Completed in 7ms
npm timing metavuln:load:security-advisory:bin-build:nKiTPqPWWtt6ZVvgqb8Y/yu/1j2EbKc2v8K9tCp5FBXu4CBE4286Q+8m374EBOGmL3Oy73G2nUfdvIKeMq8FmA== Completed in 0ms
npm timing metavuln:calculate:security-advisory:bin-build:nKiTPqPWWtt6ZVvgqb8Y/yu/1j2EbKc2v8K9tCp5FBXu4CBE4286Q+8m374EBOGmL3Oy73G2nUfdvIKeMq8FmA== Completed in 7ms
npm timing metavuln:cache:get:security-advisory:bin-wrapper:N90aOKsGTX+xuZqcHgXlaD+wT0FMQEO84coz6E/lQu3X3jxwegfoIJ3h7jj9w5NSN4wAqYpTwTxeyzSOPchCBw== Completed in 8ms
npm timing metavuln:load:security-advisory:bin-wrapper:nKiTPqPWWtt6ZVvgqb8Y/yu/1j2EbKc2v8K9tCp5FBXu4CBE4286Q+8m374EBOGmL3Oy73G2nUfdvIKeMq8FmA== Completed in 0ms
npm timing metavuln:calculate:security-advisory:bin-wrapper:nKiTPqPWWtt6ZVvgqb8Y/yu/1j2EbKc2v8K9tCp5FBXu4CBE4286Q+8m374EBOGmL3Oy73G2nUfdvIKeMq8FmA== Completed in 8ms
npm timing metavuln:packument:latest-version Completed in 0ms
npm timing metavuln:cache:get:security-advisory:latest-version:es7CtX39oUDG5qiC5N7RyNR+LcR5XTl5nZh1BTpAbdpM+BqpiWX17D0lUoxjGYIQa4jQBuPoFrAuzNJTTCSDUg== Completed in 7ms
npm timing metavuln:load:security-advisory:latest-version:cXSOzFEMMrNmriTdTGZCU6xykKZ0LsIH6Aen5R37rgyTgB4yHl2T+r1Q/nhFOu5TIllPmEKmLe6MLJw1CYwPAg== Completed in 0ms
npm timing metavuln:calculate:security-advisory:latest-version:cXSOzFEMMrNmriTdTGZCU6xykKZ0LsIH6Aen5R37rgyTgB4yHl2T+r1Q/nhFOu5TIllPmEKmLe6MLJw1CYwPAg== Completed in 7ms
npm timing metavuln:packument:@jimp/types Completed in 0ms
npm timing metavuln:cache:get:security-advisory:@jimp/types:6qNSU6MMsg+ju5cjYPkqih/8tYdylHnxV7SH0xr+Ny9yeZTKPpcvgInFwJMNrS6koWZGmVI9O8zPom7pemBg9Q== Completed in 8ms
npm timing metavuln:load:security-advisory:@jimp/types:TQXRrVK9/ppbBgkqEtq2DeLxFwcdtLjNgXYlZ+SsZyoYOnuTyFf/ajcOk8V71Y3Qdv/UhIbarN+70vsxrMoUWA== Completed in 1ms
npm timing metavuln:calculate:security-advisory:@jimp/types:TQXRrVK9/ppbBgkqEtq2DeLxFwcdtLjNgXYlZ+SsZyoYOnuTyFf/ajcOk8V71Y3Qdv/UhIbarN+70vsxrMoUWA== Completed in 9ms
npm timing metavuln:cache:get:security-advisory:hawk:DpjhSPtrsxabGTsQialvnrO88vH4JdGr5dHcq0MMeT7SHib7V+qDKZAlhy1Qt37cZoHXD43+FJBZVqyCSJsfFA== Completed in 10ms
npm timing metavuln:load:security-advisory:hawk:4uM7dp+hxvcDHeu1O5PcdMSfijBIBr53EzxJ7d6bIbpoPlwTZyeAm0ECayPEbC0Dt6fu6sjWGxkAiBLuorwH2g== Completed in 0ms
npm timing metavuln:calculate:security-advisory:hawk:4uM7dp+hxvcDHeu1O5PcdMSfijBIBr53EzxJ7d6bIbpoPlwTZyeAm0ECayPEbC0Dt6fu6sjWGxkAiBLuorwH2g== Completed in 10ms
npm timing metavuln:cache:get:security-advisory:cryptiles:IuljBbFJejNycZ0XOoso/QAdKE5QwsIf1SMxtyn3L5f7RP++T05LJLfC5KPr4WSPXMGYhVIwIFij84nfoBp+RQ== Completed in 11ms
npm timing metavuln:load:security-advisory:cryptiles:4uM7dp+hxvcDHeu1O5PcdMSfijBIBr53EzxJ7d6bIbpoPlwTZyeAm0ECayPEbC0Dt6fu6sjWGxkAiBLuorwH2g== Completed in 0ms
npm timing metavuln:calculate:security-advisory:cryptiles:4uM7dp+hxvcDHeu1O5PcdMSfijBIBr53EzxJ7d6bIbpoPlwTZyeAm0ECayPEbC0Dt6fu6sjWGxkAiBLuorwH2g== Completed in 11ms
npm timing metavuln:cache:get:security-advisory:hawk:j8mRLAeTiyRSXx5hveK0bLyx0j06qsdcN+WNSQmksxiRMD3Tafpykr/31D2fAGSOjKtgVJWnPBIaVhG6FrOnmw== Completed in 6ms
npm timing metavuln:load:security-advisory:hawk:xT/FIvQA40N+5PmRcAXvfQxWVmLd2qhqfZ4KOKmawz6ykeQO//Kkdjm8UgM2kmHEDvwun0831/HbDBpBVBmxZg== Completed in 1ms
npm timing metavuln:calculate:security-advisory:hawk:xT/FIvQA40N+5PmRcAXvfQxWVmLd2qhqfZ4KOKmawz6ykeQO//Kkdjm8UgM2kmHEDvwun0831/HbDBpBVBmxZg== Completed in 7ms
npm timing metavuln:cache:get:security-advisory:gulp-decompress:6OiGTJLDM5UkZ1PiPq0dPgeG7dOro1CqF2rLnoPdOYnclbwTtA1YbcPlYM+0+TpsSotsVi8fnBWhOwPmh/gIow== Completed in 7ms
npm timing metavuln:load:security-advisory:gulp-decompress:iEndOmfnL7iUEAtvo5pDiQLHCcYMpn7BDuIhPlgYgQ9oVLT/jNAY12Cq64yQAasDxp4mdK/vp36kbyFnAwUxZw== Completed in 0ms
npm timing metavuln:calculate:security-advisory:gulp-decompress:iEndOmfnL7iUEAtvo5pDiQLHCcYMpn7BDuIhPlgYgQ9oVLT/jNAY12Cq64yQAasDxp4mdK/vp36kbyFnAwUxZw== Completed in 7ms
npm timing reifyNode:node_modules/mongodb Completed in 15763ms
npm timing metavuln:cache:get:security-advisory:valiquire-silent:KvqgmnpljTd2ePcvVW3EX/7jD9ZvlEoa454vbPuApFxCMWOYmPbA1nT9TNLzeSu6vwOKvLw2X72ZDmnj+A1ykA== Completed in 11ms
npm http fetch GET 200 https://registry.npmjs.org/valiquire-silent 22ms (cache hit)
npm timing metavuln:packument:valiquire-silent Completed in 22ms
npm timing metavuln:load:security-advisory:valiquire-silent:jMyYPT0cBf3hOdV1DGAxNzvwu/GWmLcXKprkNesIT3orMV+89Sq9YRgFgSmYXxrcDfAHnuLyvjq/v8aPyhbDJw== Completed in 0ms
npm timing metavuln:calculate:security-advisory:valiquire-silent:jMyYPT0cBf3hOdV1DGAxNzvwu/GWmLcXKprkNesIT3orMV+89Sq9YRgFgSmYXxrcDfAHnuLyvjq/v8aPyhbDJw== Completed in 22ms
npm timing metavuln:cache:get:security-advisory:@jimp/core:Gn3fdiMFpFzq/dUhje2eTXGIaBCg2m+K1pW3MJyCQmI0uJH6KoCXw1GdY/Y9Y4is9hwZ7o9nXInO3XfZAwIVyA== Completed in 6ms
npm timing metavuln:load:security-advisory:@jimp/core:8D65IKszMyM3EEdZ4p4aTVGoyY96MZh/JoJyPAs+VTuW6OMYNmhRZ8rWWlisMoj+vosQXayIm02FiyBEYiWXQQ== Completed in 1ms
npm timing metavuln:calculate:security-advisory:@jimp/core:8D65IKszMyM3EEdZ4p4aTVGoyY96MZh/JoJyPAs+VTuW6OMYNmhRZ8rWWlisMoj+vosQXayIm02FiyBEYiWXQQ== Completed in 7ms
npm timing metavuln:cache:get:security-advisory:vinyl-fs:LWDQrZvHXe5ERlgSGCRd71Le2CS02wteWTwNEGFMmy2L9wNXzyTG4CplTOHriGORjB59OK7eU6lPQIXR3JXZdQ== Completed in 8ms
npm timing metavuln:load:security-advisory:vinyl-fs:8D65IKszMyM3EEdZ4p4aTVGoyY96MZh/JoJyPAs+VTuW6OMYNmhRZ8rWWlisMoj+vosQXayIm02FiyBEYiWXQQ== Completed in 0ms
npm timing metavuln:calculate:security-advisory:vinyl-fs:8D65IKszMyM3EEdZ4p4aTVGoyY96MZh/JoJyPAs+VTuW6OMYNmhRZ8rWWlisMoj+vosQXayIm02FiyBEYiWXQQ== Completed in 8ms
npm timing metavuln:packument:@jimp/custom Completed in 0ms
npm timing metavuln:cache:get:security-advisory:@jimp/custom:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 7ms
npm timing metavuln:load:security-advisory:@jimp/custom:o5ecFq/G4npJOrYC1m85jywQz/lnDzisR9W+xYYxk/dORCU49KYiROfKymcVXnrDUdwpqmezmRKaP7QDAQGnlA== Completed in 2ms
npm timing metavuln:calculate:security-advisory:@jimp/custom:o5ecFq/G4npJOrYC1m85jywQz/lnDzisR9W+xYYxk/dORCU49KYiROfKymcVXnrDUdwpqmezmRKaP7QDAQGnlA== Completed in 9ms
npm timing metavuln:packument:@jimp/plugin-print Completed in 0ms
npm timing metavuln:cache:get:security-advisory:@jimp/core:pJABekFTqnI7ChpBtqCGwIOfJgwqBZG/2ofBf38Llsz0pCqfzwH0t1W6G0TxY0aKiwfRDPG4N93d2T2qWUyanQ== Completed in 7ms
npm timing metavuln:load:security-advisory:@jimp/core:MqeXzhDgykyFBprxpXGm7A+cYMRtWjrTKK+uvu6dsSEKnl0qki7yEQ1Aqusppa1XP5KO8VhCCcl58bxwuKcgdw== Completed in 1ms
npm timing metavuln:calculate:security-advisory:@jimp/core:MqeXzhDgykyFBprxpXGm7A+cYMRtWjrTKK+uvu6dsSEKnl0qki7yEQ1Aqusppa1XP5KO8VhCCcl58bxwuKcgdw== Completed in 9ms
npm timing metavuln:cache:get:security-advisory:@jimp/plugin-print:d7zpTXAZfjdWb1DkHNqxP2Ry0bfHAArGxWM7mQepgkMWvo3b3XYq2Dul2TjD40y3DTaIPNnOUI1nLOUgQTOyAA== Completed in 9ms
npm timing metavuln:load:security-advisory:@jimp/plugin-print:MqeXzhDgykyFBprxpXGm7A+cYMRtWjrTKK+uvu6dsSEKnl0qki7yEQ1Aqusppa1XP5KO8VhCCcl58bxwuKcgdw== Completed in 1ms
npm timing metavuln:calculate:security-advisory:@jimp/plugin-print:MqeXzhDgykyFBprxpXGm7A+cYMRtWjrTKK+uvu6dsSEKnl0qki7yEQ1Aqusppa1XP5KO8VhCCcl58bxwuKcgdw== Completed in 11ms
npm timing metavuln:cache:get:security-advisory:download:plXsSORJxzxBnJPWwFiCeyTDgxt5JeNj/4j3AzW8qn/lPbjSWXW0uT0mVthlAM/NfQKna34Yd6DZPyI63qUOBA== Completed in 7ms
npm timing metavuln:load:security-advisory:download:Hq9U+2UM0eY4hN885FrpjIE0H/eJQAR0Ldyk/hl4d8XJ/nEnkGHvw3zhZZFBVAm+zIj0OzXM+UXgqhd8Cg8HVQ== Completed in 0ms
npm timing metavuln:calculate:security-advisory:download:Hq9U+2UM0eY4hN885FrpjIE0H/eJQAR0Ldyk/hl4d8XJ/nEnkGHvw3zhZZFBVAm+zIj0OzXM+UXgqhd8Cg8HVQ== Completed in 7ms
npm timing reifyNode:node_modules/jose Completed in 15823ms
npm timing metavuln:cache:get:security-advisory:html-pdf:Munbl40CXStAoOBbai0Of9Yz+btkHuWqsG4p9pE6Z0BS0AwfOnEgETLT9Qv7PeC/xfvRtPIsDYHLiY0fQI2YZQ== Completed in 9ms
npm http fetch GET 200 https://registry.npmjs.org/html-pdf 21ms (cache hit)
npm timing metavuln:packument:html-pdf Completed in 22ms
npm timing metavuln:load:security-advisory:html-pdf:1wj+4Khney4ibKxbYBYBvSf7ANVJrWUj7R/wc6zYBoBz9fT5EAsI8P535b/nh0A61PVOBtDXaPaXlzO5Ep3aAw== Completed in 0ms
npm timing metavuln:calculate:security-advisory:html-pdf:1wj+4Khney4ibKxbYBYBvSf7ANVJrWUj7R/wc6zYBoBz9fT5EAsI8P535b/nh0A61PVOBtDXaPaXlzO5Ep3aAw== Completed in 22ms
npm timing metavuln:packument:bin-version Completed in 0ms
npm timing metavuln:cache:get:security-advisory:bin-version:2wOWFEa7uwWcGlHtCHuBO6NCLxaskqxRZ8Aq6+hBugqC0nC/m4Jkuoq1/+GkFVFExMWJxlyuxnI3gkPUfqjDyA== Completed in 7ms
npm timing metavuln:load:security-advisory:bin-version:CVKXb73UVJZGgCLST44FeuUQzZpGXluUU/+FDUkG9JEpvRcfcenLMKyOJk+JD4eFxobsczPdd0f8H1VsfgJB9g== Completed in 0ms
npm timing metavuln:calculate:security-advisory:bin-version:CVKXb73UVJZGgCLST44FeuUQzZpGXluUU/+FDUkG9JEpvRcfcenLMKyOJk+JD4eFxobsczPdd0f8H1VsfgJB9g== Completed in 7ms
npm timing metavuln:packument:executable Completed in 1ms
npm timing metavuln:packument:lpad-align Completed in 0ms
npm timing metavuln:cache:get:security-advisory:executable:7sKrtllzl2OLKxySp0Lkf74x4L90qKvCguUzdGomAMzEN8OsKaDhSiaWER+i3sXI9UEbePysxK8Bs3lBgbq5UA== Completed in 8ms
npm timing metavuln:load:security-advisory:executable:OInI38OxbR/CqbLYJsBlHQ/u2oVjtoeW9YVAh43xhFJ9WG7JvoeE5dSoy2fhqkN/JFfrVHda+LEH1FKTTwJQAA== Completed in 0ms
npm timing metavuln:calculate:security-advisory:executable:OInI38OxbR/CqbLYJsBlHQ/u2oVjtoeW9YVAh43xhFJ9WG7JvoeE5dSoy2fhqkN/JFfrVHda+LEH1FKTTwJQAA== Completed in 8ms
npm timing metavuln:cache:get:security-advisory:find-versions:dbdBkdLHF6HUxYJ7/jh8LPTPDGhlzQS3wUZ1gPAvX3p8Pv5Ndf6aTlz13bcBW4kOYgwP+dIIFde7XZ8dZaiEzQ== Completed in 8ms
npm timing metavuln:load:security-advisory:find-versions:OInI38OxbR/CqbLYJsBlHQ/u2oVjtoeW9YVAh43xhFJ9WG7JvoeE5dSoy2fhqkN/JFfrVHda+LEH1FKTTwJQAA== Completed in 0ms
npm timing metavuln:calculate:security-advisory:find-versions:OInI38OxbR/CqbLYJsBlHQ/u2oVjtoeW9YVAh43xhFJ9WG7JvoeE5dSoy2fhqkN/JFfrVHda+LEH1FKTTwJQAA== Completed in 8ms
npm timing metavuln:cache:get:security-advisory:lpad-align:anLvGyjd4zimjqv6DSlSVo4JjpxG5GI+y2JtGdTyciMU/8WwyxORVJ80lcyHkp+wtvVWxyWvKwJD6N538pBuQA== Completed in 8ms
npm timing metavuln:load:security-advisory:lpad-align:OInI38OxbR/CqbLYJsBlHQ/u2oVjtoeW9YVAh43xhFJ9WG7JvoeE5dSoy2fhqkN/JFfrVHda+LEH1FKTTwJQAA== Completed in 0ms
npm timing metavuln:calculate:security-advisory:lpad-align:OInI38OxbR/CqbLYJsBlHQ/u2oVjtoeW9YVAh43xhFJ9WG7JvoeE5dSoy2fhqkN/JFfrVHda+LEH1FKTTwJQAA== Completed in 9ms
npm timing metavuln:cache:get:security-advisory:socket.io-client:+ATovEUQA3WPC7uFyr59SL9SYrzvZqSMQ6ZtJdS/0al2JjAS8Sr7vfa2f+1SoR82E3YgVCRmbPFzEXs0ZrStWQ== Completed in 9ms
npm timing reifyNode:node_modules/eslint Completed in 15867ms
npm http fetch GET 200 https://registry.npmjs.org/socket.io-client 18ms (cache hit)
npm timing metavuln:packument:socket.io-client Completed in 21ms
npm timing metavuln:load:security-advisory:socket.io-client:nGH7QhgGB9ptPizAbRixqicEa0m21rLHjdhYKHHwCkqlZQVrpuRpfgklABsoU/xpbEOKlcb0CzbSErWMr541Kg== Completed in 0ms
npm timing metavuln:calculate:security-advisory:socket.io-client:nGH7QhgGB9ptPizAbRixqicEa0m21rLHjdhYKHHwCkqlZQVrpuRpfgklABsoU/xpbEOKlcb0CzbSErWMr541Kg== Completed in 22ms
npm timing metavuln:cache:get:security-advisory:socket.io:3dW2wdCB0RTS//ILLj0l/4W8vOFQ8psCjAcKTkty5kwo6s3MIkSWeWu1LnEBJmfun/L4t/H5SxCz48AWd0c6OA== Completed in 6ms
npm timing metavuln:load:security-advisory:socket.io:CISQdaAujH9c1/t5Y0vKhAySzbI2BtBjKvnUDi1W95ABhPSlYHGa/Jej+DibTIUZx7Vsf2QT8ikxR//T1h9feg== Completed in 1ms
npm timing metavuln:calculate:security-advisory:socket.io:CISQdaAujH9c1/t5Y0vKhAySzbI2BtBjKvnUDi1W95ABhPSlYHGa/Jej+DibTIUZx7Vsf2QT8ikxR//T1h9feg== Completed in 7ms
npm timing metavuln:cache:get:security-advisory:load-bmfont:8/2fhf8jm4ypk/NCCxFr/urIoeK7axQ9RZkNUANqQauPzFY84HzlbgitAZcO4GFDxrg2csoU4FtAU1tRjdrSfA== Completed in 5ms
npm timing metavuln:load:security-advisory:load-bmfont:tF2djAAMRkkWVUTvtl1uEHyUKzmM09bJwnifK2uyc2eGvaCV8/qy4IPReg4hiy+aNl5GG69CD3dU59/+IIOzSA== Completed in 0ms
npm timing metavuln:calculate:security-advisory:load-bmfont:tF2djAAMRkkWVUTvtl1uEHyUKzmM09bJwnifK2uyc2eGvaCV8/qy4IPReg4hiy+aNl5GG69CD3dU59/+IIOzSA== Completed in 6ms
npm timing metavuln:cache:get:security-advisory:jpegtran-bin:cTLlblC3Qlh6O5WZN64rG9g5LnPESsjfftyKjDn/p1O6Aa/dUx8/jDOrvZvycby1esrOCWiIpQbax+aNGiJ+CA== Completed in 12ms
npm timing metavuln:load:security-advisory:jpegtran-bin:teZ3T/n8LWM2bhoz8rxP3eqS4RneqZw0YEQj2WA3sGTssF4HEsLlyBcHANoTxY9nhJanNAP1ksoaDeichZ4TBA== Completed in 0ms
npm timing metavuln:calculate:security-advisory:jpegtran-bin:teZ3T/n8LWM2bhoz8rxP3eqS4RneqZw0YEQj2WA3sGTssF4HEsLlyBcHANoTxY9nhJanNAP1ksoaDeichZ4TBA== Completed in 12ms
npm timing metavuln:cache:get:security-advisory:mozjpeg:ZyydtR587Um7kL5ROgpziRKHIaie73LWbpVHlRajVw7r881B69TlFV2By8M8BDvjmEnDrY6C7EF8FlFIdfAGEQ== Completed in 13ms
npm timing metavuln:load:security-advisory:mozjpeg:teZ3T/n8LWM2bhoz8rxP3eqS4RneqZw0YEQj2WA3sGTssF4HEsLlyBcHANoTxY9nhJanNAP1ksoaDeichZ4TBA== Completed in 0ms
npm timing metavuln:calculate:security-advisory:mozjpeg:teZ3T/n8LWM2bhoz8rxP3eqS4RneqZw0YEQj2WA3sGTssF4HEsLlyBcHANoTxY9nhJanNAP1ksoaDeichZ4TBA== Completed in 14ms
npm timing metavuln:cache:get:security-advisory:nodemon:q+sUolFI9WnIFn8NvvC63bVhwX+k31u9avr+eokYqXBVrMI+IFWVZ73MSRzMzS6Evof3HJAwazIkodSgLdR5vA== Completed in 13ms
npm timing metavuln:load:security-advisory:nodemon:bkmCLPlfbk0tO6fbujoEGQ9NQmHu5QXMy3t175eIavEZn+kf/1+RKIOzFwgZ6xsuYKWe7tmM47TIygiezcZLig== Completed in 1ms
npm timing metavuln:calculate:security-advisory:nodemon:bkmCLPlfbk0tO6fbujoEGQ9NQmHu5QXMy3t175eIavEZn+kf/1+RKIOzFwgZ6xsuYKWe7tmM47TIygiezcZLig== Completed in 14ms
npm timing metavuln:cache:get:security-advisory:decompress:esStwaBpIrooUFZxeBQ3ihMP9cFkJCAjR27fFx0HoGy815lWimT02GHo34GrFSGuZX9yUV+bKo2KomyRb0JSsw== Completed in 7ms
npm timing metavuln:load:security-advisory:decompress:BGRWn/PLshZT+B6HCoXv1/uCwJ1PuuhtRJmhTOGhjXORYLTcb01TBi7ADRB4lp6fyIwKTkMO+UTACtzI5ChQDQ== Completed in 0ms
npm timing metavuln:calculate:security-advisory:decompress:BGRWn/PLshZT+B6HCoXv1/uCwJ1PuuhtRJmhTOGhjXORYLTcb01TBi7ADRB4lp6fyIwKTkMO+UTACtzI5ChQDQ== Completed in 7ms
npm timing metavuln:cache:get:security-advisory:download:CXg7jNxFu2ZKubUr858ppV8/4gOAMyBB5CQ+hd6xQVX5MnBdPIB6XkKcuID0uwdEjLZ9IvQvseqzpgzKFQokLA== Completed in 8ms
npm timing metavuln:load:security-advisory:download:BGRWn/PLshZT+B6HCoXv1/uCwJ1PuuhtRJmhTOGhjXORYLTcb01TBi7ADRB4lp6fyIwKTkMO+UTACtzI5ChQDQ== Completed in 0ms
npm timing metavuln:calculate:security-advisory:download:BGRWn/PLshZT+B6HCoXv1/uCwJ1PuuhtRJmhTOGhjXORYLTcb01TBi7ADRB4lp6fyIwKTkMO+UTACtzI5ChQDQ== Completed in 8ms
npm timing metavuln:packument:imagemin-mozjpeg Completed in 0ms
npm timing metavuln:cache:get:security-advisory:imagemin-mozjpeg:yVMFtcmXLIkgsque0aI+N03xz1YgJQjKVdrLWwvOIUcaVBk2XwWj5L59s+oG7EzwbQnAsv1mTQB1CXtG22Rg2g== Completed in 21ms
npm timing metavuln:load:security-advisory:imagemin-mozjpeg:EsqtSk5LIN5I9x7KdQrenNqQiq1dTFxnlnHaSZ4T/yrdQuxJGEcMh0yB5Cam9TM2mXzrHTHURfBSWCtvYTk5yg== Completed in 0ms
npm timing metavuln:calculate:security-advisory:imagemin-mozjpeg:EsqtSk5LIN5I9x7KdQrenNqQiq1dTFxnlnHaSZ4T/yrdQuxJGEcMh0yB5Cam9TM2mXzrHTHURfBSWCtvYTk5yg== Completed in 21ms
npm timing metavuln:packument:update-notifier Completed in 0ms
npm timing metavuln:cache:get:security-advisory:update-notifier:1W+NgOc8MG4H++eU0nVeS4Jr5ZGEr7p7ogQburQL9BqPAbj8PXb1t86hoU3mJVGsXLXWwo8jBBlu8cExVphmMQ== Completed in 12ms
npm timing metavuln:load:security-advisory:update-notifier:es7CtX39oUDG5qiC5N7RyNR+LcR5XTl5nZh1BTpAbdpM+BqpiWX17D0lUoxjGYIQa4jQBuPoFrAuzNJTTCSDUg== Completed in 0ms
npm timing metavuln:calculate:security-advisory:update-notifier:es7CtX39oUDG5qiC5N7RyNR+LcR5XTl5nZh1BTpAbdpM+BqpiWX17D0lUoxjGYIQa4jQBuPoFrAuzNJTTCSDUg== Completed in 13ms
npm timing metavuln:packument:jimp Completed in 0ms
npm timing reifyNode:node_modules/ramda Completed in 15987ms
npm timing metavuln:cache:get:security-advisory:jimp:tPhw+cslvnXhNVqC7jrFi8FTqI+64TPHT00F8+Qd+NOhMqw7YoBgKluY52/kjcLrtrMOs5HsgiTah5LslFW3XA== Completed in 12ms
npm timing metavuln:load:security-advisory:jimp:6qNSU6MMsg+ju5cjYPkqih/8tYdylHnxV7SH0xr+Ny9yeZTKPpcvgInFwJMNrS6koWZGmVI9O8zPom7pemBg9Q== Completed in 1ms
npm timing metavuln:calculate:security-advisory:jimp:6qNSU6MMsg+ju5cjYPkqih/8tYdylHnxV7SH0xr+Ny9yeZTKPpcvgInFwJMNrS6koWZGmVI9O8zPom7pemBg9Q== Completed in 14ms
npm timing metavuln:cache:get:security-advisory:sanitycheck:PeTtFnD21WXBIwI0b3BxqBbcCzUnz63zPHkxMz8VngOD8SiJGryIbvWbAho/A8rmo6qv5VBbRdcSvxv31U3+dw== Completed in 11ms
npm http fetch GET 200 https://registry.npmjs.org/sanitycheck 30ms (cache hit)
npm timing metavuln:packument:sanitycheck Completed in 30ms
npm timing metavuln:load:security-advisory:sanitycheck:KvqgmnpljTd2ePcvVW3EX/7jD9ZvlEoa454vbPuApFxCMWOYmPbA1nT9TNLzeSu6vwOKvLw2X72ZDmnj+A1ykA== Completed in 0ms
npm timing metavuln:calculate:security-advisory:sanitycheck:KvqgmnpljTd2ePcvVW3EX/7jD9ZvlEoa454vbPuApFxCMWOYmPbA1nT9TNLzeSu6vwOKvLw2X72ZDmnj+A1ykA== Completed in 30ms
npm timing metavuln:packument:@jimp/bmp Completed in 5ms
npm timing metavuln:packument:@jimp/gif Completed in 5ms
npm timing metavuln:packument:@jimp/plugin-blit Completed in 5ms
npm timing metavuln:packument:@jimp/plugin-blur Completed in 5ms
npm timing metavuln:packument:@jimp/plugin-color Completed in 5ms
npm timing metavuln:packument:@jimp/plugin-contain Completed in 5ms
npm timing metavuln:packument:@jimp/plugin-cover Completed in 5ms
npm timing metavuln:packument:@jimp/plugin-crop Completed in 5ms
npm timing metavuln:packument:@jimp/plugin-displace Completed in 6ms
npm timing metavuln:packument:@jimp/plugin-dither Completed in 6ms
npm timing metavuln:packument:@jimp/plugin-flip Completed in 6ms
npm timing metavuln:packument:@jimp/plugin-gaussian Completed in 6ms
npm timing metavuln:packument:@jimp/plugin-invert Completed in 5ms
npm timing metavuln:packument:@jimp/plugin-mask Completed in 5ms
npm timing metavuln:packument:@jimp/plugin-normalize Completed in 5ms
npm timing metavuln:packument:@jimp/plugin-resize Completed in 5ms
npm timing metavuln:packument:@jimp/plugin-rotate Completed in 6ms
npm timing metavuln:packument:@jimp/plugin-scale Completed in 6ms
npm timing metavuln:packument:@jimp/plugins Completed in 5ms
npm timing metavuln:packument:@jimp/png Completed in 4ms
npm timing metavuln:packument:@jimp/tiff Completed in 3ms
npm timing metavuln:cache:get:security-advisory:@jimp/bmp:Avu4q2RbdoRJMM1w5OX1dID0AOp957xusleNlwD3SB0kq7DyU4zNG4uCOJDIa/qkSSbFqcnkx4v4nnZubuAbqw== Completed in 17ms
npm timing metavuln:load:security-advisory:@jimp/bmp:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 1ms
npm timing metavuln:calculate:security-advisory:@jimp/bmp:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 18ms
npm timing metavuln:cache:get:security-advisory:@jimp/gif:L43Db39IyvvR/ampKzHQv7eUew9Li6BUWBAUZr7zrcq0CSHWTcKg63NWq0UyVuKwRgcHHo0L6Vi0MkJz2qGSYw== Completed in 19ms
npm timing metavuln:load:security-advisory:@jimp/gif:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 0ms
npm timing metavuln:calculate:security-advisory:@jimp/gif:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 20ms
npm timing metavuln:cache:get:security-advisory:@jimp/jpeg:Na5pHr//97VTPaQ3yJZmxnAHboiLBJg8YQe1Z5Uy2DOh6RVdOPKQnFdCIktXlOtEU8xDvy5EE5eKPE3Tu3Xf/g== Completed in 21ms
npm timing metavuln:load:security-advisory:@jimp/jpeg:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 0ms
npm timing metavuln:calculate:security-advisory:@jimp/jpeg:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 23ms
npm timing metavuln:cache:get:security-advisory:@jimp/plugin-blit:E33F4Yp4n633k7bX8dEYQujPjCAtEmz3nLzayBeL263yGtDFM4pGVfMW3oCwoJdQsIeDNaQOSD7MHp8hiW43sw== Completed in 23ms
npm timing metavuln:load:security-advisory:@jimp/plugin-blit:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 4ms
npm timing metavuln:calculate:security-advisory:@jimp/plugin-blit:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 28ms
npm timing metavuln:cache:get:security-advisory:@jimp/plugin-blur:YA75l8LeIi80wKEyobhBwcnCuep2kPFSe3PN2nrXMVVFx4BSMDKvKspnHbVD+Yuo5KsY+twurU5Anjfjq0e/Rg== Completed in 29ms
npm timing metavuln:load:security-advisory:@jimp/plugin-blur:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 1ms
npm timing metavuln:calculate:security-advisory:@jimp/plugin-blur:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 30ms
npm timing metavuln:cache:get:security-advisory:@jimp/plugin-color:vW5KI9uOcRUK3TPtopqvf2x3XSx83C3hTsfT7dGrnn1gr4+cuoE7gBFo5TpY8xyl3zJe0rZUY1hIYGRlwsWZKA== Completed in 31ms
npm timing metavuln:load:security-advisory:@jimp/plugin-color:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 1ms
npm timing metavuln:calculate:security-advisory:@jimp/plugin-color:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 32ms
npm timing metavuln:cache:get:security-advisory:@jimp/plugin-contain:ZMyrG+YSbiNlGZFdoCZvRZ+ANjV4AYqk0qmU7z6gj/qjQG9B4grXDFVJPoH5pG3SAxHTKHeMVNHeCEk8C4gHpA== Completed in 33ms
npm timing metavuln:load:security-advisory:@jimp/plugin-contain:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 0ms
npm timing metavuln:calculate:security-advisory:@jimp/plugin-contain:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 35ms
npm timing metavuln:cache:get:security-advisory:@jimp/plugin-cover:r8i5ODle1I+hGopiPrbVFmgguccRbbISa6JOni+WrKllttcU2B9lFK8xmkNlq31U5XpnpZuJTHKuCQdJZd9xsA== Completed in 34ms
npm timing metavuln:load:security-advisory:@jimp/plugin-cover:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 0ms
npm timing metavuln:calculate:security-advisory:@jimp/plugin-cover:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 36ms
npm timing metavuln:cache:get:security-advisory:@jimp/plugin-crop:0EJWiNFYqBOYHoWCcKOG4LfpxYsDGjP6dylY3nfAnTrFaovn1zQ4iMqoTvzLERmIyQl9K+glPm8Dc4HRaAaimQ== Completed in 36ms
npm timing metavuln:load:security-advisory:@jimp/plugin-crop:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 1ms
npm timing metavuln:calculate:security-advisory:@jimp/plugin-crop:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 38ms
npm timing metavuln:cache:get:security-advisory:@jimp/plugin-displace:w5qcNIYFTt+6MYTi8I3N4Kr1syaVfuCXYOz6DLgXOgAZSzJwLs5cLUttXogd0b0tGXol4vUBDlW6vguV1DOhmA== Completed in 39ms
npm timing metavuln:load:security-advisory:@jimp/plugin-displace:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 1ms
npm timing metavuln:calculate:security-advisory:@jimp/plugin-displace:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 40ms
npm timing metavuln:cache:get:security-advisory:@jimp/plugin-dither:flYEkfTIsPKwqnPHFg430Eb0nBnv3Ll3oBoVaRdKZDp4qRVdkdSrW1uR/g6oG03+GBDKy9X8ElEvbj0eK8wKHA== Completed in 41ms
npm timing metavuln:load:security-advisory:@jimp/plugin-dither:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 4ms
npm timing metavuln:calculate:security-advisory:@jimp/plugin-dither:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 45ms
npm timing metavuln:cache:get:security-advisory:@jimp/plugin-flip:zELZV0TLhfgOxBupEEbabz+sT9f28kb4QJb/b6iMXt/Qgyy22ouSLeamMX24pEUZ4MyBumFycyM0kGdW7CtnTg== Completed in 45ms
npm timing metavuln:load:security-advisory:@jimp/plugin-flip:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 1ms
npm timing metavuln:calculate:security-advisory:@jimp/plugin-flip:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 47ms
npm timing metavuln:cache:get:security-advisory:@jimp/plugin-gaussian:F1wf319vRpQR+/7Qx5BEj43L+hpaTc5HQ/hzhgATaFzNxBbVxg967E4A79/9UtXIqWcaEPeEuTPXUFPsx4mDvg== Completed in 47ms
npm timing metavuln:load:security-advisory:@jimp/plugin-gaussian:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 1ms
npm timing metavuln:calculate:security-advisory:@jimp/plugin-gaussian:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 48ms
npm timing metavuln:cache:get:security-advisory:@jimp/plugin-invert:YCIXcU9vAiV/+NMYREOUjT2vbOW7iAHs25DQAGX0cgeRm3ENqGegjRUaqWTbQdStsw/86bmiCrExAaRHR7p6Og== Completed in 47ms
npm timing metavuln:load:security-advisory:@jimp/plugin-invert:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 1ms
npm timing metavuln:calculate:security-advisory:@jimp/plugin-invert:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 49ms
npm timing metavuln:cache:get:security-advisory:@jimp/plugin-mask:/uZAsMRVXQBZ60Ks+jtxHUHsZr1DNDRHhrBfYvu2C61A31pcH62Hf+o+a+h2p56DnaDzhLP9T3rcoDcJzotlTQ== Completed in 49ms
npm timing metavuln:load:security-advisory:@jimp/plugin-mask:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 1ms
npm timing metavuln:calculate:security-advisory:@jimp/plugin-mask:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 50ms
npm timing metavuln:cache:get:security-advisory:@jimp/plugin-normalize:N7ZR0C0JShiEL2CcTl5OT1BdxhbGLXNOIDQMcM/YCsRWUtG4FFvWMvprGFOEWV2mM677H8skywxdlgRwkIANBg== Completed in 51ms
npm timing metavuln:load:security-advisory:@jimp/plugin-normalize:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 1ms
npm timing metavuln:calculate:security-advisory:@jimp/plugin-normalize:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 52ms
npm timing metavuln:cache:get:security-advisory:@jimp/plugin-print:5fF+wsmKwCup0FjEcLxiBTIKMtFwv8OibkXz5jnJNDaGn+Vx8CbRCcoN2H9qTVAgndL3UrqFdd6z8Ox6jtFtrw== Completed in 52ms
npm timing metavuln:load:security-advisory:@jimp/plugin-print:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 2ms
npm timing metavuln:calculate:security-advisory:@jimp/plugin-print:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 54ms
npm timing metavuln:cache:get:security-advisory:@jimp/plugin-resize:5v/nF2MOMxvIilRkQQwJlMP2MgWW8sYwWvMRJnqyRjQPXvAR7+Bd8usn3yHJTL7IPZmvBGxCC3fNYs8ApcYiew== Completed in 54ms
npm timing metavuln:load:security-advisory:@jimp/plugin-resize:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 1ms
npm timing metavuln:calculate:security-advisory:@jimp/plugin-resize:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 55ms
npm timing metavuln:cache:get:security-advisory:@jimp/plugin-rotate:z6D/xoeVk06BsGcsqcdtgpHA3R1fbOPVLu9XD0oYqlVXOviUgrmyOGpY8wRebiG2iJfE/S40SRwGoHR1K4EEeQ== Completed in 56ms
npm timing metavuln:load:security-advisory:@jimp/plugin-rotate:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 1ms
npm timing metavuln:calculate:security-advisory:@jimp/plugin-rotate:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 57ms
npm timing metavuln:cache:get:security-advisory:@jimp/plugin-scale:vvp4aSVaVuulZAJByugXJ62q0Ni5iK+7rg+CFjpSNY5FEK421exYHeJ9/STOWvL1BBad1l95w79JiubFkTSlhA== Completed in 57ms
npm timing metavuln:load:security-advisory:@jimp/plugin-scale:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 2ms
npm timing metavuln:calculate:security-advisory:@jimp/plugin-scale:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 59ms
npm timing metavuln:cache:get:security-advisory:@jimp/plugins:1PIX/uKCy2uvigZuZUK9tYrsKUJ7gOy7V9QDqquQ3Mc2f7HmtWvOT0y7kg9ksppzV7VsqGdsNhFBBGjSq3scTA== Completed in 58ms
npm timing metavuln:load:security-advisory:@jimp/plugins:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 1ms
npm timing metavuln:calculate:security-advisory:@jimp/plugins:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 59ms
npm timing metavuln:cache:get:security-advisory:@jimp/png:vqhTXU9IekZvCv4JR+IV4EOhejgTpasx7dT2K9BqNhZJyePj1sD9Bn6xpL251aMqmwXmA2ypbTbfZeyEK7GyTQ== Completed in 59ms
npm timing metavuln:load:security-advisory:@jimp/png:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 1ms
npm timing metavuln:calculate:security-advisory:@jimp/png:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 61ms
npm timing metavuln:cache:get:security-advisory:@jimp/tiff:KE5bYccqqvQU3rems+xbsvmFYbDIlzDgTCgYilwNXMuEHV2UP4JjD87A5aHsPdIedDr7CtE/GYsyfhrmOdanDQ== Completed in 59ms
npm timing metavuln:load:security-advisory:@jimp/tiff:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 2ms
npm timing metavuln:calculate:security-advisory:@jimp/tiff:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 61ms
npm timing metavuln:cache:get:security-advisory:@jimp/types:kVr0CyegcS6Ma5h1qfFLJbTIovFQE3sTAW4TyrLUc5dnWHwCHVpjs5WBn4Bui8hSgqIQbaN8zJ2HG4Rqb8QX2Q== Completed in 61ms
npm timing metavuln:load:security-advisory:@jimp/types:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 1ms
npm timing metavuln:calculate:security-advisory:@jimp/types:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 63ms
npm timing metavuln:cache:get:security-advisory:jimp:uccwZJ3XARm+/rtpcPV0yYa3mKDFx3/qVrIA9JwwZu8soOUocaDNjV0lKzldeUFzFYR3dtVJNK/RaoRcHD2iMw== Completed in 63ms
npm timing metavuln:load:security-advisory:jimp:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 2ms
npm timing metavuln:calculate:security-advisory:jimp:IHRcE7VZ1QJjMaDBkSdDwjai9TTmUU3PQK/0ZhLrijL+qKTin6GpkL0xbRz6CXzBygUQUGg0V5TR3JGJ5y2/0A== Completed in 65ms
npm timing metavuln:cache:get:security-advisory:bin-version-check:ubzjstTg+bRkonjk+lE6wqrcCNHNdRHea0KCXQ0yf3v3mZpZin6qClfefe3TYxqdGnG4Krnzh6DKOblbXajwlg== Completed in 5ms
npm timing metavuln:load:security-advisory:bin-version-check:2wOWFEa7uwWcGlHtCHuBO6NCLxaskqxRZ8Aq6+hBugqC0nC/m4Jkuoq1/+GkFVFExMWJxlyuxnI3gkPUfqjDyA== Completed in 0ms
npm timing metavuln:calculate:security-advisory:bin-version-check:2wOWFEa7uwWcGlHtCHuBO6NCLxaskqxRZ8Aq6+hBugqC0nC/m4Jkuoq1/+GkFVFExMWJxlyuxnI3gkPUfqjDyA== Completed in 6ms
npm timing metavuln:packument:imagemin-jpegtran Completed in 0ms
npm timing metavuln:cache:get:security-advisory:imagemin-jpegtran:BQc9c/luFjw3hxqcgF5BtlTeZOiN5ntNNx2TTu8vSZE5pSER9/vXhF7u2ZgE2q0H5qP8kCPSx6x90bMNQ7W1mA== Completed in 6ms
npm timing metavuln:load:security-advisory:imagemin-jpegtran:cTLlblC3Qlh6O5WZN64rG9g5LnPESsjfftyKjDn/p1O6Aa/dUx8/jDOrvZvycby1esrOCWiIpQbax+aNGiJ+CA== Completed in 0ms
npm timing metavuln:calculate:security-advisory:imagemin-jpegtran:cTLlblC3Qlh6O5WZN64rG9g5LnPESsjfftyKjDn/p1O6Aa/dUx8/jDOrvZvycby1esrOCWiIpQbax+aNGiJ+CA== Completed in 6ms
npm timing metavuln:cache:get:security-advisory:nodemon:KXofE7fs5M1QYBCb54eV6fxMwHMf2P+TlrD82stx6AU/2a00WsNkvNqUPfjTcdz8xgz++DE/HRCdnONMazl7jA== Completed in 4ms
npm timing metavuln:load:security-advisory:nodemon:1W+NgOc8MG4H++eU0nVeS4Jr5ZGEr7p7ogQburQL9BqPAbj8PXb1t86hoU3mJVGsXLXWwo8jBBlu8cExVphmMQ== Completed in 1ms
npm timing metavuln:calculate:security-advisory:nodemon:1W+NgOc8MG4H++eU0nVeS4Jr5ZGEr7p7ogQburQL9BqPAbj8PXb1t86hoU3mJVGsXLXWwo8jBBlu8cExVphmMQ== Completed in 6ms
npm timing auditReport:init Completed in 13772ms
npm timing reify:audit Completed in 16158ms
npm timing reifyNode:node_modules/moment Completed in 16164ms
npm timing reifyNode:node_modules/prettier Completed in 16215ms
npm timing reifyNode:node_modules/caniuse-lite Completed in 16189ms
npm timing reifyNode:node_modules/lodash Completed in 16275ms
npm timing reifyNode:node_modules/core-js Completed in 16502ms
npm timing reifyNode:node_modules/aws-sdk Completed in 16798ms
npm timing reifyNode:node_modules/pdf-lib Completed in 16992ms
npm timing reifyNode:node_modules/date-fns Completed in 22750ms
npm timing reify:unpack Completed in 22781ms
npm timing reify:unretire Completed in 1ms
npm timing build:queue Completed in 27ms
npm timing build:link:node_modules/esprima-fb Completed in 19ms
npm timing build:link:node_modules/jest-cli Completed in 17ms
npm timing build:link:node_modules/@babel/parser Completed in 26ms
npm timing build:link:node_modules/@istanbuljs/load-nyc-config/node_modules/js-yaml Completed in 21ms
npm timing build:link:node_modules/aws-sdk/node_modules/uuid Completed in 21ms
npm timing build:link:node_modules/bin-build/node_modules/rimraf Completed in 20ms
npm timing build:link:node_modules/bin-version-check/node_modules/semver Completed in 20ms
npm timing build:link:node_modules/exec-buffer/node_modules/rimraf Completed in 21ms
npm timing build:link:node_modules/execa/node_modules/which Completed in 21ms
npm timing build:link:node_modules/extract-zip/node_modules/mkdirp Completed in 21ms
npm timing build:link:node_modules/imagemin-mozjpeg/node_modules/which Completed in 21ms
npm timing build:link:node_modules/gm/node_modules/which Completed in 22ms
npm timing build:link:node_modules/jest-snapshot/node_modules/semver Completed in 22ms
npm timing build:link:node_modules/node-abi/node_modules/semver Completed in 22ms
npm timing build:link:node_modules/normalize-package-data/node_modules/semver Completed in 21ms
npm timing build:link:node_modules/node-cron/node_modules/uuid Completed in 22ms
npm timing build:link:node_modules/package-json/node_modules/semver Completed in 22ms
npm timing build:link:node_modules/phantomjs-prebuilt/node_modules/which Completed in 22ms
npm timing build:link:node_modules/request/node_modules/uuid Completed in 22ms
npm timing build:link:node_modules/semver-diff/node_modules/semver Completed in 22ms
npm timing build:link:node_modules/sharp/node_modules/semver Completed in 23ms
npm timing build:link:node_modules/semver-truncate/node_modules/semver Completed in 23ms
npm timing build:link:node_modules/source-map-resolve/node_modules/atob Completed in 23ms
npm timing build:link:node_modules/tempfile/node_modules/uuid Completed in 23ms
npm timing build:link:node_modules/acorn Completed in 31ms
npm timing build:link:node_modules/valiquire-silent/node_modules/esprima Completed in 24ms
npm timing build:link:node_modules/bin-version-check Completed in 31ms
npm timing build:link:node_modules/atob Completed in 31ms
npm timing build:link:node_modules/browserslist Completed in 31ms
npm timing build:link:node_modules/color-support Completed in 32ms
npm timing build:link:node_modules/depscan Completed in 32ms
npm timing build:link:node_modules/escodegen Completed in 31ms
npm timing build:link:node_modules/eslint Completed in 31ms
npm timing build:link:node_modules/executable Completed in 32ms
npm timing build:link:node_modules/esprima Completed in 32ms
npm timing build:link:node_modules/extract-zip Completed in 31ms
npm timing build:link:node_modules/find-versions Completed in 31ms
npm timing build:link:node_modules/html-pdf Completed in 32ms
npm timing build:link:node_modules/google-p12-pem Completed in 32ms
npm timing build:link:node_modules/husky Completed in 32ms
npm timing build:link:node_modules/image-size Completed in 32ms
npm timing build:link:node_modules/import-local Completed in 32ms
npm timing build:link:node_modules/is-ci Completed in 33ms
npm timing build:link:node_modules/jest Completed in 33ms
npm timing build:link:node_modules/jpegtran-bin Completed in 32ms
npm timing build:link:node_modules/js Completed in 32ms
npm timing build:link:node_modules/js-yaml Completed in 33ms
npm timing build:link:node_modules/jsesc Completed in 33ms
npm timing build:link:node_modules/json5 Completed in 33ms
npm timing build:link:node_modules/lpad-align Completed in 33ms
npm timing build:link:node_modules/migrate-mongo Completed in 33ms
npm timing build:link:node_modules/mime Completed in 34ms
npm timing build:link:node_modules/mkdirp Completed in 34ms
npm timing build:link:node_modules/mustache Completed in 34ms
npm timing build:link:node_modules/mozjpeg Completed in 34ms
npm timing build:link:node_modules/nopt Completed in 34ms
npm timing build:link:node_modules/nodemon Completed in 35ms
npm timing build:link:node_modules/pixelmatch Completed in 34ms
npm timing build:link:node_modules/phantomjs-prebuilt Completed in 34ms
npm timing build:link:node_modules/prettier Completed in 35ms
npm timing build:link:node_modules/prebuild-install Completed in 35ms
npm timing build:link:node_modules/pretty-quick Completed in 35ms
npm timing build:link:node_modules/ps-tree Completed in 35ms
npm timing build:link:node_modules/rc Completed in 35ms
npm timing build:link:node_modules/resolve Completed in 35ms
npm timing build:link:node_modules/rimraf Completed in 35ms
npm timing build:link:node_modules/sanitycheck Completed in 35ms
npm timing build:link:node_modules/seek-bzip Completed in 36ms
npm timing build:link:node_modules/semver Completed in 35ms
npm timing build:link:node_modules/slug Completed in 35ms
npm timing build:link:node_modules/strip-dirs Completed in 35ms
npm timing build:link:node_modules/sshpk Completed in 35ms
npm timing build:link:node_modules/strip-indent Completed in 35ms
npm timing build:link:node_modules/touch Completed in 35ms
npm timing build:link:node_modules/update-browserslist-db Completed in 35ms
npm timing build:link:node_modules/uuid Completed in 35ms
npm timing build:link:node_modules/which Completed in 35ms
npm timing build:link:node_modules/valiquire-silent Completed in 35ms
npm timing build:link:node_modules/escodegen/node_modules/esprima Completed in 34ms
npm timing build:link:node_modules/superagent/node_modules/mime Completed in 33ms
npm timing build:link:node_modules/superagent/node_modules/semver Completed in 33ms
npm timing build:link Completed in 42ms
npm info run phantomjs-prebuilt@2.1.16 install node_modules/phantomjs-prebuilt node install.js
npm info run sharp@0.31.3 install node_modules/sharp (node install/libvips && node install/dll-copy && prebuild-install) || (node install/can-compile && node-gyp rebuild && node install/dll-copy)
npm info run sharp@0.31.3 install { code: 0, signal: null }
npm timing build:run:install:node_modules/sharp Completed in 927ms
npm info run phantomjs-prebuilt@2.1.16 install { code: 0, signal: null }
npm timing build:run:install:node_modules/phantomjs-prebuilt Completed in 3048ms
npm timing build:run:install Completed in 3049ms
npm info run core-js@2.6.12 postinstall node_modules/core-js node -e "try{require('./postinstall')}catch(e){}"
npm info run jpegtran-bin@3.2.0 postinstall node_modules/jpegtran-bin node lib/install.js
npm info run core-js@2.6.12 postinstall { code: 0, signal: null }
npm timing build:run:postinstall:node_modules/core-js Completed in 96ms
npm info run mozjpeg@5.0.0 postinstall node_modules/mozjpeg node lib/install.js
npm info run jpegtran-bin@3.2.0 postinstall { code: 0, signal: null }
npm timing build:run:postinstall:node_modules/jpegtran-bin Completed in 488ms
npm info run mozjpeg@5.0.0 postinstall { code: 0, signal: null }
npm timing build:run:postinstall:node_modules/mozjpeg Completed in 474ms
npm timing build:run:postinstall Completed in 570ms
npm timing build:deps Completed in 3689ms
npm timing build Completed in 3689ms
npm timing reify:build Completed in 3692ms
npm timing reify:trash Completed in 6ms
npm timing reify Completed in 26905ms

> wemoove@0.0.0 prepare
> husky install .husky

husky - Git hooks installed

added 1458 packages, and audited 1459 packages in 29s

91 packages are looking for funding
  run `npm fund` for details

94 vulnerabilities (2 low, 37 moderate, 42 high, 13 critical)

To address issues that do not require attention, run:
  npm audit fix

To address all issues possible (including breaking changes), run:
  npm audit fix --force

Some issues need review, and may require choosing
a different dependency.

Run `npm audit` for details.
npm timing command:ci Completed in 29247ms
npm verb exit 0
npm timing npm Completed in 29342ms
npm info ok 
```
