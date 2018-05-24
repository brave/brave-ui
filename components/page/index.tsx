import * as React from 'react'

import 'emptykit.css'
import { StyledPage, StyledPageContent } from './style'
import { TitleHeading } from '../headings'

export interface PageProps {
  id?: string,
  title?: string,
  label?: string,
  style?: object,
  children?: React.ReactNode
}

class Page extends React.PureComponent<PageProps, {}> {
  render () {
    const {
      id,
      title,
      label,
      style,
      children
    } = this.props

    return (
      <StyledPage id={id} title={title} label={label} style={style}>
        { title && <TitleHeading text={title} label={label} /> }
        <StyledPageContent>{children}</StyledPageContent>
      </StyledPage>
    )
  }
}

export default Page
