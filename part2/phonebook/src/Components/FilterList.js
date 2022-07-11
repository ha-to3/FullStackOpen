import React from 'react'
import PersonList from './PersonList'

const FilterList = ({ inputText, persons }) => {
    const filteredData = persons.filter((person) => {
        if (inputText === ''){
          return person
        }
        else {
          return person.name.toLowerCase().match(inputText)
        }
      })
    return (
        <div>
        {filteredData.map(person => 
            <PersonList key={person.name} person={person}
          />)}
        </div>
    )
}

export default FilterList