import Wrapper from "../components/Wrapper.jsx";
import Tasks from "../components/Tasks.jsx";

const TasksPage = ({ tasks, toggleTask, addTask }) => {
    return (
        <Wrapper>
            <Tasks tasks={tasks} toggleTask={toggleTask} addTask={addTask} />
        </Wrapper>
    );
};

export default TasksPage;