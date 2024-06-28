// src/components/LoadingScreen.tsx
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { getCurrentLocation } from '../services/location';
import { getLocationWeather } from '../services/weatherModel';

const LoadingScreen: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      try {
        const { latitude, longitude } = await getCurrentLocation();
        const weatherData = await getLocationWeather(latitude, longitude);
        router.push({
          pathname: '/location',
          query: { weatherData: JSON.stringify(weatherData) },
        });
      } catch (error) {
        console.error('Error fetching location or weather data', error);
      }
    }

    fetchData();
  }, [router]);

  return <div>Loading...</div>;
};

export default LoadingScreen;
