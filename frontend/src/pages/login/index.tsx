import React from 'react'
import { Card, Form, Input, Button } from 'antd'
import { GithubOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

import { formatMessage } from '@utils'
import { PageLayout, LeftPannel, Agenda, TagWrapper, RightPannel, FormLayout, StyledLabel } from './style'

const LoginForm = inject()(
  observer(
    () => {
      const [form] = Form.useForm()

      return (
        <FormLayout>
          <Form form={form} layout="vertical">
            <Form.Item label={
              <StyledLabel>
                {formatMessage('username')}
              </StyledLabel>}
              name="username">
              <Input size="large" placeholder={formatMessage('placeholder.username')} />
            </Form.Item>
            <Form.Item label={
              <StyledLabel>
                {formatMessage('password')}
              </StyledLabel>}
              name="password">
              <Input size="large" placeholder={formatMessage('placeholder.password')} />
            </Form.Item>
            <Form.Item>
              <Button size="large" type="primary" block>
                {formatMessage('system.login')}
              </Button>
            </Form.Item>
          </Form>
        </FormLayout>
      )
    }
  )
)

const Login = () => {
  return (
    <PageLayout>
      <LeftPannel>
        <Agenda>
          <h1>{formatMessage('system.logo')}</h1>
          <p>{formatMessage('system.agenda')}</p>
          <TagWrapper>
            <Button icon={<GithubOutlined />}>
              {formatMessage('system.sourceCode')}
            </Button>
          </TagWrapper>
        </Agenda>
      </LeftPannel>
      <RightPannel>
        <LoginForm />
      </RightPannel>
    </PageLayout>
  )
}

export default Login