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
    if (search) {
      console.log('searched')
      const filteredData = () => countries.filter(country => country.name.common.toLowerCase().match(search))
      console.log(filterCountries)
      setFilterCountries(filteredData)
    }
  }

  return (
    <div>
        <Search handleSearchChange={handleSearchChange}/>
        {filterCountries.map(country => <p>{country.name.common}</p>)}
    </div>
  )
}

export default App;
