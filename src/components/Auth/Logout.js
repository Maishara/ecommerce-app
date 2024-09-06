
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <button onClick={handleLogout} style={styles.logoutButton}>
      Logout
    </button>
  );
};

const styles = {
  logoutButton: {
    padding: '10px 20px',
    backgroundColor: '#645fb0',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    position: 'absolute',
    top: '80px',
    right: '10px',
  },
};

export default Logout;
