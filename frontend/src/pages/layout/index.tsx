import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { StyledLayout } from '@src/pages/style/layout'
import { Header, Container } from './style'

import { IRouter } from '@src/pages/routes'
import { IStore, RootStore } from '@store'
import { UserStore } from '@store/user'

import NavBar from './navbar'
import Content from './content'

interface IProps {
  routes: IRouter[]
  rootStore?: RootStore,
  userStore?: UserStore
}

const Layout = inject()(
  observer(
    () => {
      return (
        <StyledLayout>
          <Header>
            <NavBar />
          </Header>
          <Container>
          </Container>
        </StyledLayout >
      )
    }
  )
)


export default Layout