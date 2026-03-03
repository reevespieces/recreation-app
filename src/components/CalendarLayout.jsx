import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/calendar.css";

const CalendarLayout = ({ initialEvents = [], allowAddEvent = false, onAddEvent }) => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState(initialEvents);
  const navigate = useNavigate();

  // Handle dot display
  const tileContent = ({ date: d }) => {
    const day = d.toISOString().split("T")[0];
    const hasEvent = events.some((e) => e.date === day);
    return hasEvent ? <div className="event-dot" /> : null;
  };

  const selectedDayEvents = events.filter(
    (e) => e.date === date.toISOString().split("T")[0]
  );

  const handleAddEvent = () => {
    navigate("/addevent", {
      state: { selectedDate: date.toISOString().split("T")[0] }
    });
  };

  const handleNewEvent = (event) => {
    setEvents((prev) => [...prev, event]);
    onAddEvent?.(event);
  };

  return (
    <div className="calendar-wrapper">
      <h1 className="calendar-title">Course Calendar</h1>

      <Calendar
        onChange={setDate}
        value={date}
        className="custom-calendar"
        tileContent={tileContent}
      />

      <div className="selected-day-events">
        <h3>Events on {date.toDateString()}:</h3>
        {selectedDayEvents.length === 0 && <p>No events</p>}
        {selectedDayEvents.map((event, idx) => (
          <div key={idx} className="event-item card">
            <p><strong>{event.name}</strong></p>
            {event.description && <small>{event.description}</small>}
          </div>
        ))}
      </div>

      {allowAddEvent && (
        <button className="add-event-button" onClick={handleAddEvent}>
          + Add Event
        </button>
      )}
    </div>
  );
};

export default CalendarLayout;