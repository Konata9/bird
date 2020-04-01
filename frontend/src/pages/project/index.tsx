import React, { useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import { Tabs, Table, Card } from 'antd'

import { PageTitle, ContentTitle } from '@pages/style/layout'
import { ProjectBlock, ProjectTable, InfoWrapper } from './style'

const ProjectInfo = inject()(observer(
  () => {
    return (
      <ProjectBlock>
        <ProjectTable>
          <Table />
        </ProjectTable>
        <InfoWrapper>
          <Card title="Project Info">
            111
        </Card>
        </InfoWrapper>
      </ProjectBlock>
    )
  }
))

const ProjectSetting = inject()(observer(
  () => {
    return (
      <>Setting</>
    )
  }
))


const Project = () => {
  return (
    <>
      <PageTitle>Project Name</PageTitle>
      <Tabs animated={false}>
        <Tabs.TabPane key="1" tab="Project">
          <ProjectInfo />
        </Tabs.TabPane>
        <Tabs.TabPane key="2" tab="Setting">
          <ProjectSetting />
        </Tabs.TabPane>
      </Tabs>
    </>
  )
}

export default Project