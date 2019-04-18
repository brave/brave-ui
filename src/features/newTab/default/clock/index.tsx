/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this file,
* You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

import { StyledClock, StyledTime } from './style'

interface TimeComponent {
  type: string,
  value: string
}

export interface ClockState {
  currentTime: Array<TimeComponent>
  date: Date
}

interface PreferredLocale {
  preferredLocale?: string | string[]
}

export class Clock extends React.PureComponent<PreferredLocale, ClockState> {
  preferredLocale: string | string[]

  constructor (props: PreferredLocale) {
    super(props)
    /* We need to put the preferredLocale outside of state, to allow for
       dateTimeFormat to be called for creating the original state */
    this.preferredLocale = props.preferredLocale ? props.preferredLocale : []
    this.state = this.getClockState(new Date())
  }

  get dateTimeFormat (): any {
    try {
      return new Intl.DateTimeFormat(this.preferredLocale, { hour: '2-digit', minute: '2-digit' })
    } catch(e) {
      /* in case the user has provided a preferred locale which is not a valid
         language tag, Intl.DateTimeFormat throws a RangeError: in that case, go
         for default locale */
      return new Intl.DateTimeFormat([], { hour: '2-digit', minute: '2-digit' })
    }
  }

  get formattedTime () {
    return this.state.currentTime.map((component) => {
      if (component.type === 'dayPeriod') {
        // do not render AM/PM
        return null
      }
      return component.value
    })
  }

  getMinutes (date: any) {
    return Math.floor(date / 1000 / 60)
  }

  maybeUpdateClock () {
    const now = new Date()
    if (this.getMinutes(this.state.date) !== this.getMinutes(now)) {
      this.setState(this.getClockState(now))
    }
  }

  getClockState (now: Date) {
    return {
      date: now,
      currentTime: this.dateTimeFormat.formatToParts(now)
    }
  }

  componentDidMount () {
    window.setInterval(this.maybeUpdateClock.bind(this), 2000)
  }

  render () {
    return (
      <StyledClock>
        <StyledTime>{this.formattedTime}</StyledTime>
      </StyledClock>
    )
  }
}
