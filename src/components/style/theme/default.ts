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

  // Disabled
  disabledAlpha: '.50', // the transparency for disabled components

  // Toggle
  toggleSlider: colors.grey300, // other elements are tied to brandPrimary

  // Radio
  radioStroke: colors.grey300, // other elements are tied to brandPrimary,

  // Button
  btnDisabled: colors.grey300, // other elements are tied to brandPrimary,

    // Spacing
  spacing: ['4px', '8px', '12px', '16px', '20px', '24px', '28px', '32px'],

    // Border Radius
  borderRadius: {
    default: '8px', // default for most elements
    small: '4px', // used for smaller components - inputs/forms
    circle: '50%' // used to create half circles on elements - buttons
  },

    // Transition
  transition: {
    slow: '0.6s',
    default: '0.4s',
    fast: '0.2s'
  },

    // Box shadow
  boxShadow: {
    size: '0 0 0 2px' // focus ring on components
  },

    // Shadows for panels
  dropShadow: {
    large: '0 4px 12px rgba(0, 0, 0, 0.2)',
    default: '0 2px 8px rgba(0, 0, 0, 0.2)',
    small: '0 2px 2px rgba(0, 0, 0, 0.2)'
  },

  // Storybook variable
  name: 'Default',

  // Type styles
  fontColor: {
    default: colors.black,
    defaultFade15: colors.blackFade15,
    defaultFade30: colors.blackFade30,
    defaultFade50: colors.blackFade50
  },
  fontFamily: {
    heading: 'Poppins, sans-serif',
    body: 'Muli, sans-serif',
    code: 'SFMono-Regular, monospace',
    system: '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif'
  },
  fontSize: {
    scale: ['12px', '14px', '16px', '20px', '24px', '32px', '40px', '48px', '60px', '72px']
  },
  fontWeight: {
    bold: '600',
    regular: '400',
    light: '200'
  },
  lineHeight: {
    large: '1.75',
    default: '1.5',
    zero: '0'
  }
}

export default theme
