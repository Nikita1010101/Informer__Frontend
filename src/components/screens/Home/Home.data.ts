import {
  ChartGantt,
  Info,
  ListTodo,
  MessageSquareText,
  ShieldBan,
  ShoppingBag,
} from 'lucide-react'

import { Links } from '../../../constants/link.constant'
import { IPage } from './Home.interface'

export const publicPages: IPage[] = [
  {
    id: 1,
    Image: ChartGantt,
    link: Links.INFO,
    title: 'Информация',
  },
  {
    id: 2,
    Image: ListTodo,
    link: Links.TASKS,
    title: 'Задачи',
  },
  {
    id: 3,
    Image: ShoppingBag,
    link: Links.SHOP,
    title: 'Магазин',
  },
  {
    id: 4,
    Image: MessageSquareText,
    link: Links.COMMENTS,
    title: 'Комментарии',
  },
  {
    id: 5,
    Image: Info,
    link: Links.RULES,
    title: 'Правила',
  },
]

export const privatePages: IPage[] = [
  ...publicPages,
  {
    id: 6,
    Image: ShieldBan,
    link: Links.ADMIN,
    title: 'Админ',
  },
]
