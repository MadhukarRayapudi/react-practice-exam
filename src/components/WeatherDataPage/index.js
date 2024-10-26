import {Component} from 'react'

import WeatherDetailsContainer from '../WeatherDetailsContainer'

import './index.css'

class WeatherDataPage extends Component {
  state = {searchBoxInput: '', cityWeatherData: [], lat: '', lon: ''}

  getLatAndLonDetails = async () => {
    const url =
      'http://api.openweathermap.org/geo/1.0/direct?q=hyderabad&limit=5&appid=7a0b59c0063402d9ca454bd7b589c10b'

    // const Method = 'GET'
    const response = await fetch({Method: 'GET', url})
    // getting error while parsing the response
    const parsedData = await response.json()
    console.log(parsedData)

    this.setState({lat: parsedData.lat, lon: parsedData.lon})

    this.getCityForeCastDetails()
  }

  getCityForeCastDetails = async () => {
    const {lat, lon} = this.state
    const url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=7a0b59c0063402d9ca454bd7b589c10b`

    const cityForeCastDetails = fetch({Method: 'GET', url})
    this.setState({cityWeatherData: cityForeCastDetails})
  }

  onChangeSearchBoxValue = event => {
    this.setState({searchBoxInput: event.target.value})
  }

  render() {
    const {cityWeatherData} = this.state
    return (
      <>
        <nav className="navbar">
          <input
            type="search"
            className="search-box"
            placeholder="search for city"
            onChange={this.onChangeSearchBoxValue}
          />
          <button className="search-btn" onClick={this.getLatAndLonDetails}>
            Search
          </button>
        </nav>
        {cityWeatherData.map(eachItem => (
          <WeatherDetailsContainer data={eachItem} />
        ))}
      </>
    )
  }
}

export default WeatherDataPage
