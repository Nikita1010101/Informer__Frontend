import { FC, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'

import { IAuth } from './Auth.interface'
import { Loading } from '../shared/Loading/Loading'

export const Auth: FC<IAuth> = ({ conditional, isLoading, link }) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (conditional) {
      navigate(link)
    }
  }, [conditional, isLoading, link, navigate])

  return isLoading ? <Loading /> : <Outlet />
}
