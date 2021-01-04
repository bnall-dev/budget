import React, { useState } from 'react';
import axios from 'axios';

const Update = ({
  setUpdateActive,
  transactions,
  setTransactions,
  t,
  authMethods,
  authCategories,
}) => {
  const [updatedTransaction, setUpdatedTransaction] = useState({ ...t });
  const [newMethod, setNewMethod] = useState(false);
  const [newCategory, setNewCategory] = useState(false);

  // Posts updatedTransaction and closes update form
  const updateTransaction = () => {
    const transactionsCopy = [...transactions];
    const transactionIndex = transactions.indexOf(t);
    axios
      .put(`/api/transactions/${t.id}`, { ...updatedTransaction })
      .then((response) => {
        transactionsCopy.splice(transactionIndex, 1, response.data);
        console.log('YO', response.data);
        setTransactions(transactionsCopy);
      });

    setUpdateActive(false);
  };

  const methodOptions = authMethods.map((am, i) => {
    return <option key={i}>{am}</option>;
  });
  const categoryOptions = authCategories.map((am, i) => {
    return <option key={i}>{am}</option>;
  });

  return (
    <tr className="updateRow">
      <td colSpan="6">
        <input
          type="date"
          onChange={(e) =>
            setUpdatedTransaction({
              ...updatedTransaction,
              date: e.target.value,
            })
          }
        />
        <select
          defaultValue={t.method}
          onChange={(e) => {
            if (e.target.value === '-- New Method --') {
              setNewMethod(true);
            } else {
              setNewMethod(false);
            }
            setUpdatedTransaction({
              ...updatedTransaction,
              method: e.target.value,
            });
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
              if (e.target.value === '-- New Category --') {
                setNewCategory(true);
              } else {
                setNewCategory(false);
              }
              setUpdatedTransaction({
                ...updatedTransaction,
                method: e.target.value,
              });
            }}
          />
        )}

        <input
          type="text"
          placeholder={t.transaction}
          onChange={(e) =>
            setUpdatedTransaction({
              ...updatedTransaction,
              transaction: e.target.value,
            })
          }
        />
        <select
          defaultValue={t.category}
          onChange={(e) => {
            if (e.target.value === '-- New Category --') {
              setNewCategory(true);
            } else {
              setNewCategory(false);
            }
            setUpdatedTransaction({
              ...updatedTransaction,
              category: e.target.value,
            });
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
              setUpdatedTransaction({
                ...updatedTransaction,
                category: e.target.value,
              });
            }}
          />
        )}

        <input
          type="number"
          step="0.01"
          placeholder={t.amount}
          onChange={(e) =>
            setUpdatedTransaction({
              ...updatedTransaction,
              amount: e.target.value,
            })
          }
        />
        <select
          defaultValue={t.type}
          onChange={(e) => {
            setUpdatedTransaction({
              ...updatedTransaction,
              type: e.target.value,
            });
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
      </td>
      <td>
        <button onClick={updateTransaction}>Save</button>
        <button
          onClick={() => {
            setUpdateActive(false);
          }}
        >
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default Update;
