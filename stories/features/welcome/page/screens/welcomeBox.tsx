/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

// Feature-specific components
import { Content, Title, Paragraph } from '../../../../../src/features/welcome/'

// Shared components
import Button from '../../../../../src/components/buttonsIndicators/button'
import { ArrowRightIcon } from '../../../../../src/components/icons'

// Utils
import locale from '../fakeLocale'

// Images
import { WelcomeLionImage } from '../../../../../src/features/welcome/images'

interface Props {
  index: number
  currentScreen: number
  onClick: () => void
}

export default class ThemingBox extends React.PureComponent<Props, {}> {
  render () {
    const { index, currentScreen, onClick } = this.props
    return (
      <Content
        zIndex={index}
        active={currentScreen === index}
        screenPosition={'1' + (index + 1) + '0%'}
        isPrevious={index <= currentScreen}
      >
        <WelcomeLionImage />
        <Title>{locale.welcome}</Title>
        <Paragraph>{locale.whatIsBrave}</Paragraph>
        <Button
          level='primary'
          size='large'
          text={locale.letsGo}
          onClick={onClick}
          icon={{ position: 'after', image: <ArrowRightIcon /> }}
        />
      </Content>
    )
  }
}
