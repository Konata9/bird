import React, { useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import { Tabs, Table, Card } from 'antd'

import { PageTitle, ContentTitle } from '@pages/style/layout'
import { ProjectBlock, ProjectTable, InfoWrapper } from './style'

import ProjectInfo from './projectInfo'
import ProjectMember from './projectMember'
import ProjectFiles from './projectFiles'
import ProjectSetting from './projectSetting'

const Project = () => {
  return (
    <>
      <PageTitle>Project Name</PageTitle>
      <Tabs animated={false}>
        <Tabs.TabPane key="1" tab="Project">
          <ProjectInfo />
        </Tabs.TabPane>
        <Tabs.TabPane key="3" tab="Files">
          <ProjectFiles />
        </Tabs.TabPane>
        <Tabs.TabPane key="2" tab="Member">
          <ProjectMember />
        </Tabs.TabPane>
        <Tabs.TabPane key="4" tab="Setting">
          <ProjectSetting />
        </Tabs.TabPane>
      </Tabs>
    </>
  )
}

export default Project