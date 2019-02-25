import colors from '../color/colorPalette'
import ITheme from './themeInterface'

const color = {
  brand: {
    brave: colors.orange500,
    braveHover: colors.orange400,
    braveActive: colors.orange600,
    rewards: colors.blurple500,
    rewardsHover: colors.blurple400,
    rewardsActive: colors.blurple600
  },
  intent: {
    error: colors.red500,
    failure: colors.red500,
    info: colors.blue500,
    warn: colors.yellow500,
    success: colors.green500
  },
  btn: {
    danger: colors.red500,
    dangerHover: colors.red400,
    dangerActive: colors.red600,
    default: colors.grey600,
    defaultHover: colors.grey500,
    defaultActive: colors.grey700,
    disabled: colors.grey300
  },
  bodyText: colors.black,
  inputBorder: colors.grey400
}

const theme: ITheme = {
  name: 'Default',
  color,
  breakpoint: [
    '544px',
    '768px',
    '1012px',
    '1280px'
  ],
  maxWidth: [
    '544px',
    '768px',
    '1012px',
    '1280px'
  ],
  spacing: [
    '2px',
    '4px',
    '8px',
    '12px',
    '16px',
    '20px',
    '24px',
    '28px',
    '32px'
  ],
  borderRadius: [
    '4px',
    '8px'
  ],
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.2)',
    default: '0 2px 8px rgba(0, 0, 0, 0.2)',
    large: '0 4px 12px rgba(0, 0, 0, 0.2)',
    formControl: 'rgba(27, 31, 35, 0.075) 0px 1px 2px inset',
    formControlFocus: 'rgba(3, 102, 214, 0.3) 0px 0px 0px 0.2em',
    modalOverlayBackground: 'rgba(36,37,54,0.85)'
  },
  transitionSpeed: [
    '.2s',
    '.4s',
    '.6s'
  ],
  fontFamily: {
    heading: fontStack([
      'Poppins',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Helvetica',
      'Arial',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol'
    ]),
    body: fontStack([
      'Muli',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Helvetica',
      'Arial',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol'
    ]),
    code: fontStack([
      'SFMono-Regular',
      'Consolas',
      'Liberation Mono',
      'Menlo',
      'Courier',
      'monospace']
    )
  },
  fontWeight: [
    '200',
    '400',
    '600'
  ],
  fontSize: [
    '12px',
    '14px',
    '16px',
    '20px',
    '24px',
    '32px',
    '40px',
    '48px'
  ],
  lineHeight: [
    '0',
    '1.6'
  ]
}

function fontStack (fonts: any) {
  return fonts.map((font: any) => (
    font.includes(' ') ? `"${font}"` : font)).join(', ')
}

export default theme
