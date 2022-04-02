import React, { useState } from "react";
import "./App.css";
import "./index.css";

const api = {
  key: "f5b33c600bb143a21744e815144c762c",
  baseUrl: "https://api.openweathermap.org/data/2.5/weather?q=",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.baseUrl}${query}&units=metric&appid=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
        });
      {
        console.log(new Date().getHours());
      }
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let days = ["sun", "mon", "tues", "wed", "thrus", "fri", "sat"];

    let day = days[d.getDay()];
    let month = months[d.getMonth()];
    let date = d.getDate();
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className="app">
      <main>
        {/* search */}
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="search ..."
            onChange={(event) => setQuery(event.target.value)}
            value={query}
            onKeyPress={search}
          ></input>
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            {/* location */}
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            {/* weather */}
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°C</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;

//f5b33c600bb143a21744e815144c762c
//https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=f5b33c600bb143a21744e815144c762c
