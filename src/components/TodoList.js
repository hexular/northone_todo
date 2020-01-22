import React from 'react'

export default function List(props) {

  const list = props.todos.map((todo, i) => {
    return (
      <li onClick={() => props.markDone(i)} key={i}>
        {todo.name}
        {/* {todo.due} */}
      </li>
    )
  })

  return (
    <ul>
      {list}
    </ul>
  )
}