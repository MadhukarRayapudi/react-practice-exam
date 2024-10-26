import './index.css'

import {WiCloudy} from 'react-icons/wi'
import {IoMdSunny, IoMdRainy} from 'react-icons/io'
// import {IoMdRainy} from 'react-icons/io'

const WeatherDetailsContainer = props => {
  const {data} = props
  const {cityName, temperature, humidity, weatherCondition} = data

  const renderWeatherConditionImage = () => {
    let weatherIcon = null
    if (weatherCondition === 'cloudy') {
      weatherIcon = <WiCloudy />
    } else if (weatherCondition === 'sunny') {
      weatherIcon = <IoMdSunny />
    } else {
      weatherIcon = <IoMdRainy />
    }

    return weatherIcon
  }
  return (
    <ul className="forecast-for-five-days-ul">
      <li className="weather-details-container">
        <h1 className="city-name-heading"> {cityName} </h1>
        <p className="details"> Temperature: {temperature}</p>
        <p className="details"> Humidity: {humidity}</p>
        {renderWeatherConditionImage}
        <p className="details"> Weather Condition: {weatherCondition}</p>
      </li>
    </ul>
  )
}

export default WeatherDetailsContainer
