import { useState } from "react";
import "./App.css";
function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  return (
    <div className="container">
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>My Todo App</h1>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      
       <ul>
  {tasks.map((item, index) => (
    <li key={index}>
      {item}
      <button
        onClick={() =>
          setTasks(tasks.filter((_, i) => i !== index))
        }
      >
        Delete
      </button>
    </li>
  ))}
       </ul>

    </div>
    </div>
  );
}

export default App;