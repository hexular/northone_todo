import React from 'react'
import './Todo.css'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import CheckIcon from '@material-ui/icons/Check'

export default function List(props) {

  const list = props.todos.map((todo, i) => {
    return !todo.deleted && (
      <React.Fragment>
        <li className={todo.done ? "done list" : "pending list"} key={i}>
          <p className="title">{todo.name}</p>
          {/* {todo.due} */}
          <div className="icons">
            <IconButton onClick={() => props.markDone(i)}>
              <CheckIcon />
            </IconButton>
            <IconButton onClick={() => props.deleteTodo(i)}>
              <DeleteIcon />
            </IconButton>
          </div>
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