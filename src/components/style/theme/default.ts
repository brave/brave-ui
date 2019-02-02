import colors from '../color/colorPalette'
import ITheme from './themeInterface'

const theme: ITheme = {

  // Brand Primary
  brandPrimary: colors.orange500,
  brandPrimaryHover: colors.orange400,
  brandPrimaryActive: colors.orange600,

  // Brand Accent
  brandAccent: colors.blurple500,
  brandAccentHover: colors.blurple400,
  brandAccentActive: colors.blurple600,

  // Brand Destructive
  brandDestructive: colors.red500,
  brandDestructiveHover: colors.red400,
  brandDestructiveActive: colors.red600,

  // Brand Warn
  brandWarn: colors.yellow500,
  brandWarnHover: colors.yellow400,
  brandWarnActive: colors.yellow600,

  // Brand Error
  brandError: colors.red500,
  brandErrorHover: colors.red400,
  brandErrorActive: colors.red600,

  // Brand Info
  brandInfo: colors.blue500,
  brandInfoHover: colors.blue400,
  brandInfoActive: colors.blue600,

  // Brand Success
  brandSuccess: colors.green500,
  brandSuccessHover: colors.green400,
  brandSuccessActive: colors.green600,

  // Brand Grey
  brandGrey000: colors.grey000,
  brandGrey100: colors.grey100,
  brandGrey200: colors.grey200,
  brandGrey300: colors.grey300,
  brandGrey400: colors.grey400,
  brandGrey500: colors.grey500,
  brandGrey600: colors.grey600,
  brandGrey700: colors.grey700,
  brandGrey800: colors.grey800,
  brandGrey900: colors.grey900,

  // Backgrounds
  bodyBackground: colors.white,
  componentBackground: colors.white,
  componentAltBackground: colors.grey200,

  // Modal
  modalOverlayBackground: 'rgba(36,37,54,0.85)',

  // Typography
  headingDefaultColor: colors.grey800, // default heading color
  textDefaultColor: colors.grey700, // default text color
  textSecondaryColor: colors.grey500,
  textSubtleColor: colors.grey200,
  textDefaultSize: '14px',
  textLargeSize: '16px',
  textSmallSize: '12px',

  // Line height
  textDefaultLineHeight: '1.5', // default line height
  textLargeLineHeight: '1.75',
  textNoLineHeight: '0',

  // Spacing
  spacingExtraLarge: '32px',
  spacingLarge: '24px',
  spacingMedium: '16px',
  spacingSmall: '12px',
  spacingExtraSmall: '8px',
  spacingTiny: '4px',

  // Disabled
  disabledAlpha: '.50', // the transparency for disabled components

  // Border Radius
  borderRadiusBase: '8px', // default for most elements
  borderRadiusSmall: '4px', // used for smaller components - inputs/forms
  borderRadiusCircle: '50%', // used to create half circles on elements - buttons

  // Border
  borderDefaultColor: colors.grey300, // base border outline a component
  borderDefaultSize: '1px', // width of the border for a component
  borderDefaultStyle: 'solid', // style of a components border

  // Toggle
  toggleSlider: colors.grey300, // other elements are tied to brandPrimary

  // Radio
  radioStroke: colors.grey300, // other elements are tied to brandPrimary,

  // Button
  btnDisabled: colors.grey300, // other elements are tied to brandPrimary,

  // Transition
  transitionDurationSlow: '0.6s',
  transitionDurationBase: '0.4s',
  transitionDurationFast: '0.2s',

  // Box shadow
  boxShadowSize: '0 0 0 2px',

  // Shadow
  shadowLarge: '0 4px 12px rgba(0, 0, 0, 0.2)',
  shadowDefault: '0 2px 8px rgba(0, 0, 0, 0.2)',
  shadowSmall: '0 2px 2px rgba(0, 0, 0, 0.2)',

  // Storybook
  name: 'Default',

  fontFamily: {
    heading: 'Poppins, sans-serif',
    body: 'Muli, sans-serif',
    code: 'SFMono-Regular, monospace',
    system:
  '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif'
  }
}

export default theme
