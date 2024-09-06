import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Styles/Auth.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Simulate sign-up
    console.log('Sign-up:', { username, password });
    navigate('/login');
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <br />
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <a href="/login">Click here to log in</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
