import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'

const SelectedCountry = ({ selectedCountry, setOneCountry }) => {
  const [weather,setWeather] = useState({})
  const api_key = process.env.REACT_APP_API_KEY
  const lat = selectedCountry.latlng[0]
  const lon = selectedCountry.latlng[1]
  useEffect(() => {
      axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`)
      .then(res => {
        setWeather(res.data)
        console.log(res.data)
        console.log(lat,lon)
      })
    }, []);

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
        <h1>Weather in {selectedCountry.capital}</h1>
        <p>temperature {}</p>
        <img src />
        <p>wind </p>
        <br />
        <button onClick={()=>handleClick()}>back</button>
    </div>
  )
}

export default SelectedCountry