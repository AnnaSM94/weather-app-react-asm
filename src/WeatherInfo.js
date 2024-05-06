import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="current-weather">
      <div>
        <h1 className="current-city">{props.data.city}</h1>
        <p className="current-details">
          <FormattedDate date={props.data.date} />
          <span className="text-capitalize">{props.data.description}</span>
          <br />
          Humidity: <strong>{props.data.humidity}%</strong>, Wind:
          <strong> {props.data.wind} km/h</strong>
        </p>
      </div>
      <div className="current-temperature">
        <div className="current-temperature-icon">
          <WeatherIcon code={props.data.iconUrl} />
        </div>
        <span className="current-temperature-value">
          {props.data.temperature}
        </span>
        <span className="current-temperature-unit">°C</span>
      </div>
    </div>
  );
}
