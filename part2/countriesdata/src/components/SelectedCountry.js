import React from 'react'

const SelectedCountry = ({ selectedCountry }) => {
    const countryLanguage = Object.values(selectedCountry.languages)
  return (
    <div>
        {console.log(selectedCountry)}
        <h2>{selectedCountry.name.common}</h2>
        <p>captial {selectedCountry.capital}</p>
        <p>area {selectedCountry.area}</p>
        <h4>languages</h4>
        <ul>{countryLanguage.map(language => <li key={language}>{language}</li>)}</ul>
        <img src={selectedCountry.flags.png} alt=''/>
    </div>
  )
}

export default SelectedCountry