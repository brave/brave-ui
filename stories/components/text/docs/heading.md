-----

### Notes

- This component is the default heading component.
- Font size can be changed via a number scale from 0-9. Each number sequentially adds or subtracts to the size from a modular type scale defined in the theme variables.

| Prop | Type | Default | Value | Notes |
|--|--|--|--|--|
| fontSize | number | 4 | 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 | Scales via modular type scale |
| tag | any | h1 | h1, h2, h3, h4, h5 |  |
| margin | string |  |  | Pass in CSS string: {'2px, 2px, 2px, 2px'} |
| padding | string |  |  | Pass in CSS string: {'2px, 2px, 2px, 2px'} |
| isItalic | boolean | false |  | Makes text italic |
| color | Color | default | default, defaultFade15, defaultFade30, defaultFade50 | Text color is adjusted via alpha fade to lighten. |
| children | React.ReactNode |  |  |  |
| lineHeight | LineHeight | default | default, large, zero | 1.5, 1.75, 0 |
| fontWeight | FontWeight | regular | regular, bold, light | 400, 600, 200 |