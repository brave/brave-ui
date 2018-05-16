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
  size?: 'medium' | 'small',
  list?: boolean,
  children?: React.ReactNode
}

class DataBlock extends React.PureComponent<DataProps, {}> {
  render () {
    const { id, list, size, children } = this.props
    return (
      <StyledDataBlock id={id} list={list} size={size}>{children}</StyledDataBlock>
    )
  }
}

export interface DataItemProps {
  id?: string,
  color?: string,
  counter?: string,
  text?: string,
  description?: string,
  size?: 'medium' | 'small',
  onClick?: (e: any) => void,
  noSelect?: boolean
}

class DataItem extends React.PureComponent<DataItemProps, {}> {
  render () {
    const { id, color, counter, text, description, onClick, noSelect, size } = this.props
    return (
      <StyledDataItem
        id={id}
        color={color}
        onClick={onClick}
        noSelect={noSelect}
        size={size}
      >
        <StyledDataItemCounter color={color} size={size}>{counter}</StyledDataItemCounter>
          {
            text && <StyledDataItemText size={size}>{text}</StyledDataItemText>
          }
          {
          description && <StyledDataItemDescription size={size}>{description}</StyledDataItemDescription>
          }
      </StyledDataItem>
    )
  }
}

export {
  DataBlock,
  DataItem
}
