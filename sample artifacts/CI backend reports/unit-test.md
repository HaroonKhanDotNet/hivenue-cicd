`PASS`
unit(unit-test.md)
```js

> wemoove@0.0.0 test
> jest --config ./jest.config.js tests/* --forceExit

PASS tests/utils/avail.test.js (6.699 s)
PASS tests/api/apartmentAPI.test.js
  ● Console

    console.log
      {"errorMessage":"Error creating card in stripe","level":"error","message":"Cannot read properties of undefined (reading 'id')","stack":"TypeError: Cannot read properties of undefined (reading 'id')\n    at id (/home/runner/work/backend-2/backend-2/controllers/apartments.js:976:62)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)","stripeCustomerId":"cus_123123124","timestamp":"2024-12-02T05:34:09.417Z"}

      at Console.log (node_modules/winston/lib/winston/transports/console.js:79:23)

PASS tests/api/adminAPI.test.js
PASS tests/utils/payout.test.js
  ● Console

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
          _id: new ObjectId("674d46d4e069972cc7b6d9e4")
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
          _id: new ObjectId("674d46d4e069972cc7b6d9e5")
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
          _id: new ObjectId("674d46d4e069972cc7b6d9e6")
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

PASS tests/utils/utils.test.js

Test Suites: 5 passed, 5 total
Tests:       39 passed, 39 total
Snapshots:   0 total
Time:        13.758 s
Ran all test suites matching /tests\/api|tests\/helper|tests\/setup.js|tests\/utils/i.
Force exiting Jest: Have you considered using `--detectOpenHandles` to detect async operations that kept running after all tests finished?
```
