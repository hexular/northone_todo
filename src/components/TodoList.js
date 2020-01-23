import React from 'react'
import './Todo.css'
import IconButton from '@material-ui/core/IconButton'
// import DeleteIcon from 

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
        <IconButton onClick={() => props.deleteTodo(i)}>
          {/* <DeleteIcon /> */}
          delete
        </IconButton>
      </li>
      </React.Fragment>
    )
  })

  return (
    <ul>
      {list}
    </ul>
  )
}