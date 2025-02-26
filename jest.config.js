module.exports = {
  preset: 'react-native',
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/jest/setup.ts'],
  testMatch: ['**/__tests__/**/*.test.tsx', '**/*.test.tsx'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  globals: {
    window: {},
  },
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  setupFiles: ['./jest/setup.ts'],
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text'],
};
