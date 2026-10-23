// src/NurseDashboard.jsx
import React, { useEffect, useState } from 'react';
import NavBar from './NavBar.jsx';
import { FiActivity, FiClipboard, FiThermometer, FiUsers } from 'react-icons/fi';

const NurseDashboard = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    // Sample list of patients assigned for the day
    const sample = [
      { id: 'P001', name: 'Alice', room: 12, lastTemp: null },
      { id: 'P002', name: 'Bob', room: 23, lastTemp: null },
      { id: 'P003', name: 'Charlie', room: 45, lastTemp: null },
    ];
    setPatients(sample);
  }, []);

  const recordTemperature = (patientId, temp) => {
    setPatients(prev =>
      prev.map(p => (p.id === patientId ? { ...p, lastTemp: temp } : p))
    );
    // In a real app, persist to backend.
  };

  return (
    <div>
      <header className="header">
        <div className="brand"><span className="brand-mark"><FiActivity /></span><h2>Mediflow</h2></div>
        <NavBar links={[
            { to: '#today', label: "Today's Patients", icon: FiUsers },
            { to: '#record', label: 'Record Temperature', icon: FiThermometer },
          ]} />
      </header>
      <main className="main">
        {/* Today's Patients */}
        <section id="today" className="card">
          <h3><FiUsers /> Today's Patients</h3>
          <div className="table-wrap"><table className="table">
            <thead>
              <tr><th>ID</th><th>Name</th><th>Room</th><th>Last Temp (°C)</th></tr>
            </thead>
            <tbody>
              {patients.map(p => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.name}</td>
                  <td>{p.room}</td>
                  <td>{p.lastTemp !== null ? p.lastTemp : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table></div>
        </section>

        {/* Record Temperature */}
        <section id="record" className="card">
          <h3><FiThermometer /> Record Temperature</h3>
          <form
            onSubmit={e => {
              e.preventDefault();
              const pid = e.target.patientId.value;
              const temp = parseFloat(e.target.temp.value);
              if (pid && !isNaN(temp)) {
                recordTemperature(pid, temp);
                e.target.reset();
              }
            }}
          >
            <label htmlFor="patientId">Patient ID</label>
            <input type="text" id="patientId" name="patientId" required />
            <label htmlFor="temp">Temperature (°C)</label>
            <input type="number" step="0.1" id="temp" name="temp" required />
            <button type="submit" className="button-primary"><FiClipboard /> Save reading</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default NurseDashboard;
