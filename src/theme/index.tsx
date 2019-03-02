import * as React from 'react'
import * as styledComponents from 'styled-components'
import IThemeProps, { BraveThemedStyledProps as ThemedStyledProps } from './theme-interface'
import TestTheme from './brave-default' // theme for testing

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<IThemeProps>

export default styled

const TestThemeProvider = (props: any) => <ThemeProvider theme={TestTheme} {...props} />

export { css, createGlobalStyle, keyframes, ThemeProvider, ThemedStyledProps, TestThemeProvider }
