const client = require('../client');

const users = {
  read: async () => {
    const response = await client.query('SELECT * FROM users');
    return response.rows;
  },

  create: async (user) => {
    const SQL = `INSERT INTO users (name, password) VALUES ($1, $2) RETURNING *`;
    const response = await client.query(SQL, [user.name, user.password]);
    return response.rows[0];
  },

  delete: async (user) => {
    const SQL = `DELETE FROM users WHERE id = $1`;
    const response = await client.query(SQL, [user.id]);
    return response.rows;
  },

  update: async (user) => {
    const SQL = `UPDATE users SET name = $1 WHERE id = $2 RETURNING *`;
    const response = await client.query(SQL, [user.name, user.id]);
    return response.rows[0];
  },
};

module.exports = users;
