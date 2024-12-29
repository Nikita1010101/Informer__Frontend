import { FC, useEffect } from "react"
import { Outlet, useNavigate } from "react-router"

import { localStorageHelper } from "../../../helpers/local-storage.helper"
import { asyncWrapper } from "../../../helpers/async-wrapper.helper"
import { AuthService } from "../../../services/token/Auth.service"

export const Private: FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorageHelper.getItem("token")

    asyncWrapper(async () => {
      const privateData = await AuthService.getPrivate()

      if (privateData.token !== token) {
        navigate("/")
      }
    })
  }, [navigate])

  return <Outlet />
}
