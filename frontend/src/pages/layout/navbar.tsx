import React from 'react'
import { inject, observer } from 'mobx-react'
import { Menu } from 'antd'
import { RouterLink } from '@src/pages/style/layout'
import { fontLight } from '@src/pages/style/color'
import { formatMessage } from '@utils'

import { Nav, MenuWrapper, Logo } from './style'

const ActionBar = inject()(
  observer(() => {
    return <div>action</div>
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
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="project">
            Project
        </Menu.Item>
        </Menu>
      </MenuWrapper>
      <ActionBar />
    </Nav>
  )
}

export default NavBar