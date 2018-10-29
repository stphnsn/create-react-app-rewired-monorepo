/* eslint-disable global-require */
const path = require('path');

const relative = path.join.bind(path, __dirname);
const CI = !!process.env.CI;

const baseConfig = {
  verbose: true,
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
  testMatch: [
    '<rootDir>/**/*.(spec|test).js?(x)',
  ],


  // Code Coverage
  collectCoverage: true,
  coverageDirectory: 'reports/coverage',
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
  ],
  coverageReporters: [
    'text-summary',
    CI && 'cobertura',
    CI && 'lcov',
  ].filter(Boolean),


  // Transforms
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.css$': relative('transforms/cssTransform'),
    '^(?!.*\\.(js|jsx|css|json)$)': relative('transforms/fileTransform'),
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$',
  ],


  // Module resolver voodoo
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
  },
  moduleFileExtensions: [
    'web.js',
    'js',
    'json',
    'web.jsx',
    'jsx',
    'node',
  ],

};


if (CI) {
  baseConfig.testResultsProcessor = 'jest-junit';
}


module.exports = function jestConfig(overrides) {
  if (!process.env.TEST_REPORT_PATH) { process.env.TEST_REPORT_PATH = './reports'; }
  if (!process.env.TEST_REPORT_FILENAME) { process.env.TEST_REPORT_FILENAME = 'test-report.xml'; }

  process.env.JEST_JUNIT_OUTPUT = './reports/test-report.xml';
  const override = overrides === undefined ? {} : overrides;

  return Object.assign({}, baseConfig, override);
};
