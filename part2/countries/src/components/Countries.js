import React from 'react'

const Countries = props => {
  const { countries, handleClickShow } = { ...props }
  return (
    <>
      {countries.map(country => (
        <div key={country.name}>
          {country.name + ' '}
          <button onClick={() => handleClickShow(country.name)}>show </button>
        </div>
      ))}
    </>
  )
}

export default Countries
