import { useEffect, useState } from 'react'
import './App.scss';

function App() {

  const [weatherInfo, setWeatherInfo] = useState({})
  const [location, setLocation] = useState('Paris');
  const [city, setCity] = useState('')

  const params = {
    key: 'f9730ba779d040cb9e1101007210703',
    location,
    day: 3
  }

  useEffect(() => {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${params.key}&q=${params.location}&days=${params.day}&aqi=yes&alerts=no`)
      .then(response => response.json()).then(data => setWeatherInfo(data))
  }, [location])

  return (
    <div className="weather-wrapper">
      <input
        onKeyDown={(event) => event.keyCode === 13 ? setLocation(city) : null}
        onChange={(event) => setCity(event.target.value)}
        onBlur={() => setLocation(city)}
      />
      <div className="weather-card">
        {weatherInfo.current && (
          <>
            <p>{weatherInfo.location.name}</p>
            <h2>{weatherInfo.forecast.forecastday[0].day.avgtemp_c} <img  src={weatherInfo.forecast.forecastday[0].day.condition.icon}/></h2>
            <h2>{weatherInfo.forecast.forecastday[1].day.avgtemp_c} <img  src={weatherInfo.forecast.forecastday[0].day.condition.icon}/></h2>
            <h2>{weatherInfo.forecast.forecastday[2].day.avgtemp_c} <img  src={weatherInfo.forecast.forecastday[0].day.condition.icon}/></h2>
          </>
        )}
      </div>
    </div>
  );
}

export default App;