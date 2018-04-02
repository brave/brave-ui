# Creating Stories - Improving the living style guide

<hr>

# NOT ACCURATE. NEEDS REVISION

<hr>

Stories are very similar to test files and allow us to see the component "in action" inside the style guide. Visually, they are the topics described on the left-hand side of the screen, usually inside a list of stories. They all live inside the `stories/` folder and follow the `yourComponentName.story.js` name convention.

They look somehow like this:

```jsx
storiesOf('gratestComponentEver', module)
  .add('gratestComponentEver with lasers', () => (
    <gratestComponentEver
      withWhat='lasers'
      onClick={action('clicked the default button')}
    />
  ))
})
```

`action` is a special method that outputs content inside the `output` tab in the style guide. You can have as many stories you want by adding new `.add` methods.

## Publishing stories

Please refer to [Publishing Stories and the Brave-UI package](https://github.com/brave/brave-ui/blob/master/docs/publishing.md) docs for more information.
