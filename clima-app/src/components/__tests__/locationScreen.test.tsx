import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { NextRouter } from 'next/router';
import LocationScreen from '../locationScreen';


jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {},
    push: jest.fn(),
    route: '/',
    pathname: '/',
    asPath: '/',
    basePath: '',
    isLocaleDomain: false,
  } as unknown as NextRouter), // Cast para NextRouter para evitar erros de tipo
}));

jest.mock('../../services/weatherModel.ts', () => ({
  getCityWeather: jest.fn(),
  getWeatherIcon: jest.fn(),
  getMessage: jest.fn(),
}));

const mockGetCityWeather = require('../../services/weatherModel.ts').getCityWeather;
const mockGetWeatherIcon = require('../../services/weatherModel.ts').getWeatherIcon;
const mockGetMessage = require('../../services/weatherModel.ts').getMessage;

describe('LocationScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Limpa todos os mocks entre os testes
  });

  it('should render input and buttons correctly', () => {
    render(<LocationScreen />);

    expect(screen.getByPlaceholderText('Enter city name')).toBeInTheDocument();
    expect(screen.getByText('Get Weather')).toBeInTheDocument();
    expect(screen.getByText('My location')).toBeInTheDocument();
  });

  it('should call getCityWeather when search button is clicked', async () => {
    mockGetCityWeather.mockResolvedValueOnce({
      cod: 200,
      main: { temp: 20 },
      weather: [{ id: 800, description: 'clear sky' }],
      name: 'Test City',
    });
    mockGetWeatherIcon.mockReturnValue('/assets/images/Clear.png');
    mockGetMessage.mockReturnValue('Today is nice');

    render(<LocationScreen />);

    const input = screen.getByPlaceholderText('Enter city name');
    fireEvent.change(input, { target: { value: 'Test City' } });
    fireEvent.click(screen.getByText('Get Weather'));

    expect(mockGetCityWeather).toHaveBeenCalledWith('Test City');
    expect(await screen.findByText('20')).toBeInTheDocument();
    expect(screen.getByText('clear sky')).toBeInTheDocument();
    expect(screen.getByText('Today is nice')).toBeInTheDocument();
  });

  it('should not call getCityWeather if input is empty', () => {
    render(<LocationScreen />);

    fireEvent.click(screen.getByText('Get Weather'));

    expect(mockGetCityWeather).not.toHaveBeenCalled();
  });
});
