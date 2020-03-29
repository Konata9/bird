import styled from 'styled-components'
import { Link, LinkProps } from 'react-router-dom'
import { bgDark, bgWhite, fontDark, fontBlue, fontGray, borderLight, fontLight } from '@src/pages/style/color'

interface IBreadLink extends LinkProps {
  current: any
}

const headerHeight = '64px'
const contentWidth = '1200px'

export const HeaderWrapper = styled.div`
  width: 100%;
  height: ${headerHeight};
  line-height: ${headerHeight};
  padding: 0 20px;
  color: ${fontDark};
  background: ${bgWhite};
  border-bottom: 1px solid ${borderLight};
  display: flex;
  justify-content: flex-end;
`

export const UserInfoWrapper = styled.div`
  min-width: 100px;
  height: ${headerHeight};
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const UserNameWrapper = styled.div`
  margin-left: 10px;
`

export const BreadLink = styled(Link)`
  color: ${
  ({ current = 0 }: IBreadLink) => current ? fontBlue : fontGray
  }
`

export const BreadSpliter = styled.span`
  padding: 0 10px;
`

export const Header = styled.div`
  width: 100%;
  background: ${bgDark};
  color: ${fontLight};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Nav = styled.div`
  width: 1200px;
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
  margin-right: 20px;
`

export const Container = styled.div`
  flex: 1;
`

export const ContentWrapper = styled.div`
  width: ${contentWidth};
  color: ${ fontDark};
`