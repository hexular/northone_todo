import React, { useState } from 'react'
import './App.css'
import Input from './components/Input'
import TodoList from './components/TodoList'

const today = new Date().toISOString().slice(0, 10)

function App() {

  const [todos, setTodos] = useState([
    {
      name: "Build To Do App", 
      desc: "Build a to do app in react for NorthOne", 
      category: "Coding", 
      due: today, 
      done: false,
      deleted: false
    }, 
    {
      name: "Buy Groceries", 
      desc: "Milk, Eggs, Bagels, Cheese, Peppers, Potatoes", 
      category: "Food", 
      due: today, 
      done: false,
      deleted: false
    }, 
    {
      name: "Clean My Room", 
      desc: "Tidy up after finals week", 
      category: "Chores", 
      due: today, 
      done: false,
      deleted: false
    } 
  ])

  const markDone = index => {
    const newTodos = [...todos]
    newTodos[index].done = !newTodos[index].done
    setTodos(newTodos)
  }

  const deleteTodo = index => {
    const newTodos = [...todos]
    newTodos[index].deleted = true
    setTodos(newTodos)
  }

  const newTodo = (name, desc, category, date) => {
    const newTodos = [...todos, {name: name, desc: desc, category: category, date: date, done: false, deleted: false}]
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <h2>Todo List</h2>
      <TodoList todos={todos} markDone={markDone} deleteTodo={deleteTodo}/>
      <Input newTodo={newTodo} today={today}/>
    </div>
  )
}

export default App
