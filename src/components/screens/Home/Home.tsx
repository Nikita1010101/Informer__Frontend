import { FC, useState } from 'react'
import { DoorOpen } from 'lucide-react'

import { privatePages, publicPages } from './Home.data'
import { LinkOption } from '../../shared/Option/LinkOption'
import { AuthService } from '../../../services/token/Token.service'
import { ILinkOption } from '../../shared/Option/Option.interface'
import { asyncWrapper } from '../../../helpers/async-wrapper.helper'
import { TOKEN } from '../../../constants/token.constant'

export const Home: FC = () => {
  const [pages, setPages] = useState<ILinkOption[]>(() => {
    const token = localStorage.getItem(TOKEN)

    asyncWrapper(async () => {
      const data = await AuthService.getPrivate()

      if (data.token === token) {
        setPages(privatePages)
      }
    })

    return publicPages
  })

  const logout = () => {
    localStorage.removeItem(TOKEN)
  }

  return (
    <div>
      {pages.map(({ id, ...page }) => (
        <LinkOption key={id} {...page} />
      ))}
      <LinkOption onClickFn={logout} key={999} Image={DoorOpen} link='/login' title='Выйти' />
    </div>
  )
}
