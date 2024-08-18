import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EventDetails.css'; // Ensure this CSS file exists
import { useParams } from 'react-router-dom';

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    axios.get(`/api/events/${id}`)
      .then(response => setEvent(response.data))
      .catch(error => console.error('Error fetching event:', error));
  }, [id]);

  if (!event) return <p>Loading...</p>;

  return (
    <div className="event-details">
      <h1 className="event-title">{event.title}</h1>
      <p className="event-date">{new Date(event.date).toLocaleDateString()}</p>
      <p className="event-location">{event.location}</p>
      <p className="event-description">{event.description}</p>
      <button className="rsvp-button">RSVP</button>
    </div>
  );
};

export default EventDetails;
