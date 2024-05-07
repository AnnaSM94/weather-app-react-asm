import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
