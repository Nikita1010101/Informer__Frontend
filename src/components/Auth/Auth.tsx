import { FC, useEffect } from "react"
import { Outlet, useNavigate } from "react-router"

import { localStorageHelper } from "../../helpers/local-storage.helper"
import { AuthService } from "../../services/token/Auth.service"

import { asyncWrapper } from "../../helpers/async-wrapper.helper"

export const Auth: FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorageHelper.getItem("token")

    asyncWrapper(async () => {
      const { privateData, publicData } = await AuthService.getAll()

      if (privateData.token === token || publicData.token === token) {
        navigate("/")
      }
    })
  }, [navigate])

  return <Outlet />
}
