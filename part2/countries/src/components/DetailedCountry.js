import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DetailedCountry = ({ country }) => {
  const [weather, setWeather] = useState({})
  const url =
    'https://api.apixu.com/v1/current.json?key=8ced624209414a58aec21832190909&q=' +
    country.capital

  useEffect(() => {
    console.log('effect weather')
    axios.get(url).then(response => {
      console.log('promise fulfilled')
      setWeather(response.data)
    })
  }, [url])

  const showWeather = () => {
    if (weather.current) {
      return (
        <div>
          <h3>Weather in {` ${country.capital}`}</h3>
          <div>
            <b>temperature:</b>
            {` ${weather.current.temp_c} Celsius`}
          </div>
          <img
            src={weather.current.condition.icon}
            alt={weather.current.condition.text}
          />
          <div>
            <b>wind:</b>
            {` ${weather.current.wind_kph} kph direction ${weather.current.wind_dir}`}
          </div>
        </div>
      )
    }
  }

  return (
    <div>
      <h2>{country.name}</h2>
      <div>capital {country.capital}</div>
      <div>population {country.population}</div>
      <h3>languages</h3>
      <ul>
        {country.languages.map(language => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img
        src={country.flag}
        alt={country.name + ' flag'}
        style={{ width: '100px' }}
      />
      {showWeather()}
    </div>
  )
}

export default DetailedCountry
