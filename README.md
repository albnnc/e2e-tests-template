### Simple e2e testing template

* `yarn install` 
* `yarn run test`

### Structure
```
e2e-tests-template
|
|-- README.md
|-- package.json
|-- yarn.lock
|
`-- src
    |
    |   // this file will be included in
    |   // each test by simply executing it
    |   // before launching the suite
    |-- common.js
    |
    |   // put your test suites here, they all will
    |   // automatically launched if you will use
    |   // the test script from package.json
    `-- suites
        |
        `-- example.js
```
