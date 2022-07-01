import { useState } from 'react'
import Header from './Components/Header'
import Form from './Components/Form'
import Filter from './Components/Filter'
import FilterList from './Components/FilterList'

const App = () => {
  const [persons, setPersons] = useState([ 
  { name: 'Arto Hellas', number: '040-123456'},
  { name: 'Ada Lovelace', number: '39-44-5323523'},
  { name: 'Dan Abramov', number: '12-43-234345' },
  { name: 'Mary Poppendieck', number: '39-23-6423122'}]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [inputText, setInputText] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObj = {
      name: newName,
      number: newNumber
    }

    if (personObj.name.length < 1 || personObj.number.length < 1 ){
      alert(`Fields are missing`)
    }

    else if (persons.find(person => person.name.toLowerCase() === personObj.name.toLowerCase())){
        alert(`${newName} is already added to phonebook`)
    }

    else {
       setPersons(persons.concat(personObj))
       setNewName('')
       setNewNumber('')
    }
  }

  const handlePersonChange= (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleSearchChange = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase)
  }

  return (
    <div>
      <Header header='Phonebook'/>
      <Filter handleSearchChange={handleSearchChange}/>
      <Header header='add a new'/>
      <Form 
            onSubmit={addPerson} 
            newName={newName} 
            newNumber={newNumber} 
            handlePersonChange={handlePersonChange} 
            handleNumberChange={handleNumberChange}/>
      <Header header='Numbers'/>
      <FilterList inputText={inputText} persons={persons}/>
    </div>
  )
}

export default App