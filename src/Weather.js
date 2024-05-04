import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let [city, setCity] = useState("");

  function changeCity(event) {
    setCity(event.target.value);
  }
  function handleWeather(event) {
    event.preventDefault();

    let apiKey = "1fd8093fa5ff12d796d7de756cc9d6b9";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(console.log(apiUrl));
  }

  return (
    <div className="Weather">
      <div className="weather-app">
        <header>
          <form onSubmit={handleWeather}>
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
        <main>
          <div className="current-weather">
            <div>
              <h1 className="current-city">Leeds</h1>
              <p className="current-details">
                <span>Friday 21:00,</span> <span>light rain</span>
                <br />
                Humidity: <strong>80%</strong>, Wind:
                <strong>5 mph</strong>
              </p>
            </div>
            <div className="current-temperature">
              <div>
                {" "}
                <img
                  className="current-temperature-icon"
                  src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
                  alt="temperature icon"
                />
              </div>
              <span className="current-temperature-value">6</span>
              <span className="current-temperature-unit">°C</span>
            </div>
          </div>
          <div className="weather-forecast"></div>
        </main>
        <footer>
          <p>
            This project was coded by{" "}
            <a
              href="https://github.com/AnnaSM94"
              target="_blank"
              rel="noreferrer"
            >
              Anna Serra
            </a>
            , code is open-sourced on{" "}
            <a
              href="https://github.com/AnnaSM94/weather-app-react-asm"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://weather-app-react-asm.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
