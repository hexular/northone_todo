import React, { useState } from 'react'
// import './App.css'
import Input from './components/Input'
import TodoItem from './components/TodoItem'
import TodoList from './components/TodoList'



function App() {
  const [todos, setTodos] = useState([
    {name: "Build To Do App", desc: "Build a to do app in react for NorthOne", category: "Coding", due: ""}, 
    {name: "Buy Groceries", desc: "Milk, Eggs, Bagels, Cheese, Peppers, Potatoes", category: "Food", due: ""}, 
    {name: "Clean My Room", desc: "Tidy up after finals week", category: "Chores", due: ""} 
  ])

  const newTodo = (name, desc, category, date) => {
    const newTodos = [...todos, {name: name, desc: desc, category: category, date: date}]
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <TodoList todos={todos}/>
      <Input newTodo={newTodo}/>
    </div>
  )
}

export default App
