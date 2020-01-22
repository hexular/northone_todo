import React from 'react'

export default function List(props) {

  const list = props.todos.map((todo, i) => {
    return (
      <li key={i}>
        {todo.name}
      </li>
    )
  })

  return (
    <ul>
      {list}
    </ul>
  )
}