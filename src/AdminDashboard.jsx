// src/AdminDashboard.jsx
import React, { useEffect, useState } from 'react';
import NavBar from './NavBar.jsx';
import { FiActivity, FiBarChart2, FiClipboard, FiHome, FiUsers } from 'react-icons/fi';

const AdminDashboard = () => {
  const [patients, setPatients] = useState([]);
  const [staff, setStaff] = useState([]);
  const totalBeds = 74;
  const successRate = 0.86; // 86% success

  useEffect(() => {
    // Sample data for prototype
    const samplePatients = [
      { id: 'P001', name: 'Alice', room: 12, status: 'Under Treatment' },
      { id: 'P002', name: 'Bob', room: 23, status: 'Ready for Discharge' },
      { id: 'P003', name: 'Charlie', room: 45, status: 'Under Treatment' },
    ];
    const sampleStaff = [
      { role: 'Doctor', name: 'Dr. Smith' },
      { role: 'Doctor', name: 'Dr. Lee' },
      { role: 'Nurse', name: 'Nurse Patel' },
      { role: 'Nurse', name: 'Nurse Gomez' },
    ];
    setPatients(samplePatients);
    setStaff(sampleStaff);
  }, []);

  const occupied = patients.length;
  const available = totalBeds - occupied;
  const dischargeList = patients.filter(p => p.status === 'Ready for Discharge');

  return (
    <div>
      <header className="header">
        <div className="brand"><span className="brand-mark"><FiActivity /></span><h2>Mediflow</h2></div>
        <NavBar links={[
            { to: '#patients', label: 'Patients', icon: FiUsers },
            { to: '#occupancy', label: 'Occupancy', icon: FiHome },
            { to: '#discharge', label: 'Discharge', icon: FiClipboard },
            { to: '#staff', label: 'Staff', icon: FiUsers },
            { to: '#performance', label: 'Performance', icon: FiBarChart2 },
          ]} />
      </header>
      <main className="main">
        {/* Patients Section */}
        <section id="patients" className="card">
          <h3><FiUsers /> Patients</h3>
          <div className="table-wrap"><table className="table">
            <thead>
              <tr><th>ID</th><th>Name</th><th>Room</th><th>Status</th></tr>
            </thead>
            <tbody>
              {patients.map(p => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.name}</td>
                  <td>{p.room}</td>
                  <td><span className={`status ${p.status === 'Ready for Discharge' ? 'success' : 'warning'}`}>{p.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table></div>
        </section>

        {/* Occupancy Section */}
        <section id="occupancy" className="card">
          <h3><FiHome /> Bed / Occupancy</h3>
          <div className="metric-list">
            <div className="metric"><span>Total beds</span><strong>{totalBeds}</strong></div>
            <div className="metric"><span>Occupied</span><strong>{occupied}</strong></div>
            <div className="metric"><span>Available</span><strong>{available}</strong></div>
          </div>
        </section>

        {/* Discharge Queue Section */}
        <section id="discharge" className="card">
          <h3><FiClipboard /> Discharge Queue</h3>
          <ul className="list-clean">
            {dischargeList.map(p => (
              <li key={p.id}>{p.name} (Room {p.room})</li>
            ))}
          </ul>
        </section>

        {/* Staff Section */}
        <section id="staff" className="card">
          <h3><FiUsers /> Doctors &amp; Nurses</h3>
          <ul className="list-clean">
            {staff.map((s, idx) => (
              <li key={idx}>{s.role}: {s.name}</li>
            ))}
          </ul>
        </section>

        {/* Performance Section */}
        <section id="performance" className="card">
          <h3><FiBarChart2 /> Performance / Mortality</h3>
          <div className="metric-list">
            <div className="metric"><span>Success rate</span><strong>{(successRate * 100).toFixed(1)}%</strong></div>
            <div className="metric"><span>Mortality rate</span><strong>{((1 - successRate) * 100).toFixed(1)}%</strong></div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
