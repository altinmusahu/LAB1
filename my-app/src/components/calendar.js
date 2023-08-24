import React, { useState } from 'react';
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css'; 
import '../css/calendar.css';

function CustomCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date()); 

  const handleDateChange = (date) => {
    setSelectedDate(date); 
  };

  return (
    <div className="calendar-container">
      <h2>Date: {selectedDate.toLocaleDateString()}</h2>
      <Calendar onChange={handleDateChange} value={selectedDate} /> 
    </div>
  );
}

export default CustomCalendar;
