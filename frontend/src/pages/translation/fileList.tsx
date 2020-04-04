import React from 'react'
import { inject, observer } from 'mobx-react'
import { Table } from 'antd'
import { RollbackOutlined, UserOutlined } from '@ant-design/icons'

const FileList = inject()(observer(
  () => {
    return (
      <>
        <Table />
      </>
    )
  }
))

export default FileList