import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Zaimportuj style

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    console.log("Wybrana data:", newDate);
  };

  return (
    <div className="calendar">
      <Calendar
        onChange={handleDateChange}
        value={date}
      />
    </div>
  );
};

export default CalendarComponent;