import { FC, useEffect } from "react"
import { Outlet, useNavigate } from "react-router"

import { localStorageHelper } from "../../../helpers/local-storage.helper"
import { asyncWrapper } from "../../../helpers/async-wrapper.helper"
import { AuthService } from "../../../services/token/Auth.service"
import { TOKEN } from "../../../constants/token.constant"

export const Public: FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorageHelper.getItem(TOKEN)

    asyncWrapper(async () => {
      const { privateData, publicData } = await AuthService.getAll()

      if (privateData.token !== token && publicData.token !== token) {
        navigate("/login")
      }
    })
  }, [navigate])

  return <Outlet />
}
