import axios from 'axios';

const apiKey = 'fcd6d71598a09bf97ac04d15dc4e4c85';
const openWeatherMapURL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeatherByCity = async (city: string) => {
  const response = await axios.get(
    `${openWeatherMapURL}?q=${city}&appid=${apiKey}&units=metric`
  );
  return response.data;
};

export const getWeatherByCoords = async (lat: number, lon: number) => {
  const response = await axios.get(
    `${openWeatherMapURL}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
  );
  return response.data;
};
