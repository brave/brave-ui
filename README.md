<img src="https://raw.githubusercontent.com/brave/brave-ui/master/logo-dev.png" align="right" width="130px" height="130px"/>

# Brave UI [![npm](https://img.shields.io/npm/v/brave-ui.svg)]()
> List of reusable React components to empower your brave UI

[![Travis](https://img.shields.io/travis/brave/brave-ui.svg)](http://github.com/brave/brave-ui) [![Known Vulnerabilities](https://snyk.io/test/github/brave/brave-ui/badge.svg)](https://snyk.io/test/github/brave/brave-ui) [![npm](https://img.shields.io/npm/dt/brave-ui.svg)]() [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
 [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Welcome to the Brave UI repo! Here you will find a list of reusable stateless React components for use across our browser UI. It's a standalone package to be manipulated as any other module, including a visual style guide fully customizable for both developers and designers.

<hr>
<p align="center">
<a href="#table-of-contents">TOC</a> • <a href="#why-this">Why this?</a> • <a href="#what-is-this">What is this?</a> • <a href="#how-this-works">How this works?</a> • <a href="#installation-and-usage">Installation and usage</a> • <a href="#contribute">Contribute!</a>
</p>
<hr>

## Table of Contents

* [Installation and Usage](#installation-and-usage)
* [Visual Test - Playing around with the living styleguide](https://github.com/brave/brave-ui/blob/master/docs/manual-tests.md)
* [Creating Stories - Improving the living styleguide](https://github.com/brave/brave-ui/blob/master/docs/stories.md)
* [Creating components and Architecture Overview](https://github.com/brave/brave-ui/blob/master/docs/components.md)
* [Coverage, running and creating tests](https://github.com/brave/brave-ui/blob/master/docs/tests.md)
* [Publishing Stories and the Brave-UI package](https://github.com/brave/brave-ui/blob/master/docs/publishing.md)
* [Cookbook for maintainers](#) - TODO


## Why this? 

* __Better productivity__: UI can be edited independently from the browser architecture, leading to faster changes/feedback from both engineering and other teams.
* __Better communication__: having an online style guide makes discussions accessible at any time, without config.
* __Better maintance__: This repository makes use of stateless components with predictable tests, that can be edited without any side effect.
* __Better to implement__: As a standalone package, implementation can be made with a quick `require()`, having to only bump the package version in the browser-laptop repository.
* __Better spec visualization__: Each component state can be visualized and changed in a visual interface through the style guide, which in the near future will also benefit type-checking to bulletproof the component works as expected.
* __Better editing__: Each component has its own style, which is easily tested in a visual interface. Implementation is also easier as it's per-component, without states and unintended side-effects.
* __Better for reviewers__: Small edits such as positioning, color, and syntax could be done fast with little review effort, avoiding bloating the browser PR queue.
* __We're going to do a full rebrand__: As the team grows, it's easy to skip key information that could lead to a large refactoring. Having a visual style guide online helps teams to share information in a quick way.


## What is this?

This repository is the home of the [Brave styleguide](https://brave.github.io/brave-ui) and the [Brave UI repository](https://npmjs.org/package/brave-ui).

**The style guide** is a spec visualization of the browser-laptop components, made possible by [Storybook](https://github.com/storybooks/storybook). The style guide is separated by "stories", which is defined as a component with a given state, visually mutable in the UI. It's also a great tool for manual testing purposes and behavior visualization.

**The Brave UI repository** is a standalone package containing stateless components to be used in browser-laptop, made by design to be implemented inside the `render()` method as a replacement for front-end code, making it easier to change and adapt. It uses [Lerna](https://github.com/lerna/lerna) to manage only the package needed to export components.

If you're looking for an architecture overview please go to [`Creating components & Architecture Overview` doc](https://github.com/brave/brave-ui/blob/master/docs/components.md).


## How this works?

We have the main repository that hosts the style guide, which is private, which means it never publishes to `npm`. Instead, it's published as a website, which is, in fact, the storybook visualization set as a public resource at https://brave.github.io/brave-ui. The website deploy is automated by `npm run deploy`.

On the other hand, we have the `brave-ui` repository, containing a list of reusable stateless components with their respective tests and coverage. The package includes only the resources needed to be usable outside of this repository as a public package with the same name. The package deploy is automated by `npm run publish`.


## Installation and Usage

Depending on your goals, we have two types of installation/usage, described below.


### To edit this reposity/styleguide

If you want to edit this repository, being it test fixes, additions, style guide updates, etc, you need to:

```
git clone git@github.com:brave/brave-ui.git
cd brave-ui
npm i
```

Once the installation is finished, run `npm start`. The source is available under http://localhost:9091 (one after nine-o-nine?). It will hot-reload the style guide at every code change.

### To make use of the `brave-ui` components in an application

If you want to make use of the `brave-ui` components (you can see a list of them [here](https://brave.github.io/brave-ui)), follow these commands:

```
cd <your_repo_here>
npm i --save brave-ui
```

Confirm in your `package.json` that the `brave-ui` is installed. Once you're good to go you can require it by using the object-destructuring pattern, which is used to take advantage of module three-shaking. Note that without this pattern (without the brackets evolving the component name) the package will throw an error.

```js
// Let's implement the <BrowserButton /> component
const {BrowserButton} = require('brave-ui')

render () {
  return (
    <BrowserButton as='primary' label='something'>
  )
}
```

For further information about other development goodies, please refer to the [table of contents](#table-of-contents).


## Contribute!

We are still in an early draft and would love your feedback. If you think something can be better or is just wrong, please open an issue or submit a pull-request. Let's make it cool!
