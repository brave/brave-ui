import * as React from 'react'
import { render } from 'react-dom'

import SettingsMobile from '../../stories/features/rewards/settingsMobile/settingsMobile'
import { ThemeProvider } from '../../src/components/style/theme'
import Theme from '../../src/components/style/theme/default'

window.addEventListener('DOMContentLoaded', function () {
  const appElement = document.createElement('div')
  document.body.appendChild(appElement)
  render(
    <ThemeProvider theme={Theme}>
      <SettingsMobile />
    </ThemeProvider>,
    appElement
  )
})

