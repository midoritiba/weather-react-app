import { useEffect, useState } from 'react'
import {updateCity} from './helpers'
import Card from './components/Card'

function App() {

  const [city, setCity] = useState('')
  const [cityDetails, setCityDetails] = useState('')
  const [weatherDetails, setWeatherDetails] = useState({})


  const submitHandler = (e) => {
    e.preventDefault()
    setCity(e.target.elements.city.value)
    e.target.elements.city.value = '' 
  }

  useEffect(() => {

    if(city){
      updateCity(city)
      .then(data => {
        setCityDetails(data.cityDetails)
        setWeatherDetails(data.weather)
      })
      .catch(err => console.log(err.message))
    
    } else {
      setCity('')
      setCityDetails('')
      setWeatherDetails({})
    }

  },[city])
 
  return (
    <div className="container">

      <div className="title">
        <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FF0066" d="M43.9,-19.1C50,4.3,43,27,27.3,38.8C11.5,50.5,-13.2,51.4,-34.9,38C-56.6,24.6,-75.3,-3,-69,-26.7C-62.7,-50.4,-31.3,-70.3,-6.2,-68.3C19,-66.3,37.9,-42.4,43.9,-19.1Z" transform="translate(100 100)" />
        </svg>
        <h1>Weather App</h1>
      </div>

      <form onSubmit={submitHandler}>
          <label htmlfor="city">Enter a location for weather information ⛅</label>
          <input type="text" id='city' className="form-control" />
          <input type="submit" id='btn' value='Submit' />
      </form>

      {Object.keys(weatherDetails).length !== 0 && cityDetails.length !== 0 && (
        <Card weatherDetails={weatherDetails} cityDetails={cityDetails}/>
      )}
     
    </div>
  );
}

export default App;
