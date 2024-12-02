`PASS`
dist(dist.md)
```js
sending incremental file list
app.js
db.js
dist.txt
package-lock.json
package.json
bin/
bin/www
constants/
constants/constants.js
controllers/
controllers/admin.js
controllers/apartments.js
controllers/auth.js
controllers/common.js
controllers/feedback.js
controllers/matching.js
controllers/payments.js
controllers/rent-requests.js
controllers/users.js
controllers/websocket.js
dist/
handler/
handler/stripeEventHandler.js
jobs/
jobs/apt-avail-cache.js
jobs/email-feedback.js
jobs/email-notification.js
jobs/orphaned-apts.js
jobs/rent-requests.js
locales/
locales/en.json
locales/fr.json
mails_templates/
mails_templates/admin-rent-request-update.html
mails_templates/completed-payment.html
mails_templates/generic_template.html
mails_templates/generic_text_template.html
mails_templates/movein-notification.html
mails_templates/newinterest.html
mails_templates/rent-request-photo.html
mails_templates/rent-request.html
mails_templates/signup_en.html
mails_templates/signup_fr.html
mails_templates/verification_code.html
middlewares/
middlewares/auth.js
middlewares/index.js
models/
models/admin.js
models/apartment.js
models/city.js
models/feedback.js
models/keyword-category.js
models/matching.js
models/neighborhood.js
models/payout.js
models/pending-rent-requests.js
models/rent-requests.js
models/sent-mails.js
models/sent-message.js
models/templates.js
models/token.js
models/transaction.js
models/user.js
models/webhook.js
routes/
routes/admin.js
routes/apartments.js
routes/feedback.js
routes/mail.js
routes/matching.js
routes/rent-requests.js
routes/system.js
routes/users.js
routes/utils.js
services/
services/mailservice.js
services/messagebird.js
services/stripe.js
utils/
utils/apartmentAvailability.js
utils/businessUtils.js
utils/dateUtils.js
utils/emailTemplatesUtils.js
utils/error.js
utils/helperUtils.js
utils/index.js
utils/log.js
utils/paymentUtils.js
utils/payoutUtils.js
utils/postalcodes.json
utils/s3Utils.js

sent 1,565,380 bytes  received 1,597 bytes  3,133,954.00 bytes/sec
total size is 1,559,281  speedup is 1.00
```
```js
dist
├── app.js
├── bin
│   └── www
├── constants
│   └── constants.js
├── controllers
│   ├── admin.js
│   ├── apartments.js
│   ├── auth.js
│   ├── common.js
│   ├── feedback.js
│   ├── matching.js
│   ├── payments.js
│   ├── rent-requests.js
│   ├── users.js
│   └── websocket.js
├── db.js
├── dist
├── dist.txt
├── handler
│   └── stripeEventHandler.js
├── jobs
│   ├── apt-avail-cache.js
│   ├── email-feedback.js
│   ├── email-notification.js
│   ├── orphaned-apts.js
│   └── rent-requests.js
├── locales
│   ├── en.json
│   └── fr.json
├── mails_templates
│   ├── admin-rent-request-update.html
│   ├── completed-payment.html
│   ├── generic_template.html
│   ├── generic_text_template.html
│   ├── movein-notification.html
│   ├── newinterest.html
│   ├── rent-request-photo.html
│   ├── rent-request.html
│   ├── signup_en.html
│   ├── signup_fr.html
│   └── verification_code.html
├── middlewares
│   ├── auth.js
│   └── index.js
├── models
│   ├── admin.js
│   ├── apartment.js
│   ├── city.js
│   ├── feedback.js
│   ├── keyword-category.js
│   ├── matching.js
│   ├── neighborhood.js
│   ├── payout.js
│   ├── pending-rent-requests.js
│   ├── rent-requests.js
│   ├── sent-mails.js
│   ├── sent-message.js
│   ├── templates.js
│   ├── token.js
│   ├── transaction.js
│   ├── user.js
│   └── webhook.js
├── package-lock.json
├── package.json
├── routes
│   ├── admin.js
│   ├── apartments.js
│   ├── feedback.js
│   ├── mail.js
│   ├── matching.js
│   ├── rent-requests.js
│   ├── system.js
│   ├── users.js
│   └── utils.js
├── services
│   ├── mailservice.js
│   ├── messagebird.js
│   └── stripe.js
└── utils
    ├── apartmentAvailability.js
    ├── businessUtils.js
    ├── dateUtils.js
    ├── emailTemplatesUtils.js
    ├── error.js
    ├── helperUtils.js
    ├── index.js
    ├── log.js
    ├── paymentUtils.js
    ├── payoutUtils.js
    ├── postalcodes.json
    └── s3Utils.js

13 directories, 79 files
```
`PASS`
replacelocal(dist.md)
```js
```
```js
log.js
const { createLogger, transports, format } = require('winston');
require('winston-mail').Mail;
const SlackHook = require('winston-slack-webhook-transport');
const { Logtail } = require('@logtail/node');
const { LogtailTransport } = require('@logtail/winston');

require('dotenv').config();

const transportsArray = [
    new transports.File({
        filename: 'logs/user.log',
        level: 'info',
    }),
    new transports.File({
        filename: 'logs/exceptions.log',
        level: 'error',
    }),
    new transports.Console({
        level: 'error',
        handleExceptions: true,
        json: true,
        colorize: true,
    }),
    new transports.Mail({
        level: 'error',
        to: `${process.env.NODE_ENV === 'staging' ? 'hivenue.log.dev@gmail.com' : 'hivenue.log.prod@gmail.com'}`,
        from: 'Hivenue <contact@hivenue.ca>',
        host: process.env.mailHost,
        port: 2525,
        username: process.env.mailUser,
        password: process.env.mailPassword,
        subject: `${Date.now()} - Error - {{msg}} - Hivenue/backend-2@develop: Mon, 2024-12-02, 05:31 AM UTC`,
        authentication: ['LOGIN'],
        filter: () => ['staging', 'production'].includes(process.env.NODE_ENV),
        formatter: (options) => {
            options.timestamp = new Date();
            return JSON.stringify(options, Object.getOwnPropertyNames(options));
        },
    }),
];

if (['staging', 'production'].includes(process.env.NODE_ENV)) {
    const logtail = new Logtail(process.env.LOG_TAIL_SECRET);
    transportsArray.push(new LogtailTransport(logtail));
}

if (['staging', 'production'].includes(process.env.NODE_ENV)) {
    transportsArray.push(
        new SlackHook({
            webhookUrl: process.env.SLACK_WEBHOOK_URL,
            formatter: (options) => {
                let stack = options.stack;
                if (stack && stack.length > 3000) {
                    stack = stack.substring(0, 3000);
                }
                let errorMessage = options.errorMessage
                    ? `${options.errorMessage} : ${options.message}`
                    : options.message;

                return {
                    blocks: [
                        {
                            type: 'section',
                            text: {
                                type: 'mrkdwn',
                                text: `:red_circle: ERROR - ${process.env.NODE_ENV.toUpperCase()} :red_circle:`,
                            },
                        },
                        {
                            type: 'section',
                            text: {
                                type: 'mrkdwn',
                                text: `*Message:* ${errorMessage}`,
                            },
                        },
                        {
                            type: 'section',
                            text: {
                                type: 'mrkdwn',
                                text: '*Stack:* \n```' + stack + '```',
                            },
                        },
                        {
                            type: 'section',
                            text: {
                                type: 'mrkdwn',
                                text: '*Raw:* \n```' + JSON.stringify(options) + '```',
                            },
                        },
                    ],
                };
            },
            level: 'error',
        }),
    );
}

if (['staging', 'production'].includes(process.env.NODE_ENV)) {
    transportsArray.push(
        new SlackHook({
            webhookUrl: process.env.SLACK_WEBHOOK_URL,
            formatter: (options) => {
                if (!options.sendToSlack) {
                    return null;
                }

                return {
                    blocks: [
                        {
                            type: 'section',
                            text: {
                                type: 'mrkdwn',
                                text: `:white_check_mark: INFO - ${process.env.NODE_ENV.toUpperCase()} :white_check_mark: `,
                            },
                        },
                        {
                            type: 'section',
                            text: {
                                type: 'mrkdwn',
                                text: `*Message:* ${options.message}`,
                            },
                        },
                        {
                            type: 'section',
                            text: {
                                type: 'mrkdwn',
                                text: `*cc:* <@U02GCNP3VK5>, <@U039UPFE7NF>`,
                            },
                        },
                    ],
                };
            },
            level: 'info',
        }),
    );
}

const appLogger = createLogger({
    format: format.combine(format.errors({ stack: true }), format.timestamp(), format.json()),
    transports: transportsArray,
});

const serverLogger = createLogger({
    transports: [
        new transports.File({
            level: 'info',
            filename: 'logs/app.log',
            handleExceptions: true,
            json: true,
            maxsize: 5242880, // 5MB
            maxFiles: 5,
            colorize: false,
        }),
        new transports.Console({
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: true,
        }),
    ],
    exitOnError: false,
});

serverLogger.stream = {
    write: function (message) {
        serverLogger.info(message);
    },
};

module.exports = {
    Server: serverLogger,
    info: function (message, additionalData = {}) {
        appLogger.info(message, additionalData);
    },
    warn: function (message, additionalData = {}) {
        appLogger.warn(message, additionalData);
    },

    /**
     * Logs an error message. This function handles several usages:
     * - With a custom error message, an Error object, and additional data:
     *   log.error('Custom error message', errorObject, { key: 'value' })
     * - With a custom error message and an Error object:
     *   log.error('Custom error message', errorObject)
     * - With a custom error message and additional data (creates a standard Error object internally):
     *   log.error('Custom error message', { key: 'value' })
     * - With only an Error object:
     *   log.error(errorObject)
     * - With an Error object and additional data:
     *   log.error(errorObject, { key: 'value' })
     */
    error: function (param1, param2, param3) {
        let errorMessage;
        let error;
        let additionalData = param3;

        if (param1 instanceof Error) {
            error = param1;
            additionalData = param2 || {};
        } else {
            errorMessage = param1;
            error = param2 instanceof Error ? param2 : new Error('An error occurred');
            if (!(param2 instanceof Error)) {
                additionalData = param2 || {};
            }
        }

        appLogger.error(error, { errorMessage, ...additionalData });
    },
};
```
```js
system.js
const router = require('express').Router();
const log = require('../utils/log');

router.route('/info').get((req, res) => {
    return res.status(200).json({ version: 1.0, branchName: 'Hivenue/backend-2@develop: Mon, 2024-12-02, 05:31 AM UTC' });
});

router.route('/rentreq').post((req, res) => {
    log.info('NO_MSG_BODY_DBG ' + JSON.stringify(req.body));
    return res.status(200).json({});
});

module.exports = router;
```
