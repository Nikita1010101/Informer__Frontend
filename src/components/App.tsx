import { FC } from 'react'
import { Route, Routes } from 'react-router'

import { Home } from './screens/Home/Home'
import { Auth } from './Auth/Auth'
import { Login } from './screens/Login/Login'
import { Admin } from './screens/Admin/Admin'
import { Info } from './screens/Info/Info'
import { Links } from '../constants/link.constant'
import { useAuth } from '../hooks/useAuth'
import { Tasks } from './screens/Tasks/Tasks'
import { Comments } from './screens/Comments/Comments'
import { Shop } from './screens/Shop/Shop'
import { Rules } from './screens/Rules/Rules'

export const App: FC = () => {
  const { conditionals, isLoading } = useAuth()

  return (
    <Routes>
      <Route
        element={
          <Auth
            conditional={conditionals.login}
            isLoading={isLoading}
            link={Links.HOME}
          />
        }
      >
        <Route path={Links.LOGIN} element={<Login />} />
      </Route>
      <Route
        element={
          <Auth
            conditional={conditionals.private}
            isLoading={isLoading}
            link={Links.HOME}
          />
        }
      >
        <Route path={Links.ADMIN} element={<Admin />} />
      </Route>
      <Route
        element={
          <Auth
            conditional={conditionals.public}
            isLoading={isLoading}
            link={Links.LOGIN}
          />
        }
      >
        <Route index element={<Home />} />
        <Route path={Links.INFO} element={<Info />} />
        <Route path={Links.TASKS} element={<Tasks />} />
        <Route path={Links.COMMENTS} element={<Comments />} />
        <Route path={Links.SHOP} element={<Shop />} />
        <Route path={Links.RULES} element={<Rules />} />
      </Route>
    </Routes>
  )
}
