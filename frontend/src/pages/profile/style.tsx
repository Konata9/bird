import styled from 'styled-components'
import { bgGray, borderGray } from '@pages/style/color'

export const ProfileBlock = styled.div`
  display: flex;
`

export const AccountWrapper = styled.div`
  width: 20%;
  margin-right: 20px;
`

export const AvatarImage = styled.img`
  width: 100%;
  min-height: 200px;
  object-fit: contain;
  display: block;
`

export const UserName = styled.div`
  width: 100%;
  margin: 10px 0;
  font-size: 1.5rem;
  font-weight: bold;
`

export const ContentWrapper = styled.div`
  flex: 1;
`

export const NavBar = styled.div`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  margin-bottom: 20px;
  background: ${bgGray};
  border: 1px solid ${borderGray};
  display: flex;
  align-items: center;
`

export const NavItem = styled.div`
  
`

export const SearchBar = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`