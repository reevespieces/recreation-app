import Wrapper from "../components/Wrapper";
import Calendar from "../components/Calendar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import "../styles/homepage.css";

const HomePage = () => {
    const [courses, setCourses] = useState([
        { name: "CGT 390" },
        { name: "FLM 361" },
        { name: "GS 210" },
        { name: "PHYS 220" },
        { name: "CGT 25001" },
        { name: "FLM 371" }
    ]);

    return (
        <div className="homepage-layout">
            <Sidebar courses={courses} />

            <div className="main-content">
                <div className="content-wrapper">
                    <Calendar />
                </div>
            </div>
        </div>
    )
}

export default HomePage;