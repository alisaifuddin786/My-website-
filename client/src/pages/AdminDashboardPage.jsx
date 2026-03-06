import { useState } from 'react';
import { adminStats, recentBookings } from '../data';

function AdminDashboardPage() {
  const [actionMessage, setActionMessage] = useState('');

  return (
    <section className="container section">
      <div className="section-head-row">
        <div>
          <p className="eyebrow dark">Control panel</p>
          <h2>Admin Dashboard</h2>
        </div>
        <div className="btn-row">
          <button className="btn" type="button" onClick={() => setActionMessage('Report exported successfully.')}>
            Export Report
          </button>
          <button
            className="btn btn-secondary"
            type="button"
            onClick={() => setActionMessage('New package modal will be available in next backend phase.')}
          >
            Add New Package
          </button>
        </div>
      </div>

      {actionMessage && <p className="info-banner">{actionMessage}</p>}

      <div className="stats-grid">
        {adminStats.map((stat) => (
          <article key={stat.label} className="stat-card">
            <p className="muted">{stat.label}</p>
            <h3>{stat.value}</h3>
            <button className="link-btn" type="button" onClick={() => setActionMessage(`Opening ${stat.label}.`)}>
              View details
            </button>
          </article>
        ))}
      </div>

      <article className="table-card">
        <div className="section-head-row">
          <h3>Recent Bookings</h3>
          <button className="btn btn-secondary" type="button" onClick={() => setActionMessage('Loading full booking management view...')}>
            Manage All
          </button>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Customer</th>
                <th>Package</th>
                <th>Travel Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentBookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.id}</td>
                  <td>{booking.customer}</td>
                  <td>{booking.packageName}</td>
                  <td>{booking.date}</td>
                  <td>
                    <span className={`status-badge ${booking.status.toLowerCase()}`}>{booking.status}</span>
                  </td>
                  <td>
                    <div className="btn-row compact">
                      <button
                        className="btn btn-secondary"
                        type="button"
                        onClick={() => setActionMessage(`${booking.id} updated.`)}
                      >
                        Update
                      </button>
                      <button className="btn" type="button" onClick={() => setActionMessage(`Message sent to ${booking.customer}.`)}>
                        Message
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </section>
  );
}

export default AdminDashboardPage;
