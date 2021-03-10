import * as React from 'react'

import {
  StyledHeadingTitle,
  StyledHeadingTitleLabel,
  StyledSectionHeading,
  StyledFeatureHeading,
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledH5,
  StyledH6,
  StyleProps
} from './style'

export interface TitleHeadingProps {
  id?: string
  text?: string
  label?: string
}

class TitleHeading extends React.PureComponent<TitleHeadingProps, {}> {
  render () {
    const { id, text, label } = this.props
    return (
      <StyledHeadingTitle id={id}>
        {text}
        {
          label
          ? <StyledHeadingTitleLabel>{label}</StyledHeadingTitleLabel>
          : null
        }
      </StyledHeadingTitle>
    )
  }
}

export interface SectionHeadingProps {
  id?: string
  text?: string
}

class SectionHeading extends React.PureComponent<SectionHeadingProps, {}> {
  render () {
    const { id, text } = this.props
    return (
      <StyledSectionHeading id={id}>{text}</StyledSectionHeading>
    )
  }
}

export interface FeatureHeadingProps {
  id?: string
  text?: string
}

class FeatureHeading extends React.PureComponent<FeatureHeadingProps, {}> {
  render () {
    const { id, text } = this.props
    return (
      <StyledFeatureHeading id={id}>{text}</StyledFeatureHeading>
    )
  }
}

export type HeadingProps = StyleProps & {
  id?: string
  level?: 1 | 2 | 3 | 4 | 5 | 6
  text?: string
}

class Heading extends React.PureComponent<HeadingProps, {}> {
  render () {
    const { id, level, customStyle, text } = this.props
    switch (level) {
      case 1:
        return <StyledH1 id={id} customStyle={customStyle}>{text}</StyledH1>
      case 2:
        return <StyledH2 id={id} customStyle={customStyle}>{text}</StyledH2>
      case 3:
        return <StyledH3 id={id} customStyle={customStyle}>{text}</StyledH3>
      case 4:
        return <StyledH4 id={id} customStyle={customStyle}>{text}</StyledH4>
      case 5:
        return <StyledH5 id={id} customStyle={customStyle}>{text}</StyledH5>
      case 6:
        return <StyledH6 id={id} customStyle={customStyle}>{text}</StyledH6>
      default:
        return <StyledH1 id={id} customStyle={customStyle}>{text}</StyledH1>
    }
  }
}

export {
  TitleHeading, // to be used as a page's title
  SectionHeading, // the main title covering one/more features
  FeatureHeading, // to be used as a feature title
  Heading // general heading styles ranging from 1-6
}
