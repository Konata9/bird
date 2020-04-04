import React, { useState } from 'react'
import { inject, observer } from 'mobx-react'
import { Drawer, Button } from 'antd'

import { PageTitle, ContentTitle } from '@pages/style/layout'
import { WorkSpaceWrapper } from './style'

import FileList from './fileList'

const WorkSpace = () => {
  const [showDrawer, changeDrawerVisibility] = useState(false)

  return (
    <WorkSpaceWrapper>
      <Button onClick={() => changeDrawerVisibility(!showDrawer)}>Click here</Button>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        visible={showDrawer}
        onClose={() => changeDrawerVisibility(false)}
        getContainer={false}
        style={{ position: 'absolute' }}
      >
        <p>Some contents...</p>
      </Drawer>
    </WorkSpaceWrapper>
  )
}

export default WorkSpace