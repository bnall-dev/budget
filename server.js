const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const fs = require('fs');
const db = require('./db/db.js');
const bodyParser = require('body-parser');

//////////////////use///////////////////
app.use(express.json());

app.use(bodyParser.json());
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));

var myLogger = function (req, res, next) {
  console.log(req.body);
  next();
};
app.use(myLogger);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

//USERS
app.get('/api/users', (req, res, next) => {
  db.models.users
    .read()
    .then((response) => res.send(response))
    .catch(next);
});

app.post('/api/users/', (req, res, next) => {
  db.models.users
    .create(req.body)
    .then((response) => res.send(response))
    .catch(next);
});

app.put('/api/users/:id', (req, res, next) => {
  const id = req.params.id;
  db.models.users
    .update(req.body)
    .then((user) => res.send(user))
    .catch(next);
});

app.delete('/api/users/:id', (req, res, next) => {
  db.models.users
    .delete(req.params)
    .then(() => res.sendStatus(204))
    .catch(next);
});

//TRANSACTIONS
app.get('/api/transactions', (req, res, next) => {
  db.models.transactions
    .read()
    .then((response) => res.send(response))
    .catch(next);
});

app.post('/api/transactions/', (req, res, next) => {
  db.models.transactions
    .create(req.body)
    .then((response) => res.send(response))
    .catch(next);
});

app.put('/api/transactions/:id', (req, res, next) => {
  const id = req.params.id;
  db.models.transactions
    .update(req.body)
    .then((transaction) => res.send(transaction))
    .catch(next);
});

app.delete('/api/transactions/:id', (req, res, next) => {
  db.models.transactions
    .delete(req.params)
    .then(() => res.sendStatus(204))
    .catch(next);
});

//USER TRANSACTIONS
app.get('/api/user_transactions', (req, res, next) => {
  db.models.userTransactions
    .read()
    .then((response) => res.send(response))
    .catch(next);
});

app.post('/api/user_transactions/', (req, res, next) => {
  db.models.userTransactions
    .create(req.body)
    .then((response) => res.send(response))
    .catch(next);
});

app.delete('/api/user_transactions/:id', (req, res, next) => {
  db.models.userTransactions
    .delete(req.params)
    .then(() => res.sendStatus(204))
    .catch(next);
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

const port = process.env.PORT || 3000;
db.sync()
  .then(() => {
    console.log('db synced');
    app.listen(port, () => console.log(`listening on port ${port}`));
  })
  .catch((ex) => console.log(ex));
