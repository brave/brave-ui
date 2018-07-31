# Icons
This is a collection of scalable vector graphics that are designed to convey meaning whilst maintaining a brand visual style.

## Usage

```js
import ArrowRight from 'brave-ui/icons/arrow/right'

const MyComponent = () => <button>
  <ArrowRight />
</button>
```

### Size
Most icons are unopinionated size, so that the decision is closer to the implementation. They will fill their container's size. But you can also explicitly specify a width and height via CSS:

```js
import ArrowRight from 'brave-ui/icons/arrow/right'

const StyledArrowRight = styled(ArrowRight)`
  width: 24px;
  height: 24px;
`

const MyComponent = () => <button>
  <StyledArrowRight />
</button>
```

### Color
Icons are also unopinionated on color, so that the decision can be better controlled via css and the interaction states it supports. Each icon will use the `currentColor` value for appropriate paths, unless the icon has a constraint on colors (such as a multi-color logo). For example:

```js
import ArrowRight from 'brave-ui/icons/arrow/right'

const StyledButton = styled.button`
  color: gray;
  :hover {
    color: red;
  }
  :active {
    color: blue;
  }
  :focus {
    color: pink;
  }
`

const StyledArrowRight = styled(ArrowRight)`
  width: 24px;
  height: 24px;
`

const MyComponent = () => <StyledButton>
  <StyledArrowRight />
</StyledButton>
```

## Quirks
- Each icon has built-in padding (within the SVG). This brings back one of the disadvantages of icon-fonts: difficulty aligning to an edge. After a debate, it was decided that the usefulness of enforcing a visual balance, so that the size of each graphic is balanced against all the other icons outweigh any minor edge-alignment issues. You may notice this especially when justify aligning with other items on the far edge, such as text in a button - it may appear that the gap between the icon's edge and the container edge is larger than the gap between the opposite edge of the container and whatever element (e.g. text) is against that edge. And it would indeed be larger. Fear not, this is still seen as balanced.