import React from 'react'
import { inject, observer } from 'mobx-react'
import { Button, Divider } from 'antd'
import { formatMessage } from '@utils'

import { AccountWrapper, AvatarImage, UserName } from './style'


const AccountBlock = inject()(
  observer(() => {
    return (
      <AccountWrapper>
        <AvatarImage src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3933841076,3931571133&fm=26&gp=0.jpg" />
        <UserName>
          User name
        </UserName>
        <Button block>
          {formatMessage('user.updateProfile')}
        </Button>
        <Divider />
      </AccountWrapper>
    )
  })
)

export default AccountBlock