import React, { useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import { Form, Input, Button, Radio, Select, Transfer } from 'antd'
import { formatMessage } from '@utils'

import { PageTitle } from '@pages/style/layout'
import { CreateWrapper, ToolBar, LanguageWrapper, LanguageCheckBlock, LanguageResultBlock } from './style'

const mockData: any = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
    disabled: i % 3 < 1,
  });
}

const ProjectCreate = inject()(observer(
  () => {
    const [form] = Form.useForm()

    return (
      <CreateWrapper>
        <PageTitle>Project Create</PageTitle>
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
          <Form.Item label="Base Language" name="base">
            <Select>
              <Select.Option value="chinese">Chinese</Select.Option>
              <Select.Option value="english">English</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Target Language" name="target">
            <Transfer
              dataSource={mockData}
              titles={['Source', 'Target']}
              render={(item): string => item.title || ''}
              listStyle={{
                width: '48%',
                height: 300
              }}
              style={{ height: 300 }}
            />
          </Form.Item>
          <Form.Item>
            <ToolBar>
              <Button size="large">{formatMessage('action.cancel')}</Button>
              <Button size="large" type="primary" style={{ width: '150px' }}>{formatMessage('action.save')}</Button>
            </ToolBar>
          </Form.Item>
        </Form>
      </CreateWrapper>
    )
  }
))

export default ProjectCreate