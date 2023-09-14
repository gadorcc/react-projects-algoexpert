import React from 'react';
import './App.css';
import { useState } from 'react';
/*
  INSTRUCTIONS:
  Create a "todo"(add cities) app with the following criteria.
    1. The user can add new cities
    2. The user can remove existing cities items
*/

export default function App() {
  const [inputTask, setInputTask] = useState('');
  const [list, setList] = useState([]);

  const handleClick = (event) => {
    setInputTask(event.target.value);
  };

  const handleAddTodo = (todo) => {
    const newTask = {
      id: list.length + 1,
      todo: inputTask
    }
    setList([...list, newTask]);
    setInputTask('');
  };

  const handleDeleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
};


  return (
    <div className="App">
      <h1>My City list</h1>
      <input type="text" value={inputTask}
      onChange={handleClick} placeholder = "Add a city"></input>
      <button onClick={() => handleAddTodo(inputTask)}className="btn">Add</button>

      <ul>
                { list.map((todo) => (
                    <li className="task" key={todo.id}>
                        {todo.todo}
                        {todo.id}
                        <button onClick={() => handleDeleteTodo(todo.id)}>
                          Delete
                        </button>
                    </li>
                ))}
            </ul>
    </div>

  );
}
