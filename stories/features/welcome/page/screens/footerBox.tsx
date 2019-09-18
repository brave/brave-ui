/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

// Feature-specific components
import {
  Footer,
  FooterLeftColumn,
  FooterMiddleColumn,
  FooterRightColumn,
  Bullet
} from '../../../../../src/features/welcome/'

// Shared components
import Button from '../../../../../src/components/buttonsIndicators/button'
import { ArrowRightIcon } from '../../../../../src/components/icons'

// Utils
import locale from '../fakeLocale'

interface Props {
  currentScreen: number
  totalScreensSize: number
  onClickSkip: () => void
  onClickNext: () => void
  onClickSlideBullet: (args: any) => any
  onClickDone: () => void
}

export default class FooterBox extends React.PureComponent<Props, {}> {
  render () {
    const { currentScreen, totalScreensSize, onClickSkip, onClickNext, onClickSlideBullet, onClickDone } = this.props
    return (
      <Footer>
        <FooterLeftColumn>
          <Button level={'tertiary'} size={'small'} onClick={onClickSkip} text={locale.skipWelcomeTour} />
        </FooterLeftColumn>
        <FooterMiddleColumn>
          {Array.from({ length: totalScreensSize }, (v: undefined, k: number) => (
            <Bullet active={currentScreen === k + 1} key={k} onClick={onClickSlideBullet.bind(this, k + 1)}>&bull;</Bullet>
          ))}
        </FooterMiddleColumn>
        <FooterRightColumn>
          {
            currentScreen !== totalScreensSize &&
            // don't show the next button in the first screen
            currentScreen !== 1
              ? (
                <Button
                  level='default'
                  size='medium'
                  onClick={onClickNext}
                  text={locale.next}
                  icon={{ position: 'after', image: <ArrowRightIcon /> }}
                />
              )
              : currentScreen !== 1 && (
                <Button
                  level='default'
                  size='medium'
                  onClick={onClickDone}
                  text={locale.done}
                />
            )
          }
        </FooterRightColumn>
      </Footer>
    )
  }
}
