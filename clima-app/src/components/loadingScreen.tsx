import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { getWeatherByCoords } from '../services/climaModel';
import { getCurrentLocation } from '../services/location';

const LoadingScreen: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { lat, lon } = await getCurrentLocation();
        const weatherData = await getWeatherByCoords(lat, lon);
        router.push({
          pathname: '/location',
          query: { data: JSON.stringify(weatherData) },
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [router]);

  return <div>Loading...</div>;
};

export default LoadingScreen;
