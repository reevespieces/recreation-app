import Wrapper from "../components/Wrapper";
import Courses from "../components/Courses";
import Calendar from "../components/Calendar";

function HomePage() {
    return (
        <div>
            <Wrapper id="sidebar">
                <Courses />
            </Wrapper>
            <Calendar />
        </div>
    )
}

export default HomePage;