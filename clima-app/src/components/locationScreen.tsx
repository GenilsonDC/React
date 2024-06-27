import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getWeatherByCity } from '../services/climaModel';

const LocationScreen: React.FC = () => {
  const router = useRouter();
  const [weatherData, setWeatherData] = useState<any>(null);
  const [city, setCity] = useState<string>('');

  useEffect(() => {
    if (router.query.data) {
      setWeatherData(JSON.parse(router.query.data as string));
    }
  }, [router.query.data]);

  const handleCitySearch = async () => {
    try {
      const data = await getWeatherByCity(city);
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <h1>{weatherData.name}</h1>
        <p>{weatherData.main.temp}°C</p>
        <p>{weatherData.weather[0].description}</p>
      </div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={handleCitySearch}>Get weather</button>
    </div>
  );
};

export default LocationScreen;
