module.exports = {
  roots: ['<rootDir>'],
  modulePaths: ['<rootDir>'],
  collectCoverage: true,
  // on node 14.x coverage provider v8 offers good speed and more or less good report
  coverageProvider: 'v8',
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/*.stories.tsx',
    '!**/*.props.ts',
    '!**/node_modules/**',
    '!<rootDir>/out/**',
    '!<rootDir>/.next/**',
    '!<rootDir>/*.config.js',
    '!<rootDir>/coverage/**',
    '!<rootDir>/types/**',
    '!<rootDir>/constants/**',
    '!<rootDir>/utils/sitemap/**',
    '!<rootDir>/pages/sitemap.xml.tsx',
    '!<rootDir>/pages/_documents.tsx',
    '!<rootDir>/pages/api/**',
    '!**/*fileSystem.ts',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.css$': '<rootDir>/__mocks__/styleMock.js',
    '@pages/(.*)': '<rootDir>/pages/$1',
    '^@components/(.*)$': '<rootDir>/components/$1',
    '^@constants/(.*)$': '<rootDir>/constants/$1',
    '^@layouts/(.*)$': '<rootDir>/layouts/$1',
    '^@services/(.*)$': '<rootDir>/services/$1',
    '^@themes/(.*)$': '<rootDir>/themes/$1',
    '^@utils/(.*)$': '<rootDir>/utils/$1',
    '^@self-types/(.*)$': '<rootDir>/types/$1',
    '^@themes$': '<rootDir>/themes',
    '^@hooks/(.*)$': '<rootDir>/hooks/$1',
    '^@contexts/(.*)$': '<rootDir>/contexts/$1',
  },
  // Add more setup options before each test is run
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
}
