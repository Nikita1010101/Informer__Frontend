import { FC, useState } from 'react'
import { DoorOpen } from 'lucide-react'

import { privatePages, publicPages } from './Home.data'
import { AuthService } from '../../../services/token/Token.service'
import { asyncWrapper } from '../../../helpers/async-wrapper.helper'
import { Links } from '../../../constants/link.constant'
import { LinkWrapper } from '../../shared/Wrappers/Link-wrapper/LinkWrapper'
import { ILink } from '../../shared/Wrappers/Link-wrapper/LinkWrapper.interface'

export const Home: FC = () => {
  const [pages, setPages] = useState<ILink[]>(() => {
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
        <LinkWrapper key={id} link={link}>
          <Image />
          <h3>{title}</h3>
        </LinkWrapper>
      ))}
      <LinkWrapper key={999} link={Links.LOGIN} onClickFn={logout}>
        <DoorOpen />
        <h3>Выйти</h3>
      </LinkWrapper>
    </div>
  )
}
