import React, { useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import { Form, Input, Button, Divider, Radio } from 'antd'

import { ContentTitle } from '@pages/style/layout'
import { SettingWrapper } from './style'

const InfoBlock = inject()(observer(
  () => {
    const [form] = Form.useForm()

    return (
      <>
        <ContentTitle>Project Info</ContentTitle>
        <Form form={form} layout="vertical">
          <Form.Item label="Project Name" name="projectName">
            <Input />
          </Form.Item>
          <Form.Item label="Description" name="projectDescription">
            <Input.TextArea />
          </Form.Item>
          <Form.Item label="Privacy" name="privacy">
            <Radio.Group>
              <Radio value="1">Public</Radio>
              <Radio value="2">Private</Radio>
            </Radio.Group>
          </Form.Item>
        </Form>
      </>
    )
  }
))

const DeleteBlock = inject()(observer(
  () => {
    return (
      <>
        <ContentTitle>Delete Project</ContentTitle>
        <p>Delete the project</p>
        <Button type="danger">Delete</Button>
      </>
    )
  }
))

const ProjectSetting = () => {
  return (
    <SettingWrapper>
      <InfoBlock />
      <DeleteBlock />
    </SettingWrapper>
  )
}

export default ProjectSetting