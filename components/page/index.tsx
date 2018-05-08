import * as React from 'react'

import { StyledPage, StyledPageContent } from './style'
import { TitleHeading } from '../headings'

export interface PageProps {
  id?: string,
  title?: string,
  label?: string,
  color?: string,
  padding?: string,
  background?: string,
  children?: React.ReactNode
}

class Page extends React.PureComponent<PageProps, {}> {
  render () {
    const {
      id,
      title,
      label,
      color,
      padding,
      background,
      children
    } = this.props

    return (
      <StyledPage
        id={id}
        title={title}
        color={color}
        padding={padding}
        background={background}
        label={label}
      >
        <TitleHeading text={title} label={label} />
        <StyledPageContent>{children}</StyledPageContent>
      </StyledPage>
    )
  }
}

export default Page
