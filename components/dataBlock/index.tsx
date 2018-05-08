import * as React from 'react'

import {
  StyledDataBlock,
  StyledDataItem,
  StyledDataItemCounter,
  StyledDataItemText,
  StyledDataItemDescription
} from './style'

export interface DataProps {
  id?: string,
  children?: React.ReactNode
}

class DataBlock extends React.PureComponent<DataProps, {}> {
  render () {
    const { id, children } = this.props
    return (
      <StyledDataBlock id={id}>{children}</StyledDataBlock>
    )
  }
}

export interface DataItemProps {
  id?: string,
  color?: string,
  counter?: string,
  text?: string,
  description?: string
}

class DataItem extends React.PureComponent<DataItemProps, {}> {
  render () {
    const { id, color, counter, text, description } = this.props
    return (
      <StyledDataItem id={id} color={color}>
        <StyledDataItemCounter color={color}>{counter}</StyledDataItemCounter>
          {
            text && <StyledDataItemText>{text}</StyledDataItemText>
          }
        <StyledDataItemDescription>{description}</StyledDataItemDescription>
      </StyledDataItem>
    )
  }
}

export {
  DataBlock,
  DataItem
}
