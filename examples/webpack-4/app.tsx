import * as React from 'react'
import { render } from 'react-dom'

import { Button } from '../../package'
import { CheckCircleIcon } from '../../package/components/icons'

// Actually use imported components, to provide a fair test
render(
        <div>
          <Button text='hi' />
          <CheckCircleIcon />
        </div>,
        document.querySelector('#test')
)
