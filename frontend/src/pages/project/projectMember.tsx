import React, { useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import { Table, Input, Button } from 'antd'

import { ToolBar } from './style'

const columns = [
  {
    title: 'nickname',
    dataIndex: 'nickname'
  },
  {
    title: 'project role',
    dataIndex: 'projectRole',
  },
  {
    title: 'joined',
    dataIndex: 'joined'
  },
  {
    title: 'detail',
    dataIndex: 'detail'
  }
]

const ProjectMember = inject()(observer(
  () => {
    return (
      <>
        <ToolBar>
          <Input.Search style={{ width: '250px' }} />
          <Button>Invite</Button>
        </ToolBar>
        <Table columns={columns} />
      </>
    )
  }
))

export default ProjectMember