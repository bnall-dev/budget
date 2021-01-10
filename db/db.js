const pg = require('pg');
const { Client } = pg;
const { v4: uuid } = require('uuid');
const client = require('./client');
const models = ({ users } = require('./models'));
const faker = require('faker');

const sync = async () => {
  if (process.env.NODE_ENV === 'production') {
    //**********************************  PRODUCTION ******************************* */
    console.log('environment is: ', process.env.NODE_ENV);
    const SQL = `    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
  CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR,
    password VARCHAR
  );

  `;
    await client.query(SQL);
  } else {
    /**********************************  DEVELOPMENT *******************************/
    console.log('environment is: development');
    const SQL = `    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";





  CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR,
    password VARCHAR

  );
  CREATE TABLE IF NOT EXISTS transactions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    date VARCHAR,
    amount FLOAT(2),
    transaction VARCHAR,
    method VARCHAR,
    type VARCHAR,
    category VARCHAR,
    cleared BOOLEAN DEFAULT false
  );
  CREATE TABLE IF NOT EXISTS user_transactions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "userId" UUID REFERENCES users(id),
    "transactionId" UUID REFERENCES transactions(id)
  );




 `;

    await client.query(SQL);
  }
};

module.exports = {
  sync,
  models,
};
