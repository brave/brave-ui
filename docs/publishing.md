# Publishing Stories and the Brave-UI package

<hr>

# NOT ACCURATE. NEEDS REVISION.

<hr>

We have two types of `deploy`. Once is for deploying a static website to GitHub, which will then be visible going to https://brave.github.io/brave-ui, and the other is for deploying the main components package to `npm`.

## Publishing the style guide to a website

Brave UI makes use of `"storybook-to-ghpages` module to output the living style guide. You can make one by running `npm run deploy`. This will automatically output the website to the `gh-pages` branch. No further action is required.

## Publishing the `brave-ui` package to `npm`

Brave UI makes use of [lerna](https://github.com/lerna/lerna/), given we host the UI itself in its own package. The `npm run publish` setup allow us to be available over npm.

Before getting started, install `lerna` globally:

```
npm install --global lerna
```

Now that you have lerna, you need to build our package in order to have parsed JSX.

```
npm run build
```

This will run our entire test suit again, once done, run:

```
# Bear in mind the `run` command
npm run publish
```

This will set up the CLI wizard in order to publish to `npm`. Note that the main (root) package is set as "private" on purpose, and will never be published.

