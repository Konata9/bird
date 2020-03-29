import Login from '@src/pages/login'
import Layout from '@src/pages/layout'
import Dashboard from '@src/pages/dashboard'

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
      { path: '/', redirect: '/dashboard', exact: true },
      { path: '/dashboard', component: Dashboard },
    ]
  },
]


export default routes