/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

const theme = {
  page: {
    fontFamily: '"Poppins", sans-serif',
    color: '#fff',
    padding: '80px 60px 40px',
    background: 'linear-gradient(#4b3c6e, #000)'
  },
  clock: {
    color: 'rgba(255,255,255,0.8)'
  },
  trackersBlocked: {
    dataItem: { color: '#f39030' }
  },
  adsBlocked: {
    dataItem: {color: '#fe521d' }
  },
  httpsUpgrades: {
    dataItem: {color: '#0796fa' }
  },
  estimatedTime: {
    dataItem: {color: '#999999' }
  },
  // todo
  clockContainer: {
    column: {
      justifyContent: 'flex-end'
    }
  },
  textualBlock: {
    boxedContent: {
      maxWidth: '650px',
      margin: '60px auto 0',
      fontFamily: '"Muli", sans-serif'
    }
  },
  media: {
    mediaContent: {
      width: '80px',
      margin: '0 0 0 25px'
    }
  },
  title: {
    heading: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: '400',
      color: '#fff'
    }
  },
  italicText: {
    paragraph: {
      fontStyle: 'italic',
      fontSize: '15px'
    }
  },
  text: {
    paragraph: {
      fontSize: '18px'
    }
  },
  switchContainer: {
    boxedContent: {
      margin: '40px 0 25px'
    }
  }
}

export default theme
