import React, { useState } from 'react';
import axios from 'axios';

const Form = ({
  auth,
  transactions,
  setTransactions,
  userTransactions,
  setUserTransactions,
  authMethods,
  authCategories,
}) => {
  // Data updates when form input changes
  const [transactionData, setTransactionData] = useState({});

  const [newMethod, setNewMethod] = useState(false);
  const [newCategory, setNewCategory] = useState(false);

  // Posts transactionData and posts corresponding userTransaction
  const submitTransaction = (e) => {
    e.preventDefault();
    axios.post('/api/transactions', transactionData).then((response) => {
      setTransactions([...transactions, response.data]);
      axios
        .post('api/user_transactions', {
          userId: auth.id,
          transactionId: response.data.id,
        })
        .then((r) => {
          setUserTransactions([...userTransactions, r.data]);
        });
    });
    e.target.reset();
  };

  const methodOptions = authMethods.map((am, i) => {
    return <option key={i}>{am}</option>;
  });
  const categoryOptions = authCategories.map((am, i) => {
    return <option key={i}>{am}</option>;
  });

  return (
    <form className="ledgerForm" onSubmit={submitTransaction}>
      <h3>New Transaction</h3>
      <input
        type="date"
        onChange={(e) =>
          setTransactionData({ ...transactionData, date: e.target.value })
        }
      />
      <select
        defaultValue="Type"
        onChange={(e) => {
          setTransactionData({ ...transactionData, type: e.target.value });
        }}
      >
        <option disabled value="Type">
          Type
        </option>
        <option>Withdrawal</option>
        <option>Deposit</option>
        <option>Debt</option>
        <option>Debt Payment</option>
        <option>Savings</option>
        <option>Transfer</option>
      </select>

      <input
        type="number"
        step="0.01"
        placeholder="0.00"
        onChange={(e) =>
          setTransactionData({ ...transactionData, amount: e.target.value })
        }
      />

      <select
        defaultValue="Method"
        onChange={(e) => {
          if (e.target.value === '-- New Method --') {
            setNewMethod(true);
          } else {
            setNewMethod(false);
          }
          setTransactionData({ ...transactionData, method: e.target.value });
        }}
      >
        <option disabled value="Method">
          Method
        </option>
        {methodOptions}
        <option>-- New Method --</option>
      </select>
      {newMethod && (
        <input
          type="Text"
          placeholder="New Method"
          onChange={(e) => {
            setTransactionData({ ...transactionData, method: e.target.value });
          }}
        />
      )}
      <select
        defaultValue="Category"
        onChange={(e) => {
          if (e.target.value === '-- New Category --') {
            setNewCategory(true);
          } else {
            setNewCategory(false);
          }
          setTransactionData({ ...transactionData, category: e.target.value });
        }}
      >
        <option disabled value="Category">
          Category
        </option>
        {categoryOptions}
        <option>-- New Category --</option>
      </select>
      {newCategory && (
        <input
          type="Text"
          placeholder="New Category"
          onChange={(e) => {
            setTransactionData({
              ...transactionData,
              category: e.target.value,
            });
          }}
        />
      )}
      <input
        type="text"
        placeholder="Transaction"
        onChange={(e) =>
          setTransactionData({
            ...transactionData,
            transaction: e.target.value,
          })
        }
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
