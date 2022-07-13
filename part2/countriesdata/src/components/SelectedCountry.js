import React from 'react'

const SelectedCountry = ({ selectedCountry, setOneCountry }) => {
    const countryLanguage = Object.values(selectedCountry.languages)
    const handleClick = () => 
    {
      setOneCountry(false)
      console.log('click')
    } 
  return (
    <div>
        <h2>{selectedCountry.name.common}</h2>
        <p>captial {selectedCountry.capital}</p>
        <p>area {selectedCountry.area}</p>
        <h4>languages</h4>
        <ul>{countryLanguage.map(language => <li key={language}>{language}</li>)}</ul>
        <img src={selectedCountry.flags.png} alt=''/>
        <br />
        <button onClick={()=>handleClick()}>back</button>
    </div>
  )
}

export default SelectedCountry