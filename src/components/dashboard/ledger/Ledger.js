import React, { useState, useEffect } from 'react';
import Form from './Form';
import Filters from './Filters';
import Tables from './tables/Tables';

const Ledger = ({
  auth,
  transactions,
  setTransactions,
  userTransactions,
  setUserTransactions,
  authTransactions,
  total,
  authMethods,
  authCategories,
}) => {
  // Sets displayedTransactions as authTransactions on change
  const [displayedTransactions, setDisplayedTransactions] = useState(
    authTransactions
  );
  useEffect(() => {
    setDisplayedTransactions(authTransactions);
  }, [authTransactions, auth, transactions]);

  return (
    <div className="ledger">
      <div style={{ margin: 16, width: '30%' }}>
        <Form
          auth={auth}
          transactions={transactions}
          setTransactions={setTransactions}
          userTransactions={userTransactions}
          setUserTransactions={setUserTransactions}
          setDisplayedTransactions={setDisplayedTransactions}
          authTransactions={authTransactions}
          authMethods={authMethods}
          authCategories={authCategories}
        />
        <Filters
          authTransactions={authTransactions}
          authMethods={authMethods}
          authCategories={authCategories}
          displayedTransactions={displayedTransactions}
          setDisplayedTransactions={setDisplayedTransactions}
        />
      </div>

      <Tables
        displayedTransactions={displayedTransactions}
        total={total}
        transactions={transactions}
        setTransactions={setTransactions}
        userTransactions={userTransactions}
        setUserTransactions={setUserTransactions}
        authMethods={authMethods}
        authCategories={authCategories}
      />
    </div>
  );
};

export default Ledger;
