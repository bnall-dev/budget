import React, { useState } from 'react';
import axios from 'axios';
import Cleared from './Cleared';
import Pending from './Pending';

const Tables = ({
  displayedTransactions,
  transactions,
  setTransactions,
  userTransactions,
  setUserTransactions,
  authMethods,
  authCategories,
}) => {
  // Separates displayedTransactions by cleared/pending status
  const cleared = displayedTransactions.filter((dt) => dt.cleared).reverse();
  const pending = displayedTransactions.filter((dt) => !dt.cleared);

  // Total balance of cleared displayedTransactions
  const currentTotal = () => {
    let total = 0.0;
    cleared.forEach((dt) => {
      total += dt.amount;
    });
    return total;
  };

  // Deletes transaction and corresponding userTransaction
  const deleteTransaction = (t) => {
    const ut = userTransactions.find((ut) => ut.transactionId === t.id);
    axios.delete(`api/user_transactions/${ut.id}`).then(() => {
      const array = userTransactions.filter((uut) => uut.id !== ut.id);
      setUserTransactions(array);
    });
    axios.delete(`api/transactions/${t.id}`).then(() => {
      const array = transactions.filter((tt) => tt.id !== t.id);
      setTransactions(array);
    });
  };

  // When set to transaction object, displays update form
  const [updateActive, setUpdateActive] = useState(false);
  const toggleUpdate = (t) => {
    if (!updateActive) {
      setUpdateActive(t);
    } else if (updateActive.id === t.id) {
      setUpdateActive(false);
    }
  };

  return (
    <div className="ledgerTables">
      <Cleared
        transactions={transactions}
        setTransactions={setTransactions}
        currentTotal={currentTotal}
        deleteTransaction={deleteTransaction}
        cleared={cleared}
        toggleUpdate={toggleUpdate}
        updateActive={updateActive}
        setUpdateActive={setUpdateActive}
        authMethods={authMethods}
        authCategories={authCategories}
      />
      <Pending
        currentTotal={currentTotal}
        deleteTransaction={deleteTransaction}
        pending={pending}
        toggleUpdate={toggleUpdate}
        updateActive={updateActive}
        setUpdateActive={setUpdateActive}
        transactions={transactions}
        setTransactions={setTransactions}
        authMethods={authMethods}
        authCategories={authCategories}
      />
    </div>
  );
};

export default Tables;
