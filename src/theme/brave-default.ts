import colors from './colors'
import ITheme from './theme-interface'
import tinyColor from '@ctrl/tinycolor'

// Define colors, fonts, and sizes by purpose.
// Keys should not describe the value, but what they are to be used for.

const theme: ITheme = {
  name: 'Default',
  palette: {
    ...colors
  },
  color: {
    brandBrave: colors.orange500,
    brandBat: colors.blurple500,
    // brave controls
    brandBraveSubtleBackground: tinyColor(colors.orange500).setAlpha(.1).toHex8String(),
    brandBraveHover: colors.orange300,
    brandBraveMain: colors.orange400,
    brandBravePressed: colors.orange500,
    brandBraveOutline: tinyColor(colors.orange400).setAlpha(.4).toHex8String(),
    brandBraveActive: colors.orange200,
    // bat controls
    brandBatSubtleBackground: tinyColor(colors.blurple500).setAlpha(.1).toHex8String(),
    brandBatHover: colors.blurple300,
    brandBatMain: colors.blurple400,
    brandBatPressed: colors.blurple500,
    brandBatOutline: tinyColor(colors.blurple400).setAlpha(.4).toHex8String(),
    brandBatInteracting: colors.blurple500,
    brandBatActive: colors.blurple200,
    // regular controls
    defaultButtonText: colors.grey800,
    defaultButtonBorder: colors.grey400,
    defaultControl: colors.grey800,
    defaultControlInteracting: colors.black,
    defaultControlActive: colors.grey700,
    // warning controls
    warn: colors.red500,
    warnInteracting: colors.red600,
    warnActive: colors.red700,
    // subtle controls
    subtle: colors.grey400,
    subtleBackground: colors.grey100,
    subtleExclude: colors.grey300,
    subtleInteracting: colors.grey500,
    subtleActive: colors.grey600,
    // disabled controls
    disabled: colors.grey300,
    disabledResourceBlocked: colors.neutral600,
    // backgrounds
    panelBackground: colors.white,
    panelBackgroundSecondary: colors.neutral000,
    primaryBackground: colors.white,
    contextMenuBackground: colors.white,
    secondaryBackground: colors.grey400,
    modalOverlayBackground: 'rgba(36,37,54,0.85)',
    // text
    contextMenuForeground: colors.grey800,
    detailDescription: colors.grey500,
    text: colors.grey700,
    // form controls
    inputBorder: colors.grey500,
    separatorLine: colors.grey100,
    // images
    lionLogo: colors.grey500
  },
  fontFamily: {
    heading: 'Poppins, sans-serif',
    body: 'Muli, sans-serif',
    system: '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif'
  }
}

export default theme
