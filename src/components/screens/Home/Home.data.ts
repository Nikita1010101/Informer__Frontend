import { BadgeInfo, Dices, ShieldBan } from 'lucide-react'

import { ILinkOption } from '../../shared/Option/Option.interface'

export const publicPages: ILinkOption[] = [
  {
    id: 1,
    Image: BadgeInfo,
    link: '/info',
    title: 'Информация',
  },
  {
    id: 2,
    Image: Dices,
    link: '/wheel',
    title: 'Колесо',
  },
]

export const privatePages: ILinkOption[] = [
  ...publicPages,
  {
    id: 3,
    Image: ShieldBan,
    link: '/admin',
    title: 'Админ',
  },
]
