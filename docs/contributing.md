# Contributing

<hr>

# NOT ACCURATE. NEEDS REVISION. CC @CEZARAUGUSTO IF YOU WANT TO CONTRIBUTE.

<hr>

First of all thanks for stopping by! There's a lot of hearts in this project and we're glad that you want to help.

There are several ways you can do so:

* Report bugs
* Improve documentation (this one included!)
* Write more tests
* Improve our StoryBook
* Add more stories
* Fix bugs
* Spread the word!

## Running `brave-ui` in your local machine:

1. Clone this repo `git clone git@github.com:brave/brave-ui.git`
2. cd `brave-ui`
3. `npm i` or `yarn install`

Once the installation is finished, run `npm storybook-start`. The source is available under http://localhost:9091 (one after nine-o-nine?). It will hot-reload the style guide at every code change.

## Running tests

Please refer to [tests](docs/tests.md) documentation.

## Testing components in a real life application

As you fix a bug or add functionality to a component, it's recommended that you test your changes in a real life application before
submitting a PR.

_**Note**: If you created a new component, ensure that you properly exported it under `src/index.js`_


1. `npm run build` to export changes to the `dist/` folder or `npm run dev` to continously monitor it
2. cd `/your/path/to/brave-ui/brave-ui` _NOTE THE DUPLICATE. WE'RE LOOKING FOR THE BRAVE-UI PACKAGE_
3. `yarn link`
4. cd `/your/path/to/your/project`
5. `yarn link brave-ui`

This will link your current dev environment to the app of choice. You can now `require` or `import` without further changes.
To reverse this, run `yarn unlink brave-ui` and you're all set.
