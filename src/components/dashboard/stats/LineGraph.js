import React from 'react';

const LineGraph = ({ authTransactions, displayedTransactions }) => {
  let activeBalance = 0.0;
  let totalBalance = 0.0;
  let debitBalance = 0.0;
  let savingsBalance = 0.0;

  let activeString = '0,150 ';
  let totalString = '0,150 ';
  let debitString = '0,150 ';
  let savingsString = '0,150 ';

  const currentDate = new Date();
  const currentDay = Math.ceil(
    (currentDate - new Date(currentDate.getFullYear(), 0, 1)) / 86400000
  );

  authTransactions.forEach((dt) => {
    const date = new Date(dt.date);
    totalBalance += dt.amount;
    if (dt.method === 'Debit') {
      debitBalance += dt.amount;
    } else if (dt.method === 'Savings') {
      savingsBalance += dt.amount;
    }

    if (date.getFullYear() === new Date().getFullYear()) {
      const x = Math.ceil(
        (date - new Date(date.getFullYear(), 0, 1)) / 86400000
      );

      let y = 150 - totalBalance * 0.01;
      totalString += x + ',' + y + ' ';

      if (dt.method === 'Debit') {
        y = 150 - debitBalance * 0.01;
        debitString += x + ',' + y + ' ';
      } else if (dt.method === 'Savings') {
        y = 150 - savingsBalance * 0.01;
        savingsString += x + ',' + y + ' ';
      }
    }
    console.log(totalBalance);
  });

  displayedTransactions.forEach((dt) => {
    activeBalance += dt.amount;
    const date = new Date(dt.date);
    if (date.getFullYear() === new Date().getFullYear()) {
      const x = Math.ceil(
        (date - new Date(date.getFullYear(), 0, 1)) / 86400000
      );

      let y = 150 - activeBalance * 0.01;
      activeString += x + ',' + y + ' ';
    }
  });

  activeString += '366,' + (150 - activeBalance * 0.01) + ' 366,150';
  totalString += '366,' + (150 - totalBalance * 0.01) + ' 366,150';
  debitString += '366,' + (150 - debitBalance * 0.01) + ' 366,150';
  savingsString += '366,' + (150 - savingsBalance * 0.01) + ' 366,150';

  const yLines = [];
  for (let i = 0; i < 16; i++) {
    let stroke = '1';
    let dash = '1 3';
    if (i === 4 || i === 9 || i === 14) {
      stroke = '1.5';
      dash = '2 2';
    }
    yLines.push(
      <line
        x1="0"
        y1={(i + 1) * 10}
        x2="366"
        y2={(i + 1) * 10}
        stroke="grey"
        strokeWidth={stroke}
        stroke-dasharray={dash}
      />
    );
  }

  return (
    <svg viewBox="0 0 365 170" className="lineGraph">
      <line
        x1="31"
        y1="0"
        x2="31"
        y2="150"
        stroke="white"
        strokeWidth="1"
        strokeDasharray="5 3"
      />
      <line
        x1="59"
        y1="0"
        x2="59"
        y2="150"
        stroke="white"
        strokeWidth="1"
        stroke-dasharray="5 3"
      />
      <line
        x1="90"
        y1="0"
        x2="90"
        y2="150"
        stroke="white"
        strokeWidth="1"
        stroke-dasharray="5 3"
      />
      <line
        x1="120"
        y1="0"
        x2="120"
        y2="150"
        stroke="white"
        strokeWidth="1"
        stroke-dasharray="5 3"
      />
      <line
        x1="151"
        y1="0"
        x2="151"
        y2="150"
        stroke="white"
        strokeWidth="1"
        stroke-dasharray="5 3"
      />
      <line
        x1="181"
        y1="0"
        x2="181"
        y2="150"
        stroke="white"
        strokeWidth="1"
        stroke-dasharray="5 3"
      />
      <line
        x1="212"
        y1="0"
        x2="212"
        y2="150"
        stroke="white"
        strokeWidth="1"
        stroke-dasharray="5 3"
      />
      <line
        x1="243"
        y1="0"
        x2="243"
        y2="150"
        stroke="white"
        strokeWidth="1"
        stroke-dasharray="5 3"
      />
      <line
        x1="273"
        y1="0"
        x2="273"
        y2="150"
        stroke="white"
        strokeWidth="1"
        stroke-dasharray="5 3"
      />
      <line
        x1="304"
        y1="0"
        x2="304"
        y2="150"
        stroke="white"
        strokeWidth="1"
        stroke-dasharray="5 3"
      />
      <line
        x1="334"
        y1="0"
        x2="334"
        y2="150"
        stroke="white"
        strokeWidth="1"
        stroke-dasharray="5 3"
      />
      {yLines}
      <polyline
        fill="rgba(225,225,265,0.5)"
        stroke="darkblue"
        strokeWidth="1"
        points={activeString}
      />
      <polyline
        fill="rgba(265,100,100,0.5)"
        stroke="none"
        points="0,150 365,150 365,170 0,170"
      />
      <polyline
        fill="none"
        stroke="#0074d9"
        strokeWidth="0.5"
        points={totalString}
      />
      <polyline
        fill="none"
        stroke="#0074d9"
        strokeWidth="0.5"
        points={debitString}
      />
      <polyline
        fill="none"
        stroke="#0074d9"
        strokeWidth="0.5"
        points={savingsString}
      />
      <polyline
        fill="none"
        stroke="darkblue"
        strokeWidth="1"
        points={activeString}
      />

      <polyline
        fill="rgba(0,0,0,0.25)"
        stroke="none"
        points={'0,0 ' + currentDay + ',0 ' + currentDay + ',170 0,170'}
      />
    </svg>
  );
};

export default LineGraph;
