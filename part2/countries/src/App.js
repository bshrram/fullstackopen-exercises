import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import DetailedCountry from './components/DetailedCountry'
import Countries from './components/Countries'

const App = () => {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    console.log('effect')
    axios.get('https://restcountries.eu/rest/v2/all').then(response => {
      console.log('promise fulfilled')
      setCountries(response.data)
    })
  }, [])

  const handleFilterChange = event => {
    //console.log(event.target.value)
    setFilter(event.target.value)
  }

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(filter.toLowerCase())
  )

  const shownCountries = () => {
    if (filteredCountries.length > 10)
      return <div>Too many matches, specify another filter</div>
    else if (filteredCountries.length === 1)
      return <DetailedCountry country={filteredCountries[0]} />
    else
      return (
        <Countries
          countries={filteredCountries}
          handleClickShow={handleClickShow}
        />
      )
  }

  const handleClickShow = name => {
    setFilter(name)
  }

  return (
    <div>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      {shownCountries()}
    </div>
  )
}

export default App
