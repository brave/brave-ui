/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
// Storybook requires
import { storiesOf, setAddon } from '@storybook/react'
// import { withKnobs, boolean, select } from '@storybook/addon-knobs'
// @ts-ignore
import chaptersAddon from 'react-storybook-addon-chapters'

// Components
import CButton, { Props } from '../../src/components/buttonsIndicators/button'
import styled from '../../src/theme'
import { CheckCircleIcon } from '../../src/components/icons'

const Button = styled(CButton as React.ComponentType<Props>)`
  margin: 10px;
`
Button.displayName = CButton.displayName

// wrappers
const ComponentTypes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

const icon = {
  image: <CheckCircleIcon />
}

const options = {
  showSource: false
}
const sectionOptionsNoProps = {
  showSource: false,
  showPropTables: false,
  allowPropTablesToggling: false
}

setAddon(chaptersAddon)
storiesOf('Components', module)
  // @ts-ignore
.addWithChapters('Button', {
  subtitle: 'Use when requiring the user to take an action. Different types of buttons setup different user expectations about the button action...',
  chapters: [
    {
      title: 'A Button',
      info: '_You can use the knobs to customize this button_',
      sections: [{
        sectionFn: () => <Button text='A Button' />,
        options
      }]
    },
    {
      title: 'Variations',
      info: 'Different styles of button',
      sections: [
        {
          title: 'Levels',
          info: 'Use different levels to create a _hierarchy_ of importance',
          options: sectionOptionsNoProps,
          sectionFn: () => (
            <ComponentTypes>
              <Button level='primary' text='Primary' />
              <Button level='secondary' text='Secondary' />
              <Button level='tertiary' text='Tertiary' />
            </ComponentTypes>
          )
        },
        {
          title: 'Types',
          info: 'Let the user know what the effect of the interaction will be',
          options: sectionOptionsNoProps,
          sectionFn: () => (
            <>
              <ComponentTypes>
                <Button level='primary' type='default' text='Default' />
                <Button level='primary' type='accent' text='Accent' />
                <Button level='primary' type='warn' text='Warn' />
                <Button level='primary' type='subtle' text='Subtle' />
                <Button level='primary' type='accent' text='Disabled' disabled={true} />
              </ComponentTypes>
              <ComponentTypes>
                <Button level='secondary' type='default' text='Default' />
                <Button level='secondary' type='accent' text='Accent' />
                <Button level='secondary' type='warn' text='Warn' />
                <Button level='secondary' type='subtle' text='Subtle' />
                <Button level='secondary' type='accent' text='Disabled' disabled={true} />
              </ComponentTypes>
              <ComponentTypes>
                <Button level='tertiary' type='default' text='Default' />
                <Button level='tertiary' type='accent' text='Accent' />
                <Button level='tertiary' type='warn' text='Warn' />
                <Button level='tertiary' type='subtle' text='Subtle' />
                <Button level='tertiary' type='accent' text='Disabled' disabled={true} />
              </ComponentTypes>
            </>
          )
        },
        {
          title: 'Accent Brands',
          info: 'Optional accents',
          options: sectionOptionsNoProps,
          sectionFn: () => (
            <ComponentTypes>
              <Button level='primary' type='accent' text='Brave' />
              <Button level='primary' type='accent' brand='rewards' text='Rewards' />
            </ComponentTypes>
          )
        },
        {
          title: 'Sizes',
          info: 'Use size to match the density of information',
          options: sectionOptionsNoProps,
          sectionFn: () => (
            <>
              <ComponentTypes>
                <Button size='small' level='primary' type='default' text='Small' />
                <Button size='medium' level='primary' type='accent' text='Medium' />
                <Button size='large' level='primary' type='warn' text='Large' />
              </ComponentTypes>
              <Button size='call-to-action' level='primary' type='subtle' text='Call to Action' />
              <ComponentTypes>
                <Button size='small' level='secondary' type='default' text='Small' />
                <Button size='medium' level='secondary' type='accent' text='Medium' />
                <Button size='large' level='secondary' type='warn' text='Large' />
              </ComponentTypes>
              <Button size='call-to-action' level='secondary' type='subtle' text='Call to Action' />
              <ComponentTypes>
                <Button size='small' level='tertiary' type='default' text='Small' />
                <Button size='medium' level='tertiary' type='accent' text='Medium' />
                <Button size='large' level='tertiary' type='warn' text='Large' />
              </ComponentTypes>
              <Button size='call-to-action' level='tertiary' type='subtle' text='Call to Action' />
            </>
          )
        }
      ]
    },
    {
      title: 'Icons',
      info: 'Each button can have a single icon',
      sections: [
        {
          title: 'Before Text',
          options: sectionOptionsNoProps,
          sectionFn: () => (
            <ComponentTypes>
              <Button icon={{ ...icon, position: 'before' }} size='small' level='primary' type='default' text='Small' />
              <Button icon={{ ...icon, position: 'before' }} size='medium' level='primary' type='accent' text='Medium' />
              <Button icon={{ ...icon, position: 'before' }} size='large' level='primary' type='warn' text='Large' />
            </ComponentTypes>
          )
        },
        {
          title: 'After Text',
          options: sectionOptionsNoProps,
          sectionFn: () => (
            <ComponentTypes>
              <Button icon={{ ...icon, position: 'after' }} size='small' level='secondary' type='default' text='Small' />
              <Button icon={{ ...icon, position: 'after' }} size='medium' level='secondary' type='accent' text='Medium' />
              <Button icon={{ ...icon, position: 'after' }} size='large' level='secondary' type='warn' text='Large' />
            </ComponentTypes>
          )
        }
      ]
    }
  ]
})
