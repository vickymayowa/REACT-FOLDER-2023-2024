import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios

function WeatherApp() {
  const [userInput, setUserInput] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const addCity = async () => {
      const apiKey = "8f9442cc962b60a665deb4d7dfa99529";
      const endPoint = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${apiKey}&units=metric`;

      try {
        const response = await axios.get(endPoint); // Use Axios to make the GET request
        const data = response.data;
        setWeatherData(data);
        console.log(data);
      } catch (error) {
        console.error(`Try again ${error.message}`);
      }
    };

    if (userInput) {
      addCity();
    }
  }, [userInput]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a city"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      {weatherData && (
        <div>
          <h2 className="text-2xl font-semibold mb-2">Weather Data</h2>
          <div className="border p-2 rounded-md">
            <p>City: {weatherData.name}</p>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Weather: {weatherData.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
