import React, { useState } from 'react';
import './App.css';

function App() {
  // State to store the list of tasks
  const [tasks, setTasks] = useState([]);
  // State to store the input value from the form
  const [taskInput, setTaskInput] = useState('');

  // Function to handle task input change
  const handleInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  // Function to add a new task
  const addTask = (event) => {
    event.preventDefault();
    if (taskInput.trim()) {
      setTasks([...tasks, { text: taskInput, completed: false }]);
      setTaskInput('');
    }
  };

  // Function to mark a task as completed
  const toggleCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  // Function to remove a task
  const removeTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>

      <form onSubmit={addTask}>
        <input
          type="text"
          value={taskInput}
          onChange={handleInputChange}
          placeholder="Enter a new task"
        />
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            <span>{task.text}</span>
            <button onClick={() => toggleCompletion(index)}>
              {task.completed ? 'Unmark' : 'Mark Complete'}
            </button>
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
