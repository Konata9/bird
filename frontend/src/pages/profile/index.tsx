import React from 'react'
import { inject, observer } from 'mobx-react'
import { Card } from 'antd'

import { ProfileBlock } from './style'
import AccountBlock from './account'
import ProfileContent from './profileContent'


const ProfileLayout = () => {
  return (
    <Card bordered={false}>
      <ProfileBlock>
        <AccountBlock />
        <ProfileContent />
      </ProfileBlock>
    </Card>
  )
}

const Profile = inject()(
  observer(ProfileLayout)
)

export default Profile