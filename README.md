# Cypress_Grep_Tags
## Description
This demo has 2 test specs with 6 tests. 
### `Cypress Grep Tag Demo Google Search` 
Spec tags: '@google_search'
- `Search keyword: test` Test tags: '@smoke'
- `Search keyword: cypress` Test tags: '@regression'
- `Search keyword: samsung` Test tags: '@integration', '@regression'
### `Cypress Grep Tag Demo Samsung Home Page`
Spec tags: '@samsung_home'
- `Click button: search` Test tags: '@regression'
- `Click button: mobile` Test tags: 'smoke', '@regression'
- `Click button: TV & AV` Test tags: '@integration', '@regression'
## Install
- Run `npm install` to install `Cypress` and `@cypress/grep`
### Manual install `Cypress` & `@cypress/grep`
Assuming you have Cypress installed, add this module as a dev dependency
- `npm i -D @cypress/grep`
**Note**: @cypress/grep only works with Cypress version >= 10.
## Filter tests by tags
### Filter by single tag
`npx cypress run --env grepTags=@smoke`
### Filter by multiple tags
`npx cypress run --env grepTags='@smoke @integration'`
### Filter by excluding tags
`npx cypress run --env grepTags='--@smoke'`
### Filter by including & excluding tags
`npx cypress run --env grepTags='@smoke --@regression'`
## Reference
- [@cypress/grep](https://github.com/cypress-io/cypress/tree/develop/npm/grep)