# Cypress_Grep_Tags
## Description
This demo includes 2 test specs with 6 tests. It demonstrates the plugin `@cypress/grep` under `Cypress`. The plugin helps developers to filter test scenarios per tags. It helps developers to specify particular tests per requirements, for instance, run `smoke` tests only; run `integration` tests, or run `e2e` regression tests.
### `Cypress Grep Tag Demo Google Search` 
**Spec tags**: `'@google_search'`
- `Search keyword: test` Test tags: `'@smoke'`
- `Search keyword: cypress` Test tags: `'@regression'`
- `Search keyword: samsung` Test tags: `'@integration', '@regression'`
### `Cypress Grep Tag Demo Samsung Home Page`
**Spec tags**: '@samsung_home'
- `Click button: search` Test tags: `'@regression'`
- `Click button: mobile` Test tags: `'smoke', '@regression'`
- `Click button: TV & AV` Test tags: `'@integration', '@regression'`
## Install
- Run `npm install` to install `Cypress` and `@cypress/grep`
### Manual install `@cypress/grep`
Assuming you have Cypress installed, add this module as a dev dependency
- `npm i -D @cypress/grep`

**Note**: @cypress/grep only works with Cypress version >= 10.
## Filter tests by tags
### Filter by single tag
`npx cypress run --env grepTags=@samsung_home`
<img width="1147" alt="cypress filter tag describe tag 02" src="https://user-images.githubusercontent.com/48189320/215157528-a961599b-4695-4c61-a6dc-d508948bfb15.png">
<img width="1124" alt="cypress filter tag describe tag 01" src="https://user-images.githubusercontent.com/48189320/215157514-703c4136-4ffc-44f5-9601-2ab0b6b72171.png">
### Filter by multiple tags
`npx cypress run --env grepTags='@smoke @integration'`
<img width="1117" alt="cypress filter tag multiple 01" src="https://user-images.githubusercontent.com/48189320/215157664-f740ab66-1b6a-4dfc-a536-20e40ea4017b.png">
<img width="1129" alt="cypress filter tag multiple 02" src="https://user-images.githubusercontent.com/48189320/215157674-98e97a8e-749d-4086-8aa9-700fdf20642c.png">
### Filter by excluding tags
`npx cypress run --env grepTags='--@smoke'`
<img width="1125" alt="cypress filter tag exclude tag 01" src="https://user-images.githubusercontent.com/48189320/215157869-49b73e57-ddfe-4f47-80e7-bfbb11a528ad.png">
<img width="1114" alt="cypress filter tag exclude tag 02" src="https://user-images.githubusercontent.com/48189320/215157874-1ff18233-bcbf-400b-ac68-07a03a62398c.png">
<img width="1161" alt="cypress filter tag exclude tag 03" src="https://user-images.githubusercontent.com/48189320/215157876-e3e8ac68-6ad1-444e-9fb7-c605bdc1319c.png">
### Filter by including & excluding tags
`npx cypress run --env grepTags='@smoke --@regression'`
<img width="1125" alt="cypress filter tag include exclude 01" src="https://user-images.githubusercontent.com/48189320/215157737-ce88980d-c58e-4d63-82cd-f5ad59ed182d.png">
<img width="1120" alt="cypress filter tag include exclude 02" src="https://user-images.githubusercontent.com/48189320/215157744-325f5ee8-b413-49d7-baf0-85a4c5cc70a4.png">

## Reference
- [@cypress/grep](https://github.com/cypress-io/cypress/tree/develop/npm/grep)
