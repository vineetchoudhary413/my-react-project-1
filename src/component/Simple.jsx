import React, { useState, useEffect } from "react";
import "./Simple.css";
import { Button } from "@mantine/core";

function Simple() {
  const [showInput, setShowInput] = useState(false);
  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (task.trim() === "") return;

    setTasks([
  ...tasks,
  {
    text: task,
    completed: false,
  }
]);
    setTask("");
  };

  const handleDeleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter(
      (item, index) => index !== indexToDelete
    );
    setTasks(updatedTasks);
  };

  
  const handleEditTask = (index) => {
    setEditIndex(index);
    setEditText(tasks[index].text);
  };

  
  const handleSaveTask = () => {
    if (editText.trim() === "") return;

    const updatedTasks = [...tasks];
    updatedTasks[editIndex].text = editText;

    setTasks(updatedTasks);
    setEditIndex(null);
    setEditText("");
  };

  const handleToggleComplete = (index) => {
     const updatedTasks = [...tasks];

     updatedTasks[index].completed = !updatedTasks[index].completed;

     setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <div className="todo-box">
        <h1>ToDo App</h1>

        <button className="add-btn" onClick={() => setShowInput(true)}>
          Add
        </button>

        {/*<Button onClick={() => setShowInput(true)}>
          Add
        </Button>*/}

        {showInput && (
          <div className="input-row">
            <input
              type="text"
              placeholder="Enter your task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button className="plus-btn" onClick={handleAddTask}>
              +
            </button>
          </div>
        )}

        <div className="task-section">
          <h3>Tasks</h3>

          <ul>
            {tasks.map((item, index) => (
              <li key={index} className="task-item">
                {editIndex === index ? (
                  <>
                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                    />
                    <button className="save-btn" onClick={handleSaveTask}>
                      Save
                    </button>
                  </>
                ) : (
                  <>
                  <>
                   <input
                     type="checkbox"
                     checked={item.completed}
                     onChange={() => handleToggleComplete(index)}
                    /> 
                    <span style={{
                      textDecoration: item.completed ? "line-through" : "none",
                      color: item.completed ? "gray" : "black",
                      marginLeft: "10px"
                    }}>{item.text}</span>
                  </>
                    <div>
                      <button
                        className="edit-btn"
                        onClick={() => handleEditTask(index)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => handleDeleteTask(index)}
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Simple;