import React from 'react'

const Countries = ({ filterCountries }) => {
    if (filterCountries.length >= 1 && filterCountries.length < 11) {
        return (
            <div>
                {console.log('what',filterCountries.length)}
                {filterCountries.map(country => <p key={country.name.common}>{country.name.common}</p>)}
            </div>
        )
    }
    else if (filterCountries.length > 11){
        return (
        <p>{console.log(filterCountries.length)} Too many matches, specify another filter</p>
    )}
    else {
        return (
            <p></p>
        )
    }
}

export default Countries