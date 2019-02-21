import * as React from 'react'
import IText from './textInterface'
import { StyledBody, StyledHeading, StyledFootnote } from './style'

export const Footnote = (p: IText) => {
  return (
    <StyledFootnote
      tag={p.tag}
      color={p.color}
      lineHeight={p.lineHeight}
      fontWeight={p.fontWeight}
      padding={p.padding}
      margin={p.margin}
      isItalic={p.isItalic}
    >
    {p.children}
    </StyledFootnote>
  )
}

/* Body Text. It's a nice body. */
export const BodyCopy = (p: IText) => {
  return (
    <StyledBody
      tag={p.tag}
      color={p.color}
      lineHeight={p.lineHeight}
      fontWeight={p.fontWeight}
      padding={p.padding}
      margin={p.margin}
      isItalic={p.isItalic}
    >
    {p.children}
    </StyledBody>
  )
}

export const Heading = (p: IText) => {
  return (
    <StyledHeading
      tag={p.tag}
      fontSize={p.fontSize}
      color={p.color}
      lineHeight={p.lineHeight}
      fontWeight={p.fontWeight}
      padding={p.padding}
      margin={p.margin}
      isItalic={p.isItalic}
    >
    {p.children}
    </StyledHeading>
  )
}
