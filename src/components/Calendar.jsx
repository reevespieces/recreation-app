const Calendar = () => {
    const event = "Gay Class"
    const date = "2-20-2026"
    const time = "12:30pm"
    return(
        <div className="calendar">
            <h1>Calendar</h1>
            <p>{event}, {date}, {time}</p>

        </div>
    );
}
export default Calendar;