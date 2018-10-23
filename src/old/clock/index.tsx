/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this file,
* You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

import {
   StyledClock,
   StyledTime,
   StyledTimeSeparator
 } from './style'

export interface ClockTheme {
  color?: string
}
export interface ClockProps {
  id?: string
  customStyle?: ClockTheme
}

interface TimeComponent {
  type: string,
  value: string
}

export interface ClockState {
  currentTime: Array<TimeComponent>
  date: Date
}

function isDayPeriod (timeComponent: TimeComponent): boolean {
  return timeComponent.type.toLowerCase() === 'dayperiod'
}

class Clock extends React.PureComponent<ClockProps, ClockState> {
  constructor (props: ClockProps) {
    super(props)
    this.state = this.getClockState(new Date())
  }

  get dateTimeFormat (): any {
    return new Intl.DateTimeFormat([], { hour: '2-digit', minute: '2-digit' })
  }

  get formattedTime () {
    return this.state.currentTime.map((component, i) => {
      if (component.type === 'literal') {
        // wrap ':' in a span with a class, so it can be centered
        if (component.value === ':') {
          return <StyledTimeSeparator key={i}>{component.value}</StyledTimeSeparator>
        } else if (component.value.trim() === '') {
          // hide blank strings
          return null
        }
      } else if (isDayPeriod(component)) {
        // hide day-period (AM / PM), it's rendered in a separate component
        return null
      }
      return component.value
    })
  }

  get formattedTimePeriod () {
    const time: any = this.state.currentTime
    const period = time.find(isDayPeriod)
    return period ? period.value : ''
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
    const { id, customStyle } = this.props
    return (
      <StyledClock id={id} customStyle={customStyle}>
        <StyledTime>{this.formattedTime}</StyledTime>
      </StyledClock>
    )
  }
}

export default Clock
