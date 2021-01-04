import React from 'react';

const Settings = ({ auth }) => {
  return (
    <div className="settings">
      <h1>Settings</h1>
      <h3>Username: {auth.name}</h3>
      <button>Change Username</button>
      <button>Change Password</button>
    </div>
  );
};

export default Settings;
