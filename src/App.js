import React, {Component} from 'react';
import './App.css';
import TodoItem from "./Todoitem";
import todosData from "./todosData"

class App extends Component { 
  constructor() {
    super()
    this.state = { /*here we are establishing the object in todosData as our state so that
      we can update it.  We could pass it as props, but if we want to change the information,
      we cannot do that with props because props are immutable.*/
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed
            }
        }
        return todo /*return todo here to put the todo item back into the array, updating it */
      })
      console.log(prevState.todos)
      console.log(updatedTodos)
      return {
        todos: updatedTodos /*returns the new value of state */
      }
    })
  }

    render() {
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}
    handleChange={this.handleChange} />)

    return (
      <div>
      <h1>To Do List</h1>
        {todoItems /*here we are rendering the completed mapped version of the todosData with
        template written in Todoitem.js*/} 
      </div>
    );
  }
}

export default App;
