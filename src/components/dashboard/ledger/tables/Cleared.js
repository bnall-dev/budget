import React from 'react';
import Update from './Update';
import dateFormat from 'dateformat';

const Cleared = ({
  transactions,
  setTransactions,
  currentTotal,
  cleared,
  deleteTransaction,
  toggleUpdate,
  updateActive,
  setUpdateActive,
  authMethods,
  authCategories,
}) => {
  //Starting balance for table rows
  var clearedBalance = currentTotal();

  // Transaction data or update form, based on updateActive
  const clearedRows = cleared.map((t, i) => {
    clearedBalance -= t.amount;
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
          <td className="tableCell" style={{ textAlign: 'right' }}>
            {Number(
              Math.round(clearedBalance + t.amount + 'e2') + 'e-2'
            ).toFixed(2)}
          </td>
          <td className="tableButton">
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
    <div className="tableDiv cleared">
      <h3>Cleared</h3>
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
        <tbody>{clearedRows}</tbody>
      </table>
    </div>
  );
};

export default Cleared;
