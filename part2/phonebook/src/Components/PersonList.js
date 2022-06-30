import React from 'react'

const PersonList = ({ person }) => {
  return (
    <p>{person.name} {person.number}</p>
  )
}

export default PersonList