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
export interface DataItemTheme {
  color?: string,
  userSelect?: 'auto' | 'none'
}

export interface DataItemProps {
  id?: string,
  counter?: string | number,
  text?: string,
  description?: string,
  size?: 'medium' | 'small',
  onClick?: (e: any) => void,
  theme?: {
    [dataItem: string]: DataItemTheme
  }
}

class DataItem extends React.PureComponent<DataItemProps, {}> {
  render () {
    const {
      id,
      theme,
      counter,
      text,
      description,
      onClick,
      size = 'medium'
    } = this.props

    return (
      <StyledDataItem id={id} theme={theme} onClick={onClick} size={size}>
        <StyledDataItemCounter theme={theme} size={size}>{counter}</StyledDataItemCounter>
          {
            text && <StyledDataItemText theme={theme} size={size}>{text}</StyledDataItemText>
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
