import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Navbar = ({ auth, setAuth }) => {
  return <nav>{auth && <h3 onClick={() => setAuth(null)}>Logout</h3>}</nav>;
};

export default Navbar;
