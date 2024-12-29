import { FC, useState } from "react"
import { DoorOpen } from "lucide-react"

import styles from "./Home.module.scss"
import { privatePages, publicPages } from "./Home.data"
import { LinkOption } from "../../shared/Option/LinkOption"
import { AuthService } from "../../../services/token/Auth.service"
import { ILinkOption } from "../../shared/Option/Option.interface"
import { asyncWrapper } from "../../../helpers/async-wrapper.helper"
import { localStorageHelper } from "../../../helpers/local-storage.helper"

export const Home: FC = () => {
  const [pages, setPages] = useState<ILinkOption[]>(() => {
    const token = localStorageHelper.getItem("token")

    asyncWrapper(async () => {
      const data = await AuthService.getPrivate()

      if (data.token === token) {
        setPages(privatePages)
      }
    })

    return publicPages
  })

  const logout = () => {
    localStorageHelper.removeItem("token")
  }

  return (
    <div className={styles.home}>
      {pages.map(({ id, ...page }) => (
        <LinkOption key={id} {...page} />
      ))}
      <LinkOption onClickFn={logout} key={999} Image={DoorOpen} link="/login" title="Выйти" />
    </div>
  )
}
