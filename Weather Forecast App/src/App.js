import React, { useState } from 'react';
import { fetchWeather } from './api';

function App() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);

    const getWeather = async () => {
        const data = await fetchWeather(city);
        setWeather(data);
    };

    return (
        <div>
            <h1>Weather Forecast</h1>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city"
            />
            <button onClick={getWeather}>Get Weather</button>
            {weather && (
                <div>
                    <h2>{weather.name}</h2>
                    <p>{weather.weather[0].description}</p>
                    <p>{Math.round(weather.main.temp - 273.15)}°C</p>
                </div>
            )}
        </div>
    );
}

export default App;

