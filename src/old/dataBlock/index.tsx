import * as React from 'react'

import {
  StyledDataBlock,
  StyledDataItem,
  StyledDataItemCounter,
  StyledDataItemText,
  StyledDataItemDescription
} from './style'

export interface DataProps {
  id?: string
  asList?: boolean
  children?: React.ReactNode
}

class DataBlock extends React.PureComponent<DataProps, {}> {
  render () {
    const { id, asList, children } = this.props
    return (
      <StyledDataBlock id={id} asList={asList}>{children}</StyledDataBlock>
    )
  }
}
export interface DataItemTheme {
  counterColor?: string
  descriptionColor?: string
  userSelect?: string
}

export interface DataItemProps {
  id?: string
  counter?: string | number
  text?: string
  description?: string
  size?: 'medium' | 'small'
  onClick?: (e: any) => void
  customStyle?: DataItemTheme
}

class DataItem extends React.PureComponent<DataItemProps, {}> {
  render () {
    const {
      id,
      customStyle,
      counter,
      text,
      description,
      onClick,
      size = 'medium'
    } = this.props

    return (
      <StyledDataItem id={id} customStyle={customStyle} onClick={onClick} size={size}>
        <StyledDataItemCounter customStyle={customStyle} size={size}>{counter}</StyledDataItemCounter>
          {
            text
            ? <StyledDataItemText customStyle={customStyle} size={size}>{text}</StyledDataItemText>
            : null
          }
          {
            description
            ? <StyledDataItemDescription customStyle={customStyle} size={size}>{description}</StyledDataItemDescription>
            : null
          }
      </StyledDataItem>
    )
  }
}

export {
  DataBlock,
  DataItem
}
