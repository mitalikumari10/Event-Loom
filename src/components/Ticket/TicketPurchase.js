import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Ticket.css'; // Custom styles

const TicketPurchase = () => {
  const [eventId, setEventId] = useState('');
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handlePurchase = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/tickets/purchase', { eventId, quantity }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      navigate('/my-tickets');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="ticket-purchase-container">
      <h2>Purchase Ticket</h2>
      <form onSubmit={handlePurchase}>
        <input
          type="text"
          placeholder="Event ID"
          value={eventId}
          onChange={(e) => setEventId(e.target.value)}
          required
        />
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <button type="submit">Purchase</button>
      </form>
    </div>
  );
};

export default TicketPurchase;
