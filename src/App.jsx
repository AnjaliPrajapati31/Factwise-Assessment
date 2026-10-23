// src/App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login.jsx';
import AdminDashboard from './AdminDashboard.jsx';
import DoctorDashboard from './DoctorDashboard.jsx';
import NurseDashboard from './NurseDashboard.jsx';
import PatientDashboard from './PatientDashboard.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin/*" element={<AdminDashboard />} />
      <Route path="/doctor/*" element={<DoctorDashboard />} />
      <Route path="/nurse/*" element={<NurseDashboard />} />
      <Route path="/patient/*" element={<PatientDashboard />} />
    </Routes>
  );
};

export default App;
