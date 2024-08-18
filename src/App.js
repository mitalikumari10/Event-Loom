import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import EventList from './components/Event/EventList';
import EventDetails from './components/Event/EventDetails';
import EventForm from './components/Event/EventForm';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import MyTickets from './components/Ticket/MyTickets';
import CalendarIntegration from './components/CalendarIntegration';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<EventList />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/create-event" element={<EventForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/my-tickets" element={<MyTickets />} />
        <Route path="/calendar" element={<CalendarIntegration />} />
      </Routes>
    </Router>
  );
};

export default App;
