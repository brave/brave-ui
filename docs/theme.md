# Theme properties

We use a central list of variables for some values, such as color, fonts, spacing for the following purposes:
- Consistency
- Variability (e.g. Dark vs Light)
- Ease of change

## Using theme properties
Every styled-components Component will have access to a `theme` prop. This is because all Views are wrapped with a `<ThemeProvider theme={x}>` Component.

Checkout the list of theme properties at `theme-interface.tsx`.

## Adding a Theme Property
Properties in the main theme interface should be general and easy to understand the purpose for. Therefore, be careful not to add things that are only in use for a single control.

E.g. a suitable color property would be `primaryBackground` or `warningBackground` but an unsuitable one would be `buttonBackground`.

E.g. a suitable font-size strategy would be to define a scale of small to large sizes, such as `fontSizes: ['8', '12', '18']` rather than `buttonFontSizeLarge: '18'`

All new theme properties must be added to the theme interface, as well as values for that property defined for each theme.
