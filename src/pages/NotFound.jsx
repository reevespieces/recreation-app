import Wrapper from "../components/Wrapper";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <Wrapper>
            <p>This page you were looking for is not found and doesn't exist, please go back to the homepage</p>
            <Link to="/" className="back-button">
            Go to home
          </Link>
        </Wrapper>

    )
}

export default NotFound;