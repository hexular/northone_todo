import React from 'react'
import './Todo.css'

export default function List(props) {

  const list = props.todos.map((todo, i) => {
    return !todo.deleted && (
      <React.Fragment>
      <li 
        className={todo.done ? "done" : "pending"} 
        onClick={() => props.markDone(i)} 
        key={i}
      >
        {todo.name}
        {/* {todo.due} */}
      </li>
      <p onClick={() => props.deleteTodo(i)}>delete</p>
      </React.Fragment>
    )
  })

  return (
    <ul>
      {list}
    </ul>
  )
}