import React, { useState } from "react";
import axios from "axios";


export default function SearchEngine() {
  const [city, setCity] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `25fad9f7e87157d33dde0f82ab269ee8`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayWeather);
  }

  function showCity(event) {
    console.log(event.target.value);
    setCity(event.target.value);
  }

  function displayWeather(response) {
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(Math.round(response.data.main.humidity));
    setWind(Math.round(response.data.wind.speed));
    setIcon(
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  if (temperature) {
    return (
      <div className="Weather">
        <form  className="Search" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter the city"
            onChange={showCity}
          />
          <input type="submit" />
        </form>
        <ul>
        <li className="Description">{description}</li>
          <li className="Icon">
            <img src={icon} alt="icon" />
          </li>
          <li className="Temperature">{temperature}°C | F</li>
          <li className="Humidity">Humidity: {humidity}%</li>
          <li className="Windspeed">Wind Speed: {wind} m/s</li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter the city"
            onChange={showCity}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
