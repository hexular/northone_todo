import React, { useState } from 'react'
import './Input.css'
import AddIcon from '@material-ui/icons/Add'
import IconButton from '@material-ui/core/IconButton'
import ClearIcon from '@material-ui/icons/Clear'
import TextField from '@material-ui/core/TextField'

export default function Input(props){

  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [category, setCategory] = useState('')
  const [date, setDate] = useState(props.today)

  const onSubmit = () => {
    props.newTodo(name, desc, category, date)
    setName('')
    setDesc('')
    setCategory('')
    setDate(props.today)
  }

  return (
    <form className="form" autoComplete="off">
      <TextField 
        value={name} 
        type="text" 
        placeholder="Add New Todo" 
        id="name" 
        onChange={event => setName(event.target.value)} 
        className="input"
        variant="outlined"
      />
      
      <TextField 
        value={desc} 
        type="text" 
        placeholder="Description" 
        id="desc"
        onChange={event => setDesc(event.target.value)} 
        className="input"
        variant="outlined"
      />
      
      <TextField 
        value={category} 
        type="text" 
        placeholder="Select Category" 
        id="category"
        onChange={event => setCategory(event.target.value)} 
        className="input" 
        variant="outlined"
      />
      
      <TextField 
        type="date" 
        id="date" 
        name="due-date"
        min={props.today} max="2020-12-31"
        defaultValue={date}
        onChange={event => setDate(event.target.value)} 
        variant="outlined"
      />
      <div className="icons">
        <IconButton>
          <AddIcon onClick={() => onSubmit()}/>
        </IconButton>
        <IconButton onClick={() => props.cancelForm()}>
          <ClearIcon/>
        </IconButton>
      </div>
    </form>
  )
}