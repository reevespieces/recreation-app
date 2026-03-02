import Wrapper from "./Wrapper";
import Courses from "./Courses";
import "../styles/sidebar.css";

const Sidebar = ({ courses }) => {
    return (
        <div className="sidebar">
            <div className="sidebar-content">
                <Courses courses={courses} />
            </div>
        </div>
    );
};

export default Sidebar;