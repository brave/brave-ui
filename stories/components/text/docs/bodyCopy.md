-----

### Notes

- Font size is locked at 14px.
- This component is the default body and paragraph text component.

| Prop | Type | Default | Value | Notes |
|--|--|--|--|--|
| tag | any | p | p, span, div |  |
| margin | string |  |  | Pass in CSS string: {'2px, 2px, 2px, 2px'} |
| padding | string |  |  | Pass in CSS string: {'2px, 2px, 2px, 2px'} |
| isItalic | boolean | false |  | Makes text italic |
| color | Color | default | default, defaultFade15, defaultFade30, defaultFade50 | Text color is adjusted via alpha fade to lighten. |
| children | React.ReactNode |  |  |  |
| lineHeight | LineHeight | default | default, large, zero | 1.5, 1.75, 0 |
| fontWeight | FontWeight | regular | regular, bold, light | 400, 600, 200 |