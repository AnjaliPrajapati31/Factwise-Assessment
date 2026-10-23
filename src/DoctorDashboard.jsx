// src/DoctorDashboard.jsx
import React, { useEffect, useState } from 'react';
import NavBar from './NavBar.jsx';
import { FiActivity, FiCalendar, FiClipboard, FiFileText, FiUsers } from 'react-icons/fi';

const DoctorDashboard = () => {
  const [myPatients, setMyPatients] = useState([]);

  useEffect(() => {
    // Sample patients assigned to this doctor
    const sample = [
      { id: 'P001', name: 'Alice', room: 12, lastTemp: 37.2, notes: '' },
      { id: 'P002', name: 'Bob', room: 23, lastTemp: 38.5, notes: '' },
    ];
    setMyPatients(sample);
  }, []);

  const handleRecommendDischarge = patientId => {
    alert(`Recommend discharge for patient ${patientId}`);
    // In a real app, send to backend.
  };

  return (
    <div>
      <header className="header">
        <div className="brand"><span className="brand-mark"><FiActivity /></span><h2>Mediflow</h2></div>
        <NavBar links={[
            { to: '#myPatients', label: 'My Patients', icon: FiUsers },
            { to: '#visits', label: "Today's Visits", icon: FiCalendar },
            { to: '#treatment', label: 'Treatment Notes', icon: FiFileText },
          ]} />
      </header>
      <main className="main">
        {/* My Patients */}
        <section id="myPatients" className="card">
          <h3><FiUsers /> My Patients</h3>
          <div className="table-wrap"><table className="table">
            <thead>
              <tr><th>ID</th><th>Name</th><th>Room</th><th>Last Temp (°C)</th><th>Action</th></tr>
            </thead>
            <tbody>
              {myPatients.map(p => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.name}</td>
                  <td>{p.room}</td>
                  <td>{p.lastTemp}</td>
                  <td>
                    <button className="button-primary" onClick={() => handleRecommendDischarge(p.id)}>
                      <FiClipboard /> Recommend Discharge
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table></div>
        </section>

        {/* Today's Visits (placeholder) */}
        <section id="visits" className="card">
          <h3><FiCalendar /> Today's Visits</h3>
          <p>Visit schedule will be displayed here.</p>
        </section>

        {/* Treatment Notes (placeholder) */}
        <section id="treatment" className="card">
          <h3><FiFileText /> Treatment Notes</h3>
          <p>Select a patient to add notes.</p>
        </section>
      </main>
    </div>
  );
};

export default DoctorDashboard;
