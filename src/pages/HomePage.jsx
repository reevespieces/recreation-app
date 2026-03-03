import CalendarLayout from "../components/CalendarLayout.jsx";
import Sidebar from "../components/Sidebar.jsx";
import { useState } from "react";
import "../styles/homepage.css";
import { Link } from "react-router-dom";

const HomePage = ({ courses }) => {
      const preaddedEvents = [
    { name: "CGT 390 Lecture", date: "2026-03-05", description: "Main lecture hall" },
    { name: "FLM 361 Screening", date: "2026-03-06", description: "Film screening room" },
    { name: "GS 210 Workshop", date: "2026-03-07", description: "Group activity" },
  ];

    return (
        <div className="homepage-layout">
            <Sidebar courses={courses} />

            <div className="button-container">
                <Link to="/addcourse" className="course-add">
                    Add a course
                </Link>
            </div>

            <div className="main-content">
                <div className="content-wrapper">
                    <CalendarLayout initialEvents={preaddedEvents} allowAddEvent={false}/>
                </div>
            </div>
        </div>
    )
}

export default HomePage;