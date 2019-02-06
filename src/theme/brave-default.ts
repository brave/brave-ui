import colors from './palette'
import ITheme from './theme-interface'

// Define colors, fonts, and sizes by purpose.
// Keys should not describe the value, but what they are to be used for.

const theme: ITheme = {
  name: 'Brave Light',
  color: {
    // Brand Primary
    primary: colors.orange500,
    primaryHover: colors.orange400,
    primaryActive: colors.orange600,

    // Brand Accent
    accent: colors.blurple500,
    accentHover: colors.blurple400,
    accentActive: colors.blurple600,

    // Brand Destructive
    destructive: colors.red500,
    destructiveHover: colors.red400,
    destructiveActive: colors.red600,

    // Brand Warn
    warn: colors.yellow500,
    warnHover: colors.yellow400,
    warnActive: colors.yellow600,

    // Brand Error
    error: colors.red500,
    errorHover: colors.red400,
    errorActive: colors.red600,

    // Brand Info
    info: colors.blue500,
    infoHover: colors.blue400,
    infoActive: colors.blue600,

    // Brand Success
    success: colors.green500,
    successHover: colors.green400,
    successActive: colors.green600,

    // Brand Grey
    grey000: colors.grey000,
    grey100: colors.grey100,
    grey200: colors.grey200,
    grey300: colors.grey300,
    grey400: colors.grey400,
    grey500: colors.grey500,
    grey600: colors.grey600,
    grey700: colors.grey700,
    grey800: colors.grey800,
    grey900: colors.grey900,

    // Backgrounds
    bodyBackground: colors.white,
    componentBackground: colors.white,
    componentAltBackground: colors.grey200,

    // Modal
    modalOverlayBackground: 'rgba(36,37,54,0.85)',

    // Typography
    headingDefault: colors.grey800, // default heading color
    textDefault: colors.grey700, // default text color
    textSecondary: colors.grey500,
    textSubtle: colors.grey200,

    // Toggle
    toggleSlider: colors.grey300, // other elements are tied to brandPrimary

    // Radio
    radioStroke: colors.grey300, // other elements are tied to brandPrimary,

    // Button
    btnDisabled: colors.grey300, // other elements are tied to brandPrimary,

    disabledAlpha: '.50' // the transparency for disabled components
  },
  fontSize: {
    default: '14px',
    large: '16px',
    small: '12px'
  },
  lineHeight: {
    default: '1.5',
    large: '1.75',
    none: '0' // neccessary?
  },
  spacing: {
    // Spacing
    extraLarge: '32px',
    large: '24px',
    medium: '16px',
    small: '12px',
    extraSmall: '8px',
    tiny: '4px'
  },
  radius: {
    default: '8px', // default for most elements
    small: '4px', // used for smaller components - inputs/forms
    circle: '50%' // used to create half circles on elements - buttons
  },
  border: {
    default: {
      color: colors.grey300, // base border outline a component
      size: '1px', // width of the border for a component
      style: 'solid' // style of a components border
    }
  },
  animation: {
    transitionDurationSlow: '0.6s',
    transitionDurationBase: '0.4s',
    transitionDurationFast: '0.2s'
  },
  shadow: {
    large: '0 4px 12px rgba(0, 0, 0, 0.2)',
    default: '0 2px 8px rgba(0, 0, 0, 0.2)',
    small: '0 2px 2px rgba(0, 0, 0, 0.2)'
  },
  fontFamily: {
    heading: 'Poppins, sans-serif',
    body: 'Muli, sans-serif',
    code: 'SFMono-Regular, monospace',
    system:
  '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif'
  }
}

export default theme
