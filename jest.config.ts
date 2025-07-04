import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^flowbite-react$': '<rootDir>/__mocks__/flowbite-react.ts',
  },
}

module.exports = createJestConfig(customJestConfig)
