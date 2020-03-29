import React from 'react'
import { inject, observer } from 'mobx-react'
import { Menu } from 'antd'
import { FileTextOutlined } from '@ant-design/icons'
import { RouterLink } from '@src/pages/style/layout'
import { fontLight } from '@src/pages/style/color'
import { formatMessage } from '@utils'

import { Nav, MenuWrapper, Logo } from './style'
import ActionBar from './actionbar'

const MenuBar = inject()(
  observer(() => {
    return (
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="project">
          <FileTextOutlined />
          Project
        </Menu.Item>
      </Menu>
    )
  })
)

const NavBar = () => {
  return (
    <Nav>
      <MenuWrapper>
        <Logo>
          <RouterLink to="/" color={fontLight}>
            {formatMessage('system.logo')}
          </RouterLink>
        </Logo>
        <MenuBar />
      </MenuWrapper>
      <ActionBar />
    </Nav>
  )
}

export default NavBar