import { ThemedStyledProps } from 'styled-components'

export default interface IThemeProps {

  // Brand Primary
  brandPrimary: string
  brandPrimaryActive: string
  brandPrimaryHover: string

  // Brand Accent
  brandAccent: string
  brandAccentActive: string
  brandAccentHover: string

  // Brand Destructive
  brandDestructive: string
  brandDestructiveActive: string
  brandDestructiveHover: string

  // Brand Grey
  brandGrey000: string
  brandGrey100: string
  brandGrey200: string
  brandGrey300: string
  brandGrey400: string
  brandGrey500: string
  brandGrey600: string
  brandGrey700: string
  brandGrey800: string
  brandGrey900: string

  // Brand Warn
  brandWarn: string
  brandWarnHover: string
  brandWarnActive: string

  // Brand Error
  brandError: string
  brandErrorHover: string
  brandErrorActive: string

  // Brand Info
  brandInfo: string
  brandInfoHover: string
  brandInfoActive: string

  // Brand Success
  brandSuccess: string
  brandSuccessHover: string
  brandSuccessActive: string

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

  // Storybook
  name: string

  // Disabled
  disabledAlpha: string

  spacing: string[]

  // Border Radius
  borderRadius: {
    default: string
    small: string
    circle: string
  },

  // Transition
  transition: {
    slow: string
    default: string
    fast: string
  },

  // Box shadow
  boxShadow: {
    size: string
  },

  // Shadows for panels
  dropShadow: {
    large: string
    default: string
    small: string
  },

  // Type
  fontColor: {
    default: string
    defaultFade15: string
    defaultFade30: string
    defaultFade50: string
  }
  fontFamily: {
    heading: string
    body: string
    code: string
    system: string
  }
  fontSize: {
    scale: string[]
  }
  fontWeight: {
    bold: string
    regular: string
    light: string
  }
  lineHeight: {
    large: string
    default: string
    zero: string
  }
}

export type BraveThemedStyledProps<T> = ThemedStyledProps<T, IThemeProps>
