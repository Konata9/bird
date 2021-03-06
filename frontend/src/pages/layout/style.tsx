import styled from 'styled-components'
import { Input } from 'antd'
import { bgDark, fontDark, fontLight } from '@src/pages/style/color'

const contentWidth = '1300px'
const headerHeight = '66px'
const footerHeight = '60px'

export const Header = styled.div`
  width: 100%;
  margin-bottom: 20px;
  background: ${bgDark};
  color: ${fontLight};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Nav = styled.div`
  width: ${contentWidth};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Logo = styled.div`
  margin-right: 10px;
`

export const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const SearchWrapper = styled.div`
  margin-right: 10px;
`

export const SearchBar = styled(Input.Search)`
  margin-right: 10px;
  transition: all .5s ease .1s;

  input {
    width: 150px;
    transition: all .5s ease .1s;
    &:focus{
      width: 250px;
    }
  }
`

export const NoticeWrapper = styled.div`
  margin-right: 10px;
  fontSize: 24px;

  &:hover{
    cursor: pointer;
  }
`

export const AvatarWrapper = styled.div`
  &:hover{
    cursor: pointer;
  }
`

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - ${headerHeight} - ${footerHeight});
  overflow: hidden;
  display: flex;
  justify-content: center;
`

export const ContentWrapper = styled.div`
  width: ${contentWidth};
  height: 100%;
  overflow: auto;
  color: ${fontDark};
`