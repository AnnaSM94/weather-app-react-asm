import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleWeather(response) {
    alert(`The temp is ${Math.round(response.data.main.temp)}°C`);
  }

  let apiKey = "1fd8093fa5ff12d796d7de756cc9d6b9";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleWeather);

  return <h2>Hi from React</h2>;
}
