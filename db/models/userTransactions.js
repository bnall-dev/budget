const client = require('../client');

const userTransactions = {
  read: async () => {
    const response = await client.query('SELECT * FROM user_transactions');
    return response.rows;
  },

  create: async (userTransaction) => {
    const SQL = `INSERT INTO user_transactions ("userId", "transactionId") VALUES ($1, $2) RETURNING *`;
    const response = await client.query(SQL, [
      userTransaction.userId,
      userTransaction.transactionId,
    ]);
    return response.rows[0];
  },

  delete: async (userTransaction) => {
    const SQL = `DELETE FROM user_transactions WHERE id = $1`;
    const response = await client.query(SQL, [userTransaction.id]);
    return response.rows;
  },
};

module.exports = userTransactions;
