export default class UnknownPropValueError extends Error {
  name = 'UnknownPropValueError'

  constructor (name: string, value?: any) {
    super(`Unknown component ${name}: ${value}`)
  }
}
