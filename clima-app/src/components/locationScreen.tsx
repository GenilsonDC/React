// src/components/LocationScreen.tsx
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getCityWeather, getMessage, getWeatherIcon } from '../services/weatherModel';

const LocationScreen: React.FC = () => {
  const router = useRouter();
  const [weatherData, setWeatherData] = useState<any>(null);
  const [temperature, setTemperature] = useState<number | null>(null);
  const [weatherIcon, setWeatherIcon] = useState<string>('');
  const [cityName, setCityName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [weatherMessage, setWeatherMessage] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    if (router.query.weatherData) {
      const data = JSON.parse(router.query.weatherData as string);
      updateUI(data);
    }
  }, [router.query.weatherData]);

  const updateUI = (data: any) => {
    if (!data || data.cod !== 200) {
      setTemperature(0);
      setWeatherIcon('/assets/images/404.png');
      setWeatherMessage('Check your writing');
      setCityName('');
      setDescription('');
      return;
    }
    const temp = data.main.temp;
    setTemperature(temp);
    const condition = data.weather[0].id;
    setWeatherIcon(getWeatherIcon(condition));
    setWeatherMessage(getMessage(temp));
    setCityName(data.name);
    setDescription(data.weather[0].description);
  };

  const handleCitySearch = async () => {
    if (inputValue.trim() === '') return; // Não fazer a busca se o input estiver vazio

    const data = await getCityWeather(inputValue);
    updateUI(data);
  };

  return (
    <div className='fullPage'>
      <div className='container'>
        <button className='getCurrentPositionButton' onClick={() => router.push('/')}>My location</button>      
        <div className='cityContainer'>
          <h1 className='cityName'>{cityName}</h1>
          <div className='iconContainer'>
          {weatherIcon && (
            <Image src={weatherIcon} alt="Weather Icon" width={150} height={150} />
          )}
        </div>
          <div className='tempContainer'>
            <div className='tempNumber'>
              <p className='tempDisplay'>{temperature?.toFixed(0)}</p>
            </div>
            <div className='celcius'>
              <p className='celciusP'>°C</p>
            </div>
          </div>
          <p className='description'>{description}</p>
        </div>
        <div className='inputContainer'>
          <input
            className='inputCityName'
            type="text"
            placeholder="Enter city name"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleCitySearch();
              }
            }}
          />
          <button
            className='getWeatherButton'
            onClick={handleCitySearch}
          >
            Get Weather
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default LocationScreen;
