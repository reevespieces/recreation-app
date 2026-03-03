import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/large.png";

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="topnav">

                <NavLink to="/" className="logo">
                    <img src={logo} alt="shovel logo" />
                </NavLink>

                <ul className="navlist">
                    <li>
                        <NavLink to="/" end>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/calendar">Calendar</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tasks">Tasks</NavLink>
                    </li>
                </ul>

            </div>
        </nav>
    );
};

export default Navbar;