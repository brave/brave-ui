# Brave UI

> List of reusable React components written in TypeScript to enhance your brave UI

```
THIS IS EXPERIMENTAL TECHNOLOGY, WHICH MEANS THAT API CAN BE CHANGED AT ANY TIME.
FOLLOW THE STABILITY INDEX LINK BELOW FOR FURTHER INFORMATION.
```

## Available components

To check current progress of each component please refer to [Components Stability Index](https://github.com/brave/brave-ui/wiki/Components-Stability-Index). For a live demo and API overview access https://brave.github.io/brave-ui


## Installation

```
# If you prefer using yarn: yarn add brave-ui
npm i --save brave-ui
```

## Sample Usage

```jsx
const { BrowserButton } = require('brave-ui')

// alternatively you can pass
// const BrowserButton = require('brave-ui/browserButton')

// ES6 imports also work
// import BrowserButton from 'brave-ui/browserButton'

//...

render () {
  return (
    <BrowserButton theme='secondary' onClick={this.doSomething}>
      Click me
    </BrowserButton>
  )
}

```

Don't forget to go to https://brave.github.io/brave-ui for more examples and API demonstration.

## Contributing

Please refer to https://github.com/brave/brave-ui for contributing documentation.


## License

`brave-ui` is licensed under the [MPL-2.0](https://www.mozilla.org/en-US/MPL/2.0/).
