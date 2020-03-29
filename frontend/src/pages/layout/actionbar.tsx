import React from 'react'
import { inject, observer } from 'mobx-react'
import { Menu, Dropdown } from 'antd'

import { ActionWrapper } from './style'

const SearchBlock = () => {
  return (
    <div>123</div>
  )
}

const NoticeBlock = inject()(
  observer(
    () => {
      return (
        <div>123</div>
      )
    }
  )
)

const UserBlock = inject()(
  observer(
    () => {
      return (
        <div>1234</div>
      )
    }
  )
)

const ActionBar = () => {
  return (
    <ActionWrapper>
      <SearchBlock />
      <NoticeBlock />
      <UserBlock />
    </ActionWrapper>
  )
}

export default ActionBar