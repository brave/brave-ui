import * as React from 'react'
import { StyledWrapper, StyledSlider, StyledBullet, StyleToggle } from './style'

export interface Props {
  onToggle?: (e: React.MouseEvent<HTMLDivElement>) => void
  id?: string
  disabled?: boolean
  checked?: boolean
  size?: 'default' | 'small'
  testId?: string
  className?: string
}

export default class Toggle extends React.PureComponent<Props, {}> {
  static defaultProps = {
    size: 'default'
  }

  render () {
    const { id, onToggle, disabled, checked, size, testId } = this.props

    return (
      <StyledWrapper id={id} >
        <StyleToggle
          onClick={!disabled ? onToggle : undefined}
          data-test-id='toggle'
          data-test-id2={testId}
          data-toggled={checked}
          size={size}
          disabled={disabled}
        >
          <StyledSlider
            size={size}
            disabled={disabled}
            checked={checked}
          />
          <StyledBullet
            size={size}
            checked={checked}
            disabled={disabled}
          />
        </StyleToggle>
      </StyledWrapper>
    )
  }
}
