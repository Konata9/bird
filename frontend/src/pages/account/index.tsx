import React, { useEffect } from 'react'
import { Tabs } from 'antd'
import { PageTitle } from './style'

const Account = () => {
  return (
    <>
      <PageTitle>Account</PageTitle>
      <Tabs animated={false}>
        <Tabs.TabPane tab="account setting" key="1">1</Tabs.TabPane>
        <Tabs.TabPane tab="notifications" key="2">1</Tabs.TabPane>
        <Tabs.TabPane tab="security" key="3">1</Tabs.TabPane>
      </Tabs>
    </>
  )
}

export default Account