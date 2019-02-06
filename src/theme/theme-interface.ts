import { ThemedStyledProps } from 'styled-components'

export default interface IThemeProps {
  name: string,
  color: {
    // Brand Primary
    primary: string
    primaryActive: string
    primaryHover: string

    // Brand Accent
    accent: string
    accentActive: string
    accentHover: string

    // Brand Destructive
    destructive: string
    destructiveActive: string
    destructiveHover: string

    // Brand Grey
    grey000: string
    grey100: string
    grey200: string
    grey300: string
    grey400: string
    grey500: string
    grey600: string
    grey700: string
    grey800: string
    grey900: string

    // Brand Warn
    warn: string
    warnHover: string
    warnActive: string

    // Brand Error
    error: string
    errorHover: string
    errorActive: string

    // Brand Info
    info: string
    infoHover: string
    infoActive: string

    // Brand Success
    success: string
    successHover: string
    successActive: string

    // Button Disabled
    btnDisabled: string

    // Background
    componentBackground: string
    componentAltBackground: string
    bodyBackground: string

    // Modal
    modalOverlayBackground: string

    // Toggle
    toggleSlider: string

    // Radio
    radioStroke: string

    // Type
    headingDefault: string
    textDefault: string
    textSecondary: string
    textSubtle: string

    // Consider 'alpha' section
    disabledAlpha: string
  }
  spacing: {
    tiny: string
    extraSmall: string
    small: string
    medium: string
    large: string
    extraLarge: string
  }
  border: {
    default: {
      color: string,
      size: string,
      style: string
    }
  }
  fontSize: {
    default: string
    large: string
    small: string
  },
  lineHeight: {
    default: string
    large: string
    none: string
  },
  radius: {
    default: string
    small: string
    circle: string
  },
  shadow: {
    default: string
    small: string
    large: string
  }
  animation: {
    transitionDurationSlow: string
    transitionDurationBase: string
    transitionDurationFast: string
  },
  fontFamily: {
    heading: string
    body: string
    system: string
    code: string
  }
}

export type BraveThemedStyledProps<T> = ThemedStyledProps<T, IThemeProps>
