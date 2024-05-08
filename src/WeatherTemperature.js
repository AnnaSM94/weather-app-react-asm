import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="current-temperature-change">
      <span className="current-temperature-value">{props.celsius}</span>
      <span className="current-temperature-unit">°C</span>
    </div>
  );
}
