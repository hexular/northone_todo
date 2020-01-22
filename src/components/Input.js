import React, { useState } from 'react'

export default function Input(props){

  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [category, setCategory] = useState('')
  const [date, setDate] = useState(props.today)

  const onSubmit = event => {
    event.preventDefault()
    props.newTodo(name, desc, category, date)
    setName('')
    setDesc('')
    setCategory('')
    setDate(props.today)
  }

  return (
    <form onSubmit={onSubmit}>
      <input 
        value={name} 
        type="text" 
        placeholder="Add New Todo" 
        id="name" 
        onChange={event => setName(event.target.value)}>
      </input>
      <input 
        value={desc} 
        type="text" 
        placeholder="Description" 
        id="desc"
        onChange={event => setDesc(event.target.value)}>
      </input>
      <input 
        value={category} 
        type="text" 
        placeholder="Select Category" 
        id="category"
        onChange={event => setCategory(event.target.value)}>
      </input>
      <input 
        type="date" 
        id="date" 
        name="due-date"
        min={props.today} max="2020-12-31"
        value={date}
        onChange={event => setDate(event.target.value)}>
      </input>
      <input type="submit" value="Add Todo">
      </input>
    </form>
  )
}