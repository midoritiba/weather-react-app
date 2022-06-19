const Card = ({weatherDetails, cityDetails}) => {
  return (
    <div className="card">

    <img src={weatherDetails.IsDayTime ? require('../images/day.png') : require('../images/night.png') } alt='' className='time'/>
    {/* <div className="icon">
      <img src={require('./images/icons/1.png')} alt="" /> 
    </div>  */}
    <div className="details">
    <h2>{cityDetails.EnglishName}</h2>
    <div className="detail">
        <p>{weatherDetails.WeatherText}</p>
        <span>{weatherDetails.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
    </div>
  </div>
  )
}

export default Card