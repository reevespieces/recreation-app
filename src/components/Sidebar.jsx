import Wrapper from "./Wrapper.jsx";
import Courses from "./Courses.jsx";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";


const Sidebar = ({ courses }) => {
    return (
        <div className="sidebar">
            <div className="sidebar-content">
                <Courses courses={courses} />

                <div className="button-container">
                    <Link to="/addcourse" className="course-add">
                        Add a course
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;