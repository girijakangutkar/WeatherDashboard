import { useState, useEffect } from "react";

const WeatherFetch = ({ coords }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (coords.lat && coords.lng) {
      fetchWeather();
    }
  }, [coords]);

  const ApiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lng}&appid=${ApiKey}&units=metric`
      );

      if (!response.ok) {
        throw new Error("Weather data not found");
      }

      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError("Failed to fetch weather data");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading weather data...</p>;
  if (error) return <p>Error: {error}</p>;

  return weather ? (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h2>Weather Information</h2>
      <h3>City: {weather.name}</h3>
      <p>Country: {weather.sys?.country}</p>
      <p>Temperature: {Math.round(weather.main.temp)}°C</p>
      <p>Feels like: {Math.round(weather.main.feels_like)}°C</p>
      <p>
        Min: {Math.round(weather.main.temp_min)}°C, Max:{" "}
        {Math.round(weather.main.temp_max)}°C
      </p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Pressure: {weather.main.pressure} hPa</p>
      <p>
        Weather: {weather.weather?.[0].main} -{" "}
        {weather.weather?.[0].description}
      </p>
      <p>Wind Speed: {weather.wind?.speed} m/s</p>
      {weather.weather?.[0].icon && (
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        />
      )}
    </div>
  ) : (
    <p>Click on the map to get weather data for that location.</p>
  );
};

export default WeatherFetch;
