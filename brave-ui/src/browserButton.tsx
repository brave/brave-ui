/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * Implementator notes:
 * This file is the home of default, primary and secondary icons
 * There are other several buttons that may benefit
 * from it, which is still an early draft.
 *
 * Plan is to make the component easy to change, so if your
 * addition requires a lot of changes, consider creating another
 * component using this as a boilerlate
 */

import * as React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import theme from './theme'

export interface BrowserButtonProps {
  id?: string,
  theme?: string,
  disabled?: boolean,
  onClick?: () => void,
  children?: React.ReactNode,
  // component styles
  size?: string,
  fontSize?: string
}

class BrowserButton extends React.PureComponent<BrowserButtonProps, {}> {
  get componentStyles () {
    const { size, fontSize } = this.props
    return {
      // Default button theme
      // TODO: do we really need a default button?
      '--bg': theme.browserButton.default.bg,
      '--color': theme.browserButton.default.color,
      '--hoverColor': theme.browserButton.default.hoverColor,

      // Primary button theme
      '--primary-bg': theme.browserButton.primary.bg,
      '--primary-gradient1': theme.browserButton.primary.gradient1,
      '--primary-gradient2': theme.browserButton.primary.gradient2,
      '--primary-color': theme.browserButton.primary.color,
      '--primary-hoverColor': theme.browserButton.primary.hoverColor,
      '--primary-borderHoverColor':
        theme.browserButton.primary.borderHoverColor,

      // Secondary button theme
      '--secondary-bg': theme.browserButton.secondary.bg,
      '--secondary-color': theme.browserButton.secondary.color,
      '--secondary-hoverColor': theme.browserButton.secondary.hoverColor,
      '--secondary-borderHoverColor':
        theme.browserButton.secondary.borderHoverColor,

      // custom props
      '--size': size,
      '--fontSize': fontSize
    }
  }

  render () {
    const { id, theme, onClick, disabled, children } = this.props
    return (
      <button
        id={id}
        style={this.componentStyles}
        onClick={onClick}
        disabled={disabled}
        className={css(
          styles.browserButton,
          theme === 'primary' && styles.browserButton_primaryColor,
          theme === 'secondary' && styles.browserButton_secondaryColor,
          disabled && styles.browserButton_disabled
        )}>
        {children}
      </button>
    )
  }
}

const styles = StyleSheet.create({
  browserButton: {
    // Positioning properties
    position: 'relative',
    display: 'inline-block',
    textAlign: 'center',

    // Font properties
    fontSize: `var(--fontSize, 13px)`,
    color: `var(--color)`,

    // Box/Border properties
    boxShadow: '0px 1px 5px -1px rgba(0, 0, 0, 0.5)',
    boxSizing: 'border-box',
    outline: 'none',
    border: 'none',
    borderRadius: '2px',

    // Background properties
    backgroundSize: '16px',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'none',
    backgroundColor: `var(--bg)`,

    // Sizing properties
    lineHeight: 1.25, // TODO: this should be calculated instead of hard coded
    width: 'auto',
    minWidth: `calc(var(--fontSize, 13px) * 6)`,
    minHeight: `var(--size, 32px)`,
    whiteSpace: 'nowrap',

    // Spacing properties
    paddingTop: '5px',
    paddingBottom: '5px',
    paddingRight: '16px',
    paddingLeft: '16px',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,

    // Mouse properties
    WebkitAppRegion: 'no-drag',
    cursor: 'pointer',
    userSelect: 'none',

    // Transition properties
    transition: '.1s opacity, .1s background',

    ':hover': {
      color: `var(--hoverColor)`
    },

    ':active': {
      // push the button down when active
      bottom: '-1px'
    }
  },

  browserButton_disabled: {
    pointerEvents: 'none',
    animation: 'none',
    opacity: 0.25
  },

  browserButton_primaryColor: {
    background: `var(--primary-bg)`,
    borderLeft: '2px solid transparent',
    borderRight: '2px solid transparent',
    borderTop: `2px solid var(--primary-gradient1)`,
    borderBottom: `2px solid var(--primary-gradient2)`,
    color: `var(--primary-color)`,

    ':hover': {
      border: `2px solid var(--primary-borderHoverColor)`,
      color: `var(--primary-hoverColor)`
    }
  },

  browserButton_secondaryColor: {
    background: `var(--secondary-bg)`,
    border: '1px solid white',
    color: `var(--secondary-color)`,

    ':hover': {
      border: `1px solid var(--secondary-borderHoverColor)`,
      color: `var(--secondary-hoverColor)`
    }
  }
})

export default BrowserButton
