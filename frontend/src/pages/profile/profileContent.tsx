import React from 'react'
import { inject, observer } from 'mobx-react'
import { List, Input, Pagination, Radio } from 'antd'
import { formatMessage } from '@utils'

import { ContentWrapper, NavBar, NavItem, SearchBar } from './style'

const ProjectList = () => {
  return (
    <>
      <List>
        <List.Item actions={[<a>edit</a>, <a>action</a>]}>
          <List.Item.Meta title="project name" />
        </List.Item>
      </List>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Pagination total={20} simple />
      </div>
    </>
  )
}

const ProfileContent = inject()(
  observer(() => {
    return (
      <ContentWrapper>
        <NavBar>
          <NavItem>Project</NavItem>
        </NavBar>
        <SearchBar>
          <Input.Search style={{ width: '300px' }} />
          <div>
            <Radio.Group>
              <Radio.Button value="a">All</Radio.Button>
              <Radio.Button value="b">My project</Radio.Button>
            </Radio.Group>
          </div>
        </SearchBar>
        <ProjectList />
      </ContentWrapper>
    )
  })
)

export default ProfileContent