import React from 'react';

const Accounts = ({ authTransactions }) => {
  const debitBalance = () => {
    const debitTransactions = authTransactions.filter(
      (t) => t.cleared && t.method === 'Debit'
    );
    let total = 0.0;
    debitTransactions.forEach((dt) => {
      total += dt.amount;
    });
    return total;
  };

  const creditBalance = () => {
    const creditTransactions = authTransactions.filter(
      (t) => t.cleared && t.method === 'Credit'
    );
    let total = 0.0;
    creditTransactions.forEach((ct) => {
      total += ct.amount;
    });
    return total;
  };
  const cashBalance = () => {
    const cashTransactions = authTransactions.filter(
      (t) => t.cleared && t.method === 'Cash'
    );
    let total = 0.0;
    cashTransactions.forEach((ct) => {
      total += ct.amount;
    });
    return total;
  };
  const savingsBalance = () => {
    const savingsTransactions = authTransactions.filter(
      (t) => t.cleared && t.method === 'Savings'
    );
    let total = 0.0;
    savingsTransactions.forEach((st) => {
      total += st.amount;
    });
    return total;
  };

  return (
    <div className="accounts">
      <h3>Accounts</h3>
      <div className="accountsDiv">
        <div className="accountDiv">
          <h5>Debit</h5>
          <div>${debitBalance().toFixed(2)}</div>
        </div>
        <div className="accountDiv">
          <h5>Credit</h5>
          <div>${creditBalance().toFixed(2)}</div>
        </div>
        <div className="accountDiv">
          <h5>Cash</h5>
          <div>${cashBalance().toFixed(2)}</div>
        </div>
        <div className="accountDiv">
          <h5>Savings</h5>
          <div>${savingsBalance().toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
