import styled from 'styled-components'
import { bgGray, borderGray } from '@pages/style/color'

import { Card } from 'antd'

export const ProjectBlock = styled.div`
  width: 100%;
  display: flex;
`

export const ProjectTable = styled.div`
  width: 70%;
  max-width: 70%;
  margin-right: 20px;
`

export const InfoCard = styled(Card)`
  background: ${bgGray};
`

export const InfoWrapper = styled.div`
  flex: 1;
`

export const ToolBar = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const MemberWrapper = styled.div`
  width: 100%;

`

export const SettingWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`

export const CreateWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`

export const LanguageWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-between;
`

export const LanguageCheckBlock = styled.div`
  width: 50%;
  max-width: 50%;
  padding: 10px;
  border: 1px solid ${borderGray};
`

export const LanguageResultBlock = styled.div`
  flex: 1;
  padding: 10px;
  background: ${bgGray};
`