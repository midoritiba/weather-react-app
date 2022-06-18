import axios from 'axios'

export async function getCity(city){
    const API_KEY = process.env.REACT_APP_API_KEY
    const response = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${city}`)
    const data = await response.data[0]
    return data
  } 

export async function getWeather(locationKey){
    const API_KEY = process.env.REACT_APP_API_KEY
    const response = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${API_KEY}`)
    const data = await response.data[0]
    // setWeatherDetails(data)
    return data
}

export async function updateCity(city){
    const cityDetails = await getCity(city)
    const weather = await getWeather(cityDetails.Key)
    return { cityDetails, weather }
  }