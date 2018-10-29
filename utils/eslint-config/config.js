module.exports = {
  parser: 'babel-eslint',
  rules: {
    semi: ['error', 'always']
  },
  plugins: [
    'babel',
  ],
  globals: {
    document: true,
    console: true,
    window: true,
    fetch: true,
    jest: true,
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
