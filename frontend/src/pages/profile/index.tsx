import React from 'react'
import { inject, observer } from 'mobx-react'
import { Card, Button, Divider } from 'antd'

import { ProfileBlock, AccountWrapper, AvatarImage } from './style'


const AccountBlock = inject()(
  observer(() => {
    return (
      <AccountWrapper>
        <AvatarImage src="https://lh3.googleusercontent.com/proxy/fSjBkoxV8BhXXR8AZQlsR6vCy6rMXpbDjwTz0_DutHjcOkstAm_COGXQ03TCRhysUDzjUzk2XwIohZ4DY4g1_ftkv3NQ-b2vxxF_" />
        asdasda
        <Button block>1234</Button>
        <Divider />
      </AccountWrapper>
    )
  })
)

const ProfileLayout = () => {
  return (
    <Card bordered={false}>
      <ProfileBlock>
        <AccountBlock />
        <div>666</div>
      </ProfileBlock>
    </Card>
  )
}

const Profile = inject()(
  observer(ProfileLayout)
)

export default Profile