import React, { useState } from "react";
import { MdFactCheck, MdDelete } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const addTask = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      completed: false,
    };
    setTasks([...tasks, addTask]);
    setInput("");
  };

  const deleteTask = (id) => {
    let filteredTask = [...tasks].filter((tasks) => tasks.id !== id);
    setTasks(filteredTask);
    // console.log("task deleted");
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const date = new Date();

  // console.log(date);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className="app">
      <div className="container">
        <div className="heading">
          <MdFactCheck className="task-icon" />
          <h1>Task List</h1>
        </div>

        <div className="date">
          <p>{days[date.getDay()]}</p>
          <p>{date.getDate()},</p>
          <p>{months[date.getMonth()]}</p>
          <p>{date.getFullYear()}</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-input">
            <AiOutlinePlus className="icon" />
            <input
              value={input}
              placeholder="Enter a task"
              type="text"
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        </form>
        <div>
          {tasks.map((task) => {
            return (
              <div
                className={`task-row ${task.completed ? "completed" : ""}`}
                key={task.id}
                onDoubleClick={() => toggleComplete(task.id)}
              >
                <p>{task.text}</p>
                <MdDelete onClick={() => deleteTask(task.id)} />
              </div>
            );
          })}
        </div>
        <p className="length">
          {tasks < 1 ? "You have no tasks" : `Tasks: ${tasks.length}`}
        </p>
      </div>
    </div>
  );
}

export default App;
