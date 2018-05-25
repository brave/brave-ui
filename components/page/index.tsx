import * as React from 'react'

import 'emptykit.css'
import { StyledPage, StyledPageContent } from './style'
import { TitleHeading } from '../headings'

export interface PageTheme {
  fontFamily?: string,
  color?: string,
  padding?: string,
  background?: string
}

export interface PageProps {
  id?: string,
  title?: string,
  label?: string,
  theme?: PageTheme,
  children?: React.ReactNode
}

class Page extends React.PureComponent<PageProps, {}> {
  render () {
    const {
      id,
      title,
      label,
      theme,
      children
    } = this.props

    return (
      <StyledPage id={id} title={title} label={label} theme={theme}>
        { title && <TitleHeading text={title} label={label} /> }
        <StyledPageContent>{children}</StyledPageContent>
      </StyledPage>
    )
  }
}

export default Page
