# Creating components & Architecture Overview

<hr>

# DEPRECATED. NEEDS REMAKE AFTER NEW ARCHITECTURE.

<hr>

## Architecture Overview

This repo relies on `lerna` for multiple package management, `nsp` for security checking, `storybook` for the style guide and general `webpack` config, and `jest` + `aphrodite` for testing. Also, uses `prettier` and `standard` for the lint style.

### Undestanding our component architecture

We have two packages (two package.json files). One is just for dependency support, which makes the style guide possible. This is the top-level `package.json` file.

The other package is the `brave-ui` package. Unless you're adding new packages for your component, you shouldn't edit this file. The reason of having two packages is because we don't want unnecessary code inside our client's (the app that's going to require this) source.

The build package is split too. It means that one component only requires its dependencies. This makes the package faster with a technique called "tree-shaking", who allow us to require only what's needed for our client's need.

### Anatomy of a component

Our components currently live inside of the `brave-ui` repo. In there you have the `src/` and `dist/` folders. You should work on the `src/` folder. Later we'll see how to transpile to `dist/` in a way that the receptor finds readable.

Our components are stateless on purpose. They do not share any state info nor have lifecycle methods. These should be made by the consumer app. For most cases, you will rely only on `React` and `Aphrodite` as dependencies. A basic example of a component is:

```js
import * as React from 'react'

// always use no-important
import {StyleSheet, css} from 'aphrodite/no-important'

// our theme file. Which could be better
// but let's just keep this way for now
import theme from './theme'

const greatComponent = props => {
  // css variables allow props to be passed down to styles
  const theming = {}
  // defined in theme.js file
  theming['--bg'] = theme.greatComponent.default.bg
  return (
    <div className={css(styles.someGreatClass)}>
      {
        /* notice that there's no "this" */
        props.somethingGreat
          ? 'something great'
          : 'another something even greatest'
      }
    </div>
  )

  styles = StyleSheet.create({
    someGreatClass: {
      background: `var(--primary-bg>)`
    }
  })
```


## Creating Components

Creating components is fun, but can be daunting if you miss some step and need to refactor. This guide will help you to make it as shining as you.

TL;DR of the steps needed to a reusable component:

1. Define the spec
2. Install third-party dependencies (if any)
3. Prepare the export of your component
4. Test your component in the application that will consume it
5. Write tests for your component
6. Write a story to make your component visually public and ready for visual testing
7. Publish your component

### Let's define the component spec

Before getting started, you need to define your component spec. Below some key questions, you should elaborate an answer before start working on it. This saves you time and makes it easier to implement.

Type down:

* What the component does?
* How the actual (if any) implementation work?
* How the component should work?
* How the component should look?

Answering these questions will also help you write your component tests.


### Installing third-party dependencies

Dependencies you'd like to use in the Brave UI itself (not the style guide) should be first installed with `npm i --save-dev <dep>` in the root directory. This will save the dependency inside the global package (used by the style guide) as a dev dependency. Once you require it in your component and finish your work, you should link the dependency to the Brave UI package, which is accomplished by:

```
npm run bootstrap
```

This calls `lerna bootstrap` and includes the proper dependency inside the Brave UI package as a dependency, otherwise it will be missed and throw an error when the `require()` for the library happens. For further information refer to the Lerna docs regarding [how bootstrap works](https://github.com/lerna/lerna/blob/master/README.md#how-bootstrap-works)


### Getting ready to export your component

You're almost there! To ensure your component is exportable, add it to the `index.js` file available under `brave-ui/src/index.js`. Should look something like this:

```js
import SupremeComponent from './supremeComponent'

export {
  SupremeComponent
}

```

That's it! Now you need to create it in a language that the parser will understand. To do so run `npm run build`. This will create a parsed file of your component under `brave-ui/dist/supremeComponent.js`. Now we're good.


### Manually testing your component in the app that will consume it

This is maybe the most important part and the reason it comes before the "testing your component" section. Unless you're creating a new component, it's already somehow being used in a production application. Before anything else, ensure that your spec/api works in the environment it's going to be used. A quick way of doing it is by copying the `brave-ui/` folder inside the `node_modules/` folder of the application in question. After you do it, do the module `require()` and proceed with manual testing. If it looks good, nice job! Now to the next step.


### Testing your component

Once your component is visually OK, it's time for testing. For now, we make use of snapshot and structural tests, and you'll need both to ensure your component works fine. This package was created with a have-fun 🕺 mentality and my take is that you may even like to write tests for it. Feeling excited? Check our [tests](https://github.com/brave/brave-ui/blob/master/docs/publishing.md) documentation for guidance.


### Testing your component in a story

Stories are made to be used in the living style guide. They should honor its name and tell a story -- your component story. Having it there makes it publicly available for testing and easier to gain feedback. Refer to [Creating Stories - Improving the living styleguide](https://github.com/brave/brave-ui/blob/master/docs/stories.md) documentation for info.


### Publishing your component to the real world

Having the component ready with the right packages defined and proper testing doesn't mean the component is ready for external usage. To make so you need to publish the package and update the style guide for public view. Read more at [Publishing Stories and the Brave-UI package](https://github.com/brave/brave-ui/blob/master/docs/publishing.md) documentation.
