import { useEffect, useState } from 'react'
import {updateCity} from './helpers'

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
          <label for="city">Enter a location for weather information ⛅</label>
          <input type="text" id='city' className="form-control" />
          <input type="submit" value='Submit' />
      </form>

      {weatherDetails !== {} && (
        <div className="card">
          
          <h2>{cityDetails.EnglishName}</h2>
          <div className="detail">
              <p>{weatherDetails.WeatherText}</p>
              <span>{weatherDetails.Temperature.Metric.Value}</span>
              <span>&deg;C</span>
          </div>
        </div>
      )}
     
    </div>
  );
}

export default App;
