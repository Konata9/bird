import React from 'react'
import { inject, observer } from 'mobx-react'
import { Menu, Dropdown, Avatar } from 'antd'
import { BellOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons'
import { formatMessage } from '@utils'

import { ActionWrapper, SearchBar, NoticeWrapper, AvatarWrapper } from './style'

const SearchBlock = () => {
  return (
    <SearchBar placeholder={formatMessage('placeholder.project_search')} />
  )
}

const NoticeBlock = inject()(
  observer(
    () => {
      const menu = (
        <Menu>
          <Menu.Item>
            1234
          </Menu.Item>
          <Menu.Item>
            1234
          </Menu.Item>
        </Menu>
      )

      return (
        <NoticeWrapper>
          <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
            <BellOutlined style={{ fontSize: '18px' }} />
          </Dropdown>
        </NoticeWrapper>
      )
    }
  )
)

const AvatarBlock = inject()(
  observer(
    () => {
      const menu = (
        <Menu>
          <Menu.Item>
            1234
          </Menu.Item>
          <Menu.Item>
            1234
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item>
            <LogoutOutlined /> {formatMessage('system.logout')}
          </Menu.Item>
        </Menu>
      )

      return (
        <AvatarWrapper>
          <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
            <Avatar size={35} shape="square" icon={<UserOutlined />} />
          </Dropdown>
        </AvatarWrapper>
      )
    }
  )
)

const ActionBar = () => {
  return (
    <ActionWrapper>
      <SearchBlock />
      <NoticeBlock />
      <AvatarBlock />
    </ActionWrapper>
  )
}

export default ActionBar