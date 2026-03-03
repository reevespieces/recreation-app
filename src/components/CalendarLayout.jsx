import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/calendar.css";

const CalendarLayout = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calendar-wrapper">
      <h1 className="calendar-title">Course Calendar</h1>

      <Calendar
        onChange={setDate}
        value={date}
        className="custom-calendar"
      />

      <p className="calendar-selected">
        Selected Date: {date.toDateString()}
      </p>
    </div>
  );
};

export default CalendarLayout;