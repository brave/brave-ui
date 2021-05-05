export default class NullThemeProviderError extends Error {
  name = 'NullThemeProviderError'

  constructor () {
    super('Theme is not defined, add <ThemeProvider /> to component tree')
  }
}
