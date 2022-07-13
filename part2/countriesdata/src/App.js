import { useEffect, useState } from 'react'
import axios from 'axios'
import Search from './components/Search'
import Countries from './components/Countries'

function App() {

  const [countries, setCountries] = useState([])
  const [filterCountries, setFilterCountries] = useState([])
  const [search, setSearch] = useState('')
  const [showOneCountry, setOneCountry] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState({})

  useEffect(()=> {
    axios.get('https://restcountries.com/v3.1/all').then(res => {
      setCountries(res.data)
    })
  }, [])

  const handleSearchChange = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setSearch(lowerCase)
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
          <Countries 
          filterCountries={filterCountries} 
          showOneCountry={showOneCountry}
          setOneCountry={setOneCountry}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          />: ''}
        </div>
    </div>
  )
}

export default App;
