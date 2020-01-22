import React from 'react';

export default function Input(){
  return (
    <form>
      <input type="text" placeholder="Add New Todo" id="name"></input>
      <input type="text" placeholder="Description" id="desc"></input>
      <input type="text" placeholder="Select Category" id="category"></input>
      <input 
        type="date" 
        id="date" 
        name="due-date"
        min="2020-01-23" max="2020-12-31">
      </input>
      <input type="submit" value="Add Todo" onClick={(e) => e.preventDefault()}></input>
    </form>
  )
}