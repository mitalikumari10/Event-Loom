import React, { useState } from 'react';
import axios from 'axios';
import './Auth.css'; // Ensure this CSS file exists

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    axios.post('/api/auth/register', { email, password })
      .then(response => {
        localStorage.setItem('token', response.data.token);
        window.location.href = '/';
      })
      .catch(err => setError('Registration failed.'));
  };

  return (
    <div className="auth-container">
      <h1 className="auth-title">Register</h1>
      {error && <p className="auth-error">{error}</p>}
      <form onSubmit={handleRegister} className="auth-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="auth-button">Register</button>
      </form>
    </div>
  );
};

export default Register;

