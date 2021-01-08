import React from 'react';
import Accounts from './Accounts';
import LineGraph from './LineGraph';

const Stats = ({ authTransactions, displayedTransactions }) => {
  return (
    <div className="stats">
      <Accounts authTransactions={authTransactions} />
      <LineGraph
        displayedTransactions={displayedTransactions}
        authTransactions={authTransactions}
      />
    </div>
  );
};

export default Stats;
