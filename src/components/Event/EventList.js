import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EventList.css'; // Ensure this CSS file exists

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('/api/events')
      .then(response => setEvents(response.data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  return (
    <div className="event-list">
      <h1 className="title">Upcoming Events</h1>
      <div className="event-grid">
        {events.map(event => (
          <div key={event._id} className="event-card">
            <h2 className="event-title">{event.title}</h2>
            <p className="event-date">{new Date(event.date).toLocaleDateString()}</p>
            <p className="event-location">{event.location}</p>
            <a href={`/events/${event._id}`} className="event-link">View Details</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
