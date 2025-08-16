module.exports = {
  // Test environment for React components
  testEnvironment: 'jsdom',

  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  
  // Module path aliases (matches your tsconfig.json)
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Maps @/ alias from tsconfig
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js'
  },
  
  // Transform settings
transform: {
  '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', {
    presets: [
      ['@babel/preset-react', { runtime: 'automatic' }]
    ]
  }]
},
  
  // Test match patterns
  testMatch: [
    '**/__tests__/**/*.test.(ts|tsx|js|jsx)',
    '**/?(*.)+(spec|test).(ts|tsx|js|jsx)'
  ],
  
  // Coverage settings
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/index.tsx',
    '!src/setupTests.ts'
  ],
  
  // Ignore patterns
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.docusaurus/',
    '/build/'
  ]
};