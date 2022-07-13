import { useEffect, useState } from 'react'
import axios from 'axios'
import Search from './components/Search'
import Countries from './components/Countries'

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
          {filterCountries.length>= 1 ? 
          <Countries filterCountries={filterCountries} />: ''}
        </div>
    </div>
  )
}

export default App;
