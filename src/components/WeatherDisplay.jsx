const WeatherDisplay = ({ weather }) => {
  return weather ? (
    <div>
      <h2>Temperature: {weather.main?.temp}°C</h2>
      <p>Weather Condition: {weather.weather?.[0]?.description}</p>
    </div>
  ) : (
    <p>Click on the map to get weather data.</p>
  );
};

export default WeatherDisplay;
