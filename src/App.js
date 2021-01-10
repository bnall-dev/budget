import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import Demo from './components/Demo';
import Login from './components/Login';
import Dashboard from './components/dashboard/Dashboard';

const App = () => {
  // Obtains data fror users, transactions, and user_transactions from database
  const [users, setUsers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [userTransactions, setUserTransactions] = useState([]);
  useEffect(() => {
    axios.get('/api/users').then((response) => {
      setUsers(response.data);
    });
    axios.get('/api/transactions').then((response) => {
      setTransactions(response.data);
    });
    axios.get('/api/user_transactions').then((response) => {
      setUserTransactions(response.data);
    });
  }, []);

  // Sets authTransactions when auth or transactions change, sorted by date
  const [auth, setAuth] = useState(null);
  const [authTransactions, setAuthTransactions] = useState([]);
  useEffect(() => {
    if (auth) {
      const authUserTransactions = userTransactions.filter(
        (ut) => ut.userId === auth.id
      );
      const array = [];
      authUserTransactions.forEach((aut) => {
        const transaction = transactions.find(
          (t) => t.id === aut.transactionId
        );
        array.push(transaction);
      });
      const sortedArray = array.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
      setAuthTransactions(sortedArray);
    }
  }, [auth, transactions, userTransactions]);

  useEffect(() => {
    console.log(authTransactions);
  }, [authTransactions]);

  return (
    <div className="App">
    
        <Navbar auth={auth} setAuth={setAuth} />
     
         
            {!auth && <Login users={users} setAuth={setAuth} />}
            {auth && (
              <Dashboard
                auth={auth}
                authTransactions={authTransactions}
                transactions={transactions}
                setTransactions={setTransactions}
                userTransactions={userTransactions}
                setUserTransactions={setUserTransactions}
              />
            )}
          
    </div>
  );
};

export default App;
