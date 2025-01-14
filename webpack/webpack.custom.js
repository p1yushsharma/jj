const ESLintPlugin = require('eslint-webpack-plugin');

// ... (rest of the code)

module.exports = async (config, options, targetOptions) => {
  const languagesHash = await hashElement(path.resolve(__dirname, '../src/main/webapp/i18n'), {
    algo: 'md5',
    encoding: 'hex',
    files: { include: ['*.json'] },
  });

  // Conditionally add ESLintPlugin based on an environment variable or flag
  if (config.mode === 'development' && process.env.USE_ESLINT !== 'false') {
    config.plugins.push(
      new ESLintPlugin({
        configType: 'flat',
        extensions: ['ts', 'js', 'html'],
      }),
    );
  }

  // Rest of your existing configuration...
  // ...
};
