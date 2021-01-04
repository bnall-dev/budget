import React from 'react';
import axios from 'axios';
import Update from './Update';
import dateFormat from 'dateformat';

const Pending = ({
  transactions,
  setTransactions,
  currentTotal,
  pending,
  deleteTransaction,
  toggleUpdate,
  updateActive,
  setUpdateActive,
  authMethods,
  authCategories,
}) => {
  // Changes transaction status to cleared
  const clearTransaction = (t) => {
    const transactionsCopy = [...transactions];
    const transactionIndex = transactions.indexOf(t);
    axios
      .put(`/api/transactions/${t.id}`, { ...t, cleared: true })
      .then((response) => {
        transactionsCopy.splice(transactionIndex, 1, response.data);

        setTransactions(transactionsCopy);
      });
  };

  //Starting balance for table rows
  var pendingBalance = currentTotal();

  // Transaction data or update form, based on updateActive
  const pendingRows = pending.map((t, i) => {
    pendingBalance += t.amount;
    const balanceStyle = { textAlign: 'right' };
    if (pendingBalance > 0) {
      balanceStyle.backgroundColor = 'lightgreen';
    } else {
      balanceStyle.backgroundColor = 'red';
    }
    if (updateActive.id === t.id) {
      return (
        <Update
          t={t}
          setUpdateActive={setUpdateActive}
          transactions={transactions}
          setTransactions={setTransactions}
          key={t.id}
          authMethods={authMethods}
          authCategories={authCategories}
        />
      );
    } else {
      return (
        <tr className="tableRow" key={t.id}>
          <td className="tableCell">{dateFormat(t.date, 'shortDate', true)}</td>
          <td className="tableCell">{t.transaction}</td>
          <td className="tableCell">{t.method}</td>
          <td className="tableCell">{t.category}</td>
          <td className="tableCell" style={{ textAlign: 'right' }}>
            {t.amount.toFixed(2)}
          </td>
          <td className="tableCell" style={balanceStyle}>
            {Number(Math.round(pendingBalance + 'e2') + 'e-2').toFixed(2)}
          </td>

          <td className="tableButton">
            <button
              className="ledgerButton"
              style={{ backgroundColor: 'green' }}
              onClick={() => {
                clearTransaction(t);
              }}
            >
              &#10004;
            </button>

            <button
              className="ledgerButton"
              style={{ backgroundColor: 'blue' }}
              onClick={() => {
                toggleUpdate(t);
              }}
            >
              &#9998;
            </button>

            <button
              className="ledgerButton"
              style={{ backgroundColor: 'red' }}
              onClick={() => {
                deleteTransaction(t);
              }}
            >
              X
            </button>
          </td>
        </tr>
      );
    }
  });
  return (
    <div className="tableDiv pending">
      <h3>Pending</h3>
      <table className="ledgerTable">
        <thead>
          <tr className="tableRow">
            <th className="tableHeader">Date</th>
            <th className="tableHeader">Transaction</th>
            <th className="tableHeader">Method</th>
            <th className="tableHeader">Category</th>
            <th className="tableHeader">Amount</th>
            <th className="tableHeader">Balance</th>
          </tr>
        </thead>
        <tbody>{pendingRows}</tbody>
      </table>
    </div>
  );
};

export default Pending;
