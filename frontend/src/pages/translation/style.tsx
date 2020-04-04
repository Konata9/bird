import styled from 'styled-components'
import { borderGray } from '@pages/style/color'

export const TopBarWrapper = styled.div`
  width: 100%;
  height: 48px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const WorkSpaceWrapper = styled.div`
  width: 100%;
  height: calc(100% - 60px - 58px);
  position: relative;
  overflow: hidden;
`