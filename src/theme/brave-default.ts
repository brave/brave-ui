import colors from './colors'
import ITheme from './theme-interface'

// Define colors, fonts, and sizes by purpose.
// Keys should not describe the value, but what they are to be used for.

const theme: ITheme = {
  name: 'Default',
  palette: {
    ...colors
  },
  color: {
    // brand
    interactive01: '#EA3A0D',
    interactive02: colors.orange500,
    interactive03: colors.orange400,
    interactive04: colors.blurple600,
    interactive05: colors.blurple500,
    interactive06: colors.blurple400,
    interactive07: colors.neutral900,
    interactive08: colors.grey500,
    focusBorder: colors.blurple300,
    brandBrave: colors.orange500,
    brandBat: colors.blurple500,
    // brave controls
    brandBraveInteracting: colors.orange500,
    brandBraveActive: colors.orange200,
    brandBraveLight: colors.orange000,
    // bat controls
    brandBatInteracting: colors.blurple500,
    brandBatActive: colors.blurple200,
    // regular controls
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
    contextMenuHoverBackground: colors.blurple200,
    secondaryBackground: colors.grey400,
    modalOverlayBackground: 'rgba(36,37,54,0.85)',
    background01: colors.neutral000,
    background02: colors.white,
    background03: colors.grey800,
    // text
    contextMenuForeground: colors.grey800,
    contextMenuHoverForeground: colors.neutral800,
    detailDescription: colors.grey500,
    text: colors.grey700,
    text01: colors.neutral900,
    text02: colors.neutral700,
    text03: colors.neutral600,
    // form controls
    inputBorder: colors.grey500,
    separatorLine: colors.grey100,
    // images
    lionLogo: colors.grey500,
    // dividers and outlines
    divider01: '#E9E9F4',
    // alerts
    errorText: colors.red600,
    errorIcon: colors.red600,
    errorBorder: colors.red500,
    errorBackground: colors.red000,
    warningIcon: colors.yellow500,
    warningBorder: colors.yellow400,
    warningBackground: colors.yellow000,
    infoIcon: colors.blue500,
    infoBorder: colors.blue400,
    infoBackground: 'rgba(93, 181, 252, 0.2)',
    successIcon: colors.teal600,
    successBorder: colors.green500,
    successBackground: colors.green200
  },
  fontFamily: {
    heading: 'Poppins, sans-serif',
    body: 'Poppins, sans-serif',
    system: '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif'
  }
}

export default theme
