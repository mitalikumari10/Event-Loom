import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './RSVP.css'; // Custom styles

const RSVPButton = () => {
  const { eventId } = useParams();

  const handleRSVP = async () => {
    try {
      await axios.post('http://localhost:5000/api/rsvp', { eventId }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      alert('RSVP successful!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="rsvp-button-container">
      <button onClick={handleRSVP}>RSVP to Event</button>
    </div>
  );
};

export default RSVPButton;
