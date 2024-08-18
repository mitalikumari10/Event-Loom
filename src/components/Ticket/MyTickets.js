import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MyTickets.css'; // Ensure this CSS file exists

const MyTickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axios.get('/api/tickets')
      .then(response => setTickets(response.data))
      .catch(error => console.error('Error fetching tickets:', error));
  }, []);

  return (
    <div className="my-tickets-container">
      <h1 className="my-tickets-title">My Tickets</h1>
      <div className="ticket-list">
        {tickets.length ? (
          tickets.map(ticket => (
            <div key={ticket._id} className="ticket-card">
              <h2 className="ticket-event">{ticket.eventTitle}</h2>
              <p className="ticket-date">{new Date(ticket.date).toLocaleDateString()}</p>
              <p className="ticket-location">{ticket.location}</p>
            </div>
          ))
        ) : (
          <p>No tickets found.</p>
        )}
      </div>
    </div>
  );
};

export default MyTickets;
