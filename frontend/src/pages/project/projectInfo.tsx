import React, { useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import { Table, Card, Button } from 'antd'

import { ProjectBlock, ProjectTable, InfoWrapper } from './style'

const columns = [
  {
    title: 'Language',
    dataIndex: 'language',
  },
  {
    title: 'Content / Translated',
    dataIndex: 'content'
  },
  {
    title: 'Progress',
    dataIndex: 'progress'
  },
  {
    title: 'Action',
    dataIndex: 'action',
    render: () => <a>Edit</a>
  }
]

const ProjectInfo = inject()(observer(
  () => {
    return (
      <ProjectBlock>
        <ProjectTable>
          <Table columns={columns} />
        </ProjectTable>
        <InfoWrapper>
          <Card title="Project Info">
            <div>
              <Button>Add Language</Button>
              <Button>Project Download</Button>
            </div>
            <div>Base Language</div>
            <div>Members</div>
            <div>Create Date</div>
            <div>Owner</div>
          </Card>
        </InfoWrapper>
      </ProjectBlock>
    )
  }
))

export default ProjectInfo