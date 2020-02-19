import React from 'react'
import './Todo.css'
import Input from './Input'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import CheckIcon from '@material-ui/icons/Check'
import EditIcon from '@material-ui/icons/Edit'

export default function List(props) {

  const list = props.todos.map((todo, i) => {
    return todo.edit ? 
    !todo.deleted && (
      <React.Fragment>
        <li className="list" key={i}>
          <span className="list">
            <Input fill={todo} today={props.today} editTodo={props.editTodo} updateTodo={props.updateTodo} index={i}/>
          </span>
          <div className="icons">
            <IconButton onClick={() => props.deleteTodo(i)}>
              <DeleteIcon />
            </IconButton>
          </div>
        </li>
      </React.Fragment>
    )
    
    : 
    !todo.deleted && (
      <React.Fragment>
        <li className={todo.done ? "done list" : "pending list"} key={i}>
          <span className="list">
            <p className="title">{todo.name}</p>
            <p className="title hidden">{todo.category}</p>
            <p className="title hidden">{todo.due}</p>
          </span>
          <div className="icons">
            <IconButton onClick={() => props.editTodo(i)}>
              <EditIcon />
            </IconButton>
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
    <ul className="table">
      {list}
    </ul>
  )
}