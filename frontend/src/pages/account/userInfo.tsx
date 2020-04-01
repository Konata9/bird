import React from 'react'
import { inject, observer } from 'mobx-react'
import { Upload, Button, Form, Input } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

import { ContentTitle, UserWrapper, AvatarWrapper, UserAvatar, InfoWrapper } from './style'
import { formatMessage } from '@src/utils'

const AvatarBlock = () => {
  return (
    <AvatarWrapper>
      <UserAvatar src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3933841076,3931571133&fm=26&gp=0.jpg" />
      <Upload>
        <Button><UploadOutlined />Update Avatar</Button>
      </Upload>
    </AvatarWrapper>
  )
}

const InfoBlock = () => {
  const [form] = Form.useForm()

  return (
    <InfoWrapper>
      <ContentTitle>User Info</ContentTitle>
      <Form form={form} layout="vertical">
        <Form.Item label={formatMessage('user.username')} name="username">
          <Input />
        </Form.Item>
        <Form.Item label={formatMessage('user.phone')} name="phone">
          <Input />
        </Form.Item>
        <Form.Item label={formatMessage('user.email')} name="email">
          <Input />
        </Form.Item>
        <Form.Item label={formatMessage('user.introduce')} name="userIntroduce">
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Button type="primary">{formatMessage('action.save')}</Button>
          <Button style={{ marginLeft: '20px' }}>{formatMessage('action.cancel')}</Button>
        </Form.Item>
      </Form>
    </InfoWrapper>
  )
}

const UserInfo = inject()(
  observer(() => {
    return (
      <UserWrapper>
        <AvatarBlock />
        <InfoBlock />
      </UserWrapper>
    )
  })
)

export default UserInfo