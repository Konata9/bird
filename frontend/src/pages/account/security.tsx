import React from 'react'
import { inject, observer } from 'mobx-react'
import { Button } from 'antd'

import { ContentTitle } from './style'

const Sercurity = inject()(
  observer(() => {
    return (
      <>
        <ContentTitle>Password</ContentTitle>
        <Button>Rest passoword</Button>
      </>
    )
  })
)

export default Sercurity