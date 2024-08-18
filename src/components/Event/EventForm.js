import React, { useState } from 'react';
import axios from 'axios';
import './EventForm.css'; // Ensure this CSS file exists

const EventForm = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/events', { title, date, location, description })
      .then(response => {
        alert('Event created successfully!');
        window.location.href = '/events';
      })
      .catch(err => setError('Error creating event.'));
  };

  return (
    <div className="event-form-container">
      <h1 className="event-form-title">Create Event</h1>
      {error && <p className="event-form-error">{error}</p>}
      <form onSubmit={handleSubmit} className="event-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <button type="submit" className="event-form-button">Create Event</button>
      </form>
    </div>
  );
};

export default EventForm;
