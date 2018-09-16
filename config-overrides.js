const fs = require('fs');
const path = require('path');
const { compose } = require('react-app-rewired');
const rewireBabelLoader = require('react-app-rewire-babel-loader');
const rewireYarnWorkspaces = require('react-app-rewire-yarn-workspaces');
const rewireEslint = require('react-app-rewire-eslint');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

console.log('Shared config-overrides');

module.exports = function override(config, env) {
  const rewires = compose(
    rewireYarnWorkspaces,
    rewireEslint,
  );
  const newConfig = rewireBabelLoader.include(
    config,
    resolveApp('shared'),
  );
  return rewires(newConfig, env);
};
