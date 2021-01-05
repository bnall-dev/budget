import React from 'react';
import Accounts from './Accounts';

const Stats = ({ authTransactions }) => {
  return (
    <div className="stats">
      <Accounts authTransactions={authTransactions} />
    </div>
  );
};

export default Stats;
