// @ts-ignore: Needed for ThemeProvider
import * as React from 'react'
import * as styledComponents from 'styled-components'
import { BraveThemedStyledProps as ThemedStyledProps } from './theme-interface'
// theme for testing
import TestTheme from './brave-default'

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  withTheme,
  // React import is needed for following line!
  ThemeProvider,
  ThemeConsumer,
  ThemeContext,
  useTheme,
  isStyledComponent,
  ServerStyleSheet,
  StyleSheetManager
  // tslint disabled because:
  // - Incorrectly complains about unused assertion, but does not detect private member differences
  //   see: https://github.com/palantir/tslint/issues/3505
  //   It's possibly due to the rule upstream in tslint-config-standard
  // tslint:disable-next-line
} = styledComponents as styledComponents.ThemedStyledComponentsModule<any>

export default styled

const TestThemeProvider = (props: any) => <ThemeProvider theme={TestTheme} {...props} />

export { css, createGlobalStyle, keyframes, withTheme, ThemeProvider, ThemeConsumer, ThemeContext, useTheme, isStyledComponent, ServerStyleSheet, StyleSheetManager, ThemedStyledProps, TestThemeProvider }
