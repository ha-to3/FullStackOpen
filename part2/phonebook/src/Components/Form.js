import React from 'react'

const Form = ({ onSubmit, newName, newNumber, handleNumberChange, handlePersonChange }) => {
  return (
    <form onSubmit={onSubmit}>
    <div>
      name: 
      <input 
        value={newName}
        onChange={handlePersonChange}
      />
    </div>
    <div>
      number: 
      <input 
        value={newNumber}
        onChange={handleNumberChange}
      />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
  )
}

export default Form