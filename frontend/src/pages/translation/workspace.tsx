import React, { useState } from 'react'
import { inject, observer } from 'mobx-react'
import { Drawer, Button, Input, Divider } from 'antd'
import { formatMessage } from '@utils'

import { PageTitle, ContentTitle } from '@pages/style/layout'
import { WorkSpaceWrapper, TextList, Studio, RightBar } from './style'

import FileList from './fileList'

const WorkSpace = () => {
  const [showDrawer, changeDrawerVisibility] = useState(false)

  return (
    <WorkSpaceWrapper>
      <TextList>
        <Input.Search />
      </TextList>
      <Studio>
        <div>
          Source text
          <div>Hello world.</div>
        </div>
        <Divider />
        <div>
          Translate text
          <Input.TextArea style={{ border: 0 }} />
          <div>
            <Button type="primary">{formatMessage('action.save')}</Button>
          </div>
        </div>
        <Divider />
        <div>Last 5 history</div>
      </Studio>
      <RightBar>
        <div>Top bar</div>
        <Input.Search />
        <div>Dictionary</div>
      </RightBar>
    </WorkSpaceWrapper>
  )
}

export default WorkSpace