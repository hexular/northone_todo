import React, { useState, useEffect } from 'react'
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

  useEffect(() => {

    if (props.fill !== undefined) {
      setName(props.fill.name)
      setDesc(props.fill.desc)
      setCategory(props.fill.category)
      setDate(props.fill.due)
    }
  }, [])
    
  const onSubmit = () => {
    
    if (name && desc && category) {
      if (date >= props.today) {
        props.newTodo(name, desc, category, date)
        setName('')
        setDesc('')
        setCategory('')
        setDate(props.today)
      } else {
        alert('Date cannot be in the past')
      }
    } else {
      alert('Please fill out all fields')
    }
  }

  const dateChange = event => {
    setDate(event.target.value)
  }

  return (
    <form className={props.fill === undefined ? "form" : 'line'} autoComplete="off">
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
        className="input"
        type="date" 
        id="date" 
        name="due-date"
        defaultValue={props.fill === undefined ? date : props.fill.due}
        format="MM-DD-YYYY"
        onChange={e => setDate(e.target.value)} 
        variant="outlined"
      />
      <div className={props.fill === undefined ? "icons" : 'line'}>
        <IconButton>
          {props.fill === undefined ? <AddIcon onClick={() => onSubmit()}/> : <AddIcon onClick={() => {
            props.updateTodo(props.index, {name: name, desc: desc, category: category, due: date})
          }
            }/>}
        </IconButton>
        <IconButton onClick={props.fill === undefined ? () => props.cancelForm() : () => props.editTodo(props.index)}>
          <ClearIcon/>
        </IconButton>
      </div>
    </form>
  )
}