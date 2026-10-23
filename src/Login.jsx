// src/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiActivity, FiArrowRight, FiLock, FiUser } from 'react-icons/fi';

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('admin');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // In a real app you would authenticate here.
    // For prototype, just redirect based on selected role.
    switch (role) {
      case 'admin':
        navigate('/admin');
        break;
      case 'doctor':
        navigate('/doctor');
        break;
      case 'nurse':
        navigate('/nurse');
        break;
      case 'patient':
        navigate('/patient');
        break;
      default:
        alert('Select a role');
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-heading">
          <span className="login-mark"><FiActivity size={22} /></span>
          <div>
            <h1>Mediflow HMS</h1>
            <p className="subtitle">A calmer way to manage care.</p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="role">Login as</label>
          <select
            id="role"
            value={role}
            onChange={e => setRole(e.target.value)}
            required
          >
            <option value="admin">Admin</option>
            <option value="doctor">Doctor</option>
            <option value="nurse">Nurse</option>
            <option value="patient">Patient</option>
          </select>
          <label htmlFor="username"><FiUser /> Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
          <label htmlFor="password"><FiLock /> Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login <FiArrowRight /></button>
        </form>
      </div>
    </div>
  );
};

export default Login;
