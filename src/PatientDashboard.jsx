// src/PatientDashboard.jsx
import React, { useEffect, useState } from 'react';
import NavBar from './NavBar.jsx';
import { FiActivity, FiClipboard, FiHeart, FiThermometer, FiUser } from 'react-icons/fi';

const PatientDashboard = () => {
  const [patient, setPatient] = useState(null);
  const [tempHistory, setTempHistory] = useState([]);

  useEffect(() => {
    // In a real app, fetch patient data based on auth token.
    // For prototype, use static sample data.
    const samplePatient = {
      id: 'P001',
      name: 'Alice',
      room: 12,
      treatment: 'Antiviral therapy',
      dischargeStatus: 'Under Treatment',
    };
    const sampleTempHistory = [
      { date: '2026-10-20', temp: 38.2 },
      { date: '2026-10-21', temp: 37.8 },
      { date: '2026-10-22', temp: 37.0 },
    ];
    setPatient(samplePatient);
    setTempHistory(sampleTempHistory);
  }, []);

  const hasThreeDaysNoFever = () => {
    // Assume fever if temp >= 38°C
    const lastThree = tempHistory.slice(-3);
    return lastThree.length === 3 && lastThree.every(r => r.temp < 38);
  };

  return (
    <div>
      <header className="header">
        <div className="brand"><span className="brand-mark"><FiActivity /></span><h2>Mediflow</h2></div>
        <NavBar links={[
            { to: '#myHealth', label: 'My Health', icon: FiHeart },
            { to: '#tempHistory', label: 'Temperature History', icon: FiThermometer },
            { to: '#treatment', label: 'Treatment', icon: FiClipboard },
            { to: '#discharge', label: 'Discharge Status', icon: FiActivity },
          ]} />
      </header>
      <main className="main">
        {/* My Health */}
        <section id="myHealth" className="card">
          <h3><FiHeart /> My Health</h3>
          {patient && (
            <ul className="list-clean">
              <li>ID: {patient.id}</li>
              <li>Name: {patient.name}</li>
              <li>Room: {patient.room}</li>
            </ul>
          )}
        </section>

        {/* Temperature History */}
        <section id="tempHistory" className="card">
          <h3><FiThermometer /> Temperature History</h3>
          <div className="table-wrap"><table className="table">
            <thead>
              <tr><th>Date</th><th>Temperature (°C)</th></tr>
            </thead>
            <tbody>
              {tempHistory.map((r, idx) => (
                <tr key={idx}>
                  <td>{r.date}</td>
                  <td>{r.temp}</td>
                </tr>
              ))}
            </tbody>
          </table></div>
        </section>

        {/* Treatment */}
        <section id="treatment" className="card">
          <h3><FiClipboard /> Treatment</h3>
          {patient && <p>{patient.treatment}</p>}
        </section>

        {/* Discharge Status */}
        <section id="discharge" className="card">
          <h3><FiUser /> Discharge Status</h3>
          <p>{patient ? patient.dischargeStatus : ''}</p>
          {hasThreeDaysNoFever() && (
            <p className="button-primary" style={{ display: 'inline-block', padding: '0.5rem 1rem' }}>
              Eligible for Discharge
            </p>
          )}
        </section>
      </main>
    </div>
  );
};

export default PatientDashboard;
