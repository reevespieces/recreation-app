import CalendarLayout from "../components/CalendarLayout.jsx";
import Sidebar from "../components/Sidebar.jsx";
import { useState } from "react";
import "../styles/homepage.css";
import { Link } from "react-router-dom";

const HomePage = ({ courses }) => {
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
                    <CalendarLayout/>
                </div>
            </div>
        </div>
    )
}

export default HomePage;