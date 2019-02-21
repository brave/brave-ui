import * as React from 'react'
import styled, { css, ThemedStyledProps } from '../style/theme'
import IText from './textInterface'

const getColor = (p: ThemedStyledProps<IText>) => {
  let textColor
  switch (p.color) {
    case 'default':
      textColor = p.theme.fontColor.default
      break
    case 'defaultFade15':
      textColor = p.theme.fontColor.defaultFade15
      break
    case 'defaultFade30':
      textColor = p.theme.fontColor.defaultFade30
      break
    case 'defaultFade50':
      textColor = p.theme.fontColor.defaultFade50
      break
    default:
      textColor = p.theme.fontColor.default
  }
  return css`
    --text-color: ${textColor};
  `
}

const getLineHeight = (p: ThemedStyledProps<IText>) => {
  let lineHeight
  switch (p.lineHeight) {
    case 'default':
      lineHeight = p.theme.lineHeight.default
      break
    case 'large':
      lineHeight = p.theme.lineHeight.large
      break
    case 'zero':
      lineHeight = p.theme.lineHeight.zero
      break
    default:
      lineHeight = p.theme.lineHeight.default
  }
  return css`
    --line-height: ${lineHeight};
  `
}

const getFontWeight = (p: ThemedStyledProps<IText>) => {
  let fontWeight
  switch (p.fontWeight) {
    case 'regular':
      fontWeight = p.theme.fontWeight.regular
      break
    case 'bold':
      fontWeight = p.theme.fontWeight.bold
      break
    case 'light':
      fontWeight = p.theme.fontWeight.light
      break
    default:
      fontWeight = p.theme.fontWeight.regular
  }
  return css`
    --font-weight: ${fontWeight};
  `
}

const getFontSize = (p: ThemedStyledProps<IText>) => {
  let fontSize
  switch (p.fontSize) {
    case 0:
      fontSize = p.theme.fontSize.scale[0]
      break
    case 1:
      fontSize = p.theme.fontSize.scale[1]
      break
    case 2:
      fontSize = p.theme.fontSize.scale[2]
      break
    case 3:
      fontSize = p.theme.fontSize.scale[3]
      break
    case 4:
      fontSize = p.theme.fontSize.scale[4]
      break
    case 5:
      fontSize = p.theme.fontSize.scale[5]
      break
    case 6:
      fontSize = p.theme.fontSize.scale[6]
      break
    case 7:
      fontSize = p.theme.fontSize.scale[7]
      break
    case 8:
      fontSize = p.theme.fontSize.scale[8]
      break
    case 9:
      fontSize = p.theme.fontSize.scale[9]
      break
    default:
      fontSize = p.theme.fontSize.scale[1]
  }
  return css`
    --font-size: ${fontSize};
  `
}

const getMargin = (p: IText) => {
  return css`
    --spacing-margin: ${p.margin};
    `
}

const getPadding = (p: IText) => {
  return css`
    --spacing-padding: ${p.padding};
    `
}

// Shared base text styling & format base. Uses paragraph as a basis but also overrides browser tag styles. Also imports initial theme props
const BaseTextStyle = styled<IText, 'div'>('div')`
  ${getPadding}
  ${getMargin}
  ${getColor}
  ${getLineHeight}
  ${getFontWeight}
  font-weight: var(--font-weight);
  color: var(--text-color);
  line-height: var(--line-height);
  padding: var(--spacing-padding);
  margin:var(--spacing-margin);
  font-style: ${props => props.isItalic ? 'italic' : null}
`

// Pass in HTML tag and configurable props to text components
export const BaseText = ({ tag, children, ...props }: IText) => {
  const WithComponent = BaseTextStyle.withComponent(tag)
  return <WithComponent {...props}>{children}</WithComponent>
}

BaseText.defaultProps = {
  tag: 'p',
  margin: '0',
  padding: '0'
}

export const StyledFootnote = styled(BaseText)`
  font-size: ${p => p.theme.fontSize.scale[0]};
  font-family: ${p => p.theme.fontFamily.body}, ${p => p.theme.fontFamily.system};
`

export const StyledBody = styled(BaseText)`
  font-size: ${p => p.theme.fontSize.scale[1]};
  font-family: ${p => p.theme.fontFamily.body}, ${p => p.theme.fontFamily.system};
`

// Heading sizes can be passed as a number prop from 0-9
// in a pre-determined modular scale from theme
export const StyledHeading = styled(BaseText)`
  ${getFontSize}
  font-size: var(--font-size);
  font-family: ${p => p.theme.fontFamily.heading}, ${p => p.theme.fontFamily.system};
`

StyledHeading.defaultProps = {
  tag: 'h1',
  fontWeight: 'bold',
  fontSize: 4
}
