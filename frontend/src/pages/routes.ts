import Login from '@src/pages/login'
import Layout from '@src/pages/layout'
import Profile from '@src/pages/profile'

export interface IRouter {
  path: string
  component?: JSX.Element | React.ReactNode
  redirect?: string
  exact?: boolean
  meta?: any
  routes?: IRouter[]
}

const routes: Array<IRouter> = [
  {
    path: '/login',
    component: Login,
    exact: true
  },
  {
    path: '/',
    component: Layout,
    routes: [
      { path: '/', redirect: '/profile', exact: true },
      { path: '/profile', component: Profile },
    ]
  },
]


export default routes