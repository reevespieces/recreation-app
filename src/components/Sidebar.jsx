import Wrapper from "./Wrapper";
import Courses from "./Courses";

const Sidebar = () => {
    return (
        <Wrapper className="sidebar">
            <div className="sidebar-content">
                <Courses/>
            </div>
        </Wrapper>

    )
}

export default Sidebar;