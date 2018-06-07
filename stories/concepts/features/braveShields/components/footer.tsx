/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { Grid, Column } from '../../../../../components/gridSystem'
import UnstyledButton from '../../../../../components/unstyledButton'
import Anchor from '../../../../../components/anchor'
import locale from '../fakeLocale'
import theme from '../theme'

class BraveShieldsFooter extends React.PureComponent {
  render () {
    return (
      <Grid id='braveShieldsFooter' theme={theme.braveShieldsFooter}>
        <Column size={9} theme={theme.columnStart}>
          <Anchor
            theme={theme.editLink}
            href='chrome://settings'
            target='_blank'
            text={locale.shieldsFooterEditDefault} />
        </Column>
        <Column size={3} theme={theme.columnEnd}>
          <UnstyledButton text={locale.shieldsFooterReload} />
        </Column>
      </Grid>
    )
  }
}

export default BraveShieldsFooter
