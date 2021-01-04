import React, { useState } from 'react';

const Login = ({ setAuth, users }) => {
  const [loginData, setLoginData] = useState({});

  const submitLogin = (e) => {
    e.preventDefault();
    const user = users.find((u) => u.name === loginData.name);
    if (loginData.password === user.password) {
      setAuth(user);
    }
  };

  return (
    <div className="login">
      <form className="loginForm" onSubmit={submitLogin}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => {
            setLoginData({ ...loginData, name: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => {
            setLoginData({ ...loginData, password: e.target.value });
          }}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Login;
