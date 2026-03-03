import { useState } from "react";
import "../styles/tasks.css";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Read Chapter 1", done: false },
    { id: 2, name: "Do HW 5", done: false },
    { id: 3, name: "Write essay", done: false },
  ]);

  const [newTask, setNewTask] = useState("");

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const addTask = () => {
    if (newTask.trim() === "") return;
    const nextId = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    setTasks((prev) => [...prev, { id: nextId, name: newTask, done: false }]);
    setNewTask("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") addTask();
  };

  return (
    <div className="task-lists">
      <h2 className="tasks-title">To-Do List</h2>

      <div className="add-task">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul className="tasks-ul">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`task-item ${task.done ? "done" : ""}`}
            onClick={() => toggleTask(task.id)}
          >
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(task.id)}
            />
            <span>{task.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;