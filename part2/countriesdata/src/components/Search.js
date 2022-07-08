import React from 'react'

const Search = ({ handleSearchChange }) => {
  return (
    <p>find countries
        <input
          onChange={handleSearchChange}
        />
    </p>
  )
}

export default Search