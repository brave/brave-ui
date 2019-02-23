/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { ClipboardOIcon } from '../../icons'
import {
  StyledText,
  StyledWrapper,
  StyledArea,
  StyledFooter,
  StyledCopyToClipboard,
  StyledClipboardButton
} from './style'

export interface Props {
  id?: string
  value?: string
  defaultValue?: string
  readOnly?: boolean
  placeholder?: string
  disabled?: boolean
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  copiedString?: string,
  wordCountString?: string
}

export interface State {
  copiedStringVisible: boolean
}

export default class TextAreaClipboard extends React.PureComponent<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = { copiedStringVisible: false }
  }

  get emptyWordCount () {
    return this.props.value === '' || this.props.defaultValue === ''
  }

  get value () {
    return this.props.value || this.props.defaultValue
  }

  get wordCount () {
    if (
      !this.value ||
      this.emptyWordCount ||
      this.value.match(/\S+/g) === null
    ) {
      return 0
    }

    return this.value.match(/\S+/g)!.length
  }

  onCopyToClipboard = () => {
    // typescript don't recognize clipboard as a navigator method :/
    (navigator as any).clipboard.writeText(this.value)
    // show up the copied string
    this.setState({ copiedStringVisible: true })
  }

  onAnimationEnd = () => {
    this.setState({ copiedStringVisible: false })
  }

  render () {
    const {
      id,
      value,
      defaultValue,
      readOnly,
      placeholder,
      disabled,
      onChange,
      copiedString,
      wordCountString
    } = this.props

    const { copiedStringVisible } = this.state

    return (
      <StyledWrapper id={id}>
        <StyledArea
          disabled={disabled}
          value={value}
          readOnly={readOnly}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={onChange}
        />
        <StyledFooter>
          {wordCountString} {this.wordCount}
          {
            copiedString !== undefined
              ? <StyledCopyToClipboard>
                <StyledText
                  visible={copiedStringVisible}
                  onAnimationEnd={this.onAnimationEnd}
                >
                  {copiedString}
                </StyledText>
                <StyledClipboardButton onClick={this.onCopyToClipboard}>
                  <ClipboardOIcon />
                </StyledClipboardButton>
              </StyledCopyToClipboard>
              : null
          }
        </StyledFooter>
      </StyledWrapper>
    )
  }
}
