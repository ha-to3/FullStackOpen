import React from 'react'
import SelectedCountry from './SelectedCountry'

const Countries = ({ 
    filterCountries,
    showOneCountry,
    setOneCountry,
    selectedCountry,
    setSelectedCountry
    }) => {
    const handleClick=(country)=>{
        setOneCountry(true)
        setSelectedCountry(country)
    }
    const displayedCountries = ({filterCountries}) => {
        if (filterCountries.length === 1) {
            return (
                <SelectedCountry selectedCountry={filterCountries[0]} setOneCountry={setOneCountry} />
            )
        }
        else if (filterCountries.length > 10){
            return (
            <p>{console.log(filterCountries.length)} Too many matches, specify another filter</p>
        )}
       else {
        return filterCountries.map(country => 
        <div key={country.ccn3}>
            <p>{country.name.common}</p>
            <button onClick={()=>handleClick(country)}>show</button>
        </div>)
       }
    }
    const countriesShown = showOneCountry 
    ? <SelectedCountry selectedCountry={selectedCountry} setOneCountry={setOneCountry}/>
    : displayedCountries({filterCountries})

 return (
    <div>
        {countriesShown}
    </div>
 )
}
export default Countries