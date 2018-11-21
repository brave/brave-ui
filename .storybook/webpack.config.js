const path = require('path')

const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default

function getStyledComponentDisplay(filename, bindingName) {
  return bindingName
}

// Export a function. Accept the base config as the only param.
module.exports = (baseConfig, env, defaultConfig) => {
  // Make whatever fine-grained changes you need
  // defaultConfig can be seen here:
  // https://github.com/storybooks/storybook/blob/master/lib/core/src/server/config/webpack.config.default.js
  // Put typescript loader just after babel, so that we get file-loader running first,
  // then typescript, then babel. Probably doesn't do anything though.
  defaultConfig.module.rules.splice(1, 0, {
    test: /\.(ts|tsx)$/,
    loader: require.resolve('awesome-typescript-loader'),
    options: {
      configFileName: path.resolve(__dirname, 'tsconfig.json'),
      getCustomTransformers: () => ({
        before: [
            createStyledComponentsTransformer({
              options: {
                getDisplayName: getStyledComponentDisplay
              }
            })
        ]
      })
    }
  })

  defaultConfig.resolve.extensions.push('.ts', '.tsx')
  return defaultConfig
}
