import React from 'react'
import { inject, observer } from 'mobx-react'
import { Button, Avatar } from 'antd'
import { RollbackOutlined, UserOutlined } from '@ant-design/icons'

import { TopBarWrapper } from './style'

const TopBar = inject()(observer(
  () => {
    return (
      <TopBarWrapper>
        <div>File Path</div>
        <div>
          <Button style={{ marginRight: '10px' }}>
            Download Files
          </Button>
        </div>
      </TopBarWrapper>
    )
  }
))

export default TopBar