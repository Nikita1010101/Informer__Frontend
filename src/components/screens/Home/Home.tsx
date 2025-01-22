import { FC, useState } from 'react'
import { DoorOpen } from 'lucide-react'
import { Link } from 'react-router'
import cn from 'classnames'

import styles from '../../../assets/scss/Item.module.scss'
import { privatePages, publicPages } from './Home.data'
import { AuthService } from '../../../services/token/Token.service'
import { asyncWrapper } from '../../../helpers/async-wrapper.helper'
import { Links } from '../../../constants/link.constant'
import { IPage } from './Home.interface'

export const Home: FC = () => {
  const [pages, setPages] = useState<IPage[]>(() => {
    const token = localStorage.getItem(import.meta.env.VITE_TOKEN_KEY)

    asyncWrapper(async () => {
      const data = await AuthService.getPrivate()

      if (data.token === token) {
        setPages(privatePages)
      }
    })

    return publicPages
  })

  const logout = () => {
    localStorage.removeItem(import.meta.env.VITE_TOKEN_KEY)
  }

  return (
    <div>
      {pages.map(({ id, Image, link, title }) => (
        <Link className={cn(styles.item, styles.width_80)} key={id} to={link}>
          <Image />
          <h3>{title}</h3>
        </Link>
      ))}
      <Link
        className={cn(styles.item, styles.width_80)}
        key={999}
        to={Links.LOGIN}
        onClick={logout}
      >
        <DoorOpen />
        <h3>Выйти</h3>
      </Link>
    </div>
  )
}
