import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Stats from './stats/Stats';
import Ledger from './ledger/Ledger';
import Settings from './Settings';

const Dashboard = ({
  auth,
  authTransactions,
  transactions,
  setTransactions,
  userTransactions,
  setUserTransactions,
}) => {
  // Creates lists of auth's methods and categories
  const [authMethods, setAuthMethods] = useState([]);
  const [authCategories, setAuthCategories] = useState([]);
  useEffect(() => {
    var methods = [];
    authTransactions.forEach((t) => {
      if (!methods.includes(t.method)) {
        methods.push(t.method);
      }
    });
    setAuthMethods(methods);
    var categories = [];
    authTransactions.forEach((t) => {
      if (!categories.includes(t.category)) {
        categories.push(t.category);
      }
    });
    setAuthCategories(categories);
  }, [authTransactions]);

  return (
    <div className="dashboard">
      <Router>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link className="navLink" to="/stats">
            Stats
          </Link>
          <Link className="navLink" to="/ledger">
            Ledger
          </Link>
          <Link className="navLink" to="/settings">
            Settings
          </Link>
        </div>
        <Switch>
          <Route exact path="/stats">
            <Stats authTransactions={authTransactions} />
          </Route>
          <Route exact path="/ledger">
            <Ledger
              auth={auth}
              transactions={transactions}
              setTransactions={setTransactions}
              userTransactions={userTransactions}
              setUserTransactions={setUserTransactions}
              authTransactions={authTransactions}
              authMethods={authMethods}
              authCategories={authCategories}
            />
          </Route>
          <Route exact path="/settings">
            <Settings auth={auth} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Dashboard;
