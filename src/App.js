// src/App.js

import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';

const App = () => {
  return (
    <AuthProvider>
      <div className="App">
        <h1>Welcome to the E-Commerce App</h1>
        <Signup />
        <Login />
      </div>
    </AuthProvider>
  );
};

export default App;
