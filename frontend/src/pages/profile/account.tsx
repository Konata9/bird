import React from 'react'
import { inject, observer } from 'mobx-react'
import { Button, Divider } from 'antd'
import { formatMessage } from '@utils'

import { AccountWrapper, AvatarImage, UserName } from './style'


const AccountBlock = inject()(
  observer(() => {
    return (
      <AccountWrapper>
        <AvatarImage src="https://lh3.googleusercontent.com/proxy/fSjBkoxV8BhXXR8AZQlsR6vCy6rMXpbDjwTz0_DutHjcOkstAm_COGXQ03TCRhysUDzjUzk2XwIohZ4DY4g1_ftkv3NQ-b2vxxF_" />
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