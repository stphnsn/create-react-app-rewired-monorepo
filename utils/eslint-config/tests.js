module.exports = {
  extends: './config.js',
  rules: {
    'no-underscore-dangle': 'off',
    'import/first': 'off',
  },
  globals: {
    jest: true,
    console: true,
    expect: true,
    it: true,
    xit: true,
    describe: true,
    xdescribe: true,
    afterEach: true,
    beforeEach: true,
    beforeAll: true,
    afterAll: true,
  },
};

