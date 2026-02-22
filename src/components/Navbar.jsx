import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="nav">
            <div className="topnav">
                <ul className="navlist">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/calendar">Calendar</Link></li>
                    <li><Link to="/tasks">Tasks</Link></li>
                </ul>
            </div>
        </nav>
    );

}

export default Navbar;