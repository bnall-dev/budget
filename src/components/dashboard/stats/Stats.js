import React from 'react';
import Accounts from './Accounts';

const Stats = ({ authTransactions }) => {
  return (
    <div className="stats">
      <h1>Stats</h1>
      <Accounts authTransactions={authTransactions} />
    </div>
  );
};

export default Stats;
