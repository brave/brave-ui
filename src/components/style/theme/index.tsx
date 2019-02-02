// @ts-ignore: Needed for ThemeProvider
import * as React from 'react'
import * as styledComponents from 'styled-components'
import IThemeProps, {
  BraveThemedStyledProps as ThemedStyledProps
} from './themeInterface'
// theme for testing
import TestTheme from './default'

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  // React import is needed for following line!
  ThemeProvider
  // tslint disabled because:
  // - Incorrectly complains about unused assertion, but does not detect private member differences
  //   see: https://github.com/palantir/tslint/issues/3505
  //   It's possibly due to the rule upstream in tslint-config-standard
  // tslint:disable-next-line
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  IThemeProps
>

export default styled

const TestThemeProvider = (props: any) => (
  <ThemeProvider theme={TestTheme} {...props} />
)

export {
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
  ThemedStyledProps,
  TestThemeProvider
}
