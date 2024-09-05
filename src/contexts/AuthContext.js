

import React, { createContext, useState, useEffect } from 'react';

// Create an authentication context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  // Simulated API calls for sign up and login
  const signUp = async (username, password) => {
   
    setUser({ username });
    setIsAuthenticated(true);
    setError(null);
  };

  const login = async (username, password) => {
    
    // Simulating a successful login
    setUser({ username });
    setIsAuthenticated(true);
    setError(null);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setError(null);
    // Optionally clear token or session here
  };

  // Persist authentication state on page reload
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setIsAuthenticated(true);
      setUser(storedUser);
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, signUp, login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};
