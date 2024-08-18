import React from 'react';

import './CalendarIntegration.css'; // Ensure this CSS file exists

const CalendarIntegration = ({ event }) => {
  const addToCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.startDate}/${event.endDate}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;

  return (
    <div className="calendar-container">
      <h2 className="calendar-title">Add to Calendar</h2>
      <a href={addToCalendarUrl} className="calendar-button" target="_blank" rel="noopener noreferrer">
        Add to Google Calendar
      </a>
    </div>
  );
};

export default CalendarIntegration;
