import React, { useState } from 'react'
// import './App.css'
import Input from './components/Input'
import TodoItem from './components/TodoItem'
import TodoList from './components/TodoList'

const today = new Date().toISOString().slice(0, 10)

function App() {

  const [todos, setTodos] = useState([
    {
      name: "Build To Do App", 
      desc: "Build a to do app in react for NorthOne", 
      category: "Coding", 
      due: today, 
      done: false
    }, 
    {
      name: "Buy Groceries", 
      desc: "Milk, Eggs, Bagels, Cheese, Peppers, Potatoes", 
      category: "Food", 
      due: today, 
      done: false}, 
    {
      name: "Clean My Room", 
      desc: "Tidy up after finals week", 
      category: "Chores", 
      due: today, 
      done: false} 
  ])

  const markDone = index => {
    const newTodos = [...todos]
    newTodos[index].done = !newTodos[index].done
    console.log(index)
    setTodos(newTodos)
  }

  const newTodo = (name, desc, category, date) => {
    const newTodos = [...todos, {name: name, desc: desc, category: category, date: date, done: false}]
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <TodoList todos={todos} markDone={markDone}/>
      <Input newTodo={newTodo} today={today}/>
    </div>
  )
}

export default App
