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

  // Type
  headingDefaultColor: string
  textDefaultColor: string
  textSecondaryColor: string
  textSubtleColor: string
  textDefaultSize: string
  textLargeSize: string
  textSmallSize: string
  textDefaultLineHeight: string
  textLargeLineHeight: string
  textNoLineHeight: string

  // Spacing
  spacingExtraLarge: string
  spacingLarge: string
  spacingMedium: string
  spacingSmall: string
  spacingExtraSmall: string
  spacingTiny: string

  // Radius
  borderRadiusBase: string
  borderRadiusSmall: string
  borderRadiusCircle: string

  // Animation
  transitionDurationSlow: string
  transitionDurationBase: string
  transitionDurationFast: string

  // Storybook
  name: string

  // Border
  borderDefaultColor: string
  borderDefaultSize: string
  borderDefaultStyle: string

  // Box shadow
  boxShadowSize: string

  // Disabled
  disabledAlpha: string

  // Shadow
  shadowLarge: string
  shadowDefault: string
  shadowSmall: string

  fontFamily: {
    heading: string
    body: string
    code: string
    system: string
  }
}

export type BraveThemedStyledProps<T> = ThemedStyledProps<T, IThemeProps>
