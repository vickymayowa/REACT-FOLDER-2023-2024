import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [userInput, setUserInput] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const gen = async () => {
    const apiKey = '8f9442cc962b60a665deb4d7dfa99529';
    const endPoint = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(endPoint);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    gen();
  }, [userInput]);

  return (
    <>
      <div className="container text-center fw-lighter fluid d-sm-block d-lg-block">
        <div className="section1 col-lg-6 col-sm-12 mx-auto">
          <h4 className="fw-lighter text-white mt-5">Weather App</h4>
          <div className="container-fluid ms-1 w-100 mt-3">
            <input
              type="text"
              placeholder="Search Your location here"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="form-control"
            />
          </div>
        </div>
        {weatherData && (
          <section className="semi-text" style={{ fontSize: '35px' }}>
            <h3 className="text-white fw-lighter" style={{ fontSize: 'sans-serif', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>{weatherData.main.temp}°C</h3>
            <h6 className="fw-lighter text-white" style={{ fontSize: '30px' }}>{weatherData.name}, {weatherData.sys.country}</h6>
            <span>{weatherData.weather[0].main}</span>
          </section>
        )}
        <div className="section2">
          <div className="weather-details mt-4 fw-lighter text-white" style={{ fontSize: '35px', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif' }}>
            Weather Details
          </div>
          <div className="text-area fw-lighter rounded-3" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif' }}>
            <ul style={{ listStyle: 'none', fontSize: '35px' }}>
              <li className="text-start">Description<span className="float-end ms-2">{weatherData.weather[0].main}</span></li>
              <li className="text-start">Location<span className="float-end">{weatherData.name}</span></li>
              <li className="text-start">Humidity<span className="float-end">{weatherData.main.humidity}%</span></li>
              <li className="text-start">Wind<span className="float-end">{weatherData.wind.speed}m/s</span></li>
            </ul>
            <hr />
          </div>
          <div className="text-area fw-lighter rounded-3" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif' }}>
            <ul style={{ listStyle: 'none', fontSize: '35px' }}>
              <li className="text-start">Min<span className="float-end">{weatherData.main.temp_min}°C</span></li>
              <li className="text-start">Max<span className="float-end">{weatherData.main.temp_max}°C</span></li>
              <li className="text-start">Feels<span className="float-end">{weatherData.main.feels_like}°C</span></li>
              <li className="text-start">Pressure<span className="float-end">{weatherData.main.pressure}hPa</span></li>
            </ul>
          </div>
        </div>
      </div>
      <section className="profile-tags" style={{ color: 'black' }}>
        <footer className="float-end me-3 fw-lighter text-center" style={{ marginTop: '100px', fontFamily: 'Gill Sans, Calibri, Trebuchet MS, sans-serif' }}>
          Designed by <a href="https://www.linkedin.com/in/adebanjo-favour-217b1a251/" className="text-dark">VickyWebDeveloper</a>
        </footer>
      </section>
    </>
  );
};

export default Weather;
