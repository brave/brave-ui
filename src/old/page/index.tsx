import * as React from 'react'

import 'emptykit.css'
import { StyledPage, StyledPageContent } from './style'
import { TitleHeading } from '../headings/index'

export interface PageTheme {
  fontFamily?: string
  color?: string
  padding?: string
  background?: string
  alignItems?: string
  justifyContent?: string
}

export interface PageProps {
  id?: string
  title?: string
  label?: string
  customStyle?: PageTheme
  children?: React.ReactNode
}

class Page extends React.PureComponent<PageProps, {}> {
  render () {
    const {
      id,
      title,
      label,
      customStyle,
      children
    } = this.props

    return (
      <StyledPage id={id} title={title} label={label} customStyle={customStyle}>
        {
          title
          ? <TitleHeading text={title} label={label} />
          : null
        }
        <StyledPageContent>{children}</StyledPageContent>
      </StyledPage>
    )
  }
}

export default Page
