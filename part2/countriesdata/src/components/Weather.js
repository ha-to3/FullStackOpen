import React from 'react'

const Weather = ({ country, weather}) => {
    const weatherImg = `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`
    return (
      <>
        <h1>Weather in {country.capital}</h1>
            <p>temperature {weather.main.temp} Celcius</p>
            <img src={weatherImg} alt=''/>
        <p>wind {weather.wind.speed} m/s</p>
      </>
    )
  }
  
  export default Weather