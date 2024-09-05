import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProductProvider } from './contexts/ProductContext';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import Products from './components/Store/Products'
import PrivateRoute from './components/Route/PrivateRoute';
import './App.css';

const App = () => {
  return (
    <AuthProvider>
      <ProductProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* Private route for products */}
            <Route path="/Store/Products" element={<PrivateRoute><Products /></PrivateRoute>} />
          </Routes>
        </Router>
      </ProductProvider>
    </AuthProvider>
  );
};

export default App;
