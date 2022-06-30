import { useState } from 'react'
import PersonList from './Components/PersonList'
const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObj = {
      name: newName
    }
    if (personObj.name.length < 1 ){
      alert(`Fields are missing`)
    }
    else if (persons.find(person => person.name.toLowerCase() === personObj.name.toLowerCase())){
        alert(`${newName} is already added to phonebook`)
    }
    else {
       setPersons(persons.concat(personObj))
       setNewName('')
    }
  }

  const handlePersonChange= (event) => {
    setNewName(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: 
          <input 
            value={newName}
            onChange={handlePersonChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(person => <PersonList key={person.name} person={person}/>)}
    </div>
  )
}

export default App