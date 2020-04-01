import React, { useEffect } from 'react'
import { Tabs } from 'antd'
import { PageTitle, AccountWrapper } from './style'

import UserInfo from './userInfo'
import Sercurity from './security'

const Account = () => {
  return (
    <AccountWrapper>
      <PageTitle>Account</PageTitle>
      <Tabs animated={false}>
        <Tabs.TabPane tab="account setting" key="1">
          <UserInfo />
        </Tabs.TabPane>
        <Tabs.TabPane tab="security" key="3">
          <Sercurity />
        </Tabs.TabPane>
      </Tabs>
    </AccountWrapper>
  )
}

export default Account