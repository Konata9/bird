import React from 'react'
import { inject, observer } from 'mobx-react'
import { Button, Avatar, Table } from 'antd'
import { RollbackOutlined, UserOutlined } from '@ant-design/icons'

import { TopBarWrapper } from './style'

const View = inject()(observer(
  () => {
    return (
      <>
        <Table />
      </>
    )
  }
))

export default View