import { useEffect, useState } from 'react'
import axios from 'axios'
import Search from './components/Search'

function App() {

  const [countries, setCountries] = useState([])
  const [filterCountries, setFilterCountries] = useState([])
  const [search, setSearch] = useState('')

  useEffect(()=> {
    axios.get('https://restcountries.com/v3.1/all').then(res => {
      setCountries(res.data)
    })
  }, [])

  const handleSearchChange = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setSearch(lowerCase)
    console.log()
    if (search) {
      const filteredData = () => countries.filter(country => country.name.common.toLowerCase().match(lowerCase))
      
      setFilterCountries(filteredData)
    }
  }

  return (
    <div>
        <Search handleSearchChange={handleSearchChange}/>
        <div>
          {filterCountries.length > 10 && 
          <h2>too many countries</h2>} 
          {filterCountries.length < 10 && 
            filterCountries.map(country => <p key={country.name.common}>{country.name.common}</p>)
          }
        </div>
    </div>
  )
}

export default App;
