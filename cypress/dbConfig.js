const pgp = require('pg-promise');

const dbConfig = {
  dbHost: 'localhost',
  dbLogin: 'chongxiang',
  dbPassword: '',
  dbName: 'testdb',
  dbPort: 5432,
};
// const connectionString = Cypress.env(DATABASE_URL);
// need to provide the DATABASE_URL from outside
// either export DATABASE_URL=postgres://${dbConfig.dbLogin}:${dbConfig.dbPassword}@${dbConfig.dbHost}:${dbConfig.dbPort}/${dbConfig.dbName}
// or when 
const connectionString = `postgres://${dbConfig.dbLogin}:${dbConfig.dbPassword}@${dbConfig.dbHost}:${dbConfig.dbPort}/${dbConfig.dbName}`;
const db = pgp()(connectionString);

module.exports = { db };

