import React, { useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import { Table, Button, Input, Upload } from 'antd'

import { ContentTitle } from '@pages/style/layout'
import { ToolBar } from './style'

const columns = [
  { title: 'File', dataIndex: 'file' },
  { title: 'Contents', dataIndex: 'contents' },
  { title: 'Action', dataIndex: 'action' },
]

const ProjectFiles = inject()(observer(
  () => {
    return (
      <>
        <ContentTitle>Project Files</ContentTitle>
        <ToolBar>
          <Input.Search style={{ width: '250px' }} />
          <Upload>
            <Button type="primary">File Upload</Button>
          </Upload>
        </ToolBar>
        <Table columns={columns} />
      </>
    )
  }
))

export default ProjectFiles