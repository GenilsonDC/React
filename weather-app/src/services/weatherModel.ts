import axios from 'axios';

const apiKey = 'fcd6d71598a09bf97ac04d15dc4e4c85';
const openWeatherMapURL = 'https://api.openweathermap.org/data/2.5/weather';

export const getCityWeather = async (cityName: string) => {
  const response = await axios.get(openWeatherMapURL, {
    params: {
      q: cityName,
      appid: apiKey,
      units: 'metric',
    },
  });
  return response.data;
};

export const getWeatherIcon = (condition: number) => {
  if (condition < 300) {
    return '/assets/images/Thunderstorm.png';
  } else if (condition < 400) {
    return '/assets/images/Rain.png';
  } else if (condition < 600) {
    return '/assets/images/LightRain.png';
  } else if (condition < 700) {
    return '/assets/images/Snow.png';
  } else if (condition < 800) {
    return '/assets/images/Clouds.png';
  } else if (condition === 800) {
    return '/assets/images/Clear.png';
  } else {
    return '/assets/images/Clouds.png';
  }
};

export const getMessage = (temp: number) => {
  if (temp > 29) {
    return "Today we have 🍦 \nBecause it's hot";
  } else if (temp > 25) {
    return 'Today you can wear 🩳 and a 👕 \nBecause the weather is nice';
  } else if (temp < 17) {
    return "It's chilly ❄️ \nyou'll need 🧣 and 🧤";
  } else {
    return 'Better take a 🧥, just in case \nBecause the weather is strange';
  }
};
