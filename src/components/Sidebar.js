import React from 'react';
import './Sidebar.css';
import CalendarComponent from './kalendarz';

function Sidebar() {
  const events = [
    { date: "2025-02-01", event: "Steam Visual Novel Festival" },
    { date: "2025-03-15", event: "Steam Spring Sale" },
    { date: "2025-06-23", event: "Steam Summer Sale" },
    { date: "2025-09-01", event: "Steam Strategy Fest" },
    { date: "2025-10-28", event: "Steam Halloween Sale" },
    { date: "2025-11-25", event: "Steam Autumn Sale" },
    { date: "2025-12-22", event: "Steam Winter Sale" }
  ];

  return (
    <aside className="sidebar">
      <h2>📌 Kalendarz</h2>
      <CalendarComponent />
      
      <div className="events">
        <h3>📅 Wydarzenia i Wyprzedaże</h3>
        <ul>
          {events.map((event, index) => (
            <li key={index}>
              <strong>{event.date}:</strong> {event.event}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
