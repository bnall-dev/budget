const client = require('../client');

const transactions = {
  read: async () => {
    const response = await client.query('SELECT * FROM transactions');
    return response.rows;
  },

  create: async (transaction) => {
    const SQL = `INSERT INTO transactions (date, amount, transaction, method, category, cleared, type) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
    const response = await client.query(SQL, [
      transaction.date,
      transaction.amount,
      transaction.transaction,
      transaction.method,
      transaction.category,
      transaction.cleared,
      transaction.type,
    ]);
    return response.rows[0];
  },

  delete: async (transaction) => {
    const SQL = `DELETE FROM transactions WHERE id = $1`;
    const response = await client.query(SQL, [transaction.id]);
    return response.rows;
  },

  update: async (transaction) => {
    const SQL = `UPDATE transactions SET date = $1, amount = $2, transaction = $3, method = $4, category = $5, cleared = $6, type = $8 WHERE id = $7 RETURNING *`;
    const response = await client.query(SQL, [
      transaction.date,
      transaction.amount,
      transaction.transaction,
      transaction.method,
      transaction.category,
      transaction.cleared,
      transaction.id,
      transaction.type,
    ]);
    return response.rows[0];
  },
};

module.exports = transactions;
