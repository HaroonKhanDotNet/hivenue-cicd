`PASS`
packagelint(jsonlint-package.md)
```js
npm WARN exec The following package was not found and will be installed: jsonlint@1.6.3
npm WARN deprecated nomnom@1.8.1: Package no longer supported. Contact support@npmjs.com for more info.
{
  "name": "wemoove",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www",
    "dev": "nodemon ./bin/www",
    "prettier:check": "prettier '**/*.{js,jsx,ts,json,md}' --check",
    "prettier:lint": "prettier '**/*.{js,jsx,ts,json,md}' --list-different",
    "prettier:write": "prettier --write '**/*.{js,jsx,ts,json,md}'",
    "precommit": "pretty-quick --staged",
    "prepare": "husky install .husky",
    "lint": "eslint .",
    "test": "jest --config ./jest.config.js tests/* --forceExit",
    "test:coverage": "jest --coverage --detectOpenHandles --verbose --forceExit",
    "migration:create": "migrate-mongo create",
    "migration:run": "migrate-mongo up",
    "build": "mkdir -p dist && rsync -av --exclude='.*' --exclude=README.md --exclude=docker-compose.yml --exclude=jest.config.js --exclude='migrate-mongo-config.js' --exclude=migrations/ --exclude=tests/ . dist/"
  },
  "dependencies": {
    "@logtail/node": "0.4.19",
    "@logtail/winston": "0.4.19",
    "atob": "2.0.3",
    "aws-sdk": "2.153.0",
    "body-parser": "1.15.2",
    "compression": "1.7.2",
    "cookie-parser": "1.4.3",
    "cors": "2.8.4",
    "country-list": "2.2.0",
    "debug": "2.2.0",
    "express": "4.18.2",
    "gm": "1.23.1",
    "google-auth-library": "8.7.0",
    "heic-convert": "1.2.4",
    "helmet": "3.12.0",
    "html-pdf": "3.0.1",
    "html-to-text": "9.0.5",
    "image-size": "0.6.2",
    "imagemagick": "0.1.3",
    "imagemin": "5.3.1",
    "imagemin-jpegtran": "5.0.2",
    "imagemin-mozjpeg": "7.0.0",
    "jimp": "0.6.0",
    "lodash": "4.17.21",
    "messagebird": "3.7.1",
    "migrate-mongo": "11.0.0",
    "moment": "2.29.1",
    "mongoose": "7.3.2",
    "morgan": "1.10.0",
    "multiparty": "4.2.3",
    "node-cron": "3.0.2",
    "nodemailer": "6.9.1",
    "pdf-lib": "1.17.1",
    "png-to-jpeg": "1.0.1",
    "request": "2.85.0",
    "sanitycheck": "2.0.2",
    "sharp": "0.31.3",
    "slug": "8.2.2",
    "socket.io": "4.6.1",
    "socket.io-client": "4.6.1",
    "stripe": "8.194.0",
    "uuid": "9.0.0",
    "winston": "3.8.2",
    "winston-mail": "2.0.0",
    "winston-slack-webhook-transport": "2.3.2"
  },
  "devDependencies": {
    "dotenv": "4.0.0",
    "eslint": "8.27.0",
    "husky": "8.0.1",
    "jest": "28.1.0",
    "nodemon": "1.12.0",
    "prettier": "2.7.1",
    "pretty-quick": "3.1.3",
    "supertest": "6.3.1"
  },
  "engines": {
    "node": "18.12.0",
    "npm": "8.19.2"
  }
}
```
