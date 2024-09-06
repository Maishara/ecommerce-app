import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProductProvider } from './contexts/ProductContext';
import { CartProvider } from './contexts/CartContext';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import Products from './components/Store/Products';
import PrivateRoute from './components/Route/PrivateRoute';
import Cart from './components/Cart/Cart';
import Logout from './components/Auth/Logout';
import './App.css';

const App = () => {
  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <Router>
            <Layout>
              <Routes>
              <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                {/* Private route for products */}
                <Route path="/Store/Products" element={<PrivateRoute><Products /></PrivateRoute>} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </Layout>
          </Router>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
};

const Layout = ({ children }) => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div>
      {!isAuthPage && <Logout />}
      {children}
    </div>
  );
};

export default App;
