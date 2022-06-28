import './App.css';
import React, {useState} from 'react';

function App() {

  const [todos, setTodos] = useState([
    {name: "Buy shopping", priority: "high"}, 
    {name: "Clean bathroom", priority: "high"},
    {name: "Car's MOT", priority: "high"},
    {name: "Mow The Grass", priority: "high"}  
  ])

  const [newToDo, setNewToDo] = useState('');

  const [newPriority, setNewPriority] = useState('');

  const saveNewToDo = (evt) => {
    evt.preventDefault();
    const copyTodos = [...todos];
    copyTodos.push({name: newToDo, priority: newPriority});
    setTodos(copyTodos);
    setNewToDo('');
    setNewPriority('');
  }

  const handleToDoInput = (evt) => {
    setNewToDo(evt.target.value);
  }

  const handleHighPriority = (evt) => {
    setNewPriority(evt.target.value);
  }

  const handleLowPriority = (evt) => {
    setNewPriority(evt.target.value);
  }

  const todoNodes = todos.map((todo, index) => {
    return (
      <li key={index}>
        <span>{todo.name}</span>
      </li>
    )
  })

  return (
    <>
      <h1>My ToDo List</h1>
      <hr></hr>

      <ul>
        {todoNodes}
      </ul>

      <form onSubmit={saveNewToDo}>

        <label htmlFor='new-todo'>Add a new ToDo:</label>
        <input id='new-todo' type='text' value={newToDo} onChange={handleToDoInput}/>
        
        <label htmlFor='high-priority'>High</label>
        <input id='high-priority' name='priority' type='radio' value='high' onChange={handleHighPriority}/>

        <label htmlFor='low-priority'>Low</label>
        <input id='low-priority' name='priority' type='radio' value='low' onChange={handleLowPriority}/>

        <input type='submit' value='Add Task'/>
      </form>
    </>
  );
}

export default App;
