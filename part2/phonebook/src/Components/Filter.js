import React from 'react'

const Filter = ({ handleSearchChange }) => {
    return (
    <p>filter shown with  
        <input
          onChange={handleSearchChange}
        />
      </p>
    )
}

export default Filter