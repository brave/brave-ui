const path = require('path')

const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default

function getStyledComponentDisplay(filename, bindingName) {
  return bindingName
}

// Export a function. Accept the base config as the only param.
module.exports = (baseConfig, env, defaultConfig) => {
  // Make whatever fine-grained changes you need
  defaultConfig.module.rules.push({
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

  defaultConfig.module.rules.push({
    test: /\.svg$/,
    use: [
      {
        loader: 'file-loader',
        options: {}
      }
    ]
  })

  defaultConfig.resolve.extensions.push('.ts', '.tsx')
  return defaultConfig
}
