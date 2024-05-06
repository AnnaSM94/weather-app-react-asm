import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function changeCity(event) {
    setCity(event.target.value);
  }

  function handleWeather(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/rain_light.png",
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    let apiKey = "1fd8093fa5ff12d796d7de756cc9d6b9";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleWeather);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <header>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a city..."
              required
              className="search-input"
              onChange={changeCity}
            />
            <input type="submit" value="Search" className="search-button" />
          </form>
        </header>
        <div className="current-weather">
          <div>
            <h1 className="current-city">{weatherData.city}</h1>
            <p className="current-details">
              <FormattedDate date={weatherData.date} />
              <span className="text-capitalize">{weatherData.description}</span>
              <br />
              Humidity: <strong>{weatherData.humidity}%</strong>, Wind:
              <strong> {weatherData.wind} km/h</strong>
            </p>
          </div>
          <div className="current-temperature">
            <div>
              <img
                className="current-temperature-icon"
                src={weatherData.iconUrl}
                alt={weatherData.description}
              />
            </div>
            <span className="current-temperature-value">
              {weatherData.temperature}
            </span>
            <span className="current-temperature-unit">°C</span>
          </div>
        </div>
        <div className="weather-forecast"></div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
