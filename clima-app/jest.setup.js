// jest.setup.js

import '@testing-library/jest-dom/extend-expect';
import 'jest-fetch-mock';

// Define o fetch globalmente como uma função de mock do jest-fetch-mock
global.fetch = require('jest-fetch-mock');

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {},
    push: jest.fn(),
    route: '/',
    pathname: '/',
    asPath: '/',
    basePath: '',
    isLocaleDomain: false,
  }),
}));

// Mocks para o weatherModel
jest.mock('../../services/weatherModel', () => ({
  getCityWeather: jest.fn(),
  getWeatherIcon: jest.fn(),
  getMessage: jest.fn(),
}));

// Configurações globais para testes
beforeEach(() => {
  // Limpa todos os mocks antes de cada teste
  jest.clearAllMocks();
});

// Outras configurações adicionais (se necessário)
// ...
