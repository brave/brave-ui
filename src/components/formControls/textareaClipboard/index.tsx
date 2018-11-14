/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { ClipboardIcon } from '../../icons'
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
  copiedStingVisible: boolean
}

export default class TextArea extends React.PureComponent<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = { copiedStingVisible: false }
  }

  get wordCount () {
    if (this.props.value === '') {
      return 0
    }
    return this.props.value!.trim().replace(/\s+/gi, ' ').split(' ').length
  }

  onCopyToClipboard = () => {
    // typescript don't recognize clipboard as a navigator method :/
    (navigator as any).clipboard.writeText(this.props.value)
    // show up the copied string
    this.setState({ copiedStingVisible: true })
  }

  onAnimationEnd = () => {
    this.setState({ copiedStingVisible: false })
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

    console.log('whatwhawtawht', this.state.copiedStingVisible)

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
          <StyledCopyToClipboard>
            <StyledText
              visible={this.state.copiedStingVisible}
              onAnimationEnd={this.onAnimationEnd}
            >
              {copiedString}
            </StyledText>
            <StyledClipboardButton onClick={this.onCopyToClipboard}>
              <ClipboardIcon />
            </StyledClipboardButton>
          </StyledCopyToClipboard>
        </StyledFooter>
      </StyledWrapper>
    )
  }
}
