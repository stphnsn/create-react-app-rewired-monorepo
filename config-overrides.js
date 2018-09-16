const fs = require('fs');
const path = require('path');
const { compose } = require('react-app-rewired');
const rewireBabelLoader = require('react-app-rewire-babel-loader');
const rewireYarnWorkspaces = require('react-app-rewire-yarn-workspaces');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

console.log('Shared config-overrides');

module.exports = function override(config, env) {
  const rewires = compose(
    rewireYarnWorkspaces
  );
  config = rewireBabelLoader.include(
    config,
    resolveApp('shared')
  );
  return rewires(config, env);
};
