module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Arquivo de setup do Jest
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mapeamento para arquivos CSS
    '^@/(.*)$': '<rootDir>/src/$1', // Mapeamento para imports de arquivos '@/' (se aplicável)
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'], // Extensões dos arquivos de teste
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // Transformação usando Babel para suporte a TypeScript e JSX
  },
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.(spec|test).(js|jsx|ts|tsx)', // Padrão de localização dos testes
  ],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json', // Arquivo de configuração do TypeScript
    },
  },
};
