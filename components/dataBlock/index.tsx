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
  list?: boolean,
  children?: React.ReactNode
}

class DataBlock extends React.PureComponent<DataProps, {}> {
  render () {
    const { id, list, children } = this.props
    return (
      <StyledDataBlock id={id} list={list}>{children}</StyledDataBlock>
    )
  }
}

export interface DataItemProps {
  id?: string,
  color?: string,
  counter?: string | number,
  text?: string,
  description?: string,
  size?: 'medium' | 'small',
  onClick?: (e: any) => void,
  noSelect?: boolean
}

class DataItem extends React.PureComponent<DataItemProps, {}> {
  render () {
    const {
      id,
      color,
      counter,
      text,
      description,
      onClick,
      noSelect,
      size = 'medium'
    } = this.props

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
