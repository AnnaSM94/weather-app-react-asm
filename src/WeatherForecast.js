import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "50fa4024e3b1d5eac2f51ab18a47e997";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="weather-forecast-date">Thu</div>
          <WeatherIcon className="weather-forecast-icon" code="01d" size={40} />
          <div className="weather-forecast-temperatures">
            <span className="weather-forecast-temperature-max">19°</span>
            <span className="weather-forecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
