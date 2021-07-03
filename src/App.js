import React from 'react';
import './App.css';
import TodoItem from "./Todoitem";
import todosData from "./todosData"

function App() {
  const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>)

  return (
    <div>
    <h1>To Do List</h1>
      {todoItems}
    </div>
  );
}

export default App;
