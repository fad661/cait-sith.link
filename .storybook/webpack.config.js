const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [
        [
          "@babel/preset-react",
          {
            "runtime": "automatic",
            "importSource": "@emotion/react"
          }
        ]
      ],
    },
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};